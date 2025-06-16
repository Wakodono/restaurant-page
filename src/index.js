import initialLoad from "./initial-load"
import createHome from "./home"
import createAbout from "./about"
import createMenu from "./menu"
import "./styels.css"

document.addEventListener('DOMContentLoaded', () => {
    console.log("A console statement from the src directory")
    console.log("Development server is working!")
    initialLoad()

    const homeTab = document.getElementById('home-tab')
    const menuTab = document.getElementById('menu-tab')
    const aboutTab = document.getElementById('about-tab')

    const tabs = document.querySelectorAll('[id*="tab"]')

    const contentDiv = document.getElementById('content')

    homeTab.addEventListener('click', () => {
        //empty content div
        contentDiv.innerHTML = ''

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })

        homeTab.classList.add('active')

        // render page view and add active class to tab
        initialLoad()
    })

    menuTab.addEventListener('click', () => {
        //empty content div
        contentDiv.innerHTML = ''

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })

        menuTab.classList.add('active')

         // render page view and add active class to tab
        const menuPage = createMenu()

        contentDiv.appendChild(menuPage)
    })

    aboutTab.addEventListener('click', () => {
        contentDiv.innerHTML = ''

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })

        aboutTab.classList.add('active')

         // render page view and add active class to tab
        const aboutpage = createAbout()

        contentDiv.appendChild(aboutpage)
    })
})