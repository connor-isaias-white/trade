import requests
from config import Config
import clearbit
import json


class stock:

    def __init__(self, comp):
        self.comp = comp
        self.tick = self.ticker()

    def info(self):
        inf = {
            "logo": self.lookup()["logo"],
            "name": self.comp.title(),
            "price": self.current_price()
        }
        return inf

    def ticker(self):
        clearbit.key = Config["logopi"]["secret"]
        domain = self.lookup()["domain"]
        company = clearbit.Company.find(domain=domain)
        return company["ticker"]

    def lookup(self):
        clearbit.key = Config["logopi"]["secret"]
        headers = {'Content-Type': 'application/json',
                   'Authorization': 'Bearer {0}'.format(clearbit.key)}
        r = requests.get(
            " https://company.clearbit.com/v1/domains/find?name=:"+self.comp, headers=headers, verify=False).json()
        return r

    def current_price(self):
        headers = "?token="+Config["tradpi"]["token"]
        canonical_uri = f'/stable/stock/{self.tick}/price'
        endpoint = "https://cloud.iexapis.com" + canonical_uri + headers
        r = requests.get(endpoint, verify=False).json()
        return r

    def get_history(self, time="max"):
        # returns json file of company
        headers = "?token="+Config["tradpi"]["token"]
        canonical_uri = f'/stable/stock/{self.tick}/chart/{time}'
        endpoint = "https://cloud.iexapis.com" + canonical_uri + headers
        r = requests.get(endpoint, verify=False).json()
        return r


if __name__ == "__main__":
    hi = stock("apple")
    print(hi.logo())
