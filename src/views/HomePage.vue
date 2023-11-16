<template>
  <ChatWidget />
  <div v-if="isPackageAnimation">
    <PackageAnimation />
  </div>
  <div v-if="!isPackageAnimation">
    <Navbar />
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
        <div class="text-center">
          <h1 class="text-4xl sm:text-6xl font-bold text-gray-800">
            Track your delivery
          </h1>

          <p class="mt-3 text-gray-600">
            You have sent or expect to receive a package? You can always track
            it here.
          </p>

          <div class="mt-7 sm:mt-12 mx-auto max-w-xl relative">
            <!-- Form -->

            <div
              class="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100"
            >
              <div class="flex-[1_0_0%]">
                <label
                  for="hs-search-article-1"
                  class="block text-sm text-gray-700 font-medium"
                  ><span class="sr-only">Search article</span></label
                >
                <input
                  v-model="userInput"
                  type="email"
                  name="hs-search-article-1"
                  id="hs-search-article-1"
                  class="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your tracking delivery here"
                />
              </div>
              <div @click="handleInput" class="flex-[0_0_auto]">
                <a
                  class="p-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <!-- End Form -->

            <!-- SVG Element -->
            <div
              class="hidden md:block absolute top-0 right-0 -translate-y-12 translate-x-20"
            >
              <svg
                class="w-16 h-auto text-blue-500"
                width="121"
                height="135"
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <!-- End SVG Element -->

            <!-- SVG Element -->
            <div
              class="hidden md:block absolute bottom-0 left-0 translate-y-10 -translate-x-32"
            >
              <svg
                class="w-40 h-auto text-blue-500"
                width="347"
                height="188"
                viewBox="0 0 347 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  stroke-width="7"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <!-- End SVG Element -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Hero -->

    <!-- Features -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="relative p-6 md:p-16">
        <!-- Grid -->
        <div
          class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center"
        >
          <div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 class="text-2xl text-gray-800 font-bold sm:text-3xl">
              Receiving & sending a package have never been so easy
            </h2>

            <!-- Tab Navs -->
            <nav
              class="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
            >
              <button
                type="button"
                class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl active"
                id="tabs-with-card-item-1"
                data-hs-tab="#tabs-with-card-1"
                aria-controls="tabs-with-card-1"
                role="tab"
              >
                <span class="flex">
                  <span class="grow ml-6">
                    <span
                      class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800"
                      >Receiving</span
                    >
                    <span class="block mt-1 text-gray-800"
                      >You’ve got mail; we can help you manage it! Forward bills
                      and statements to a new address or sign up to get them
                      online.</span
                    >
                  </span>
                </span>
              </button>

              <button
                type="button"
                class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl"
                id="tabs-with-card-item-2"
                data-hs-tab="#tabs-with-card-2"
                aria-controls="tabs-with-card-2"
                role="tab"
              >
                <span class="flex">
                  <span class="grow ml-6">
                    <span
                      class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800"
                      >Sending</span
                    >
                    <span class="block mt-1 text-gray-800"
                      >Need to send a greeting card or ship a parcel? We can
                      help you look up postal codes, find out how much postage
                      you need or show you how to ship online.</span
                    >
                  </span>
                </span>
              </button>

              <button
                type="button"
                class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl"
                id="tabs-with-card-item-3"
                data-hs-tab="#tabs-with-card-3"
                aria-controls="tabs-with-card-3"
                role="tab"
              >
                <span class="flex">
                  <span class="grow ml-6">
                    <span
                      class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800"
                      >Money services</span
                    >
                    <span class="block mt-1 text-gray-800"
                      >From sending money to loved ones to buying prepaid credit
                      and gift cards, we offer a range of secure and convenient
                      money services.</span
                    >
                  </span>
                </span>
              </button>
            </nav>
            <!-- End Tab Navs -->
          </div>
          <!-- End Col -->

          <div class="lg:col-span-6">
            <div class="relative">
              <!-- Tab Content -->
              <div>
                <div
                  id="tabs-with-card-1"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-1"
                >
                  <img
                    class="shadow-xl shadow-gray-200 rounded-xl"
                    src="https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_1NLjKRayI9KTsIw6-1513-NOC.jpg?itok=r1ukcDy8"
                    alt="Image Description"
                  />
                </div>

                <div
                  id="tabs-with-card-2"
                  class="hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-2"
                >
                  <img
                    class="shadow-xl shadow-gray-200 rounded-xl"
                    src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                    alt="Image Description"
                  />
                </div>

                <div
                  id="tabs-with-card-3"
                  class="hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-3"
                >
                  <img
                    class="shadow-xl shadow-gray-200 rounded-xl"
                    src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                    alt="Image Description"
                  />
                </div>
              </div>
              <!-- End Tab Content -->

              <!-- SVG Element -->
              <div
                class="hidden absolute top-0 right-0 translate-x-20 md:block lg:translate-x-20"
              >
                <svg
                  class="w-16 h-auto text-blue-500"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <!-- End SVG Element -->
            </div>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->

        <!-- Background Color -->
        <div class="absolute inset-0 grid grid-cols-12 w-full h-full">
          <div
            class="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full"
          ></div>
        </div>
        <!-- End Background Color -->
      </div>
    </div>
    <!-- End Features -->

    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import PackageAnimation from "../components/PackageAnimation.vue";
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import { supabase } from "../supabase/init";
import ChatWidget from "../components/ChatWidget.vue";

export default {
  components: { Navbar, Footer, PackageAnimation, ChatWidget },
  setup() {
    const userInput = ref("");
    const isPackageAnimation = ref(false);
    const toast = useToast();
    const router = useRouter();

    const validateInput = () => {
      if (userInput.value.length < 5) {
        toast.error("Please enter a valid tracking number");
        return false;
      } else {
        return true;
      }
    };

    const handleInput = async () => {
      //perform a timeOut of 2 sec and then set back animation to false
      if (validateInput()) {
        try {
          const res = await supabase
            .from("package")
            .select("*")
            .eq("tracking_id", userInput.value);
          console.log(res.data);
          if (res.data.length > 0) {
            isPackageAnimation.value = true;
            setTimeout(() => {
              isPackageAnimation.value = false;
            }, 3800);
            setTimeout(() => {
              router.push({
              name: "TrackPackage",
              params: { id: userInput.value },
            });
            }, 4000);
          } else {
              toast.error("Invalid tracking id");
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    return { userInput, handleInput, isPackageAnimation };
  },
};
</script>
