<template>
  <div class="mt-12 md:pl-16 md:pr-16 lg:pl-16 lg:pr-16 pr-3 pl-3">
    <h2 class="text-4xl font-extrabold dark:text-white">Ship Online</h2>
    <p class="my-4 text-lg text-gray-500">
      To create your label, fill out the fields below. All fields are mandatory
      unless otherwise indicated
    </p>
  </div>

  <div class="md:flex lg:flex h-screen lg:ml-16 md:ml-16">
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
              <div class="text-xl text-gray-900 font-bold">Total :</div>
              <div v-if="totalBeforeTax" class="text-xl text-right font-bold">
                ${{ totalBeforeTax }}
              </div>
            </div>
            <div class="flex justify-between mt-3">
              <div class="text-xl text-gray-900 font-bold">VAT (15%) :</div>
              <div v-if="taxAmount" class="text-xl text-right font-bold">
                ${{ taxAmount }}
              </div>
            </div>
            <div class="bg-gray-300 h-1 w-full mt-3"></div>
            <div class="flex justify-between mt-3">
              <div class="text-xl text-gray-900 font-bold">
                Total Estimation :
              </div>
              <div
                v-if="totalAfterTax"
                class="text-2xl text-gray-900 font-bold"
              >
                ${{ totalAfterTax }}
              </div>
            </div>
          </div>
        </div>
      </div>
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

    const nameSender = ref();
    const addressSender = ref();
    const citySender = ref();
    const numberSender = ref();

    const nameReceiver = ref();
    const addressReceiver = ref();
    const cityReceiver = ref();
    const numberReceiver = ref();

    const verifyFields = () => {
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
      if (verifyFields()) {
        toast.success("Package sent successfully", {
          timeout: 4000,
        });
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
    };
  },
};
</script>
