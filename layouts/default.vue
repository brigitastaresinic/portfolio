<template>
    <div class="layout">
        <header class="header">
            <NuxtLink class="header-title" to="/">Brigita Starešinič</NuxtLink>

            <nav class="nav">
                <NuxtLink class="nav__link" to="/projects">Projects</NuxtLink>
                <NuxtLink class="nav__link" to="/about/">About</NuxtLink>
                <NuxtLink class="nav__link" to="mailto:staresinic.brigita@gmail.com" target="_blank" rel="noopener noreferrer">Contact</NuxtLink>
                <NuxtLink class="nav__link" to="/instagram" target="_blank" rel="noopener noreferrer">Instagram</NuxtLink>
                <NuxtLink class="nav__link" to="/linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</NuxtLink>
            </nav>
        </header>
        <slot></slot>
    </div>
</template>

<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

/* OTHER RESET */

a {
    color: inherit;
    text-decoration: inherit;
    /* no underline */
}

/* USER STYLES */

body,
html {
    min-height: 100%;
    /* font-family: circular, 'segoe ui', sans-serif; */
    font-family: 'Public Sans', sans-serif;
    color: #797979;

    margin: 0;
    padding: 0;

    font-size: 16px;
    line-height: 1.8em;

    letter-spacing: .02em;
}

.layout {
    /* max-width: 760px; */
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10vh;
    padding-bottom: 10vh;
}

.header-title {
    font-size: 22px;
}

.nav__link {
    font-weight: 400;
    padding-bottom: 8px;
}

.nav__link:hover {
    color: black;
}

.nav__link.active {
    border-bottom: 1px solid black;
}

.nav__link:not(:first-child) {
    margin-left: 2vw;
}

.nav__link.router-link-active {
    border-bottom: 1.5px solid #000000;
}

@media (min-width: 768px) {
    .layout {
        padding-left: 4vw;
        padding-right: 4vw;
    }
}

@media (max-width: 768px) {
    .header {
        padding-top: 4.5vw;
        padding-bottom: 4.5vw;
    }

    nav {
        display: none;
    }
}
</style>
