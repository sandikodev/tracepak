import { component$ } from "@builder.io/qwik";
import { routeAction$, zod$, z, Form } from "@builder.io/qwik-city";
import { PrismaClient } from "@prisma/client";

export const useCreateUser = routeAction$(
  async (data) => {
    const prisma = new PrismaClient();
    const user = await prisma.user.create({
      data,
    });
    return user;
  },
  zod$({
    name: z.string(),
    email: z.string().email(),
  }),
);

export default component$(() => {
  const createUserAction = useCreateUser();
  return (
    <section>
      <div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 class="mb-10 text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Create and account
            </h1>
            <Form class="space-y-4 md:space-y-6" action={createUserAction}>
              <div>
                <label
                  for="name"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={createUserAction.formData?.get("name")}
                  class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  placeholder="sandikodev"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={createUserAction.formData?.get("email")}
                  class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  placeholder="name@company.com"
                />
              </div>
              <button
                type="submit"
                class="hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-gray-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
              >
                Create an account
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="#"
                  class="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                >
                  Login here
                </a>
              </p>
            </Form>
            {createUserAction.value && (
              <div class="text-red-400">
                <h2 class="text-center">User created successfully!</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});
