// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
import "./components"
import axios from "axios"

const csrfToken = document.querySelector('[name="csrf-token"]').content;
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;