<template>
  <!-- Table Section -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Card -->
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div
            class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700"
          >
            <!-- Header -->
            <div
              class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700"
            >
              <div>
                <h2
                  class="text-xl font-semibold text-gray-800 dark:text-gray-200"
                >
                  Current deliveries
                </h2>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Deliveries that are currently pending or delivered
                </p>
              </div>

              <div>
                <div class="inline-flex gap-x-2"></div>
              </div>
            </div>
            <!-- End Header -->

            <!-- Table -->
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-4 text-left">
                    <div class="flex items-center gap-x-2">
                      <span
                        class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                      >
                        Tracking ID
                      </span>
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3 text-left">
                    <div class="flex items-center gap-x-2">
                      <span
                        class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                      >
                        Amount
                      </span>
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3 text-left">
                    <div class="flex items-center gap-x-2">
                      <span
                        class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                      >
                        Status
                      </span>
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3 text-left">
                    <div class="flex items-center gap-x-2">
                      <span
                        class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                      >
                        Due
                      </span>
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3 text-left">
                    <div class="flex items-center gap-x-2">
                      <span
                        class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                      >
                        Created
                      </span>
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3 text-right"></th>
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-200">
                <tr
                  v-for="data in packageData"
                  class="bg-white hover:bg-gray-50"
                >
                  <td class="h-px whitespace-nowrap">
                    <a
                      class="block"
                      href="javascript:;"
                      data-hs-overlay="#hs-ai-invoice-modal"
                    >
                      <div class="px-6 py-2">
                        <span
                          class="font-mono text-sm text-blue-600 dark:text-blue-500"
                          ># {{ data.tracking_id }}</span
                        >
                      </div>
                    </a>
                  </td>
                  <td class="h-px w-px whitespace-nowrap">
                    <a
                      class="block"
                      href="javascript:;"
                      data-hs-overlay="#hs-ai-invoice-modal"
                    >
                      <div class="px-6 py-2">
                        <span class="text-sm text-gray-600 dark:text-gray-400"
                          >${{ data.amount }}0</span
                        >
                      </div>
                    </a>
                  </td>
                  <td class="h-px w-px whitespace-nowrap">
                    <a
                      v-if="data.status == 'delivered'"
                      class="block"
                      href="javascript:;"
                      data-hs-overlay="#hs-ai-invoice-modal"
                    >
                      <div class="px-6 py-2">
                        <span
                          class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        >
                          <svg
                            class="w-2.5 h-2.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                            />
                          </svg>
                          Delivred
                        </span>
                      </div>
                    </a>
                    <a
                      v-if="data.status == 'transit'"
                      class="block"
                      href="javascript:;"
                      data-hs-overlay="#hs-ai-invoice-modal"
                    >
                      <div class="px-6 py-2">
                        <span
                          class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-red-900 dark:text-green-200"
                        >
                          <svg
                            class="w-2.5 h-2.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                            />
                          </svg>
                          In transit
                        </span>
                      </div>
                    </a>
                    <a
                      v-if="data.status == 'pending'"
                      class="block"
                      href="javascript:;"
                      data-hs-overlay="#hs-ai-invoice-modal"
                    >
                      <div class="px-6 py-2">
                        <span
                          class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-green-200"
                        >
                          <svg
                            class="w-2.5 h-2.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                            />
                          </svg>
                          Pending
                        </span>
                      </div>
                    </a>
                  </td>
                  <td class="h-px w-px whitespace-nowrap">
                    <a
                      class="block"
                      href="javascript:;"
                      data-hs-overlay="#hs-ai-invoice-modal"
                    >
                      <div class="px-6 py-2">
                        <span
                          class="text-sm text-gray-600 dark:text-gray-400"
                          >{{ formatDueDate(data.created_at) }}</span
                        >
                      </div>
                    </a>
                  </td>
                  <td class="h-px w-px whitespace-nowrap">
                    <a
                      class="block"
                      href="javascript:;"
                      data-hs-overlay="#hs-ai-invoice-modal"
                    >
                      <div class="px-6 py-2">
                        <span
                          class="text-sm text-gray-600 dark:text-gray-400"
                          >{{ formatDate(data.created_at) }}</span
                        >
                      </div>
                    </a>
                  </td>
                  <td class="flex h-px whitespace-nowrap">
                    <a v-if="data.status == 'pending'"
                      class="block"
                      href="javascript:;"
                      data-hs-overlay="#hs-ai-invoice-modal"
                    >
                      <div
                        @click="acquirePackage(data.id, data.status, data.employee_id)"
                        class="py-1.5"
                      >
                        <div
                          class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white"
                        >
                          Acquire package
                        </div>
                      </div>
                    </a>
                    <a
                      v-if="data.status == 'transit'"
                      class="block"
                      href="javascript:;"
                      data-hs-overlay="#hs-ai-invoice-modal"
                    >
                      <div class=" py-1.5">
                        <div
                          class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white"
                        >
                          Confirm delivery
                        </div>
                      </div>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- End Table -->

            <!-- Footer -->
            <div
              class="px-6 py-5 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700"
            >
              <div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  <span
                    class="font-semibold text-gray-800 dark:text-gray-200"
                    >{{ count }}</span
                  >
                  results
                </p>
              </div>

              <!-- <div>
                <div class="inline-flex gap-x-2">
                  <button
                    type="button"
                    class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  >
                    <svg
                      class="w-3 h-3"
                      width="16"
                      height="16"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.506 1.64001L4.85953 7.28646C4.66427 7.48172 4.66427 7.79831 4.85953 7.99357L10.506 13.64"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                    Prev
                  </button>

                  <button
                    type="button"
                    class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  >
                    Next
                    <svg
                      class="w-3 h-3"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.50598 2L10.1524 7.64645C10.3477 7.84171 10.3477 8.15829 10.1524 8.35355L4.50598 14"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div> -->
            </div>
            <!-- End Footer -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Card -->
  </div>
  <!-- End Table Section -->

 
