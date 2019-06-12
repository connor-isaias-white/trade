import requests
from config import Config
import clearbit
import json
from compdic import cool_dic


class stock:

    def __init__(self, comp):
        self.comp = comp
        try:
            self.tick = self.ticker(False)
            self.price = self.current_price()
        except Exception:
            self.tick = self.ticker(True)
            self.price = self.current_price()

    def info(self):
        inf = {
            "logo": self.lookup()["logo"],
            "name": self.comp.title(),
            "price": self.price
        }
        return inf

    def ticker(self, useDict):
        clearbit.key = Config["logopi"]["secret"]
        domain = self.lookup()["domain"]
        headers = {'Content-Type': 'application/json',
                   'Authorization': 'Bearer {0}'.format(clearbit.key)}
        r = requests.get(
            "https://company.clearbit.com/v2/companies/find?domain="+domain, headers=headers, verify=False).json()
        print("\n\n\n\n\n\n")
        if useDict:
            tick = cool_dic[r['legalName'].replace(
                ",", "").replace(".", "").upper().replace("CORPORATION", "CORP")]
        else:
            tick = r['ticker']
        print(tick)
        return tick.lower()

    def lookup(self):
        clearbit.key = Config["logopi"]["secret"]
        headers = {'Content-Type': 'application/json',
                   'Authorization': 'Bearer {0}'.format(clearbit.key)}
        r = requests.get(
            " https://company.clearbit.com/v1/domains/find?name=:"+self.comp, headers=headers, verify=False).json()
        return r

    def current_price(self):
        headers = "?token="+Config["tradpi"]["token"]
        print(self.tick)
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
