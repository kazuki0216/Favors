import paypayopa
from dotenv import load_dotenv
import os

''' production_mode : Set the connection destination of the sandbox environment / production environment. 
 The default false setting connects to the sandbox environment. The True setting connects to the production environment. '''

load_dotenv()
PAYPAY_API_KEY=os.getenv("PAYPAY_API_KEY")
PAYPAY_API_SECRET=os.getenv("PAYPAY_API_SECRET")
PAYPAY_MERCHANT_ID=os.getenv("PAYPAY_MERCHANT_ID")

client = paypayopa.Client(auth=(PAYPAY_API_KEY, PAYPAY_API_SECRET), production_mode=False)
client.set_assume_merchant(PAYPAY_MERCHANT_ID)