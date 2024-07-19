#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

const y = chalk.yellow;
const g = chalk.green;
const c = chalk.cyan;
const b = chalk.bold;
const o = chalk.rgb(237, 125, 62);

const cardOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "#e28743",
};

const content = `                  ${b("Noah Waldner")}

${g("Job")}                        ${o("Frontend Platform Lead at Frontify")}

${g("Twitter")}                    ${y("https://twitter.com/noah_waldner")}
${g("GitHub")}                     ${y("https://github.com/noahwaldner")}
${g("Developer Website")}          ${y("https://waldner.dev")}
${g("Film Website")}               ${y("https://noahwaldner.ch")}
${g("Instagram")}                  ${y("https://instagram.com/noah_waldner")}
${g("LinkedIn")}                   ${y("https://linkedin.com/in/noahwaldner/")}

                    ${b("Featured Projects")}

${g("HNY Tech")}                   ${y("https://hny.tech")}
${g("Frontify")}                   ${y("https://frontify.com")}
${g("Digitec Galaxus")}            ${y("https://galaxus.ch")}
${g("Adobe Event Website")}        ${y("https://adobe.com")}
${g("Basler Kantonalbank")}        ${y("https://bkb.ch")}
${g("Axpo")}                       ${y("https://axpo.com")}
${g("Franke")}                     ${y("https://franke.com")}
${g("Flyte")}                      ${y("https://flyte.com")}  
`;

const slidesContent = ``;

const card = boxen(content, cardOptions);

console.log(card);
