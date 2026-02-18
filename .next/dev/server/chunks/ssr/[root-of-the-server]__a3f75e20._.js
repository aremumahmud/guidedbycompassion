module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/components/gooeybtn.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
;
function GooeyBtn({ text, variant = 'black', extendby = 0, direction = 'right' }) {
    const isRight = direction === 'right';
    const defaultTransform = isRight ? 'translateX(-40px)' : 'translateX(40px)';
    const defaultHoverTransform = isRight ? 'translateX(-84px)' : 'translateX(84px)';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `gooey-btn-container ${variant} ${direction}`,
        style: {
            filter: "url(#gooey-filter)"
        },
        onMouseEnter: (e)=>{
            const arrow = e.currentTarget.querySelector('.gooey-btn-arrow');
            if (arrow && extendby) {
                const transform = isRight ? `translateX(-${extendby}px)` : `translateX(${extendby}px)`;
                arrow.style.transform = transform;
            }
        },
        onMouseLeave: (e)=>{
            const arrow = e.currentTarget.querySelector('.gooey-btn-arrow');
            if (arrow) {
                arrow.style.transform = defaultTransform;
            }
        },
        children: [
            !isRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `gooey-btn-arrow ${variant} left`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M7 17L17 7M17 7H7M17 7V17"
                    }, void 0, false, {
                        fileName: "[project]/src/components/gooeybtn.jsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/gooeybtn.jsx",
                    lineNumber: 30,
                    columnNumber: 14
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/gooeybtn.jsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `gooey-btn-main ${variant}`,
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/gooeybtn.jsx",
                lineNumber: 35,
                columnNumber: 9
            }, this),
            isRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `gooey-btn-arrow ${variant} right`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M7 17L17 7M17 7H7M17 7V17"
                    }, void 0, false, {
                        fileName: "[project]/src/components/gooeybtn.jsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/gooeybtn.jsx",
                    lineNumber: 40,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/gooeybtn.jsx",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/gooeybtn.jsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = GooeyBtn;
}),
"[project]/copy/home.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"images\":{\"logo\":\"https://res.cloudinary.com/dvauarkh6/image/upload/v1761836162/Logo-Color_vmvekl.png\",\"hero\":{\"rotatingImages\":[\"https://res.cloudinary.com/dvauarkh6/image/upload/v1751556625/pexels-shkrabaanthony-7345465_lnzjkh.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1747917952/pexels-vlada-karpovich-5790808_nopxnn.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1761228853/blog-images/Family_meeting_with_a_caregiver_to_discuss_home_care_questions_and_options_in_Pflugerville_Texas._qavsnh.png\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1747917955/pexels-yaroslav-shuraev-8088910_phrxs8.jpg\"],\"decor\":\"/assets/download.svg\"},\"about\":{\"main\":\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757651526/istockphoto-2197953344-612x612_aafwiv.jpg\"},\"services\":{\"serviceImages\":[\"https://res.cloudinary.com/dvauarkh6/image/upload/v1747917952/pexels-vlada-karpovich-5790702_1_jsorsb.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757647571/pexels-kampus-7477691_fbuzpo.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757647660/pexels-jsme-mila-523821574-29372742_btuql4.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757648020/pexels-mike-jones-8805864_tpce8a.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757648078/pexels-kampus-7551646_mznizh.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757648473/pexels-liliana-drew-9462344_crre4v.jpg\"],\"verifiedIcon\":\"✓\"},\"testimonials\":{\"profileImages\":[\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759287743/pexels-divinetechygirl-1181690_s6affc.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1741494115/client2_att5pf.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1744211718/pexels-cristian-rojas-8460370_jmjmux.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1741565451/pexels-hannah-nelson-390257-1065084_ayajb2.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759287732/pexels-hannah-nelson-390257-1065084_i5llk9.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759287886/pexels-olly-834863_vnotgs.jpg\"]},\"blog\":{\"articleImages\":[\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757652518/pexels-olly-3791664_skfn2f.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757651528/istockphoto-2047480956-612x612_ghepml.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757651536/istockphoto-2185020253-612x612_ir8lka.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1753007261/pexels-kampus-7551617_2_rilfqn.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1753007241/pexels-olly-3768131_rjvx7r.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757648020/pexels-mike-jones-8805864_tpce8a.jpg\"],\"profileImages\":[\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759290370/pexels-fernando-capetillo-94107723-34093130_agqll2.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759290462/pexels-edward-jenner-4033143_xxjb7e.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759291688/pexels-olly-3768911_sy5y7d.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759291553/pexels-md-ishak-rahman-2152426164-34070074_lixkw8.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759291434/pexels-olly-3823497_yktzjc.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759290819/doctor-hospital_1098-19685_bjxffs.avif\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759291027/pexels-cottonbro-7578806_ijdqqd.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759291324/pexels-vanessa-garcia-6326051_lh8hva.jpg\"]},\"refer\":{\"main\":\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757648078/pexels-kampus-7551646_mznizh.jpg\"}},\"header\":{\"logo\":{\"alt\":\"Logo\"},\"navigation\":{\"about\":\"About\",\"services\":\"Services\",\"careers\":\"Careers\",\"blog\":\"Blog\",\"referUs\":\"Refer Us\"},\"servicesDropdown\":{\"personalCare\":\"Personal Assistance Services (PAS)\",\"companionCare\":\"Companionship & Emotional Support\",\"respiteCare\":\"Respite & Family Relief Care\",\"postHospitalSupport\":\"Post-Hospital / Post-Surgery Support\",\"specializedCare\":\"Specialty Service Packages\",\"endOfLifeCare\":\"End-of-Life Care\"},\"ctaButtons\":{\"contact\":\"Contact\",\"scheduleCare\":\"Schedule Care\",\"contactUs\":\"Contact Us\"},\"mobileMenu\":{\"toggleAriaLabel\":\"Toggle mobile menu\"}},\"hero\":{\"badge\":\"Free Care Assessment\",\"mainHeading\":\"Providing Reliable Care for Your Peace of Mind\",\"mainDescription\":\"Your family is our family — we treat every client with the dignity, respect, and compassion they deserve. Offering 13 comprehensive home care services from personal assistance to specialized care, serving Houston, TX with reliable care you can count on.\",\"teamStats\":\"Trusted by Houston Families\",\"ctaButton\":\"Get Started Today\",\"imageOverlay\":{\"badges\":{\"personalCare\":\"PERSONAL CARE\",\"homeHealthCare\":\"PERSONAL ASSISTANCE SERVICES\",\"houstonTX\":\"HOUSTON, TX\"}},\"rotatingContent\":[{\"heading\":\"Personal Assistance Services (PAS)\",\"description\":\"Complete daily living support - personal care, homemaking, transportation, medication reminders.\",\"popularHeading\":\"Most Popular\",\"popularDescription\":\"Comprehensive PAS services with certified caregivers.\"},{\"heading\":\"Companionship & Wellness\",\"description\":\"Social engagement, wellness check-ins, emotional support, and optional pet care.\",\"popularHeading\":\"Essential Service\",\"popularDescription\":\"Companion care that enhances quality of life daily.\"},{\"heading\":\"Respite & 24-Hour Care\",\"description\":\"Hourly, overnight, or continuous 24-hour support for family caregiver relief.\",\"popularHeading\":\"Family Support\",\"popularDescription\":\"Flexible respite care from hourly to full-time.\"},{\"heading\":\"Specialty Care Packages\",\"description\":\"Memory care, bedbound care, post-hospital recovery, preferred caregiver matching.\",\"popularHeading\":\"Expert Care\",\"popularDescription\":\"Specialized packages for complex health challenges.\"}]},\"statistics\":{\"familiesServed\":{\"number\":300,\"label\":\"Houston Families Served\"},\"certifiedCaregivers\":{\"number\":35,\"label\":\"Certified Caregivers\"},\"citiesCovered\":{\"number\":10,\"label\":\"Service Areas Covered\"},\"satisfactionRate\":{\"number\":98,\"label\":\"Client Satisfaction Rate\"}},\"about\":{\"badge\":\"About Guided by Compassion\",\"title\":\"Providing Reliable Care\",\"titleHighlight\":\"for Your Peace of Mind\",\"description\":\"At Guided by Compassion, we believe home is where care feels most meaningful. That's why we provide 13 comprehensive in-home care services—from personal care and homemaking to specialized memory care and 24-hour support—designed to meet the unique needs of each client and their family. Serving Houston, Texas and surrounding communities, we are committed to helping clients live comfortably and independently while giving families the reassurance they deserve.\",\"imageOverlay\":{\"yearsExperience\":\"NEW\",\"yearsLabel\":\"Starting Fresh in Houston\"}},\"services\":{\"badge\":\"Our Home Care Services\",\"title\":\"Comprehensive Care Services\",\"titleHighlight\":\"in Houston, TX\",\"subtitle\":\"We offer 13 comprehensive home care services organized into 6 specialized categories, designed to meet your unique needs and enhance your quality of life in the comfort of your own home—from personal care and companionship to specialized memory care and 24-hour support.\",\"serviceCards\":[{\"title\":\"Personal Assistance Services (PAS)\",\"description\":\"Comprehensive daily living support including personal care (bathing, dressing, grooming, mobility, toileting), homemaking (housekeeping, meal prep, laundry), transportation & errands (appointments, prescriptions, shopping), and medication reminders with dignity and respect.\",\"detailedServices\":[\"Personal Care: bathing, grooming, dressing, toileting, incontinence care, mobility assistance\",\"Homemaking: light housekeeping, laundry, dishwashing, meal planning, organizing supplies\",\"Transportation: medical appointments, errands, prescriptions, groceries\",\"Medication Reminders: tracking, refill alerts, container assistance\"],\"stats\":{\"clients\":\"150+\",\"satisfaction\":\"98%\"},\"learnMore\":\"Learn more about PAS services\"},{\"title\":\"Companionship & Emotional Support\",\"description\":\"Social engagement, friendly conversation, reading, games, crafts, walks, emotional support, wellness check-ins (15-60 min daily visits), safety assessments, routine assistance, mail sorting, scheduling help, and optional pet care to combat loneliness and enhance wellbeing.\",\"detailedServices\":[\"Companionship: conversation, games, crafts, reading aloud, walks, outings\",\"Emotional Support: reassurance, safety supervision, fall prevention\",\"Wellness Support: daily check-ins, safety assessments, healthy habits\",\"Pet Assistance: feeding, walking, companionship for pets (optional add-on)\"],\"stats\":{\"clients\":\"120+\",\"satisfaction\":\"97%\"},\"learnMore\":\"Learn more about companionship care\"},{\"title\":\"Respite & Family Relief Care\",\"description\":\"Hourly, overnight, and weekend coverage for family caregivers. Includes temporary respite care, awake overnight supervision, sleep-in companions, continuous 24-hour care options for full-time needs, and emergency respite support to prevent caregiver burnout.\",\"detailedServices\":[\"Respite Care: hourly, weekend, emergency coverage for family relief\",\"Overnight Care: awake supervision, sleep-in companion support\",\"24-Hour Care: continuous daily support for full-time care needs\",\"Professional caregivers for peace of mind and family self-care time\"],\"stats\":{\"clients\":\"80+\",\"satisfaction\":\"99%\"},\"learnMore\":\"Learn more about respite care\"},{\"title\":\"Post-Hospital / Post-Surgery Support\",\"description\":\"Professional in-home care support to help individuals recover safely and comfortably after hospital discharge or surgical procedures. Includes assistance during recovery, mobility support, medication reminders, meal preparation, and coordination with healthcare providers.\",\"detailedServices\":[\"Recovery assistance after hospital discharge\",\"Post-surgery mobility and comfort support\",\"Medication reminders and follow-up visit coordination\",\"Meal preparation and rest assistance during recovery\"],\"stats\":{\"clients\":\"60+\",\"satisfaction\":\"96%\"},\"learnMore\":\"Learn more about post-hospital support\"},{\"title\":\"Specialty Service Packages\",\"description\":\"Expert packages for Memory & Cognitive Care (Alzheimer's/Dementia supervision, redirection, daily structure), Bedbound & Limited Mobility Care (repositioning, bed baths, Hoyer lift support), Post-Hospital/Post-Surgery Recovery, and Preferred Caregiver Matching for personalized continuity of care.\",\"detailedServices\":[\"Memory Care: Alzheimer's/Dementia supervision, calming techniques, mental engagement\",\"Bedbound Care: repositioning, bed baths, linen changes, incontinence care, ROM exercises\",\"Post-Hospital Support: recovery assistance, mobility support, medication reminders\",\"Preferred Caregiver Matching: custom care matching based on client preferences\"],\"stats\":{\"clients\":\"90+\",\"satisfaction\":\"98%\"},\"learnMore\":\"Learn more about specialty packages\"},{\"title\":\"End-of-Life Care\",\"description\":\"Comfort and compassion during life's final journey. Pain relief and comfort-focused care, emotional and spiritual support for clients and families, assistance with daily needs, dignified care, 24-hour options available, and compassionate presence for peace and dignity.\",\"detailedServices\":[\"Pain relief and comfort-focused care management\",\"Emotional and spiritual support for clients and families\",\"Assistance with daily tasks and personal care needs\",\"24-hour care options and compassionate presence available\"],\"stats\":{\"clients\":\"40+\",\"satisfaction\":\"100%\"},\"learnMore\":\"Learn more about end-of-life care\"}],\"learnMoreButton\":\"Learn More\",\"ctaSection\":{\"title\":\"Schedule Your Free In-Home Care Assessment Today!\",\"description\":\"Discover how we can help your loved one live independently and comfortably at home. Contact us today to get started.\",\"button\":\"Schedule a Free Assessment\"}},\"trust\":{\"title\":\"Why Houston Families <br> Trust Guided by Compassion\",\"trustPoints\":[{\"title\":\"Certified Home Care Professionals\",\"description\":\"Professional caregivers trained in comprehensive home care services who provide reliable, compassionate support with dignity and respect.\",\"icon\":\"◯\"},{\"title\":\"Personalized Care Plans\",\"description\":\"Customized home care services tailored to each client's unique needs, preferences, and independence goals.\",\"icon\":\"□\"},{\"title\":\"Local Houston Service\",\"description\":\"Dedicated to serving Houston and surrounding areas with reliable, consistent home care services.\",\"icon\":\"◐\"},{\"title\":\"Compassionate Professional Care\",\"description\":\"Committed to enhancing quality of life through professional home care services with genuine care and understanding.\",\"icon\":\"◆\"}]},\"testimonials\":{\"badge\":\"Client Testimonials\",\"title\":\"What Houston Families Say\",\"subtitle\":\"Read stories from families who have experienced the Guided by Compassion difference.\",\"clientFeedbackLabel\":\"Client Feedback\",\"testimonials\":[{\"feedback\":\"I live out of state, so I naturally worry about my mom. She's getting older and lives alone, but having the caregivers from Guided by Compassion come and check in on her really helps her out. I'm always grateful for them.\",\"name\":\"Hannah S.\",\"location\":\"Houston, TX\"},{\"feedback\":\"After my knee surgery, it was really hard to do the things that were so easy for me before. The support I got from Guided by Compassion gave me the support I needed to heal faster.\",\"name\":\"Stephen H.\",\"location\":\"Houston, TX\"},{\"feedback\":\"The team at Guided by Compassion have treated my father with respect. He tells me about how great the caregivers are over our phone calls. It's nice to know that he's in good hands.\",\"name\":\"Taylor A.\",\"location\":\"Houston, TX\"},{\"feedback\":\"When my mother needed specialized care for her dementia, Guided by Compassion provided exactly what we needed. Their caregivers are trained and compassionate, making such a difficult time more manageable for our family.\",\"name\":\"Maria G.\",\"location\":\"Houston, TX\"},{\"feedback\":\"The respite care services from Guided by Compassion have been a lifesaver. As a full-time caregiver for my husband, having trusted professionals take over for a few hours gives me the break I desperately need.\",\"name\":\"Patricia L.\",\"location\":\"Houston, TX\"},{\"feedback\":\"Guided by Compassion's end-of-life care services provided comfort and dignity during my father's final weeks. Their compassionate approach helped our entire family through an incredibly difficult time.\",\"name\":\"Robert M.\",\"location\":\"Houston, TX\"}],\"carouselControls\":{\"previousAriaLabel\":\"Previous testimonials\",\"nextAriaLabel\":\"Next testimonials\",\"goToSlideAriaLabel\":\"Go to slide\"}},\"parallax\":{\"text\":\"Want to spread the love?\"},\"refer\":{\"badge\":\"Refer With Confidence\",\"title\":\"Share the Gift of\",\"titleHighlight\":\"Professional Home Care Services\",\"description\":\"Know someone in Houston who could benefit from our 13 comprehensive home care services? From personal assistance and companionship to specialized memory care and 24-hour support, your referral helps us extend our compassionate care to more families in need.\",\"reasonsTitle\":\"Why Refer to Guided by Compassion?\",\"reasons\":[{\"title\":\"Certified Home Care Services\",\"description\":\"Our caregivers are thoroughly vetted, certified, and trained in comprehensive home care services to provide exceptional care.\"},{\"title\":\"Compassionate Professional Care\",\"description\":\"We treat each client with dignity, respect, and genuine care, focusing on their unique home care needs.\"},{\"title\":\"Local Houston Service\",\"description\":\"We value your trust and confidence in our services. Ask about our referral appreciation program for Houston families.\"}],\"ctaButton\":\"Refer Someone Today\",\"imageOverlay\":{\"mainText\":\"Making a difference\",\"subText\":\"in Houston families\"}},\"blog\":{\"badge\":\"Latest Articles\",\"title\":\"Care Tips & Insights\",\"subtitle\":\"Stay informed with our latest articles on home care, health tips, and family support strategies.\",\"articles\":[{\"title\":\"Essential Tips for Caring for Seniors at Home\",\"category\":\"Senior Care\",\"date\":\"1/15/2024\",\"readTime\":\"5 min read\",\"excerpt\":\"Learn practical strategies to create a safe and comfortable environment for elderly family members receiving home care.\"},{\"title\":\"Understanding Alzheimer's: A Family Guide\",\"category\":\"Health\",\"date\":\"1/12/2024\",\"readTime\":\"8 min read\",\"excerpt\":\"Comprehensive information about Alzheimer's disease and how families can provide the best support for their loved ones.\"},{\"title\":\"The Benefits of Companion Care for Elderly Adults\",\"category\":\"Companion Care\",\"date\":\"1/10/2024\",\"readTime\":\"6 min read\",\"excerpt\":\"Discover how companion care services can improve quality of life and provide emotional support for seniors.\"},{\"title\":\"Respite Care: Supporting Family Caregivers\",\"category\":\"Respite Care\",\"date\":\"1/8/2024\",\"readTime\":\"4 min read\",\"excerpt\":\"Learn how respite care services can help prevent caregiver burnout and maintain family well-being.\"},{\"title\":\"Creating a Safe Home Environment for Seniors\",\"category\":\"Safety\",\"date\":\"1/5/2024\",\"readTime\":\"7 min read\",\"excerpt\":\"Essential home modifications and safety tips to prevent falls and accidents for elderly residents.\"},{\"title\":\"Nutrition and Meal Planning for Seniors\",\"category\":\"Nutrition\",\"date\":\"1/3/2024\",\"readTime\":\"5 min read\",\"excerpt\":\"Important dietary considerations and meal planning strategies to maintain health and nutrition in older adults.\"}],\"readMoreButton\":\"Read more\",\"viewAllButton\":\"View All Articles\"},\"contact\":{\"badge\":\"Contact Us\",\"title\":\"Get in Touch\",\"subtitle\":\"Ready to learn more about our home care services? Contact Guided by Compassion today for a free consultation.\",\"infoTitle\":\"Contact Information\",\"contactInfo\":[{\"icon\":\"📧\",\"title\":\"Email Us\",\"details\":\"contact@guidedbycompassion.com\",\"subtext\":\"We'll respond within 24 hours\"},{\"icon\":\"📞\",\"title\":\"Call Us\",\"details\":\"713-325-0885\",\"subtext\":\"Mon-Fri: 9AM-5PM, On Call Sundays\"},{\"icon\":\"📍\",\"title\":\"Service Area\",\"details\":\"Houston, Texas and surrounding areas\",\"subtext\":\"Serving the greater Houston area\"}],\"form\":{\"fullNameLabel\":\"Full Name\",\"fullNamePlaceholder\":\"Enter your full name\",\"emailLabel\":\"Email Address\",\"emailPlaceholder\":\"Enter your email\",\"phoneLabel\":\"Phone Number\",\"phonePlaceholder\":\"Enter your phone number\",\"serviceLabel\":\"Service of Interest\",\"servicePlaceholder\":\"Select a service\",\"serviceOptions\":[\"Personal Assistance Services (PAS)\",\"Companionship & Emotional Support\",\"Respite & Family Relief Care\",\"Post-Hospital / Post-Surgery Support\",\"Specialty Service Packages\",\"End-of-Life Care\",\"Free Consultation\"],\"messageLabel\":\"Message\",\"messagePlaceholder\":\"Tell us about your care needs...\",\"submitButton\":\"Send Message\"}},\"newsletter\":{\"badge\":\"Stay Connected\",\"title\":\"Subscribe to Our Newsletter\",\"subtitle\":\"Stay updated with the latest home care tips, health information, and news from Guided by Compassion.\",\"formTitle\":\"Join Our Newsletter\",\"formSubtitle\":\"Get valuable home care tips, health insights, and updates delivered to your inbox.\",\"emailPlaceholder\":\"Enter your email address\",\"subscribeButton\":\"Subscribe\",\"successMessage\":\"✓ Thank you for subscribing! Check your email for confirmation.\",\"privacyText\":\"We respect your privacy. Unsubscribe at any time.\"},\"faq\":{\"badge\":\"FAQ\",\"title\":\"Frequently Asked Questions\",\"subtitle\":\"Find answers to common questions about our home care services and how we can help your family in Houston.\",\"questions\":[{\"question\":\"What home care services does Guided by Compassion provide?\",\"answer\":\"We offer 13 comprehensive home care services grouped into 6 categories: (1) Personal Assistance Services (PAS) - personal care, homemaking, transportation & errands, medication reminders; (2) Companionship & Emotional Support - social engagement, wellness check-ins, optional pet care; (3) Respite & Family Relief Care - hourly, overnight, and 24-hour care options; (4) Post-Hospital / Post-Surgery Support - recovery assistance after hospital discharge or surgical procedures; (5) Specialty Service Packages - memory/cognitive care, bedbound care, preferred caregiver matching; (6) End-of-Life Care - comfort and dignity-focused care. All services are provided by certified, background-checked caregivers in Houston.\"},{\"question\":\"What areas in Houston do you serve?\",\"answer\":\"We proudly serve the Great Houston area and surrounding communities including Harris, Montgomery, and Galveston counties. Our goal is to bring professional home care services directly to your doorstep throughout the greater Houston area.\"},{\"question\":\"Are you licensed and insured in Texas?\",\"answer\":\"Guided by Compassion is fully licensed and insured to provide peace of mind for you and your family. All of our caregivers are trained, thoroughly background-checked, and bonded.\"},{\"question\":\"How do you create personalized care plans?\",\"answer\":\"We start with a comprehensive assessment of your needs, preferences, and health conditions. Our team then develops a customized care plan that addresses specific requirements while maintaining dignity and independence.\"},{\"question\":\"What are your rates and do you accept insurance?\",\"answer\":\"Our rates vary depending on the type and level of care needed. We accept long-term care insurance, private pay (using Visa/Mastercard/Discover), and work with families to explore all payment options to ensure you receive the care you need. Contact us for a free consultation to discuss pricing and payment options.\"},{\"question\":\"What are your business hours?\",\"answer\":\"Our business hours are Monday to Friday (8am to 5pm), and On Call on the Weekends. We offer flexible scheduling to meet your care needs.\"},{\"question\":\"What if I'm not satisfied with the caregiver?\",\"answer\":\"Your satisfaction is our priority. If you're not completely satisfied with your caregiver, we'll work with you to address concerns and, if necessary, provide a replacement caregiver at no additional cost.\"},{\"question\":\"What makes your agency different from other home care providers?\",\"answer\":\"At Guided by Compassion Home Care, we combine professional care with genuine heart, where safety, comfort, and respect come first. Families work directly with our small, dedicated team—no call centers or corporate layers—so every decision is made with compassion and personal attention.\"},{\"question\":\"How do you screen and train your caregivers?\",\"answer\":\"All caregivers undergo thorough background checks, reference verification, and skills assessments before hire. Once onboard, they receive hands-on training focused on safety, communication, and compassionate, client-centered care.\"},{\"question\":\"What happens if my caregiver can't make it to a shift?\",\"answer\":\"Life happens, and if a caregiver is unavailable, our care team will do our best to immediately arrange a qualified replacement and keeps you informed every step of the way. We make sure care continues smoothly so your loved one is never left without support.\"}],\"ctaSection\":{\"title\":\"Still have questions?\",\"description\":\"Our team is here to help. Contact us for a free consultation.\",\"button\":\"Contact Us Today\"}},\"footer\":{\"companyName\":\"Guided by Compassion\",\"companyDescription\":\"Providing reliable care for your peace of mind in Houston and surrounding areas. Offering 13 comprehensive home care services including personal assistance, companionship, respite care, specialized memory care, and 24-hour support. Bringing compassionate caregivers to your doorstep with dignity, respect, and genuine human connection.\",\"badges\":[\"Qualified & Insured\",\"Qualified Caregivers\",\"Caregiver Matching\",\"Personalized Care Plans\"],\"sections\":{\"ourServices\":{\"title\":\"Our Home Care Services\",\"links\":[\"Personal Assistance Services (PAS)\",\"Companionship & Emotional Support\",\"Respite & Family Relief Care\",\"Post-Hospital / Post-Surgery Support\",\"Specialty Service Packages\",\"End-of-Life Care\"],\"ctaButton\":\"Schedule Assessment\"},\"quickLinks\":{\"title\":\"Quick Links\",\"links\":[\"About Us\",\"Our Services\",\"Careers\",\"Blog\",\"Contact\",\"Refer Us\"]},\"locations\":{\"title\":\"Our Locations\",\"links\":[\"Sugar Land\",\"Houston\",\"Friendswood\",\"Alvin\",\"Pearland\",\"Webster\",\"League City\",\"Clear Lake\",\"Deer Park\",\"Pasadena\",\"Seabrook\",\"Dickinson\",\"Santa Fe\",\"Missouri City\",\"Texas City\"]},\"contactInfo\":{\"title\":\"Contact Information\",\"location\":\"Houston, Texas\",\"serviceArea\":\"Houston, Texas and surrounding areas\",\"phone\":\"713-325-0885\",\"email\":\"contact@guidedbycompassion.com\"},\"businessHours\":{\"title\":\"Business Hours\",\"weekdays\":{\"days\":\"Monday - Friday:\",\"hours\":\"8:00 AM – 5:00 PM\"},\"weekends\":{\"days\":\"Saturday & Sunday:\",\"hours\":\"On Call\"},\"emergency\":{\"days\":\"\",\"hours\":\"\"}}},\"newsletter\":{\"title\":\"Stay Connected with Guided by Compassion\",\"description\":\"Get home care tips, updates, and news delivered to your inbox.\",\"emailPlaceholder\":\"Enter your email address\",\"subscribeButton\":\"Subscribe\"},\"copyright\":\"© 2026 Guided by Compassion. All rights reserved.\",\"tagline\":\"Serving the areas of Houston, Texas. Experts in providing compassionate in-home care. Offering 13 comprehensive services: personal care assistance, homemaking, transportation & errands, medication reminders, companionship & emotional support, wellness check-ins, pet assistance, respite & family relief, overnight & 24-hour care, post-hospital/post-surgery support, memory & cognitive care, bedbound care, and preferred caregiver matching.\"}}"));}),
"[project]/copy/contact.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"contactDetails":{"phone":"713-325-0885","phoneFormatted":"713-325-0885","phoneLink":"tel:7133250885","email":"contact@guidedbycompassion.com","emailLink":"mailto:contact@guidedbycompassion.com"},"images":{"hero":{"main":"/assets/p1.jpg"}},"hero":{"badge":"Contact Us","title":"Let's Start Your","titleHighlight":"Home Care Journey","description":"Ready to provide the best home care services for you or your loved one? Contact Guided by Compassion today for a free consultation. We're here to answer your questions and help you find the perfect home care solution in Houston.","stats":[{"number":"98%","label":"Client Satisfaction"},{"number":"Free","label":"Initial Consultation"},{"number":"Same Day","label":"Response Time"}]},"contactInfo":{"title":"Get in Touch","subtitle":"We're here to help you navigate your home care options. Reach out to us through any of these channels.","contactItems":[{"icon":"📞","title":"Call Us","details":"713-325-0885","subtext":"Available during business hours","link":"tel:7133250885"},{"icon":"📧","title":"Email Us","details":"contact@guidedbycompassion.com","subtext":"We respond within 24 hours","link":"mailto:contact@guidedbycompassion.com"},{"icon":"📍","title":"Service Area","details":"Houston, TX & Surrounding Areas","subtext":"Serving Houston and surrounding communities","link":null},{"icon":"🕐","title":"Business Hours","details":"Mon-Fri: 8AM-5PM, Sat & Sun: On Call","subtext":"On call support available on weekends","link":null}],"emergencyNotice":{"title":"Emergency Situations","text":"For immediate home care needs or emergencies, please call 911"}},"contactForm":{"title":"Send Us a Message","subtitle":"Fill out the form below and we'll get back to you as soon as possible.","successMessage":{"title":"Message Sent Successfully!","description":"Thank you for reaching out. We'll contact you within 24 hours."},"fields":{"name":{"label":"Full Name *","placeholder":"Enter your full name"},"email":{"label":"Email Address *","placeholder":"Enter your email"},"phone":{"label":"Phone Number","placeholder":"Enter your phone number"},"urgency":{"label":"Timeline *","placeholder":"Select timeline"},"service":{"label":"Service of Interest","placeholder":"Select a service (optional)"},"message":{"label":"Message *","placeholder":"Tell us about your home care needs, questions, or any specific requirements..."}},"options":{"services":[{"value":"personal-care","label":"Personal Assistance Services (PAS)"},{"value":"companion-care","label":"Companionship & Emotional Support"},{"value":"respite-care","label":"Respite & Family Relief Care"},{"value":"post-hospital-support","label":"Post-Hospital / Post-Surgery Support"},{"value":"specialized-care","label":"Specialty Service Packages"},{"value":"end-of-life-care","label":"End-of-Life Care"},{"value":"consultation","label":"Free Consultation"},{"value":"other","label":"Other"}],"urgency":[{"value":"immediate","label":"Immediate (Within 24 hours)"},{"value":"urgent","label":"Urgent (Within 3 days)"},{"value":"soon","label":"Soon (Within a week)"},{"value":"planning","label":"Planning ahead"}]},"submitButton":"Send Message","submittingButton":"Sending Message...","privacyNote":"By submitting this form, you agree to our privacy policy. We will never share your personal information with third parties."}});}),
"[project]/src/components/Header.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gooeybtn$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gooeybtn.jsx [app-ssr] (ecmascript)");
// import ThemeToggle from './ThemeToggle'
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ContentContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/home.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$contact$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/contact.json (json)");
'use client';
;
;
;
;
;
;
;
;
;
function Header() {
    const { homeData, contactData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContent"])();
    const homeCopy = homeData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"];
    const contactCopy = contactData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$contact$2e$json__$28$json$29$__["default"];
    const [isServicesOpen, setIsServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const services = [
        {
            name: homeCopy.header.servicesDropdown.personalCare,
            href: '/services/personal-care'
        },
        {
            name: homeCopy.header.servicesDropdown.companionCare,
            href: '/services/companion-care'
        },
        {
            name: homeCopy.header.servicesDropdown.respiteCare,
            href: '/services/respite-care'
        },
        {
            name: homeCopy.header.servicesDropdown.postHospitalSupport,
            href: '/services/post-hospital-support'
        },
        {
            name: homeCopy.header.servicesDropdown.endOfLifeCare,
            href: '/services/end-of-life-care'
        },
        {
            name: homeCopy.header.servicesDropdown.specializedCare,
            href: '/services/specialized-care'
        }
    ];
    // Prevent body scroll when mobile menu is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.overflowX = 'hidden';
            document.documentElement.style.overflowX = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.overflowX = 'unset';
            document.documentElement.style.overflowX = 'unset';
        }
        // Cleanup function to reset overflow when component unmounts
        return ()=>{
            document.body.style.overflow = 'unset';
            document.body.style.overflowX = 'unset';
            document.documentElement.style.overflowX = 'unset';
        };
    }, [
        isMobileMenuOpen
    ]);
    // Close mobile menu on window resize if moving to desktop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            if (window.innerWidth > 768 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
                setIsServicesOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, [
        isMobileMenuOpen
    ]);
    const handleMobileMenuToggle = ()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = ()=>{
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
    };
    const handleServiceClick = ()=>{
        setIsServicesOpen(!isServicesOpen);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "top-banner",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "top-banner-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "top-banner-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: contactCopy.contactDetails.phoneLink,
                                className: "top-banner-item",
                                title: "Call us",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "top-banner-icon",
                                        children: "📞"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.jsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "top-banner-text desktop-only",
                                        children: contactCopy.contactDetails.phone
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.jsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "top-banner-number mobile-only",
                                        children: contactCopy.contactDetails.phone
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.jsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: contactCopy.contactDetails.emailLink,
                                className: "top-banner-item",
                                title: "Email us",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "top-banner-icon desktop-only",
                                        children: "📧"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.jsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "top-banner-text desktop-only",
                                        children: contactCopy.contactDetails.email
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.jsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "top-banner-icon-only mobile-only",
                                        children: "📧"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.jsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.jsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header",
                "data-aos": "fade-down",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "header-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "logo",
                                "data-aos": "fade-right",
                                "data-aos-delay": "100",
                                onClick: closeMobileMenu,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: homeCopy.images.logo,
                                    alt: homeCopy.header.logo.alt
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.jsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "nav desktop-nav",
                                "data-aos": "fade-down",
                                "data-aos-delay": "200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "nav-list",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                className: "nav-link",
                                                children: homeCopy.header.navigation.about
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.jsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.jsx",
                                            lineNumber: 107,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "nav-item dropdown",
                                            onMouseEnter: ()=>setIsServicesOpen(true),
                                            onMouseLeave: ()=>setIsServicesOpen(false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/services",
                                                    className: "nav-link dropdown-toggle",
                                                    children: [
                                                        homeCopy.header.navigation.services,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `dropdown-arrow ${isServicesOpen ? 'open' : ''}`,
                                                            children: "▼"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.jsx",
                                                            lineNumber: 115,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Header.jsx",
                                                    lineNumber: 113,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `dropdown-menu ${isServicesOpen ? 'show' : ''}`,
                                                    children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: service.href,
                                                            className: "dropdown-item",
                                                            children: service.name
                                                        }, index, false, {
                                                            fileName: "[project]/src/components/Header.jsx",
                                                            lineNumber: 119,
                                                            columnNumber: 19
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.jsx",
                                                    lineNumber: 117,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.jsx",
                                            lineNumber: 108,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/careers",
                                                className: "nav-link",
                                                children: homeCopy.header.navigation.careers
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.jsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.jsx",
                                            lineNumber: 125,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/blogs",
                                                className: "nav-link",
                                                children: homeCopy.header.navigation.blog
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.jsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.jsx",
                                            lineNumber: 126,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/refer-us",
                                                className: "nav-link",
                                                children: homeCopy.header.navigation.referUs
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.jsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.jsx",
                                            lineNumber: 127,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.jsx",
                                    lineNumber: 106,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 105,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cta-buttons desktop-cta",
                                "data-aos": "fade-left",
                                "data-aos-delay": "300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gooeybtn$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        text: homeCopy.header.ctaButtons.contact,
                                        variant: "black",
                                        extendby: 104,
                                        direction: "left"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.jsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.jsx",
                                    lineNumber: 134,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 132,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "mobile-menu-btn",
                                onClick: handleMobileMenuToggle,
                                "aria-label": homeCopy.header.mobileMenu.toggleAriaLabel,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `hamburger ${isMobileMenuOpen ? 'active' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                            fileName: "[project]/src/components/Header.jsx",
                                            lineNumber: 149,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                            fileName: "[project]/src/components/Header.jsx",
                                            lineNumber: 150,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                            fileName: "[project]/src/components/Header.jsx",
                                            lineNumber: 151,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.jsx",
                                    lineNumber: 148,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 143,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mobile-nav ${isMobileMenuOpen ? 'active' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mobile-nav-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mobile-nav-list",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                className: "mobile-nav-link",
                                                onClick: closeMobileMenu,
                                                children: homeCopy.header.navigation.about
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.jsx",
                                                lineNumber: 161,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.jsx",
                                            lineNumber: 160,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "mobile-dropdown",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "mobile-nav-link dropdown-toggle",
                                                    onClick: handleServiceClick,
                                                    children: [
                                                        homeCopy.header.navigation.services,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `dropdown-arrow ${isServicesOpen ? 'open' : ''}`,
                                                            children: "▼"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.jsx",
                                                            lineNumber: 171,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Header.jsx",
                                                    lineNumber: 166,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `mobile-dropdown-menu ${isServicesOpen ? 'show' : ''}`,
                                                    children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: service.href,
                                                            className: "mobile-dropdown-item",
                                                            onClick: closeMobileMenu,
                                                            children: service.name
                                                        }, index, false, {
                                                            fileName: "[project]/src/components/Header.jsx",
                                                            lineNumber: 175,
                                                            columnNumber: 19
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.jsx",
                                                    lineNumber: 173,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.jsx",
                                            lineNumber: 165,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/careers",
                                                className: "mobile-nav-link",
                                                onClick: closeMobileMenu,
                                                children: homeCopy.header.navigation.careers
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.jsx",
                                                lineNumber: 186,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.jsx",
                                            lineNumber: 185,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/blogs",
                                                className: "mobile-nav-link",
                                                onClick: closeMobileMenu,
                                                children: homeCopy.header.navigation.blog
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.jsx",
                                                lineNumber: 191,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.jsx",
                                            lineNumber: 190,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/refer-us",
                                                className: "mobile-nav-link",
                                                onClick: closeMobileMenu,
                                                children: homeCopy.header.navigation.referUs
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.jsx",
                                                lineNumber: 196,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.jsx",
                                            lineNumber: 195,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.jsx",
                                    lineNumber: 159,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mobile-cta-buttons",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "mobile-cta-btn primary",
                                        onClick: closeMobileMenu,
                                        children: homeCopy.header.ctaButtons.contactUs
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.jsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.jsx",
                                    lineNumber: 203,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.jsx",
                            lineNumber: 158,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 157,
                        columnNumber: 7
                    }, this),
                    isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-menu-overlay",
                        onClick: closeMobileMenu
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.jsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = Header;
}),
"[project]/src/components/Footer.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ContentContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/home.json (json)");
'use client';
;
;
;
;
;
;
function Footer() {
    const { homeData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContent"])();
    const homeCopy = homeData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"];
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleNewsletterSubmit = (e)=>{
        e.preventDefault();
        if (email) {
            console.log('Footer newsletter subscription:', email);
            setEmail('');
        // Add success handling here
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "footer",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "footer-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-section company-info",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "footer-logo",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: homeCopy.images.logo,
                                            alt: homeCopy.footer.companyName,
                                            className: "footer-logo-img"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 30,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: homeCopy.footer.companyName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 31,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 29,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "company-description",
                                    children: homeCopy.footer.companyDescription
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 33,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "company-badges",
                                    children: homeCopy.footer.badges.map((badge, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "badge",
                                            children: badge
                                        }, index, false, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 38,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 36,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.jsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "footer-heading",
                                    children: homeCopy.footer.sections.ourServices.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "footer-links",
                                    children: homeCopy.footer.sections.ourServices.links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/services",
                                                children: link
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 48,
                                                columnNumber: 49
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 48,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.jsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "footer-heading",
                                    children: homeCopy.footer.sections.quickLinks.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 58,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "footer-links",
                                    children: homeCopy.footer.sections.quickLinks.links.map((link, index)=>{
                                        let linkElement;
                                        if (link === "Refer Us") {
                                            linkElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/refer-us",
                                                children: link
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 63,
                                                columnNumber: 51
                                            }, this);
                                        } else if (link === "About Us") {
                                            linkElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                children: link
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 65,
                                                columnNumber: 51
                                            }, this);
                                        } else if (link === "Our Services") {
                                            linkElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/services",
                                                children: link
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 67,
                                                columnNumber: 51
                                            }, this);
                                        } else if (link === "Careers") {
                                            linkElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/careers",
                                                children: link
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 69,
                                                columnNumber: 51
                                            }, this);
                                        } else if (link === "Blog") {
                                            linkElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/blogs",
                                                children: link
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 71,
                                                columnNumber: 51
                                            }, this);
                                        } else if (link === "Contact") {
                                            linkElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                children: link
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 73,
                                                columnNumber: 51
                                            }, this);
                                        } else {
                                            linkElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `#${link.toLowerCase().replace(/\s+/g, '-')}`,
                                                children: link
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 75,
                                                columnNumber: 51
                                            }, this);
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: linkElement
                                        }, index, false, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 77,
                                            columnNumber: 40
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 59,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.jsx",
                            lineNumber: 57,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "footer-heading",
                                    children: homeCopy.footer.sections.locations?.title || "Our Locations"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "footer-links",
                                    children: homeCopy.footer.sections.locations?.links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/locations/texas/${link.toLowerCase().replace(/\s+/g, '-')}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: 'rgba(255, 255, 255, 0.7)',
                                                        fontSize: '14px'
                                                    },
                                                    children: link
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 88,
                                                    columnNumber: 112
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 88,
                                                columnNumber: 37
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 87,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 85,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.jsx",
                            lineNumber: 83,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "footer-heading",
                                    children: homeCopy.footer.sections.contactInfo.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 96,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "contact-info1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Location"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 99,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: homeCopy.footer.sections.contactInfo.location
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 100,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 98,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Service Area"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 103,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: homeCopy.footer.sections.contactInfo.serviceArea
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 104,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 102,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 107,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: homeCopy.footer.sections.contactInfo.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 106,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 111,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: homeCopy.footer.sections.contactInfo.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 112,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 110,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 97,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "business-hours",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "footer-heading",
                                            children: homeCopy.footer.sections.businessHours.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 117,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hours-list",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hours-item",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hours-icon",
                                                            children: "🕘"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.jsx",
                                                            lineNumber: 120,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: homeCopy.footer.sections.businessHours.weekdays.days
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.jsx",
                                                                    lineNumber: 122,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: homeCopy.footer.sections.businessHours.weekdays.hours
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.jsx",
                                                                    lineNumber: 123,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Footer.jsx",
                                                            lineNumber: 121,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 119,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hours-item",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hours-icon",
                                                            children: "🚨"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.jsx",
                                                            lineNumber: 128,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: homeCopy.footer.sections.businessHours.weekends.days
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.jsx",
                                                                    lineNumber: 130,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: homeCopy.footer.sections.businessHours.weekends.hours
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.jsx",
                                                                    lineNumber: 131,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Footer.jsx",
                                                            lineNumber: 129,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 126,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 118,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 116,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.jsx",
                            lineNumber: 95,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.jsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-newsletter",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "newsletter-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: homeCopy.footer.newsletter.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 149,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: homeCopy.footer.newsletter.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 150,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "footer-newsletter-form",
                                onSubmit: handleNewsletterSubmit,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        placeholder: homeCopy.footer.newsletter.emailPlaceholder,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 152,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        children: homeCopy.footer.newsletter.subscribeButton
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 159,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 151,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.jsx",
                        lineNumber: 148,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.jsx",
                    lineNumber: 147,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-bottom",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "footer-bottom-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "copyright",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: homeCopy.footer.copyright
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 168,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 167,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-tagline",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: homeCopy.footer.tagline
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 171,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 170,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.jsx",
                        lineNumber: 166,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.jsx",
                    lineNumber: 165,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.jsx",
            lineNumber: 25,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.jsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/src/components/SplitText.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"]);
