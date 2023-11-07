<template>
  <div class="mt-12 md:pl-16 md:pr-16 lg:pl-16 lg:pr-16 pr-3 pl-3">
    <h2 class="text-4xl font-extrabold dark:text-white">Ship Online</h2>
    <p class="my-4 text-lg text-gray-500">
      To create your label, fill out the fields below. All fields are mandatory
      unless otherwise indicated
    </p>
  </div>
  <div class=" items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32 ml-4">
 
  
  <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
    <div class="relative">
      <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
        <li class="flex items-center space-x-3 text-left sm:space-x-4">
            <a v-if="isEstimation" class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-semibold text-white ring ring-blue-500 ring-offset-2" href="#">1</a>
            <a v-if="!isEstimation" class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-500 text-xs font-semibold text-white ring ring-gray-500 ring-offset-2" href="#">1</a>

          <span class="font-semibold text-gray-900">Estimation</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li class="flex items-center space-x-3 text-left sm:space-x-4">
          <a v-if="isPayment" class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-semibold text-white ring ring-blue-600 ring-offset-2" href="#">2</a>
          <a v-if="!isPayment" class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-500 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>

          <span class="font-semibold text-gray-900">Payment</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li class="flex items-center space-x-3 text-left sm:space-x-4">
         <a v-if="isConfirmation" class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-semibold text-white ring ring-blue-600 ring-offset-2" href="#">3</a>
          <a v-if="!isConfirmation" class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-500 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">3</a>
          <span class="font-semibold text-gray-500">Confirmation</span>
        </li>
      </ul>
    </div>
  </div>
</div>

<!-- Estimation-->
  <div v-if="isEstimation" class="md:flex lg:flex h-screen lg:ml-16 md:ml-16">
    <div class="w-full">
      <div class="mt-5 bg-white w-full rounded-lg shadow-lg">
        <div class="flex">
          <div class="flex-1 py-5 pl-5 overflow-hidden">
            <svg
              class="inline align-text-top"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g>
                <path
                  d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z"
                  fill="none"
                  id="svg_1"
                  stroke="null"
                ></path>
                <path
                  d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z"
                  id="svg_2"
                ></path>
                <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3"></circle>
              </g>
            </svg>
            <h1 class="inline text-2xl font-semibold leading-none">Sender</h1>
          </div>
        </div>
        <div class="px-5 pb-5">
          <input
            placeholder="Name"
            v-model="nameSender"
            class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
          />
          <input
            placeholder="Address"
            v-model="addressSender"
            class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
          />
          <div class="flex">
            <div class="flex-grow">
              <input
                v-model="citySender"
                placeholder="City"
                class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <input
                v-model="numberSender"
                placeholder="Phone number"
                class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-1 py-5 pl-5 overflow-hidden">
            <svg
              class="inline align-text-top"
              width="21"
              height="20.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g>
                <path
                  d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z"
                  fill="none"
                  id="svg_1"
                  stroke="null"
                ></path>
                <path
                  d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z"
                  id="svg_2"
                ></path>
                <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3"></circle>
              </g>
            </svg>
            <h1 class="inline text-2xl font-semibold leading-none">Receiver</h1>
          </div>
          <div class="flex-none pt-2.5 pr-2.5 pl-1"></div>
        </div>
        <div class="px-5 pb-5">
          <input
            placeholder="Name"
            v-model="nameReceiver"
            class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
          />
          <input
            placeholder="Address"
            v-model="addressReceiver"
            class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
          />
          <div class="flex">
            <div class="flex-grow">
              <input
                v-model="cityReceiver"
                placeholder="City"
                class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <input
                v-model="numberReceiver"
                placeholder="Phone number"
                class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
            </div>
          </div>
        </div>

        <!-- package size -->

        <div class="flex">
          <div class="flex-1 py-5 pl-5 overflow-hidden">
            <h1 class="inline text-2xl font-semibold leading-none">
              Package sizing
            </h1>
          </div>
          <div class="flex-none pt-2.5 pr-2.5 pl-1"></div>
        </div>
        <div class="px-5 pb-5">
          <div class="flex">
            <div class="flex-grow w-1/4 pr-2">
              <input
                v-model="height"
                placeholder="Height (cm)"
                class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
            </div>
            <div class="flex-grow">
              <input
                v-model="width"
                placeholder="Width (cm)"
                class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow w-1/4 pr-2">
              <input
                v-model="length"
                placeholder="Length (cm)"
                class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
            </div>
            <div class="flex-grow">
              <input
                v-model="weight"
                placeholder="Weight (lb)"
                class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
            </div>
          </div>
        </div>

        <hr class="mt-4" />
        <div class="flex flex-row-reverse p-3">
          <div class="flex-initial pl-3">
            <button
              @click="SendPackage"
              type="button"
              class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-blue-500 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out"
            >
              <span class="pl-2 mx-1">Send Package</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto p-10 max-w-screen-lg">
      <div class="flex justify-between mt-8 flex-wrap lg:justify-center">
        <div class="bg-white rounded shadow-lg p-2 w-full lg:w-2/4">
          <div class="w-full px-8 py-6">
            <h3 class="text-2xl mt-4 font-bold">Summary</h3>
            <div class="flex justify-between mt-3">
              <div class="text-xl text-gray-900 font-bold">Subtotal</div>
              <div v-if="totalBeforeTax" class="text-xl text-right font-bold">
                ${{ totalBeforeTax }}0
              </div>
            </div>
            <div class="flex justify-between mt-3">
              <div class="text-xl text-gray-900 font-bold">VAT (15%)</div>
              <div v-if="taxAmount" class="text-xl text-right font-bold">
                ${{ taxAmount }}0
              </div>
            </div>
            <div class="bg-gray-300 h-1 w-full mt-3"></div>
            <div class="flex justify-between mt-3">
              <div class="text-xl text-gray-900 font-bold">
                Total Estimation
              </div>
              <div
                v-if="totalAfterTax"
                class="text-2xl text-gray-900 font-bold"
              >
                ${{ totalAfterTax }}0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- PAYMENT -->
  
  