</template>

<script>
import { onMounted, ref, computed } from "vue";
import { supabase } from "../supabase/init";
import { DateTime } from "luxon";
import { useToast } from "vue-toastification";
import { useUserStore } from "../store/user";

export default {
  setup() {
    const packageData = ref();
    const count = ref();
    const toast = useToast();
    const store = useUserStore();
    const user = computed(() => {
      return store.userState.user;
    })
    const formatDate = (inputDate) => {
      const transformedDate = DateTime.fromISO(inputDate);
      return transformedDate.toLocaleString(DateTime.DATETIME_MED);
    };

    const formatDueDate = (inputDate) => {
      const transformedDate = DateTime.fromISO(inputDate);
      //Add 3 days and return the date
      return transformedDate
        .plus({ days: 3 })
        .toLocaleString(DateTime.DATETIME_MED);
    };
    const acquirePackage = async (id, status, employeeId) => {
      if ((status == "delivered" || status == "transit") && employeeId ) {
        toast.error("Package already acquired");
        return;
      } else if ((status == "pending") && !employeeId) {
        try {
          const res = await supabase
            .from("package")
            .update({ status: "transit", employee_id: user.value.id })
            .eq("id", id);
            console.log(res);
          if (res.error) throw new Error(res.error.message);
          
          toast.success("Package acquired successfully");
        } catch (error) {
          toast.error(error.message);
          throw new Error(
            `Failed to acquire package due to error : ${error.message}`
          );
        }
      }
    };

    onMounted(async () => {
      try {
        const res = await supabase.from("package").select("*");

        packageData.value = res.data;
        count.value = res.data.length;
        console.log(packageData.value);
      } catch (error) {
        throw new Error(
          `Failed to fetch data due to an api error : ${error.message}`
        );
      }
    });

    return { packageData, formatDate, formatDueDate, count, acquirePackage, user };
  },
};
</script>
