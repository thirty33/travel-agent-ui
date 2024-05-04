<script setup lang="tsx">
import sanFranciscoImg from "@assets/sanFrancisco.jpg";
import { RenderList, test } from "./RenderList.tsx";

const toggleDarkMode = (): void => {
  const element = document.querySelector("html");
  if (element?.classList.contains("dark")) {
    element.classList.remove("dark");
  } else {
    element?.classList.add("dark");
  }
};

const component = (new test()).renderComponent();
</script>

<template>
  <div>
    <nav
      class="w-full h-14 hidden bg-white lg:flex p-4 justify-between fixed z-10 dark:bg-gray-800"
    >
      <div class="h-auto w-auto">
        <p class="text-xl text-primary font-black dark:text-white">
          Agent Travel
        </p>
      </div>
      <div class="flex space-x-8">
        <a href="#home" class="font-bold text-md text-primary dark:text-white"
          >Inicio</a
        >
        <a
          href="#recomendados"
          class="font-bold text-md text-primary dark:text-white"
          >Recomendados</a
        >
        <a
          href="#rentas_destacadas"
          class="font-bold text-md text-primary dark:text-white"
          >Rentas</a
        >
        <a
          href="#sobre_nosotros"
          class="font-bold text-md text-primary dark:text-white"
          >Sobre nosotros</a
        >
      </div>
      <div class="flex space-x-2">
        <div href="#rentas_destacadas">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 stroke-primary dark:fill-white dark:stroke-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div @click="toggleDarkMode">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 fill-primary stroke-primary dark:fill-white dark:stroke-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 stroke-gray-300 dark:fill-white dark:stroke-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
      </div>
    </nav>

    <div class="dark:bg-gray-900">
      <section class="w-full h-auto">
        <div class="w-full h-3/4" id="home">
          <div
            class="w-full h-full flex flex-col absolute space-y-96 py-4 items-center lg:space-y-0 lg:items-start lg:pt-20"
          >
            <input
              class="outline-none p-3 rounded-full shadow-sm transition-all duration-300 focus-whitin:shadow-sm focus:ring-2 focus:w-11/12 lg:hidden"
              type="search"
              name=""
              id=""
              placeholder="San Francisco"
            />
            <div class="hidden h-auto lg:w-2/5 lg:flex pb-6">
              <p class="text-4xl ml-16 font-bold text-black">
                Encuentra más ubicaciones como esta
              </p>
            </div>
            <button
              class="w-48 rounded-full text-primary text-lg shadow-sm font-semibold p-4 bg-white transition-all duration-500 ease-in-out hover:bg-primary hover:text-white hover:-translate-y-1 hover:scale-110 lg:ml-16"
            >
              Explorar
            </button>
          </div>
          <div class="w-full h-3/4">
            <div
              class="w-full h-full lg:h-96 lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center"
            >
              <img class="lg:hidden" :src="sanFranciscoImg.src" alt="" />
            </div>
          </div>
        </div>
        <div class="p-6" id="recomendados">
          <p class="text-3xl font-semibold text-primary dark:text-white">
            Recomendados
          </p>
          <div
            class="w-auto h-72 items-center mt-6 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden"
          >
            <component :is="RenderList"/>
          </div>
        </div>
        <div class="px-6 w-full" id="rentas_destacadas">
          <p
            class="text-3xl text-primary font-semibold pb-6 pt-6 dark:text-white"
          >
            Rentas Destacadas
          </p>
          <div
            class="w-full h-full flex flex-col space-y-6 items-center justify-center"
          >
            <div
              class="w-full h-96 bg-chicago bg-cover rounded-xl shrink-0 lg:bg-center"
            >
              <p class="card-tittle lg:text-black">Chicago</p>
              <p class="text-md pl-8 text-black mr-24 text-sm lg:text-lg">
                2 habitaciones, baño y cocina
              </p>
            </div>
            <!-- ojo -->
            <div
              class="lg:flex lg:h-full hidden lg:w-full lg:py-6 lg:space-x-4"
            >
              <div
                class="w-1/2 h-96 bg-LA bg-cover rounded-xl shrink-0 lg:h-auto"
              >
                <p class="card-tittle">Los Angeles</p>
                <p class="text-md pl-8 text-white mr-24 text-sm lg:text-lg">
                  2 habitaciones, baño y cocina
                </p>
              </div>
              <div class="w-full h-auto lg:space-y-4">
                <div class="w-auto h-96 bg-miami bg-cover rounded-xl shrink-0">
                  <p class="card-tittle">Miami</p>
                  <p class="text-md pl-8 text-white mr-24 text-sm lg:text-lg">
                    2 habitaciones, baño y cocina
                  </p>
                </div>
                <div class="w-auto h-96 bg-bali bg-cover rounded-xl shrink-0">
                  <p class="card-tittle">Bali</p>
                  <p class="text-md pl-8 text-white mr-24 text-sm lg:text-lg">
                    2 habitaciones, baño y cocina
                  </p>
                </div>
              </div>
            </div>

            <div
              class="w-full h-96 bg-LA bg-cover rounded-xl shrink-0 lg:hidden"
            >
              <p class="card-tittle">Los Angeles</p>
              <p class="text-md pl-8 text-white mr-24 text-sm">
                2 habitaciones, baño y cocina
              </p>
            </div>
            <div
              class="w-full h-96 bg-miami bg-cover rounded-xl shrink-0 lg:hidden"
            >
              <p class="card-tittle">Miami</p>
              <p class="text-md pl-8 text-white mr-24 text-sm">
                2 habitaciones, baño y cocina
              </p>
            </div>
            <div
              class="w-full h-96 bg-bali bg-cover rounded-xl shrink-0 lg:hidden"
            >
              <p class="card-tittle">Bali</p>
              <p class="text-md pl-8 text-white mr-24 text-sm">
                2 habitaciones, baño y cocina
              </p>
            </div>
          </div>
        </div>
        <div class="py-6 w-ful" id="faqs">
          <div class="w-full px-6 flex flex-col space-y-4">
            <p class="text-3xl text-primary font-semibold mt-6 dark:text-white">
              FAQS
            </p>
            <div>
              <p class="text-xl font-medium text-primary dark:text-white">
                Política de cancelación
              </p>
              <p class="text-md pt-2 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, corporis earum dolorum, tenetur deserunt fuga
                dolores quo blanditiis repellat aperiam suscipit ea
                necessitatibus nulla sint. Aliquam maiores omnis nam porro.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer
        id="sobre_nosotros"
        class="w-full h-auto bg-gray-50 pt-6 px-6 pb-16 space-y-2 lg:pb-4"
      >
        <p class="text-lg text-gray-300">Acerca de</p>
        <p class="text-sm text-gray-300">Acerca de</p>
        <p class="text-sm text-gray-300">Inversionistas</p>
        <p class="text-sm text-gray-300">Empleos</p>
        <p class="text-sm text-gray-300">Términos y condiciones</p>
        <p class="text-sm text-gray-300">Agent Travel, Inc.</p>
      </footer>
      <div
        class="w-full h-16 bg-white fixed left-0 bottom-0 shadow-md flex space-x-8 items-center justify-center lg:hidden dark:bg-gray-800"
        id="tab_bar"
      >
        <a href="#home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 stroke-gray-200"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </a>
        <a href="#rentas_destacadas">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 stroke-primary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </a>
        <a href="#destacados">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 stroke-gray-200"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </a>
        <a @click="toggleDarkMode">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 stroke-gray-200"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 stroke-gray-200"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>