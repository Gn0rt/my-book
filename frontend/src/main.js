import './assets/main.css'
// Import Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import component FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import các icon bạn muốn dùng
import { faUserSecret, faCartShopping, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

// Thêm icon vào library
library.add(faUserSecret, faFacebook, faTwitter, faCartShopping, faEye, faEyeSlash)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