const SplitText = ({ text, className = "", delay = 100, duration = 0.8, ease = "power3.out", from = {
    opacity: 0,
    y: 50,
    rotateX: -90
}, to = {
    opacity: 1,
    y: 0,
    rotateX: 0
}, threshold = 0.1, tag = "h1", trigger = false })=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [fontsLoaded, setFontsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (document.fonts.status === "loaded") {
            setFontsLoaded(true);
        } else {
            document.fonts.ready.then(()=>{
                setFontsLoaded(true);
            });
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        if (!ref.current || !text || !fontsLoaded) return;
        const el = ref.current;
        // Split text into characters
        const chars = text.split('').map((char, index)=>{
            if (char === ' ') {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "split-char space",
                    children: " "
                }, index, false, {
                    fileName: "[project]/src/components/SplitText.jsx",
                    lineNumber: 42,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0));
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "split-char",
                style: {
                    display: 'inline-block'
                },
                children: char
            }, index, false, {
                fileName: "[project]/src/components/SplitText.jsx",
                lineNumber: 45,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        });
        // Update the element with split characters
        el.innerHTML = '';
        chars.forEach((char)=>{
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = char.props.children === '\u00A0' ? '&nbsp;' : char.props.children;
            const spanEl = document.createElement('span');
            spanEl.className = 'split-char';
            spanEl.style.display = 'inline-block';
            spanEl.innerHTML = tempDiv.innerHTML;
            el.appendChild(spanEl);
        });
        const splitChars = el.querySelectorAll('.split-char');
        // Set initial state
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(splitChars, from);
        // Create animation timeline without ScrollTrigger if trigger prop is passed
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
            paused: true
        });
        tl.to(splitChars, {
            ...to,
            duration,
            ease,
            stagger: delay / 1000
        });
        // Store timeline reference for external control
        el._gsapTimeline = tl;
        return ()=>{
            if (el._gsapTimeline) {
                el._gsapTimeline.kill();
            }
        };
    }, {
        dependencies: [
            text,
            delay,
            duration,
            ease,
            JSON.stringify(from),
            JSON.stringify(to),
            threshold,
            fontsLoaded
        ],
        scope: ref
    });
    // Effect to handle external trigger
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ref.current || !ref.current._gsapTimeline) return;
        if (trigger) {
            ref.current._gsapTimeline.play();
        } else {
            ref.current._gsapTimeline.reverse();
        }
    }, [
        trigger
    ]);
    const style = {
        overflow: "hidden",
        display: "inline-block",
        whiteSpace: "normal",
        wordWrap: "break-word",
        willChange: "transform, opacity",
        perspective: "1000px"
    };
    const classes = `split-parent ${className}`;
    switch(tag){
        case "h1":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                ref: ref,
                style: style,
                className: classes
            }, void 0, false, {
                fileName: "[project]/src/components/SplitText.jsx",
                lineNumber: 117,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case "h2":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                ref: ref,
                style: style,
                className: classes
            }, void 0, false, {
                fileName: "[project]/src/components/SplitText.jsx",
                lineNumber: 119,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case "h3":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                ref: ref,
                style: style,
                className: classes
            }, void 0, false, {
                fileName: "[project]/src/components/SplitText.jsx",
                lineNumber: 121,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                ref: ref,
                style: style,
                className: classes
            }, void 0, false, {
                fileName: "[project]/src/components/SplitText.jsx",
                lineNumber: 123,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
    }
};
const __TURBOPACK__default__export__ = SplitText;
}),
"[project]/src/components/Parallax.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplitText$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SplitText.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ContentContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/home.json (json)");
'use client';
;
;
;
;
;
;
function Parallax() {
    const { homeData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContent"])();
    const homeCopy = homeData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"];
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const spacerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            setIsVisible(entry.isIntersecting);
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50% 0px'
        });
        if (spacerRef.current) {
            observer.observe(spacerRef.current);
        }
        return ()=>{
            if (spacerRef.current) {
                observer.unobserve(spacerRef.current);
            }
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: spacerRef,
                className: "parallax-spacer"
            }, void 0, false, {
                fileName: "[project]/src/components/Parallax.jsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `parallax-section ${isVisible ? 'visible' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "parallax-content",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplitText$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        text: homeCopy.parallax.text,
                        className: "parallax-text",
                        tag: "h1",
                        delay: 80,
                        duration: 1.2,
                        from: {
                            opacity: 0,
                            y: 60,
                            rotateX: -45,
                            scale: 0.8
                        },
                        to: {
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            scale: 1
                        },
                        trigger: isVisible
                    }, void 0, false, {
                        fileName: "[project]/src/components/Parallax.jsx",
                        lineNumber: 41,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Parallax.jsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Parallax.jsx",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = Parallax;
}),
"[project]/src/views/City.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Parallax$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Parallax.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ContentContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$contact$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/contact.json (json)");
'use client';
;
;
;
;
;
;
;
;
;
;
// ─── City Data ────────────────────────────────────────────────────────────────
const cityDisplayNames = {
    'sugar-land': 'Sugar Land',
    'houston': 'Houston',
    'friendswood': 'Friendswood',
    'alvin': 'Alvin',
    'pearland': 'Pearland',
    'webster': 'Webster',
    'league-city': 'League City',
    'clear-lake': 'Clear Lake',
    'deer-park': 'Deer Park',
    'pasadena': 'Pasadena',
    'seabrook': 'Seabrook',
    'dickinson': 'Dickinson',
    'santa-fe': 'Santa Fe',
    'missouri-city': 'Missouri City',
    'texas-city': 'Texas City'
};
const cityCoordinates = {
    'sugar-land': {
        lat: 29.6197,
        lng: -95.6350
    },
    'houston': {
        lat: 29.7604,
        lng: -95.3698
    },
    'friendswood': {
        lat: 29.5294,
        lng: -95.2010
    },
    'alvin': {
        lat: 29.4238,
        lng: -95.2441
    },
    'pearland': {
        lat: 29.5636,
        lng: -95.2860
    },
    'webster': {
        lat: 29.5377,
        lng: -95.1183
    },
    'league-city': {
        lat: 29.5075,
        lng: -95.0949
    },
    'clear-lake': {
        lat: 29.5636,
        lng: -95.1183
    },
    'deer-park': {
        lat: 29.7052,
        lng: -95.1238
    },
    'pasadena': {
        lat: 29.6911,
        lng: -95.2091
    },
    'seabrook': {
        lat: 29.5639,
        lng: -95.0255
    },
    'dickinson': {
        lat: 29.4608,
        lng: -95.0513
    },
    'santa-fe': {
        lat: 29.3780,
        lng: -95.1058
    },
    'missouri-city': {
        lat: 29.6186,
        lng: -95.5377
    },
    'texas-city': {
        lat: 29.3838,
        lng: -94.9027
    }
};
const allCities = [
    {
        slug: 'houston',
        name: 'Houston'
    },
    {
        slug: 'sugar-land',
        name: 'Sugar Land'
    },
    {
        slug: 'pearland',
        name: 'Pearland'
    },
    {
        slug: 'league-city',
        name: 'League City'
    },
    {
        slug: 'friendswood',
        name: 'Friendswood'
    },
    {
        slug: 'clear-lake',
        name: 'Clear Lake'
    },
    {
        slug: 'deer-park',
        name: 'Deer Park'
    },
    {
        slug: 'pasadena',
        name: 'Pasadena'
    },
    {
        slug: 'webster',
        name: 'Webster'
    },
    {
        slug: 'seabrook',
        name: 'Seabrook'
    },
    {
        slug: 'dickinson',
        name: 'Dickinson'
    },
    {
        slug: 'alvin',
        name: 'Alvin'
    },
    {
        slug: 'missouri-city',
        name: 'Missouri City'
    },
    {
        slug: 'texas-city',
        name: 'Texas City'
    },
    {
        slug: 'santa-fe',
        name: 'Santa Fe'
    }
];
const services = [
    {
        slug: 'personal-care',
        title: 'Personal Care',
        description: 'Assistance with daily living activities including bathing, dressing, grooming, and medication reminders.',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/src/views/City.jsx",
                    lineNumber: 76,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/src/views/City.jsx",
                    lineNumber: 77,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/City.jsx",
            lineNumber: 75,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        slug: 'companion-care',
        title: 'Companion Care',
        description: 'Meaningful companionship, conversation, and social engagement to reduce loneliness and promote emotional wellness.',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/src/views/City.jsx",
                    lineNumber: 87,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/src/views/City.jsx",
                    lineNumber: 88,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M23 21v-2a4 4 0 0 0-3-3.87"
                }, void 0, false, {
                    fileName: "[project]/src/views/City.jsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 3.13a4 4 0 0 1 0 7.75"
                }, void 0, false, {
                    fileName: "[project]/src/views/City.jsx",
                    lineNumber: 90,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/City.jsx",
            lineNumber: 86,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        slug: 'respite-care',
        title: 'Respite Care',
        description: 'Temporary care services that give family caregivers a well-deserved break while ensuring continuity of quality care.',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            }, void 0, false, {
                fileName: "[project]/src/views/City.jsx",
                lineNumber: 100,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/views/City.jsx",
            lineNumber: 99,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        slug: 'specialized-care',
        title: 'Specialized Care',
        description: "Expert care for individuals with Alzheimer's, dementia, Parkinson's disease, and other complex chronic conditions.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 12h-4l-3 9L9 3l-3 9H2"
            }, void 0, false, {
                fileName: "[project]/src/views/City.jsx",
                lineNumber: 110,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/views/City.jsx",
            lineNumber: 109,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        slug: 'end-of-life-care',
        title: 'End-of-Life Care',
        description: 'Compassionate hospice and palliative support for individuals and families during life\'s final journey.',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/src/views/City.jsx",
                    lineNumber: 120,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "12 6 12 12 16 14"
                }, void 0, false, {
                    fileName: "[project]/src/views/City.jsx",
                    lineNumber: 121,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/City.jsx",
            lineNumber: 119,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        slug: 'in-facility-care',
        title: 'In-Facility Care',
        description: 'Supplemental support services for residents in assisted living facilities and nursing homes.',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                }, void 0, false, {
                    fileName: "[project]/src/views/City.jsx",
                    lineNumber: 131,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "9 22 9 12 15 12 15 22"
                }, void 0, false, {
                    fileName: "[project]/src/views/City.jsx",
                    lineNumber: 132,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/City.jsx",
            lineNumber: 130,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const faqs = (city)=>[
        {
            q: `What home care services does Guided by Compassion offer in ${city}?`,
            a: `We offer a full range of home care services in ${city}, TX including personal care, companion care, respite care, specialized care for Alzheimer's and dementia, end-of-life care, and in-facility care. Each plan is customized to your loved one's unique needs.`
        },
        {
            q: 'Is Guided by Compassion licensed and insured in Texas?',
            a: 'Yes. We are a fully licensed and insured home care agency operating throughout Texas. Every caregiver is rigorously background-checked, trained, and certified before they begin providing care.'
        },
        {
            q: `How quickly can home care services begin in ${city}?`,
            a: `In most cases we can arrange care within 24–48 hours of your initial consultation. Contact us today and we'll work with your schedule to start as soon as possible.`
        },
        {
            q: 'Are your caregivers available 24/7?',
            a: 'Yes. We provide around-the-clock home care and are available 24 hours a day, 7 days a week — including holidays — to ensure your loved one always has the support they need.'
        },
        {
            q: 'Do you accept insurance or Medicaid for home care services?',
            a: 'We work with private pay, long-term care insurance, and Medicaid waiver programs. Contact our team and we will help you identify the right payment arrangement for your situation.'
        },
        {
            q: `How do I get started with home care in ${city}?`,
            a: `Call us at 346-646-4110 or schedule a free consultation online. Our care coordinator will assess your needs and design a personalized care plan tailored to your loved one in ${city}.`
        }
    ];
// ─── Component ────────────────────────────────────────────────────────────────
function City({ cityName: propCityName }) {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const cityName = propCityName || params?.cityName;
    const { contactData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContent"])();
    const contactCopy = contactData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$contact$2e$json__$28$json$29$__["default"];
    const city = cityDisplayNames[cityName] ?? cityName?.replace(/-/g, ' ').replace(/\b\w/g, (l)=>l.toUpperCase()) ?? 'Your City';
    const fullCity = `${city}, TX`;
    const coords = cityCoordinates[cityName] ?? cityCoordinates['houston'];
    const mapUrl = `https://maps.google.com/maps?q=${coords.lat},${coords.lng}&hl=en&z=13&output=embed`;
    const cityFaqs = faqs(city);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.scrollTo(0, 0);
    }, [
        cityName
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "city-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/views/City.jsx",
                lineNumber: 188,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "city-breadcrumb",
                "aria-label": "Breadcrumb",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "city-breadcrumb-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "breadcrumb-list",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/City.jsx",
                                    lineNumber: 194,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 194,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                "aria-hidden": "true",
                                className: "breadcrumb-sep",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 195,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/home-care/texas",
                                    children: "Home Care Texas"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/City.jsx",
                                    lineNumber: 196,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 196,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                "aria-hidden": "true",
                                className: "breadcrumb-sep",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 197,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                "aria-current": "page",
                                children: fullCity
                            }, void 0, false, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 198,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/City.jsx",
                        lineNumber: 193,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/City.jsx",
                    lineNumber: 192,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/City.jsx",
                lineNumber: 191,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "city-hero",
                "aria-labelledby": "city-hero-heading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "city-hero-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "city-hero-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "city-hero-text",
                                "data-aos": "fade-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "city-badge",
                                        children: "Home Care Services"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/City.jsx",
                                        lineNumber: 208,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        id: "city-hero-heading",
                                        className: "city-hero-title",
                                        children: [
                                            "Compassionate Home Care",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/views/City.jsx",
                                                lineNumber: 210,
                                                columnNumber: 56
                                            }, this),
                                            "in ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "highlight1",
                                                children: fullCity
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/City.jsx",
                                                lineNumber: 211,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/City.jsx",
                                        lineNumber: 209,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "city-hero-description",
                                        children: [
                                            "Guided by Compassion provides professional, personalized home care services to seniors and individuals with disabilities throughout ",
                                            fullCity,
                                            ". Our licensed, background-checked caregivers deliver dignified, compassionate care — right in the comfort of your own home."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/City.jsx",
                                        lineNumber: 213,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "city-cta-buttons",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/scheduling",
                                                className: "cta-btn primary",
                                                children: "Schedule a Free Consultation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/City.jsx",
                                                lineNumber: 219,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: "cta-btn secondary-outline",
                                                children: "Contact Us"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/City.jsx",
                                                lineNumber: 222,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/City.jsx",
                                        lineNumber: 218,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "city-hero-contact",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "city-hero-contact-label",
                                                children: "Available 24/7 — Call Now:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/City.jsx",
                                                lineNumber: 227,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:346-646-4110",
                                                className: "city-phone-link",
                                                children: "(346) 646-4110"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/City.jsx",
                                                lineNumber: 228,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/City.jsx",
                                        lineNumber: 226,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "city-trust-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "city-trust-badge",
                                                children: "✓ Licensed & Insured"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/City.jsx",
                                                lineNumber: 233,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "city-trust-badge",
                                                children: "✓ Background-Checked"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/City.jsx",
                                                lineNumber: 234,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "city-trust-badge",
                                                children: "✓ 24/7 Support"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/City.jsx",
                                                lineNumber: 235,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/City.jsx",
                                        lineNumber: 232,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 207,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "city-hero-image",
                                "data-aos": "fade-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://res.cloudinary.com/dvauarkh6/image/upload/v1747917952/pexels-vlada-karpovich-5790702_1_jsorsb.jpg",
                                    alt: `Professional home caregiver providing care in ${fullCity}`,
                                    className: "hero-image",
                                    width: "600",
                                    height: "500"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/City.jsx",
                                    lineNumber: 239,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 238,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/City.jsx",
                        lineNumber: 206,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/City.jsx",
                    lineNumber: 205,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/City.jsx",
                lineNumber: 204,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "city-services-section",
                "aria-labelledby": "city-services-heading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "city-services-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "city-services-header",
                            "data-aos": "fade-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "city-services-heading",
                                    className: "city-services-title",
                                    children: [
                                        "Home Care Services in ",
                                        city
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/City.jsx",
                                    lineNumber: 255,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "city-services-subtitle",
                                    children: [
                                        "We offer a comprehensive range of in-home care services tailored to the unique needs of each individual and family in ",
                                        fullCity,
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/City.jsx",
                                    lineNumber: 258,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/City.jsx",
                            lineNumber: 254,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "city-services-grid",
                            children: services.map((svc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "city-service-card",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": `${(i + 1) * 80}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "service-icon",
                                            "aria-hidden": "true",
                                            children: svc.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/City.jsx",
                                            lineNumber: 271,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: svc.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/City.jsx",
                                            lineNumber: 272,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: svc.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/City.jsx",
                                            lineNumber: 273,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/services/${svc.slug}`,
                                            className: "service-link",
                                            children: [
                                                "Learn More ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/City.jsx",
                                                    lineNumber: 275,
                                                    columnNumber: 48
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/City.jsx",
                                            lineNumber: 274,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, svc.slug, true, {
                                    fileName: "[project]/src/views/City.jsx",
                                    lineNumber: 265,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/views/City.jsx",
                            lineNumber: 263,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/City.jsx",
                    lineNumber: 253,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/City.jsx",
                lineNumber: 252,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "city-why-section",
                "aria-labelledby": "city-why-heading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "city-why-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "city-why-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "city-why-text",
                                "data-aos": "fade-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "city-why-heading",
                                        className: "city-why-title",
                                        children: [
                                            "Why Families in ",
                                            city,
                                            " Choose Guided by Compassion"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/City.jsx",
                                        lineNumber: 288,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "city-why-points",
                                        children: [
                                            {
                                                title: 'Local Expertise',
                                                body: `We understand the unique needs of families in ${fullCity} and the Greater Houston area. Our team has deep roots in the community.`
                                            },
                                            {
                                                title: 'Thoroughly Vetted Caregivers',
                                                body: 'Every caregiver undergoes comprehensive background checks, skills training, and certification before being placed with a client.'
                                            },
                                            {
                                                title: 'Personalized Care Plans',
                                                body: 'We never apply a one-size-fits-all approach. Every care plan is designed around the specific needs, preferences, and schedule of your loved one.'
                                            },
                                            {
                                                title: '24/7 Availability',
                                                body: 'Our team is available around the clock — days, nights, and weekends — so support is always just a phone call away.'
                                            },
                                            {
                                                title: 'Family-Centered Approach',
                                                body: 'We partner closely with families to provide transparent communication, consistent updates, and true peace of mind.'
                                            }
                                        ].map((pt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "why-point",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "point-icon",
                                                        "aria-hidden": "true",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/City.jsx",
                                                        lineNumber: 315,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "point-content",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                children: pt.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/City.jsx",
                                                                lineNumber: 317,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: pt.body
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/City.jsx",
                                                                lineNumber: 318,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/City.jsx",
                                                        lineNumber: 316,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, pt.title, true, {
                                                fileName: "[project]/src/views/City.jsx",
                                                lineNumber: 314,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/City.jsx",
                                        lineNumber: 291,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 287,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "city-why-image",
                                "data-aos": "fade-left",
                                "data-aos-delay": "150",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "city-stats",
                                    "aria-label": "Key statistics",
                                    children: [
                                        {
                                            number: '100+',
                                            label: 'Families Served'
                                        },
                                        {
                                            number: '24/7',
                                            label: 'Available Support'
                                        },
                                        {
                                            number: '5+',
                                            label: 'Years of Experience'
                                        },
                                        {
                                            number: '100%',
                                            label: 'Background Checked'
                                        }
                                    ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stat-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "stat-number",
                                                    children: stat.number
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/City.jsx",
                                                    lineNumber: 333,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "stat-label",
                                                    children: stat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/City.jsx",
                                                    lineNumber: 334,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, stat.label, true, {
                                            fileName: "[project]/src/views/City.jsx",
                                            lineNumber: 332,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/City.jsx",
                                    lineNumber: 325,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 324,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/City.jsx",
                        lineNumber: 286,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/City.jsx",
                    lineNumber: 285,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/City.jsx",
                lineNumber: 284,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Parallax$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/views/City.jsx",
                lineNumber: 344,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "city-faq-section",
                "aria-labelledby": "city-faq-heading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "city-faq-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "city-faq-header",
                            "data-aos": "fade-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "city-faq-heading",
                                    className: "city-faq-title",
                                    children: [
                                        "Frequently Asked Questions — Home Care in ",
                                        city
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/City.jsx",
                                    lineNumber: 350,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "city-faq-subtitle",
                                    children: [
                                        "Have questions about our home care services in ",
                                        fullCity,
                                        "? We have answers."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/City.jsx",
                                    lineNumber: 353,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/City.jsx",
                            lineNumber: 349,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "city-faq-list",
                            children: cityFaqs.map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    className: "city-faq-item",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": `${i * 60}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "city-faq-question",
                                            children: faq.q
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/City.jsx",
                                            lineNumber: 360,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "city-faq-answer",
                                            children: faq.a
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/City.jsx",
                                            lineNumber: 361,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/views/City.jsx",
                                    lineNumber: 359,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/views/City.jsx",
                            lineNumber: 357,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/City.jsx",
                    lineNumber: 348,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/City.jsx",
                lineNumber: 347,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "city-area-section",
                "aria-labelledby": "city-area-heading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "city-area-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "city-area-content",
                        "data-aos": "fade-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "city-area-heading",
                                className: "city-area-title",
                                children: "Home Care Services Across Greater Houston"
                            }, void 0, false, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 372,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "city-area-description",
                                children: [
                                    "In addition to ",
                                    fullCity,
                                    ", Guided by Compassion proudly serves families throughout the Greater Houston metropolitan area. Click a city below to learn about our services near you."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 375,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "city-area-list",
                                "aria-label": "Service area cities",
                                children: allCities.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: c.slug === cityName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "area-item area-item--current",
                                            "aria-current": "location",
                                            children: [
                                                "✓ ",
                                                c.name,
                                                ", TX"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/City.jsx",
                                            lineNumber: 383,
                                            columnNumber: 41
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/home-care/texas/${c.slug}`,
                                            className: "area-item area-item--link",
                                            children: [
                                                c.name,
                                                ", TX"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/City.jsx",
                                            lineNumber: 387,
                                            columnNumber: 41
                                        }, this)
                                    }, c.slug, false, {
                                        fileName: "[project]/src/views/City.jsx",
                                        lineNumber: 381,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 379,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/City.jsx",
                        lineNumber: 371,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/City.jsx",
                    lineNumber: 370,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/City.jsx",
                lineNumber: 369,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "city-map-section",
                "aria-labelledby": "city-map-heading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "city-map-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "city-map-content",
                        "data-aos": "fade-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "city-map-heading",
                                className: "city-map-title",
                                children: [
                                    "Our Service Area in ",
                                    city
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 402,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "city-map-description",
                                children: [
                                    "We provide home care services throughout ",
                                    fullCity,
                                    " and the surrounding Greater Houston area."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 403,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "city-map-wrapper",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                    src: mapUrl,
                                    width: "100%",
                                    height: "450",
                                    style: {
                                        border: 0
                                    },
                                    allowFullScreen: true,
                                    loading: "lazy",
                                    referrerPolicy: "no-referrer-when-downgrade",
                                    title: `Guided by Compassion home care service area in ${fullCity}`,
                                    className: "city-map-iframe"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/City.jsx",
                                    lineNumber: 407,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 406,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "city-map-actions",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `https://www.google.com/maps/search/?api=1&query=Guided+by+Compassion+${encodeURIComponent(fullCity)}`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "map-link-btn",
                                    children: [
                                        "View on Google Maps",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            "aria-hidden": "true",
                                            style: {
                                                marginLeft: '8px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/City.jsx",
                                                    lineNumber: 428,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "15 3 21 3 21 9"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/City.jsx",
                                                    lineNumber: 429,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "10",
                                                    y1: "14",
                                                    x2: "21",
                                                    y2: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/City.jsx",
                                                    lineNumber: 430,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/City.jsx",
                                            lineNumber: 427,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/City.jsx",
                                    lineNumber: 420,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 419,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/City.jsx",
                        lineNumber: 401,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/City.jsx",
                    lineNumber: 400,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/City.jsx",
                lineNumber: 399,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "city-cta-section",
                "aria-labelledby": "city-cta-heading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "city-cta-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "city-cta-content",
                        "data-aos": "fade-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "city-cta-heading",
                                className: "cta-title",
                                children: [
                                    "Get Started with Home Care in ",
                                    city,
                                    " Today"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 442,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "cta-description",
                                children: [
                                    "Contact Guided by Compassion to learn how we can support your family in ",
                                    fullCity,
                                    ". We'll create a personalized care plan designed around your loved one's needs, schedule, and goals."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 445,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cta-buttons",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/scheduling",
                                        className: "cta-btn primary",
                                        children: "Schedule a Free Consultation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/City.jsx",
                                        lineNumber: 450,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "cta-btn secondary",
                                        children: "Contact Our Team"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/City.jsx",
                                        lineNumber: 453,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 449,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cta-contact-info",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Call",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: contactCopy?.contactDetails?.phoneLink ?? 'tel:346-646-4110',
                                            children: contactCopy?.contactDetails?.phone ?? '346-646-4110'
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/City.jsx",
                                            lineNumber: 460,
                                            columnNumber: 33
                                        }, this),
                                        ' ',
                                        "or email",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: contactCopy?.contactDetails?.emailLink ?? 'mailto:contact@guidedbycompassion.com',
                                            children: contactCopy?.contactDetails?.email ?? 'contact@guidedbycompassion.com'
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/City.jsx",
                                            lineNumber: 464,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/City.jsx",
                                    lineNumber: 458,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/City.jsx",
                                lineNumber: 457,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/City.jsx",
                        lineNumber: 441,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/City.jsx",
                    lineNumber: 440,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/City.jsx",
                lineNumber: 439,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/views/City.jsx",
                lineNumber: 473,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/City.jsx",
        lineNumber: 187,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = City;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a3f75e20._.js.map