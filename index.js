#!/usr/bin/env node

import boxen from 'boxen'
import chalk from 'chalk'

const y = chalk.yellow;
const g = chalk.green;
const c = chalk.cyan;
const b = chalk.bold;
const o = chalk.rgb(237,125,62)

const cardOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "#e28743"
};

const content = `                  ${b("Noah Waldner")}

${g("Job")}                        ${o("Frontend Engineer at Valtech")}

${g("Twitter")}                    ${y("https://twitter.com/noah_waldner")}
${g("GitHub")}                     ${y("https://github.com/noahwaldner")}
${g("Website")}                    ${y("https://waldner.dev")}
${g("Instagram")}                  ${y("https://instagram.com/swiss_fries")}
${g("LinkedIn")}                   ${y("https://linkedin.com/in/noahwaldner/")}

                    ${b("Featured Projects")}

${g("Basler Kantonalbank")}        ${y("https://bkb.ch")}
${g("Adobe Event Website")}        ${y("https://adobe.com")}
${g("Valyo")}                      ${y("https://valyo.ch")}
${g("Adobe Max & Adobe Summit")}   ${y("https://adobe.com/max")}
${g("Axpo")}                       ${y("https://axpo.com")}
${g("Arxada")}                     ${y("https://arxada.com")}
${g("888 Productions")}            ${y("https://888productions.studio")}
`;

const slidesContent = ``;

const card = boxen(content, cardOptions);

console.log(card);