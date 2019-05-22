import requests
from config import Config


class stock:

    def __init__(self, comp):
        self.comp = comp

    def get_stock(self, time="max"):
        # returns json file of company
        canonical_uri = f'/stable/stock/{self.comp}/chart/{time}'
        headers = "?token="+Config["tradpi"]["token"]
        endpoint = "https://cloud.iexapis.com" + canonical_uri + headers
        r = requests.get(endpoint, verify=False).json()
        return r


if __name__ == "__main__":
    hi = stock("aapl")
    print(hi.get_stock("1y"))
