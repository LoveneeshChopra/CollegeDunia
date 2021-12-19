let puppeteer=require("puppeteer");
let fs=require("fs");
let path=require("path");

const { executionAsyncResource } = require("async_hooks");
let browserStartPromises=puppeteer.launch({
    headless:false,
    //slow mo:1000
    defaultViewport:null,
    args:["--start-maximised","--disable-notifications"]
});
let page,browser;
let companyArr,mobileName;
(async function fn(){
    try{
    browser=await browserStartPromises;
    console.log("Browser opened");
    page=await browser.newPage();
    // await page.goto("https://collegedunia.com/");
    await page.goto("https://collegedunia.com/engineering/nellore-colleges");
    // await page.waitFor(3000);
    // await page.waitForSelector(".jsx-2598910281.lead-close-icon.pointer");
    // await page.click(".jsx-2598910281.lead-close-icon.pointer");
    // await page.waitForSelector(".jsx-3851299306.text-left.outline-0.cd-nav-menu-links.pointer.js-cd-nav-country-dropdown.border-0.w-100.bg-transparent.p-0.overflow-hidden");
    // await page.click(".jsx-3851299306.text-left.outline-0.cd-nav-menu-links.pointer.js-cd-nav-country-dropdown.border-0.w-100.bg-transparent.p-0.overflow-hidden");
    await page.waitForSelector(".jsx-765939686.college_name.m-0.text-white.font-weight-bold.text-md");
    let collegeArr=await page.$$(".jsx-765939686.college_name.m-0.text-white.font-weight-bold.text-md");
    console.log(collegeArr.length);
    for(let i=0;i<6;i++){
        await page.waitForSelector(".jsx-765939686.college_name.m-0.text-white.font-weight-bold.text-md");
        collegeArr=await page.$$(".jsx-765939686.college_name.m-0.text-white.font-weight-bold.text-md");
        await collegeArr[i].click();
        await page.waitFor(3000);
        // await page.waitForSelector(".jsx-2675951502.card-heading.text-title.font-weight-bold.p-4.text-capitalize.mb-0");
        // let h1=await page.$$(".jsx-2675951502.card-heading.text-title.font-weight-bold.p-4.text-capitalize.mb-0");
        // console.log(h1);
        // let heading=await page.evaluate(el=>el.textContent,h1);
        // console.log(heading);
        // let collegeName=heading.split(",")[0];
        // let pathC=path.join("C:/Users/rajes/Desktop/Web Dev Pep/CollegeDunia/Colleges",collegeName);
        // if(!fs.existsSync(pathC))
        // await fs.promises.mkdir(pathC);

        await page.goBack();
        await page.waitForTimeout(2000);
    }
}
    catch(err){
        console.log(err);
    }
})();