<div v-if="isPayment" class=" sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
  
  <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p class="text-xl font-medium">Payment Details</p>
    <p class="text-gray-400">Complete your order by providing your payment details.</p>
    <div class="">
      <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
      <div class="relative">
        <input type="text" v-model="emailBilling" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
      </div>
      <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
      <div class="relative">
        <input type="text" v-model="nameBilling" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
          </svg>
        </div>
      </div>
      <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Card Details</label>
      <div class="flex">
        <div class="relative w-7/12 flex-shrink-0">
          <input type="text" v-model="cardNumberBilling" id="card-no" name="card-no" class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
            </svg>
          </div>
        </div>
        <input type="text" v-model="cardExpiryBilling" name="credit-expiry" class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
        <input type="text" v-model="cardCvcBilling" name="credit-cvc" class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
      </div>

      <!-- Total -->
      <div class="mt-6 border-t border-b py-2">
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Subtotal</p>
          <p class="font-semibold text-gray-900">${{ totalBeforeTax }}0</p>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">VAT (15%)</p>
          <p class="font-semibold text-gray-900">${{ taxAmount }}0</p>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-between">
        <p class="text-sm font-medium text-gray-900">Total</p>
        <p class="text-2xl font-semibold text-gray-900">${{ totalAfterTax + 8 }}0</p>
      </div>
    </div>
    <button @click="placeOrder" class="mt-4 mb-8 w-full rounded-md bg-blue-500 px-6 py-3 font-medium text-white">Place Order</button>
  </div>
</div>


  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</template>

<script>
import { ref, computed } from "vue";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    const height = ref();
    const width = ref();
    const length = ref();
    const weight = ref();
    const isPayment = ref(false);
    const isEstimation = ref(true);
    const isConfirmation = ref(false);

    const nameSender = ref();
    const addressSender = ref();
    const citySender = ref();
    const numberSender = ref();

    const nameReceiver = ref();
    const addressReceiver = ref();
    const cityReceiver = ref();
    const numberReceiver = ref();

    //Billing
      const nameBilling = ref();
      const emailBilling = ref();
      const cardNumberBilling = ref();
      const cardExpiryBilling = ref();
      const cardCvcBilling = ref();

      const verifyPaymentFields = () => {
      if (
        nameBilling.value &&
        emailBilling.value &&
        cardNumberBilling.value &&
        cardExpiryBilling.value &&
        cardCvcBilling.value
      ) {
        return true;
      } else {
        return false;
      }  
   };

   const placeOrder = () => {
      if (verifyPaymentFields()) {
        isPayment.value = false;
        isConfirmation.value = true;
      } else {
        toast.error("Please fill all the fields", {
          timeout: 4000,
        });
      }
    };
   

    const verifyEstimationFields = () => {
      if (
        height.value &&
        width.value &&
        length.value &&
        weight.value &&
        nameSender.value &&
        addressSender.value &&
        citySender.value &&
        numberSender.value &&
        nameReceiver.value &&
        addressReceiver.value &&
        cityReceiver.value &&
        numberReceiver.value
      ) {
        return true;
      } else {
        return false;
      }
    };

    const SendPackage = () => {
      if (verifyEstimationFields()) {
        isEstimation.value = false;
         isPayment.value = true;
      } else {
        toast.error("Please fill all the fields", {
          timeout: 4000,
        });
      }
    };

    const totalBeforeTax = computed(() => {
      return height.value * width.value * length.value * weight.value;
    });

    const taxAmount = computed(() => {
      return totalBeforeTax.value * 0.15;
    });

    const totalAfterTax = computed(() => {
      return totalBeforeTax.value + taxAmount.value;
    });

    return {
      totalBeforeTax,
      taxAmount,
      totalAfterTax,
      height,
      width,
      length,
      weight,
      nameSender,
      addressSender,
      citySender,
      numberSender,
      nameReceiver,
      addressReceiver,
      cityReceiver,
      numberReceiver,
      SendPackage,
      isPayment,
      isEstimation,
      isConfirmation,
      nameBilling,
      emailBilling,
      cardNumberBilling,
      cardExpiryBilling,
      cardCvcBilling,
      placeOrder
    };
  },
};
</script>
