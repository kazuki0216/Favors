import { PAYPAY_API_KEY, PAYPAY_API_SECRET, PAYPAY_MERCHANT_ID } from "@env";
import * as PAYPAY from "@paypayopa/paypayopa-sdk-node";

PAYPAY.Configure({
  clientId: PAYPAY_API_KEY,
  clientSecret: PAYPAY_API_SECRET,
  merchantId: PAYPAY_MERCHANT_ID,
  productionMode: false,
});
