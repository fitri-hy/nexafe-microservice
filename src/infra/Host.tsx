import { useNavigate, Link } from "react-router-dom";
import clsx from "clsx";
import Page from "../ui/components/Page";
import Button from "../ui/components/Button";

export default function Host() {
  return (
    <Page title="Nexa FE">
      <div className="relative bg-gradient-to-t from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <img className="hidden dark:flex absolute top-0 left-0 z-0 opacity-20" src="/assets/images/shape.png" alt="shape" />
        <img className="flex dark:hidden absolute top-0 left-0 z-0" src="/assets/images/shape.png" alt="shape" />
        <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-9 pt-26 md:pt-26">
          <div className="flex flex-col gap-4 justify-center">
            <div className="flex justify-center md:justify-start">
			  <span className="bg-sky-50 dark:bg-sky-950 text-blue-400 dark:text-sky-50 px-3 py-1 rounded-full font-semibold border border-sky-100 dark:border-sky-900">
			     🏆 Best Starter KIT MicroFrontend
			  </span>
			</div>
			<h1 className="text-center md:text-left text-5xl tracking-tight font-extrabold text-black dark:text-white max-w-xl">
              Separate <span className="text-blue-500">Code</span>, Unite <span className="text-yellow-500">Experience</span>
            </h1>
			<p className="text-center md:text-left max-w-xl text-lg">
			  Quickly start a Micro Frontend project with a tested and scale-ready base configuration.
			</p>
			<div className="flex items-center justify-center md:justify-start gap-6 mt-4">
			  <Link to="/app2" className="flex gap-2 items-center px-4 py-3 font-semibold bg-gradient-to-b from-violet-500 to-indigo-500 text-white rounded-md dark:from-violet-600 dark:to-indigo-600 hover:from-violet-600 hover:to-indigo-600 dark:hover:from-violet-500 dark:hover:to-indigo-500 hover:duration-300 hover:transition">
			    Examples
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6m0 0H9m9 0v9"/></svg>
			  </Link>
			  <Link to="https://github.com/fitri-hy/nexafe-microservice" target="_blank" className="flex gap-2 items-center px-0 py-2 font-semibold hover:duration-300 hover:transition text-blue-500 dark:text-yellow-500 hover:text-blue-600 dark:hover:text-yellow-600 text-xl border-b">
			    Github
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336a9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2" clip-rule="evenodd"/></svg>
			  </Link>
			</div>
          </div>
          <div>
            <img className="max-h-[500px] mx-auto" src="/assets/images/finance4-features-pic1.png" alt="hero" />
          </div>
        </div>
      </div>
	  
	  <div className="container mx-auto px-4 md:px-9 pt-20 md:pt-20 pb-9">
		<div className="flex items-center justify-center flex-col">
		  <span>
		    What We Do?
		  </span>
		  <h2 className="text-3xl font-bold text-black dark:text-white mt-2">
		    <span className="text-blue-500">Built-in</span> <span className="text-yellow-500">Features</span>
		  </h2>
		  <p className="text-center max-w-lg mx-auto">
		    Isolated modules, seamless integration, and ready-to-use configurations for modern frontend development.
		  </p>
		</div>
		<div className="mt-6 flex flex-wrap justify-center gap-4 justify-center">
		  <div className="flex gap-4 justify-between items-center bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg shadow-gray-300/20 dark:shadow-slate-950/60">
			<h3 className="text-lg font-semibold">
			  React 19
			</h3>
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 228"><path fill="#00d8ff" d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86"/></svg>
		  </div>
		  <div className="flex gap-4 justify-between items-center bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg shadow-gray-300/20 dark:shadow-slate-950/60">
			<h3 className="text-lg font-semibold">
			  Microfrontend
			</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#2e3192" d="M128 0C57.302 0 0 57.302 0 128s57.302 128 128 128s128-57.302 128-128S198.698 0 128 0m60.775 145.364c-1.24 4.962-3.225 8.93-5.953 12.155c-2.48 3.225-4.962 5.21-7.69 6.202a24.2 24.2 0 0 1-8.434 1.488c-2.977 0-5.458-.496-7.442-1.736c-1.985-.992-3.473-2.729-4.713-4.713c-1.24-1.985-1.985-4.465-2.481-7.194q-.744-4.094-.744-8.93c0-1.24 0-2.481.248-4.217c.248-1.737.496-3.97.744-3.97h-.496c-3.969 9.923-9.426 17.117-16.372 22.822c-6.946 5.706-14.636 8.434-23.07 8.434c-5.705 0-10.419-2.232-13.643-6.45c-3.473-4.216-5.21-10.666-5.21-19.1c0-1.24 0-2.48.248-3.969c.249-1.24.249-1.736.497-4.217h-1.737c-2.232 4.961-4.217 11.907-5.705 18.109c-1.489 6.201-2.729 11.906-3.473 17.116c-.992 5.21-1.489 9.922-1.985 13.891c-.496 3.97-.744 6.698-.992 8.186c.248 1.24.496 2.48.744 3.97c.496 1.488.744 2.976 1.24 4.216c.497 1.24.745 2.729.993 3.97c.248 1.24.496 2.232.496 2.976c0 3.473-.744 6.202-2.233 7.938c-1.488 1.737-3.224 2.729-4.96 2.729c-2.233 0-4.218-.744-5.706-1.985c-1.737-1.488-2.48-3.72-2.48-6.697c0-4.217.743-9.675 2.232-16.124c1.488-6.45 3.72-14.636 6.45-24.31c1.488-4.466 2.728-8.93 4.216-13.396c1.489-4.465 2.729-8.682 3.97-12.403c1.24-3.72 2.232-7.194 3.224-10.17s1.489-5.21 1.737-6.946c.248-.744.496-2.48.744-4.961s.496-5.21.992-8.435c.496-3.224.744-6.697 1.24-10.17c.496-3.721.993-6.946 1.24-9.923c.497-2.232.745-4.713 1.24-7.441c.497-2.73 1.241-5.458 2.233-7.69c.993-2.481 2.481-4.466 4.218-6.202c1.736-1.736 3.969-2.48 6.697-2.48c2.977 0 4.961.992 5.954 2.728s1.488 3.97 1.24 6.45s-.496 5.209-1.24 7.938s-1.489 5.209-2.233 7.194c-1.984 6.201-3.969 11.906-6.201 16.62c-2.233 4.713-4.217 9.922-5.954 15.38c-1.488 3.72-1.984 7.193-1.984 10.17c0 5.457 1.736 9.426 4.96 12.403c3.474 2.977 7.443 4.217 12.156 4.217c3.72 0 7.442-1.24 10.915-3.969q5.208-4.092 9.674-9.674c2.977-3.721 5.457-7.69 7.442-12.155c1.984-4.217 3.473-8.186 4.465-11.411c.248-.496.496-1.488.744-3.473c.496-1.984.744-4.217 1.24-6.698c.497-2.48.993-4.96 1.489-7.69c.496-2.728.992-4.96 1.24-6.697c.496-1.985.744-3.97 1.24-6.45c.497-2.48 1.24-4.713 2.233-6.946c.992-2.232 2.48-3.969 3.97-5.457c1.735-1.488 3.72-2.233 6.449-2.233c3.224 0 5.209.993 6.45 2.73c.992 1.736 1.488 3.968 1.488 6.449c-.248 2.48-.496 4.961-1.24 7.442c-.745 2.48-1.241 4.465-1.737 5.953a248 248 0 0 1-5.954 16.62c-1.984 4.962-3.72 9.427-5.457 12.9c-1.488 3.72-2.729 6.45-3.72 8.682q-1.49 3.348-1.49 4.465c0 6.45 1.49 11.163 4.218 13.891c2.728 2.729 5.705 4.217 8.93 4.217c5.457 0 9.674-1.736 12.9-4.96c3.224-3.474 5.705-9.675 7.193-17.117h1.985c.496 7.194-.248 13.147-1.489 18.108"/></svg>
		  </div>
		  <div className="flex gap-4 justify-between items-center bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg shadow-gray-300/20 dark:shadow-slate-950/60">
			<h3 className="text-lg font-semibold">
			  Tailwind
			</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60"/><path fill="url(#SVGYCM7xdyn)" fill-rule="evenodd" d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5" clip-rule="evenodd"/><defs><linearGradient id="SVGYCM7xdyn" x1="86.5" x2="163.5" y1="74" y2="185.5" gradientUnits="userSpaceOnUse"><stop stop-color="#32b1c1"/><stop offset="1" stop-color="#14c6b7"/></linearGradient></defs></g></svg>
		  </div>
		  <div className="flex gap-4 justify-between items-center bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg shadow-gray-300/20 dark:shadow-slate-950/60">
			<h3 className="text-lg font-semibold">
			  React Query
			</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60"/><path fill="#2f406a" d="M191.959 91.979v72.006l-63.866 35.849l-.587.512v27.142l.587.512l89.92-49.727V78h-.858l-25.353 13.576v.561"/><path fill="#2379bd" d="m63.616 164.406l64.523 35.641V228L37 178V78h.917l25.434 14.103l.268.822v71.794"/><path fill="#03afef" d="M63.785 92.557L37 77.837L127.751 28l90.262 49.631l-26.09 13.954l-64.286-34.91l-63.96 35.78"/><path fill="#2f406a" d="m126.944 155.848l-.703-.658v-26.717l.703-.356v-.657l24.486-13.384h.76v27.579l-25.408 14.095"/><path fill="#2379bd" d="M101.139 143.086v-29.01h.707l25.027 13.759v28.646l-25.949-13.398"/><path fill="#03afef" d="m126.66 99.675l-25.103 14.557l25.53 14.401l25.103-14.346l-25.534-14.768"/><path fill="#2f406a" d="m95.897 174.203l-.67-.667v-27.142l.67-.36v-.667l23.292-13.569h.722v27.962l-24.168 14.289"/><path fill="#2379bd" d="M69.911 160.804v-29.006h.712l25.238 13.759v28.646l-25.946-13.399"/><path fill="#03afef" d="M95.068 117.292L69.91 131.798l25.532 14.557l25.101-14.347l-25.531-14.767"/><path fill="#2f406a" d="m159.855 174.836l-.703-.657v-26.737l.703-.354v-.658l24.487-13.367h.759v27.545l-25.408 14.076"/><path fill="#2379bd" d="M134.578 161.431v-29h.815l25.025 13.759v28.646l-25.95-13.405"/><path fill="#03afef" d="m159.889 117.874l-24.788 14.24l25.213 14.241l24.787-14.035z"/><path fill="#2f406a" d="m128.842 192.557l-.703-.667v-27.144l.703-.36v-.667l24.487-13.567h.76v27.957l-25.409 14.288"/><path fill="#2379bd" d="M102.823 179.108v-28.956h.712l25.237 13.759v28.646l-25.946-13.452"/><path fill="#03afef" d="m128.268 135.602l-25.445 14.338l25.877 14.136l25.389-14.136l-25.824-14.345"/><path fill="#2f406a" d="m126.944 117.874l-.703-.669V90.101l.703-.361v-.669L151.43 75.47h.76v28.03z"/><path fill="#2379bd" d="M101.139 104.546V75.469h.707l25.027 13.792v28.613l-25.949-13.432"/><path fill="#03afef" d="m126.658 61.544l-25.101 14.24l25.532 14.241l25.101-14.034z"/><path fill="#2f406a" d="m95.897 135.595l-.67-.674v-27.62l.67-.364v-.674l23.292-13.706h.722v28.244l-24.168 14.433"/><path fill="#2379bd" d="M69.911 122.199v-29.01h.712l25.238 13.76v28.646l-25.946-13.399"/><path fill="#03afef" d="M95.068 78.633L69.91 92.797l25.532 14.317l25.101-14.008l-25.531-14.42"/><path fill="#2f406a" d="m159.855 136.861l-.703-.678v-27.529l.703-.367v-.678l24.487-13.786h.759v28.411l-25.408 14.518"/><path fill="#2379bd" d="M135.101 123.402v-29.58h.783l23.901 13.931v29.108z"/><path fill="#03afef" d="m159.889 79.272l-24.788 14.235l25.213 14.24l24.787-14.034l-25.212-14.447"/><path fill="#2f406a" d="m128.842 153.946l-.703-.679V125.78l.703-.367v-.68l24.487-13.821h.76v28.482l-25.247 14.556"/><path fill="#2379bd" d="M102.823 140.451v-29.539h.712l25.237 14.014v29.024z"/><path fill="#03afef" d="m128.294 96.987l-25.471 14.215l25.85 14.266l25.416-14.059l-25.792-14.415"/></g></svg>
		  </div>
		  <div className="flex gap-4 justify-between items-center bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg shadow-gray-300/20 dark:shadow-slate-950/60">
			<h3 className="text-lg font-semibold">
			  State Management
			</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path fill="#ff9800" d="M3 28h26v4H3zm0-12h26v4H3z"/><path fill="#2196f3" d="M43 11H20v26h23c1.1 0 2-.9 2-2V13c0-1.1-.9-2-2-2"/><path fill="#64b5f6" d="M20 9h-2v30h2c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2"/></svg>
		  </div>
		  <div className="flex gap-4 justify-between items-center bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg shadow-gray-300/20 dark:shadow-slate-950/60">
			<h3 className="text-lg font-semibold">
			  Reusable Components
			</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path fill="#bbdefb" d="M4 7h40v34H4z"/><path fill="#3f51b5" d="M9 12h30v5H9z"/><path fill="#2196f3" d="M9 21h13v16H9zm17 0h13v16H26z"/></svg>
		  </div>
		  <div className="flex gap-4 justify-between items-center bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg shadow-gray-300/20 dark:shadow-slate-950/60">
			<h3 className="text-lg font-semibold">
			  Utility Functions
			</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path fill="#3f51b5" d="M39 43H9c-2.2 0-4-1.8-4-4V9c0-2.2 1.8-4 4-4h30c2.2 0 4 1.8 4 4v30c0 2.2-1.8 4-4 4"/><path fill="#b3e5fc" d="M33.6 25.4c.1-.4.1-.9.1-1.4s0-.9-.1-1.4l2.8-2c.3-.2.4-.6.2-.9l-2.7-4.6c-.2-.3-.5-.4-.8-.3L30 16.3c-.7-.6-1.5-1-2.4-1.4l-.3-3.4c0-.3-.3-.6-.6-.6h-5.3c-.3 0-.6.3-.6.6l-.4 3.5c-.9.3-1.6.8-2.4 1.4L14.9 15c-.3-.1-.7 0-.8.3l-2.7 4.6c-.2.3-.1.7.2.9l2.8 2c-.1.4-.1.9-.1 1.4s0 .9.1 1.4l-2.8 2c-.3.2-.4.6-.2.9l2.7 4.6c.2.3.5.4.8.3L18 32c.7.6 1.5 1 2.4 1.4l.3 3.4c0 .3.3.6.6.6h5.3c.3 0 .6-.3.6-.6l.3-3.4c.9-.3 1.6-.8 2.4-1.4l3.1 1.4c.3.1.7 0 .8-.3l2.7-4.6c.2-.3.1-.7-.2-.9zM24 29c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5"/></svg>
		  </div>
		  <div className="flex gap-4 justify-between items-center bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg shadow-gray-300/20 dark:shadow-slate-950/60">
			<h3 className="text-lg font-semibold">
			  TypeScript
			</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#3178c6" d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0"/><path fill="#fff" d="M150.518 200.475v27.62q6.738 3.453 15.938 5.179T185.849 235q9.934 0 18.874-1.899t15.678-6.257q6.738-4.359 10.669-11.394q3.93-7.033 3.93-17.391q0-7.51-2.246-13.163a30.8 30.8 0 0 0-6.479-10.055q-4.232-4.402-10.149-7.898t-13.347-6.602q-5.442-2.245-9.761-4.359t-7.342-4.316q-3.024-2.2-4.665-4.661t-1.641-5.567q0-2.848 1.468-5.135q1.469-2.288 4.147-3.927t6.565-2.547q3.887-.906 8.638-.906q3.456 0 7.299.518q3.844.517 7.732 1.597a54 54 0 0 1 7.558 2.719a41.7 41.7 0 0 1 6.781 3.797v-25.807q-6.306-2.417-13.778-3.582T198.633 107q-9.847 0-18.658 2.115q-8.811 2.114-15.506 6.602q-6.694 4.49-10.582 11.437Q150 134.102 150 143.769q0 12.342 7.127 21.06t21.638 14.759a292 292 0 0 1 10.625 4.575q4.924 2.244 8.509 4.66t5.658 5.265t2.073 6.474a9.9 9.9 0 0 1-1.296 4.963q-1.295 2.287-3.93 3.97t-6.565 2.632t-9.2.95q-8.983 0-17.794-3.151t-16.327-9.451m-46.036-68.733H140V109H41v22.742h35.345V233h28.137z"/></svg>
		  </div>
		  <div className="flex gap-4 justify-between items-center bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg shadow-gray-300/20 dark:shadow-slate-950/60">
			<h3 className="text-lg font-semibold">
			  Vite
			</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 257"><defs><linearGradient id="SVGmrugVdcL" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41d1ff"/><stop offset="100%" stop-color="#bd34fe"/></linearGradient><linearGradient id="SVGqn4NsbfA" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#ffea83"/><stop offset="8.333%" stop-color="#ffdd35"/><stop offset="100%" stop-color="#ffa800"/></linearGradient></defs><path fill="url(#SVGmrugVdcL)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.5 6.5 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62"/><path fill="url(#SVGqn4NsbfA)" d="M185.432.063L96.44 17.501a3.27 3.27 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113"/></svg>
		  </div>
		</div>
	  </div>
    </Page>
  );
}
