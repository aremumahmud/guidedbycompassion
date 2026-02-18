module.exports = [
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
"[project]/src/components/FAQ.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
function FAQ() {
    const { homeData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContent"])();
    const homeCopy = homeData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"];
    const [openItem, setOpenItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const faqs = homeCopy.faq.questions.map((faq, index)=>({
            id: index + 1,
            question: faq.question,
            answer: faq.answer
        }));
    const toggleItem = (id)=>{
        setOpenItem(openItem === id ? null : id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "faq-section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "faq-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "faq-header",
                    "data-aos": "fade-up",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "faq-badge",
                            children: homeCopy.faq.badge
                        }, void 0, false, {
                            fileName: "[project]/src/components/FAQ.jsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "faq-title",
                            children: homeCopy.faq.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/FAQ.jsx",
                            lineNumber: 29,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "faq-subtitle",
                            children: homeCopy.faq.subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/components/FAQ.jsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FAQ.jsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "faq-list",
                    "data-aos": "fade-up",
                    "data-aos-delay": "200",
                    children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `faq-item ${openItem === faq.id ? 'open' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "faq-question",
                                    onClick: ()=>toggleItem(faq.id),
                                    "aria-expanded": openItem === faq.id,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "question-text",
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FAQ.jsx",
                                            lineNumber: 48,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "faq-icon",
                                            children: openItem === faq.id ? '−' : '+'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FAQ.jsx",
                                            lineNumber: 49,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FAQ.jsx",
                                    lineNumber: 43,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "faq-answer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "answer-content",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: faq.answer
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FAQ.jsx",
                                            lineNumber: 55,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FAQ.jsx",
                                        lineNumber: 54,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FAQ.jsx",
                                    lineNumber: 53,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, faq.id, true, {
                            fileName: "[project]/src/components/FAQ.jsx",
                            lineNumber: 37,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/FAQ.jsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "faq-footer",
                    "data-aos": "fade-up",
                    "data-aos-delay": "800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "faq-cta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: homeCopy.faq.ctaSection.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/FAQ.jsx",
                                lineNumber: 64,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: homeCopy.faq.ctaSection.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/FAQ.jsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "faq-contact-btn",
                                children: homeCopy.faq.ctaSection.button
                            }, void 0, false, {
                                fileName: "[project]/src/components/FAQ.jsx",
                                lineNumber: 66,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FAQ.jsx",
                        lineNumber: 63,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/FAQ.jsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FAQ.jsx",
            lineNumber: 26,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/FAQ.jsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = FAQ;
}),
"[project]/src/services/emailService.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Email service - calls backend API endpoint to keep API keys secure
const API_ENDPOINT = '/api/send-email';
class EmailService {
    constructor(){
        this.isConfigured = true; // API endpoint handles configuration
        console.log('EmailService: Using secure backend API endpoint');
    }
    async sendEmail(emailType, formData) {
        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    emailType,
                    formData
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Email API Error:', errorData);
                throw new Error(errorData.error || `Failed to send email: ${response.status}`);
            }
            const result = await response.json();
            console.log('Email sent successfully:', result);
            return result;
        } catch (error) {
            console.error('Email sending error:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }
    // Contact form email
    async sendContactFormEmail(formData) {
        return await this.sendEmail('contact', formData);
    }
    // Contact form user confirmation email
    async sendContactConfirmationEmail(formData) {
        return await this.sendEmail('contact-confirmation', formData);
    }
    // Consultation/Scheduling form email
    async sendConsultationFormEmail(formData) {
        return await this.sendEmail('consultation', formData);
    }
    // Consultation form user confirmation email
    async sendConsultationConfirmationEmail(formData) {
        return await this.sendEmail('consultation-confirmation', formData);
    }
    // Referral form email
    async sendReferralFormEmail(formData) {
        return await this.sendEmail('referral', formData);
    }
    // Referral form user confirmation email
    async sendReferralConfirmationEmail(formData) {
        return await this.sendEmail('referral-confirmation', formData);
    }
    // Employment Application form email
    async sendApplicationEmail(formData) {
        return await this.sendEmail('application', formData);
    }
    // These methods are kept for backward compatibility but are no longer used
    //     generateContactFormHTML(formData) {
    //         return `
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>New Contact Form Submission</title>
    //     <!--[if mso]>
    //     <noscript>
    //         <xml>
    //             <o:OfficeDocumentSettings>
    //                 <o:PixelsPerInch>96</o:PixelsPerInch>
    //             </o:OfficeDocumentSettings>
    //         </xml>
    //     </noscript>
    //     <![endif]-->
    // </head>
    // <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: Arial, sans-serif;">
    //     <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    //         <tr>
    //             <td align="center" style="padding: 20px;">
    //                 <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    //                     <!-- Header -->
    //                     <tr>
    //                         <td style="background-color: #1a1a1a; color: #ffffff; padding: 30px 20px; text-align: center;">
    //                             <h1 style="margin: 0 0 10px 0; font-size: 28px; color: #ffffff; font-family: Arial, sans-serif;">🏥 New Contact Form Submission</h1>
    //                             <p style="margin: 0; opacity: 0.9; font-size: 16px; color: #ffffff; font-family: Arial, sans-serif;">${Admin_Name} - Contact Request</p>
    //                         </td>
    //                     </tr>
    //                     <!-- Content -->
    //                     <tr>
    //                         <td style="background-color: #f8f9fa; padding: 30px;">
    //                             <!-- Urgency Badge -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 25px;">
    //                                 <tr>
    //                                     <td align="center">
    //                                         <div style="display: inline-block; padding: 8px 20px; border-radius: 25px; font-weight: bold; margin-bottom: 25px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; background-color: ${this.getUrgencyColor(formData.urgency)}; color: #ffffff;">⏰ ${this.formatUrgency(formData.urgency)}</div>
    //                                     </td>
    //                                 </tr>
    //                             </table>
    //                             <!-- Full Name Field -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e9ecef;">
    //                                 <tr>
    //                                     <td style="font-weight: bold; color: #ffffff; background-color: #1a1a1a; padding: 12px 15px; margin: 0; font-size: 14px; font-family: Arial, sans-serif;">👤 Full Name</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="padding: 15px; margin: 0; background-color: #ffffff; font-size: 16px; line-height: 1.5; font-family: Arial, sans-serif;">${formData.name || 'Not provided'}</td>
    //                                 </tr>
    //                             </table>
    //                             <!-- Email Field -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e9ecef;">
    //                                 <tr>
    //                                     <td style="font-weight: bold; color: #ffffff; background-color: #1a1a1a; padding: 12px 15px; margin: 0; font-size: 14px; font-family: Arial, sans-serif;">📧 Email Address</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="padding: 15px; margin: 0; background-color: #ffffff; font-size: 16px; line-height: 1.5; font-family: Arial, sans-serif;">
    //                                         <a href="mailto:${formData.email}" style="color: #1a1a1a; text-decoration: none; font-weight: 500;">${formData.email || 'Not provided'}</a>
    //                                     </td>
    //                                 </tr>
    //                             </table>
    //                             <!-- Phone Field -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e9ecef;">
    //                                 <tr>
    //                                     <td style="font-weight: bold; color: #ffffff; background-color: #1a1a1a; padding: 12px 15px; margin: 0; font-size: 14px; font-family: Arial, sans-serif;">📞 Phone Number</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="padding: 15px; margin: 0; background-color: #ffffff; font-size: 16px; line-height: 1.5; font-family: Arial, sans-serif;">
    //                                         <a href="tel:${formData.phone}" style="color: #1a1a1a; text-decoration: none; font-weight: 500;">${formData.phone || 'Not provided'}</a>
    //                                     </td>
    //                                 </tr>
    //                             </table>
    //                             <!-- Service Field -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e9ecef;">
    //                                 <tr>
    //                                     <td style="font-weight: bold; color: #ffffff; background-color: #1a1a1a; padding: 12px 15px; margin: 0; font-size: 14px; font-family: Arial, sans-serif;">🏥 Service of Interest</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="padding: 15px; margin: 0; background-color: #ffffff; font-size: 16px; line-height: 1.5; font-family: Arial, sans-serif;">${this.formatService(formData.service) || 'Not specified'}</td>
    //                                 </tr>
    //                             </table>
    //                             <!-- Message Field -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e9ecef;">
    //                                 <tr>
    //                                     <td style="font-weight: bold; color: #ffffff; background-color: #1a1a1a; padding: 12px 15px; margin: 0; font-size: 14px; font-family: Arial, sans-serif;">💬 Message</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="padding: 15px; margin: 0; background-color: #ffffff; font-size: 16px; line-height: 1.5; font-family: Arial, sans-serif;">
    //                                         ${(formData.message || 'No message provided').replace(/\n/g, '<br>')}
    //                                     </td>
    //                                 </tr>
    //                             </table>
    //                             <!-- Submission Date Field -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e9ecef;">
    //                                 <tr>
    //                                     <td style="font-weight: bold; color: #ffffff; background-color: #1a1a1a; padding: 12px 15px; margin: 0; font-size: 14px; font-family: Arial, sans-serif;">📅 Submission Date</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="padding: 15px; margin: 0; background-color: #ffffff; font-size: 16px; line-height: 1.5; font-family: Arial, sans-serif;">${new Date().toLocaleString()}</td>
    //                                 </tr>
    //                             </table>
    //                         </td>
    //                     </tr>
    //                     <!-- Footer -->
    //                     <tr>
    //                         <td style="text-align: center; padding: 25px 20px; background-color: #1a1a1a; color: #ffffff;">
    //                             <p style="margin: 5px 0; font-family: Arial, sans-serif;">${Admin_Name} | <a href="tel:+12402438043" style="color: #ffffff; text-decoration: none; font-weight: bold;">+1 (240) 243-8043</a> | ${Admin_Email}</p>
    //                             <p style="margin: 5px 0; opacity: 0.8; font-size: 14px; font-family: Arial, sans-serif;"><em>Please respond within 24 hours for urgent requests</em></p>
    //                         </td>
    //                     </tr>
    //                 </table>
    //             </td>
    //         </tr>
    //     </table>
    // </body>
    // </html>`;
    //     }
    //     generateConsultationFormHTML(formData) {
    //         return `
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>New Consultation Request</title>
    //     <!--[if mso]>
    //     <noscript>
    //         <xml>
    //             <o:OfficeDocumentSettings>
    //                 <o:PixelsPerInch>96</o:PixelsPerInch>
    //             </o:OfficeDocumentSettings>
    //         </xml>
    //     </noscript>
    //     <![endif]-->
    // </head>
    // <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: Arial, sans-serif;">
    //     <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    //         <tr>
    //             <td align="center" style="padding: 20px;">
    //                 <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="max-width: 700px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    //                     <!-- Header -->
    //                     <tr>
    //                         <td style="background-color: #1a1a1a; color: #ffffff; padding: 30px 20px; text-align: center;">
    //                             <h1 style="margin: 0 0 10px 0; font-size: 28px; color: #ffffff; font-family: Arial, sans-serif;">📅 New Consultation Request</h1>
    //                             <p style="margin: 0; opacity: 0.9; font-size: 16px; color: #ffffff; font-family: Arial, sans-serif;">${Admin_Name} - Care Consultation</p>
    //                         </td>
    //                     </tr>
    //                     <!-- Content -->
    //                     <tr>
    //                         <td style="background-color: #f8f9fa; padding: 30px;">
    //                             <!-- Urgency Badge -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 25px;">
    //                                 <tr>
    //                                     <td align="center">
    //                                         <div style="display: inline-block; padding: 8px 20px; border-radius: 25px; font-weight: bold; margin-bottom: 25px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; background-color: ${this.getUrgencyColor(formData.urgency)}; color: #ffffff;">⏰ ${this.formatUrgency(formData.urgency)}</div>
    //                                     </td>
    //                                 </tr>
    //                             </table>
    //                             <!-- Contact Information Section -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 25px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e9ecef;">
    //                                 <tr>
    //                                     <td style="font-weight: bold; color: #ffffff; background-color: #1a1a1a; padding: 12px 15px; margin: 0; font-size: 16px; font-family: Arial, sans-serif;">👤 Contact Information</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="padding: 20px;">
    //                                         <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Name:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${formData.firstName || ''} ${formData.lastName || ''}</td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Email:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;"><a href="mailto:${formData.email}" style="color: #1a1a1a; text-decoration: none; font-weight: 500;">${formData.email || 'Not provided'}</a></td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Phone:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;"><a href="tel:${formData.phone}" style="color: #1a1a1a; text-decoration: none; font-weight: 500;">${formData.phone || 'Not provided'}</a></td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Relationship:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${this.formatRelationship(formData.relationship) || 'Not specified'}</td>
    //                                             </tr>
    //                                         </table>
    //                                     </td>
    //                                 </tr>
    //                             </table>
    //                             <!-- Care Recipient Information Section -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 25px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e9ecef;">
    //                                 <tr>
    //                                     <td style="font-weight: bold; color: #ffffff; background-color: #1a1a1a; padding: 12px 15px; margin: 0; font-size: 16px; font-family: Arial, sans-serif;">🏥 Care Recipient Information</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="padding: 20px;">
    //                                         <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Name:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${formData.recipientName || 'Not provided'}</td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Age:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${formData.recipientAge || 'Not provided'}</td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Gender:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${formData.recipientGender || 'Not specified'}</td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Medical Conditions:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${(formData.recipientConditions || 'None specified').replace(/\n/g, '<br>')}</td>
    //                                             </tr>
    //                                         </table>
    //                                     </td>
    //                                 </tr>
    //                             </table>
    //                             <!-- Service Requirements Section -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 25px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e9ecef;">
    //                                 <tr>
    //                                     <td style="font-weight: bold; color: #ffffff; background-color: #1a1a1a; padding: 12px 15px; margin: 0; font-size: 16px; font-family: Arial, sans-serif;">🛡️ Service Requirements</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="padding: 20px;">
    //                                         <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Services Needed:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">
    //                     ${formData.services && formData.services.length > 0 
    //                                                         ? `<ul style="margin: 0; padding-left: 20px; color: #1a1a1a; font-size: 14px; font-family: Arial, sans-serif;">${formData.services.map(service => `<li style="margin-bottom: 5px;">${this.formatService(service)}</li>`).join('')}</ul>`
    //                         : 'No specific services selected'
    //                     }
    //                                                 </td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Care Level:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${this.formatCareLevel(formData.careLevel) || 'Not specified'}</td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Frequency:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${this.formatFrequency(formData.frequency) || 'Not specified'}</td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Duration:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${this.formatDuration(formData.duration) || 'Not specified'}</td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Start Date:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${formData.startDate ? new Date(formData.startDate).toLocaleDateString() : 'Not specified'}</td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Preferred Time:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${this.formatPreferredTime(formData.preferredTime) || 'Not specified'}</td>
    //                                             </tr>
    //                                         </table>
    //                                     </td>
    //                                 </tr>
    //                             </table>
    //                             <!-- Location & Additional Info Section -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 25px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e9ecef;">
    //                                 <tr>
    //                                     <td style="font-weight: bold; color: #ffffff; background-color: #1a1a1a; padding: 12px 15px; margin: 0; font-size: 16px; font-family: Arial, sans-serif;">📍 Location & Additional Info</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="padding: 20px;">
    //                                         <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Address:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${formData.address || 'Not provided'}</td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">City:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${formData.city || 'Not provided'}</td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Zip Code:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${formData.zipCode || 'Not provided'}</td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Special Requests:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${(formData.specialRequests || 'None').replace(/\n/g, '<br>')}</td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Additional Info:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${(formData.additionalInfo || 'None provided').replace(/\n/g, '<br>')}</td>
    //                                             </tr>
    //                                         </table>
    //                                     </td>
    //                                 </tr>
    //                             </table>
    //                             <!-- Submission Details Section -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e9ecef;">
    //                                 <tr>
    //                                     <td style="font-weight: bold; color: #ffffff; background-color: #1a1a1a; padding: 12px 15px; margin: 0; font-size: 16px; font-family: Arial, sans-serif;">📅 Submission Details</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="padding: 20px;">
    //                                         <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Submitted:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${new Date().toLocaleString()}</td>
    //                                             </tr>
    //                                         </table>
    //                                     </td>
    //                                 </tr>
    //                             </table>
    //                         </td>
    //                     </tr>
    //                     <!-- Footer -->
    //                     <tr>
    //                         <td style="text-align: center; padding: 25px 20px; background-color: #1a1a1a; color: #ffffff;">
    //                             <p style="margin: 5px 0; font-family: Arial, sans-serif;">${Admin_Name} | <a href="tel:+12402438043" style="color: #ffffff; text-decoration: none; font-weight: bold;">+1 (240) 243-8043</a> | ${Admin_Email}</p>
    //                             <p style="margin: 5px 0; opacity: 0.8; font-size: 14px; font-family: Arial, sans-serif;"><em>Please schedule consultation within 24-48 hours</em></p>
    //                         </td>
    //                     </tr>
    //                 </table>
    //             </td>
    //         </tr>
    //     </table>
    // </body>
    // </html>`;
    //     }
    //     generateReferralFormHTML(formData) {
    //         return `
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>New Referral Submission</title>
    //     <!--[if mso]>
    //     <noscript>
    //         <xml>
    //             <o:OfficeDocumentSettings>
    //                 <o:PixelsPerInch>96</o:PixelsPerInch>
    //             </o:OfficeDocumentSettings>
    //         </xml>
    //     </noscript>
    //     <![endif]-->
    // </head>
    // <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: Arial, sans-serif;">
    //     <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    //         <tr>
    //             <td align="center" style="padding: 20px;">
    //                 <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="max-width: 700px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    //                     <!-- Header -->
    //                     <tr>
    //                         <td style="background-color: #1a1a1a; color: #ffffff; padding: 30px 20px; text-align: center;">
    //                             <h1 style="margin: 0 0 10px 0; font-size: 28px; color: #ffffff; font-family: Arial, sans-serif;">🤝 New Referral Submission</h1>
    //                             <p style="margin: 0; opacity: 0.9; font-size: 16px; color: #ffffff; font-family: Arial, sans-serif;">${Admin_Name} - Client Referral</p>
    //                         </td>
    //                     </tr>
    //                     <!-- Content -->
    //                     <tr>
    //                         <td style="background-color: #f8f9fa; padding: 30px;">
    //                             <!-- Urgency Badge -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 25px;">
    //                                 <tr>
    //                                     <td align="center">
    //                                         <div style="display: inline-block; padding: 8px 20px; border-radius: 25px; font-weight: bold; margin-bottom: 25px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; background-color: ${this.getUrgencyColor(formData.urgency)}; color: #ffffff;">⏰ ${this.formatUrgency(formData.urgency)}</div>
    //                                     </td>
    //                                 </tr>
    //                             </table>
    //                             <!-- Referral Highlight -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 25px; background-color: #fff3cd; border-radius: 8px; overflow: hidden; border: 1px solid #ffeaa7;">
    //                                 <tr>
    //                                     <td style="padding: 20px; text-align: center;">
    //                                         <p style="margin: 0; font-size: 16px; font-weight: bold; color: #1a1a1a; font-family: Arial, sans-serif;">🎯 Referral Summary: ${formData.referrerName || 'Anonymous'} has referred ${formData.clientName || 'a potential client'} for care services.</p>
    //                                     </td>
    //                                 </tr>
    //                             </table>
    //                             <!-- Referrer Information Section -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 25px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e9ecef;">
    //                                 <tr>
    //                                     <td style="font-weight: bold; color: #ffffff; background-color: #1a1a1a; padding: 12px 15px; margin: 0; font-size: 16px; font-family: Arial, sans-serif;">👤 Referrer Information</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="padding: 20px;">
    //                                         <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Name:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${formData.referrerName || 'Not provided'}</td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Email:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;"><a href="mailto:${formData.referrerEmail}" style="color: #1a1a1a; text-decoration: none; font-weight: 500;">${formData.referrerEmail || 'Not provided'}</a></td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Phone:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;"><a href="tel:${formData.referrerPhone}" style="color: #1a1a1a; text-decoration: none; font-weight: 500;">${formData.referrerPhone || 'Not provided'}</a></td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Relationship:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${this.formatRelationship(formData.referrerRelation) || 'Not specified'}</td>
    //                                             </tr>
    //                                         </table>
    //                                     </td>
    //                                 </tr>
    //                             </table>
    //                             <!-- Client Information Section -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 25px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e9ecef;">
    //                                 <tr>
    //                                     <td style="font-weight: bold; color: #ffffff; background-color: #1a1a1a; padding: 12px 15px; margin: 0; font-size: 16px; font-family: Arial, sans-serif;">🏥 Client Information</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="padding: 20px;">
    //                                         <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Name:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${formData.clientName || 'Not provided'}</td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Phone:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;"><a href="tel:${formData.clientPhone}" style="color: #1a1a1a; text-decoration: none; font-weight: 500;">${formData.clientPhone || 'Not provided'}</a></td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Email:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${formData.clientEmail ? `<a href="mailto:${formData.clientEmail}" style="color: #1a1a1a; text-decoration: none; font-weight: 500;">${formData.clientEmail}</a>` : 'Not provided'}</td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Address:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${formData.clientAddress || 'Not provided'}</td>
    //                                             </tr>
    //                                         </table>
    //                                     </td>
    //                                 </tr>
    //                             </table>
    //                             <!-- Care Requirements Section -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 25px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e9ecef;">
    //                                 <tr>
    //                                     <td style="font-weight: bold; color: #ffffff; background-color: #1a1a1a; padding: 12px 15px; margin: 0; font-size: 16px; font-family: Arial, sans-serif;">🛡️ Care Requirements</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="padding: 20px;">
    //                                         <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Care Needs:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${this.formatService(formData.careNeeds) || 'Not specified'}</td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Timeline:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${this.formatUrgency(formData.urgency) || 'Not specified'}</td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Additional Info:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${(formData.additionalInfo || 'None provided').replace(/\n/g, '<br>')}</td>
    //                                             </tr>
    //                                         </table>
    //                                     </td>
    //                                 </tr>
    //                             </table>
    //                             <!-- Submission Details Section -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e9ecef;">
    //                                 <tr>
    //                                     <td style="font-weight: bold; color: #ffffff; background-color: #1a1a1a; padding: 12px 15px; margin: 0; font-size: 16px; font-family: Arial, sans-serif;">📅 Submission Details</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="padding: 20px;">
    //                                         <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Submitted:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${new Date().toLocaleString()}</td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="width: 30%; font-weight: bold; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">Terms Agreed:</td>
    //                                                 <td style="width: 70%; color: #1a1a1a; padding: 8px 0; font-size: 14px; font-family: Arial, sans-serif;">${formData.agreeToTerms ? '✅ Yes' : '❌ No'}</td>
    //                                             </tr>
    //                                         </table>
    //                                     </td>
    //                                 </tr>
    //                             </table>
    //                         </td>
    //                     </tr>
    //                     <!-- Footer -->
    //                     <tr>
    //                         <td style="text-align: center; padding: 25px 20px; background-color: #1a1a1a; color: #ffffff;">
    //                             <p style="margin: 5px 0; font-family: Arial, sans-serif;">${Admin_Name} | <a href="tel:+12402438043" style="color: #ffffff; text-decoration: none; font-weight: bold;">+1 (240) 243-8043</a> | ${Admin_Email}</p>
    //                             <p style="margin: 5px 0; opacity: 0.8; font-size: 14px; font-family: Arial, sans-serif;"><em>Please contact the referred client within 24 hours</em></p>
    //                         </td>
    //                     </tr>
    //                 </table>
    //             </td>
    //         </tr>
    //     </table>
    // </body>
    // </html>`;
    //     }
    //     // User confirmation HTML template generators
    //     generateContactConfirmationHTML(formData) {
    //         return `
    // <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    // <html xmlns="http://www.w3.org/1999/xhtml">
    // <head>
    //     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //     <title>Thank You for Contacting Zirach Home Care Services</title>
    //     <style type="text/css">
    //         body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
    //         .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
    //         .header { background-color: #1a1a1a; padding: 40px 30px; text-align: center; }
    //         .header h1 { color: #ffffff; font-size: 28px; margin: 0 0 10px 0; font-weight: bold; }
    //         .header p { color: #cccccc; font-size: 16px; margin: 0; }
    //         .content { padding: 40px 30px; background-color: #ffffff; }
    //         .thank-you-section { text-align: center; margin-bottom: 30px; }
    //         .thank-you-icon { font-size: 48px; margin-bottom: 20px; }
    //         .thank-you-title { color: #1a1a1a; font-size: 24px; font-weight: bold; margin: 0 0 15px 0; }
    //         .thank-you-text { color: #666666; font-size: 16px; line-height: 24px; margin: 0; }
    //         .info-box { background-color: #f8f9fa; border-left: 4px solid #1a1a1a; padding: 20px; margin: 30px 0; }
    //         .next-steps { background-color: #e3f2fd; border-radius: 8px; padding: 25px; margin: 30px 0; }
    //         .contact-section { background-color: #f8f9fa; border-radius: 8px; padding: 25px; text-align: center; margin: 30px 0; }
    //         .footer { background-color: #1a1a1a; padding: 30px; text-align: center; }
    //         .footer p { color: #cccccc; font-size: 14px; margin: 5px 0; }
    //         .footer a { color: #ffffff; text-decoration: none; font-weight: bold; }
    //     </style>
    // </head>
    // <body>
    //     <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    //         <tr><td>
    //             <div class="email-container">
    //                 <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    //                     <tr><td class="header">
    //                         <h1>Thank You for Reaching Out!</h1>
    //                         <p>${Admin_Name} - We've Received Your Message</p>
    //                     </td></tr>
    //                 </table>
    //                 <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    //                     <tr><td class="content">
    //                         <div class="thank-you-section">
    //                             <div class="thank-you-icon">💙</div>
    //                             <h2 class="thank-you-title">We're Here to Help</h2>
    //                             <p class="thank-you-text">Thank you for contacting ${Admin_Name}. Your message is important to us, and we're committed to providing you with the compassionate care and support you need.</p>
    //                         </div>
    //                         <div class="info-box">
    //                             <h3>📋 Your Message Details</h3>
    //                             <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
    //                             <p><strong>Priority Level:</strong> ${this.formatUrgency(formData.urgency)}</p>
    //                             <p><strong>Service Interest:</strong> ${this.formatService(formData.service) || 'General Inquiry'}</p>
    //                         </div>
    //                         <div class="next-steps">
    //                             <h3>🎯 What Happens Next?</h3>
    //                             <ol>
    //                                 <li><strong>Review:</strong> Our team will carefully review your message and needs</li>
    //                                 <li><strong>Response:</strong> We'll contact you within 24 hours (sooner for urgent requests)</li>
    //                                 <li><strong>Consultation:</strong> We'll schedule a free consultation to discuss your specific needs</li>
    //                                 <li><strong>Care Plan:</strong> Together, we'll create a personalized care plan that's right for you</li>
    //                             </ol>
    //                         </div>
    //                         <div class="contact-section">
    //                             <h3>Need Immediate Assistance?</h3>
    //                             <p><a href="tel:+12402438043">+1 (240) 243-8043</a><br/>Available Mon-Fri 9:30AM-5:30PM, Closed Saturdays & Sundays</p>
    //                             <p><a href="mailto:${Admin_Email}">${Admin_Email}</a><br/>We respond to emails within 24 hours</p>
    //                         </div>
    //                     </td></tr>
    //                 </table>
    //                 <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    //                     <tr><td class="footer">
    //                         <p><strong>${Admin_Name}</strong></p>
    //                         <p>Compassionate Home Care Services</p>
    //                         <p><a href="tel:+12402438043">+1 (240) 243-8043</a> | <a href="mailto:${Admin_Email}">${Admin_Email}</a></p>
    //                     </td></tr>
    //                 </table>
    //             </div>
    //         </td></tr>
    //     </table>
    // </body>
    // </html>`;
    //     }
    //     generateConsultationConfirmationHTML(formData) {
    //         return `
    // <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    // <html xmlns="http://www.w3.org/1999/xhtml">
    // <head>
    //     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //     <title>Consultation Request Received - Zirach Home Care Services</title>
    //     <style type="text/css">
    //         body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
    //         .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
    //         .header { background-color: #1a1a1a; padding: 40px 30px; text-align: center; }
    //         .header h1 { color: #ffffff; font-size: 28px; margin: 0 0 10px 0; font-weight: bold; }
    //         .header p { color: #cccccc; font-size: 16px; margin: 0; }
    //         .content { padding: 40px 30px; background-color: #ffffff; }
    //         .thank-you-section { text-align: center; margin-bottom: 30px; }
    //         .thank-you-icon { font-size: 48px; margin-bottom: 20px; }
    //         .thank-you-title { color: #1a1a1a; font-size: 24px; font-weight: bold; margin: 0 0 15px 0; }
    //         .thank-you-text { color: #666666; font-size: 16px; line-height: 24px; margin: 0; }
    //         .consultation-summary { background-color: #e8f5e8; border-left: 4px solid #28a745; padding: 25px; margin: 30px 0; }
    //         .timeline-box { background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 25px; margin: 30px 0; }
    //         .contact-section { background-color: #e3f2fd; border-radius: 8px; padding: 25px; text-align: center; margin: 30px 0; }
    //         .footer { background-color: #1a1a1a; padding: 30px; text-align: center; }
    //         .footer p { color: #cccccc; font-size: 14px; margin: 5px 0; }
    //         .footer a { color: #ffffff; text-decoration: none; font-weight: bold; }
    //     </style>
    // </head>
    // <body>
    //     <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    //         <tr><td>
    //             <div class="email-container">
    //                 <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    //                     <tr><td class="header">
    //                         <h1>Consultation Request Received</h1>
    //                         <p>${Admin_Name} - Your Care Journey Begins</p>
    //                     </td></tr>
    //                 </table>
    //                 <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    //                     <tr><td class="content">
    //                         <div class="thank-you-section">
    //                             <div class="thank-you-icon">🏥</div>
    //                             <h2 class="thank-you-title">Thank You for Trusting Us</h2>
    //                             <p class="thank-you-text">We've received your consultation request and are honored that you're considering ${Admin_Name} for your loved one's needs.</p>
    //                         </div>
    //                         <div class="consultation-summary">
    //                             <h3>📋 Your Consultation Request</h3>
    //                             <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
    //                             <p><strong>Timeline:</strong> ${this.formatUrgency(formData.urgency)}</p>
    //                             <p><strong>Care Recipient:</strong> ${formData.recipientName || 'Not specified'}</p>
    //                             <p><strong>Preferred Start Date:</strong> ${formData.startDate ? new Date(formData.startDate).toLocaleDateString() : 'Not specified'}</p>
    //                         </div>
    //                         <div class="timeline-box">
    //                             <h3>⏰ What to Expect Next</h3>
    //                             <ol>
    //                                 <li><strong>Within 4 hours:</strong> Our Care Coordinator will call you to schedule your consultation</li>
    //                                 <li><strong>Within 24-48 hours:</strong> Free in-home consultation with our licensed team</li>
    //                                 <li><strong>Same day:</strong> Receive your personalized care plan and pricing</li>
    //                                 <li><strong>Care start:</strong> Begin services as soon as the next business day if needed</li>
    //                             </ol>
    //                         </div>
    //                         <div class="contact-section">
    //                             <h3>Questions Before Your Consultation?</h3>
    //                             <p><a href="tel:+12402438043">+1 (240) 243-8043</a><br/>Available Mon-Fri 9:30AM-5:30PM, Closed Saturdays & Sundays</p>
    //                             <p><a href="mailto:${Admin_Email}">${Admin_Email}</a><br/>Our Care Coordinators are standing by</p>
    //                         </div>
    //                     </td></tr>
    //                 </table>
    //                 <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    //                     <tr><td class="footer">
    //                         <p><strong>${Admin_Name}</strong></p>
    //                         <p>Licensed • Insured • Trusted</p>
    //                         <p><a href="tel:+12402438043">+1 (240) 243-8043</a> | <a href="mailto:${Admin_Email}">${Admin_Email}</a></p>
    //                     </td></tr>
    //                 </table>
    //             </div>
    //         </td></tr>
    //     </table>
    // </body>
    // </html>`;
    //     }
    //     generateReferralConfirmationHTML(formData) {
    //         return `
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Thank You for Your Referral - ${Admin_Name}</title>
    //     <!--[if mso]>
    //     <noscript>
    //         <xml>
    //             <o:OfficeDocumentSettings>
    //                 <o:PixelsPerInch>96</o:PixelsPerInch>
    //             </o:OfficeDocumentSettings>
    //         </xml>
    //     </noscript>
    //     <![endif]-->
    // </head>
    // <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: Arial, sans-serif;">
    //     <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    //         <tr>
    //             <td align="center" style="padding: 20px;">
    //                 <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    //                     <!-- Header -->
    //                     <tr>
    //                         <td style="background-color: #1a1a1a; color: #ffffff; padding: 30px 20px; text-align: center;">
    //                             <h1 style="margin: 0 0 10px 0; font-size: 28px; color: #ffffff; font-family: Arial, sans-serif;">Thank You for Your Referral!</h1>
    //                             <p style="margin: 0; opacity: 0.9; font-size: 16px; color: #ffffff; font-family: Arial, sans-serif;">${Admin_Name} - Expanding Our Circle of Care</p>
    //                         </td>
    //                     </tr>
    //                     <!-- Content -->
    //                     <tr>
    //                         <td style="background-color: #f8f9fa; padding: 30px;">
    //                             <!-- Thank You Section -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 30px; text-align: center;">
    //                                 <tr>
    //                                     <td>
    //                                         <div style="font-size: 48px; margin-bottom: 20px;">🤝</div>
    //                                         <h2 style="color: #1a1a1a; font-size: 24px; font-weight: bold; margin: 0 0 15px 0; font-family: Arial, sans-serif;">Your Referral Matters</h2>
    //                                         <p style="color: #666666; font-size: 16px; line-height: 24px; margin: 0; font-family: Arial, sans-serif;">Thank you for referring someone to ${Admin_Name}. Your trust in our services means everything to us.</p>
    //                                     </td>
    //                                 </tr>
    //                 </table>
    //                             <!-- Referral Highlight -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 30px; background-color: #fff3cd; border-radius: 8px; overflow: hidden; border: 1px solid #ffeaa7;">
    //                                 <tr>
    //                                     <td style="padding: 25px; text-align: center;">
    //                                         <h3 style="margin: 0 0 15px 0; font-size: 18px; font-weight: bold; color: #1a1a1a; font-family: Arial, sans-serif;">🎯 Referral Received</h3>
    //                                         <p style="margin: 0; font-size: 16px; color: #1a1a1a; font-family: Arial, sans-serif;">You've referred <strong>${formData.clientName || 'a potential client'}</strong> for care services.<br/>Our team will reach out to them within 24 hours.</p>
    //                                     </td>
    //                                 </tr>
    //                             </table>
    //                             <!-- Next Steps -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 30px; background-color: #e3f2fd; border-radius: 8px; overflow: hidden;">
    //                                 <tr>
    //                                     <td style="padding: 25px;">
    //                                         <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: bold; color: #1a1a1a; font-family: Arial, sans-serif;">🎯 What Happens Next</h3>
    //                                         <ol style="margin: 0; padding-left: 20px; color: #1a1a1a; font-size: 16px; line-height: 24px; font-family: Arial, sans-serif;">
    //                                             <li style="margin-bottom: 10px;"><strong>Contact:</strong> Our referral team will call ${formData.clientName || 'them'} within 24 hours</li>
    //                                             <li style="margin-bottom: 10px;"><strong>Consultation:</strong> We'll schedule a free in-home assessment</li>
    //                                             <li style="margin-bottom: 10px;"><strong>Care Plan:</strong> A personalized care plan will be developed</li>
    //                                             <li style="margin-bottom: 10px;"><strong>Updates:</strong> We'll keep you informed of the progress (with permission)</li>
    //                                             <li style="margin-bottom: 0;"><strong>Appreciation:</strong> You'll receive a thank-you gift once services begin</li>
    //                             </ol>
    //                                     </td>
    //                                 </tr>
    //                 </table>
    //                             <!-- Appreciation Section -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 30px; background-color: #d4edda; border-radius: 8px; overflow: hidden; border: 1px solid #c3e6cb;">
    //                                 <tr>
    //                                     <td style="padding: 25px; text-align: center;">
    //                                         <h3 style="margin: 0 0 15px 0; font-size: 18px; font-weight: bold; color: #1a1a1a; font-family: Arial, sans-serif;">🎁 Our Referral Appreciation Program</h3>
    //                                         <p style="margin: 0 0 15px 0; font-size: 16px; color: #1a1a1a; font-family: Arial, sans-serif;">As a token of our gratitude, you'll receive a special thank-you gift once your referral begins services with us.</p>
    //                                         <p style="margin: 0; font-size: 16px; font-weight: bold; color: #1a1a1a; font-family: Arial, sans-serif;">Thank you for being a ${Admin_Name} advocate!</p>
    //                                     </td>
    //                                 </tr>
    //                 </table>
    //                             <!-- Contact Section -->
    //                             <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px; background-color: #f8f9fa; border-radius: 8px; overflow: hidden;">
    //                                 <tr>
    //                                     <td style="padding: 25px; text-align: center;">
    //                                         <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: bold; color: #1a1a1a; font-family: Arial, sans-serif;">Questions About Your Referral?</h3>
    //                                         <p style="margin: 0 0 10px 0; font-size: 16px; color: #1a1a1a; font-family: Arial, sans-serif;"><a href="tel:+12402438043" style="color: #1a1a1a; text-decoration: none; font-weight: bold;">+1 (240) 243-8043</a><br/>Referral Team - Available Mon-Fri 9:30AM-5:30PM</p>
    //                                         <p style="margin: 0; font-size: 16px; color: #1a1a1a; font-family: Arial, sans-serif;"><a href="mailto:${Admin_Email}" style="color: #1a1a1a; text-decoration: none; font-weight: bold;">${Admin_Email}</a><br/>Dedicated referral support</p>
    //                                     </td>
    //                                 </tr>
    //                             </table>
    //                         </td>
    //                     </tr>
    //                     <!-- Footer -->
    //                     <tr>
    //                         <td style="text-align: center; padding: 25px 20px; background-color: #1a1a1a; color: #ffffff;">
    //                             <p style="margin: 5px 0; font-family: Arial, sans-serif;"><strong>${Admin_Name}</strong></p>
    //                             <p style="margin: 5px 0; font-family: Arial, sans-serif;">Building Trust, One Family at a Time</p>
    //                             <p style="margin: 5px 0; font-family: Arial, sans-serif;"><a href="tel:+12402438043" style="color: #ffffff; text-decoration: none; font-weight: bold;">+1 (240) 243-8043</a> | <a href="mailto:${Admin_Email}" style="color: #ffffff; text-decoration: none; font-weight: bold;">${Admin_Email}</a></p>
    //                         </td>
    //                     </tr>
    //                 </table>
    //             </td>
    //         </tr>
    //     </table>
    // </body>
    // </html>`;
    //     }
    //     // Text content generators for fallback
    //     generateContactFormText(formData) {
    //         return `
    // New Contact Form Submission - ${Admin_Name}
    // URGENCY: ${this.formatUrgency(formData.urgency)}
    // SUBMITTED: ${new Date().toLocaleString()}
    // CONTACT INFORMATION:
    // Name: ${formData.name || 'Not provided'}
    // Email: ${formData.email || 'Not provided'}
    // Phone: ${formData.phone || 'Not provided'}
    // Service Interested: ${this.formatService(formData.service) || 'Not specified'}
    // MESSAGE:
    // ${formData.message || 'No message provided'}
    // ---
    // ${Admin_Name}
    // +1 (240) 243-8043
    // ${Admin_Email}
    // `;
    //     }
    //     generateConsultationFormText(formData) {
    //         return `
    // New Consultation Request - ${Admin_Name}
    // URGENCY: ${this.formatUrgency(formData.urgency)}
    // SUBMITTED: ${new Date().toLocaleString()}
    // CONTACT INFORMATION:
    // Name: ${formData.firstName || ''} ${formData.lastName || ''}
    // Email: ${formData.email || 'Not provided'}
    // Phone: ${formData.phone || 'Not provided'}
    // Relationship: ${this.formatRelationship(formData.relationship) || 'Not specified'}
    // CARE RECIPIENT:
    // Name: ${formData.recipientName || 'Not provided'}
    // Age: ${formData.recipientAge || 'Not provided'}
    // Gender: ${formData.recipientGender || 'Not specified'}
    // Medical Conditions: ${formData.recipientConditions || 'None specified'}
    // SERVICE REQUIREMENTS:
    // Services: ${formData.services && formData.services.length > 0 ? formData.services.map(s => this.formatService(s)).join(', ') : 'None selected'}
    // Care Level: ${this.formatCareLevel(formData.careLevel) || 'Not specified'}
    // Frequency: ${this.formatFrequency(formData.frequency) || 'Not specified'}
    // Duration: ${this.formatDuration(formData.duration) || 'Not specified'}
    // Start Date: ${formData.startDate ? new Date(formData.startDate).toLocaleDateString() : 'Not specified'}
    // Preferred Time: ${this.formatPreferredTime(formData.preferredTime) || 'Not specified'}
    // LOCATION:
    // Address: ${formData.address || 'Not provided'}
    // City: ${formData.city || 'Not provided'}
    // Zip Code: ${formData.zipCode || 'Not provided'}
    // ADDITIONAL INFO:
    // Special Requests: ${formData.specialRequests || 'None'}
    // Additional Information: ${formData.additionalInfo || 'None provided'}
    // ---
    // ${Admin_Name}
    // +1 (240) 243-8043
    // ${Admin_Email}
    // `;
    //     }
    //     generateReferralFormText(formData) {
    //         return `
    // New Referral Submission - ${Admin_Name}
    // URGENCY: ${this.formatUrgency(formData.urgency)}
    // SUBMITTED: ${new Date().toLocaleString()}
    // REFERRER INFORMATION:
    // Name: ${formData.referrerName || 'Not provided'}
    // Email: ${formData.referrerEmail || 'Not provided'}
    // Phone: ${formData.referrerPhone || 'Not provided'}
    // Relationship to Client: ${this.formatRelationship(formData.referrerRelation) || 'Not specified'}
    // CLIENT INFORMATION:
    // Name: ${formData.clientName || 'Not provided'}
    // Phone: ${formData.clientPhone || 'Not provided'}
    // Email: ${formData.clientEmail || 'Not provided'}
    // Address: ${formData.clientAddress || 'Not provided'}
    // CARE REQUIREMENTS:
    // Care Needs: ${this.formatService(formData.careNeeds) || 'Not specified'}
    // Timeline: ${this.formatUrgency(formData.urgency) || 'Not specified'}
    // ADDITIONAL INFORMATION:
    // ${formData.additionalInfo || 'None provided'}
    // Terms Agreed: ${formData.agreeToTerms ? 'Yes' : 'No'}
    // ---
    // ${Admin_Name}
    // +1 (240) 243-8043
    // ${Admin_Email}
    // `;
    //     }
    //     // User confirmation text content generators
    //     generateContactConfirmationText(formData) {
    //         return `
    // Thank You for Contacting ${Admin_Name}
    // Dear ${formData.name || 'Valued Customer'},
    // Thank you for reaching out to ${Admin_Name}. We've received your message and want to assure you that your inquiry is important to us.
    // YOUR MESSAGE DETAILS:
    // - Submitted: ${new Date().toLocaleString()}
    // - Priority Level: ${this.formatUrgency(formData.urgency)}
    // - Service Interest: ${this.formatService(formData.service) || 'General Inquiry'}
    // WHAT HAPPENS NEXT:
    // 1. Review: Our team will carefully review your message and needs
    // 2. Response: We'll contact you within 24 hours (sooner for urgent requests)
    // 3. Consultation: We'll schedule a free consultation to discuss your specific needs
    // 4. Care Plan: Together, we'll create a personalized care plan that's right for you
    // NEED IMMEDIATE ASSISTANCE?
    // Phone: +1 (240) 243-8043 - Available Mon-Fri 9:30AM-5:30PM, Closed Saturdays & Sundays
    // Email: ${Admin_Email} - We respond within 24 hours
    // ${Admin_Name}
    // Compassionate Home Care Services
    // Humble city & surrounding counties
    // `;
    //     }
    //     generateConsultationConfirmationText(formData) {
    //         return `
    // Consultation Request Received - ${Admin_Name}
    // Dear ${formData.firstName || ''} ${formData.lastName || ''},
    // Thank you for trusting ${Admin_Name} with your loved one's care needs. We've received your consultation request and are honored to be considered for this important responsibility.
    // YOUR CONSULTATION REQUEST:
    // - Submitted: ${new Date().toLocaleString()}
    // - Timeline: ${this.formatUrgency(formData.urgency)}
    // - Care Recipient: ${formData.recipientName || 'Not specified'}
    // - Preferred Start Date: ${formData.startDate ? new Date(formData.startDate).toLocaleDateString() : 'Not specified'}
    // WHAT TO EXPECT NEXT:
    // 1. Within 4 hours: Our Care Coordinator will call you to schedule your consultation
    // 2. Within 24-48 hours: Free in-home consultation with our licensed team
    // 3. Same day: Receive your personalized care plan and pricing
    // 4. Care start: Begin services as soon as the next business day if needed
    // QUESTIONS BEFORE YOUR CONSULTATION?
    // Phone: +1 (240) 243-8043 - Available Mon-Fri 9:30AM-5:30PM, Closed Saturdays & Sundays
    // Email: ${Admin_Email} - Our Care Coordinators are standing by
    // ${Admin_Name}
    // Licensed • Insured • Trusted
    // Humble city & surrounding counties
    // `;
    //     }
    //     generateReferralConfirmationText(formData) {
    //         return `
    // Thank You for Your Referral - ${Admin_Name}
    // Dear ${formData.referrerName || 'Valued Advocate'},
    // Thank you for referring someone to ${Admin_Name}. Your trust in our services means everything to us, and we're honored to extend our compassionate care to another family through your recommendation.
    // REFERRAL RECEIVED:
    // You've referred ${formData.clientName || 'a potential client'} for care services.
    // Our team will reach out to them within 24 hours.
    // WHAT HAPPENS NEXT:
    // 1. Contact: Our referral team will call ${formData.clientName || 'them'} within 24 hours
    // 2. Consultation: We'll schedule a free in-home assessment
    // 3. Care Plan: A personalized care plan will be developed
    // 4. Updates: We'll keep you informed of the progress (with permission)
    // 5. Appreciation: You'll receive a thank-you gift once services begin
    // REFERRAL APPRECIATION PROGRAM:
    // As a token of our gratitude, you'll receive a special thank-you gift once your referral begins services with us. But more importantly, you've helped us extend compassionate care to another family in need.
    // Thank you for being a ${Admin_Name} advocate!
    // QUESTIONS ABOUT YOUR REFERRAL?
    // Phone: +1 (240) 243-8043 - Referral Team, Available Mon-Fri 9:30AM-5:30PM
    // Email: ${Admin_Email} - Dedicated referral support
    // ${Admin_Name}
    // Building Trust, One Family at a Time
    // Humble city & surrounding counties
    // `;
    //     }
    //     // Helper methods for formatting
    //     getUrgencyColor(urgency) {
    //         const colorMap = {
    //             'immediate': '#dc3545',
    //             'urgent': '#dc3545',
    //             'soon': '#fd7e14',
    //             'planning': '#28a745'
    //         };
    //         return colorMap[urgency] || '#28a745';
    //     }
    //     formatUrgency(urgency) {
    //         const urgencyMap = {
    //             'immediate': 'IMMEDIATE (Within 24 hours)',
    //             'urgent': 'URGENT (Within 3 days)',
    //             'soon': 'SOON (Within a week)',
    //             'planning': 'PLANNING AHEAD'
    //         };
    //         return urgencyMap[urgency] || 'Not specified';
    //     }
    //     formatService(service) {
    //         const serviceMap = {
    //             'personal-care': 'Personal Care Services',
    //             'companion-care': 'Companion Care',
    //             'respite-care': 'Respite Care',
    //             'specialized-care': 'Specialized Care',
    //             'inclusive-care': 'Inclusive Care for All Abilities',
    //             'in-facility-care': 'In-Facility Care',
    //             'consultation': 'Free Consultation',
    //             'assessment': 'Care Assessment',
    //             'not-sure': 'Need Consultation',
    //             'other': 'Other'
    //         };
    //         return serviceMap[service] || service;
    //     }
    //     formatRelationship(relationship) {
    //         const relationshipMap = {
    //             'family': 'Family Member',
    //             'friend': 'Friend',
    //             'neighbor': 'Neighbor',
    //             'healthcare-provider': 'Healthcare Provider',
    //             'social-worker': 'Social Worker',
    //             'current-client': 'Current Client',
    //             'former-client': 'Former Client',
    //             'self': 'Self',
    //             'spouse': 'Spouse/Partner',
    //             'child': 'Adult Child',
    //             'parent': 'Parent',
    //             'sibling': 'Sibling',
    //             'other': 'Other'
    //         };
    //         return relationshipMap[relationship] || relationship;
    //     }
    //     formatCareLevel(level) {
    //         const levelMap = {
    //             'minimal': 'Minimal Assistance',
    //             'moderate': 'Moderate Care',
    //             'extensive': 'Extensive Care',
    //             'intensive': 'Intensive Care'
    //         };
    //         return levelMap[level] || level;
    //     }
    //     formatFrequency(frequency) {
    //         const frequencyMap = {
    //             'daily': 'Daily',
    //             'few-times-week': 'Few times per week',
    //             'weekly': 'Weekly',
    //             'bi-weekly': 'Bi-weekly',
    //             'monthly': 'Monthly',
    //             'as-needed': 'As needed'
    //         };
    //         return frequencyMap[frequency] || frequency;
    //     }
    //     formatDuration(duration) {
    //         const durationMap = {
    //             '2-4-hours': '2-4 hours',
    //             '4-8-hours': '4-8 hours',
    //             '8-12-hours': '8-12 hours',
    //             '12-24-hours': '12-24 hours',
    //             'overnight': 'Overnight',
    //             'live-in': 'Live-in'
    //         };
    //         return durationMap[duration] || duration;
    //     }
    //     formatPreferredTime(time) {
    //         const timeMap = {
    //             'morning': 'Morning (6 AM - 12 PM)',
    //             'afternoon': 'Afternoon (12 PM - 6 PM)',
    //             'evening': 'Evening (6 PM - 10 PM)',
    //             'overnight': 'Overnight (10 PM - 6 AM)',
    //             'flexible': 'Flexible'
    //         };
    //         return timeMap[time] || time;
    //     }
    // Newsletter subscription email
    async sendNewsletterSubscriptionEmail(emailData) {
        return await this.sendEmail('newsletter', emailData);
    }
}
// Export a singleton instance
const emailService = new EmailService();
const __TURBOPACK__default__export__ = emailService;
}),
"[project]/src/views/Contact.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FAQ$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FAQ.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$emailService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/emailService.js [app-ssr] (ecmascript)");
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
function Contact() {
    const { contactData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContent"])();
    const contactCopy = contactData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$contact$2e$json__$28$json$29$__["default"];
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        service: '',
        urgency: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuccessMessage, setShowSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Send admin notification email
            const adminResult = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$emailService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sendContactFormEmail(formData);
            if (adminResult.success) {
                console.log('Contact form submitted successfully:', formData);
                // Send user confirmation email (only if user provided email)
                if (formData.email) {
                    try {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$emailService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sendContactConfirmationEmail(formData);
                        console.log('Contact confirmation email sent to user');
                    } catch (confirmationError) {
                        console.warn('Failed to send confirmation email to user:', confirmationError);
                    // Don't fail the whole process if confirmation email fails
                    }
                }
                setShowSuccessMessage(true);
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    urgency: '',
                    message: ''
                });
                // Hide success message after 5 seconds
                setTimeout(()=>{
                    setShowSuccessMessage(false);
                }, 5000);
            } else {
                console.error('Failed to send contact form:', adminResult.error);
                alert(`Sorry, there was an error sending your message. Please try again or call us directly at ${contactCopy.contactDetails.phone}.`);
            }
        } catch (error) {
            console.error('Contact form submission error:', error);
            alert(`Sorry, there was an error sending your message. Please try again or call us directly at ${contactCopy.contactDetails.phone}.`);
        } finally{
            setIsSubmitting(false);
        }
    };
    const contactInfo = contactCopy.contactInfo.contactItems;
    const serviceOptions = contactCopy.contactForm.options.services;
    const urgencyOptions = contactCopy.contactForm.options.urgency;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "contact-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/views/Contact.jsx",
                lineNumber: 95,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "contact-hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "contact-hero-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contact-hero-content",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "contact-hero-text",
                            "data-aos": "fade-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "contact-badge",
                                    children: contactCopy.hero.badge
                                }, void 0, false, {
                                    fileName: "[project]/src/views/Contact.jsx",
                                    lineNumber: 102,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "contact-hero-title",
                                    children: [
                                        contactCopy.hero.title,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/views/Contact.jsx",
                                            lineNumber: 104,
                                            columnNumber: 57
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "highlight1",
                                            children: contactCopy.hero.titleHighlight
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/Contact.jsx",
                                            lineNumber: 105,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/Contact.jsx",
                                    lineNumber: 103,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "contact-hero-description",
                                    children: contactCopy.hero.description
                                }, void 0, false, {
                                    fileName: "[project]/src/views/Contact.jsx",
                                    lineNumber: 107,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/Contact.jsx",
                            lineNumber: 101,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/Contact.jsx",
                        lineNumber: 100,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/Contact.jsx",
                    lineNumber: 99,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/Contact.jsx",
                lineNumber: 98,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "contact-main-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "contact-main-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contact-main-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-info-section",
                                "data-aos": "fade-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-info-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "info-section-title",
                                                children: contactCopy.contactInfo.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Contact.jsx",
                                                lineNumber: 130,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "info-section-subtitle",
                                                children: contactCopy.contactInfo.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Contact.jsx",
                                                lineNumber: 131,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/Contact.jsx",
                                        lineNumber: 129,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-info-grid1",
                                        children: contactInfo.map((item, index)=>{
                                            // Use dynamic contactDetails for phone and email
                                            const isPhone = item.title === "Call Us";
                                            const isEmail = item.title === "Email Us";
                                            const link = isPhone ? contactCopy.contactDetails.phoneLink : isEmail ? contactCopy.contactDetails.emailLink : item.link;
                                            const details = isPhone ? contactCopy.contactDetails.phone : isEmail ? contactCopy.contactDetails.email : item.details;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "contact-info-card",
                                                "data-aos": "fade-up",
                                                "data-aos-delay": index * 100,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "contact-card-icon",
                                                        children: item.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/Contact.jsx",
                                                        lineNumber: 150,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "contact-card-content",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "contact-card-title",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/Contact.jsx",
                                                                lineNumber: 152,
                                                                columnNumber: 49
                                                            }, this),
                                                            link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: link,
                                                                className: "contact-card-link",
                                                                children: details
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/Contact.jsx",
                                                                lineNumber: 154,
                                                                columnNumber: 53
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "contact-card-details",
                                                                children: details
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/Contact.jsx",
                                                                lineNumber: 158,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "contact-card-subtext",
                                                                children: item.subtext
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/Contact.jsx",
                                                                lineNumber: 160,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/Contact.jsx",
                                                        lineNumber: 151,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/views/Contact.jsx",
                                                lineNumber: 149,
                                                columnNumber: 41
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Contact.jsx",
                                        lineNumber: 136,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "emergency-notice",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "emergency-icon",
                                                children: "🚨"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Contact.jsx",
                                                lineNumber: 168,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "emergency-content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "emergency-title",
                                                        children: contactCopy.contactInfo.emergencyNotice.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/Contact.jsx",
                                                        lineNumber: 170,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "emergency-text",
                                                        children: contactCopy.contactInfo.emergencyNotice.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/Contact.jsx",
                                                        lineNumber: 171,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/Contact.jsx",
                                                lineNumber: 169,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/Contact.jsx",
                                        lineNumber: 167,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Contact.jsx",
                                lineNumber: 128,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-form-section",
                                "data-aos": "fade-left",
                                "data-aos-delay": "300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-form-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "form-section-title",
                                                children: contactCopy.contactForm.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Contact.jsx",
                                                lineNumber: 181,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "form-section-subtitle",
                                                children: contactCopy.contactForm.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Contact.jsx",
                                                lineNumber: 182,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/Contact.jsx",
                                        lineNumber: 180,
                                        columnNumber: 29
                                    }, this),
                                    showSuccessMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "success-message",
                                        "data-aos": "fade-in",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "success-icon",
                                                children: "✅"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Contact.jsx",
                                                lineNumber: 189,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "success-content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        children: contactCopy.contactForm.successMessage.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/Contact.jsx",
                                                        lineNumber: 191,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: contactCopy.contactForm.successMessage.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/Contact.jsx",
                                                        lineNumber: 192,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/Contact.jsx",
                                                lineNumber: 190,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/Contact.jsx",
                                        lineNumber: 188,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: "contact-form",
                                        onSubmit: handleSubmit,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "name",
                                                                children: contactCopy.contactForm.fields.name.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/Contact.jsx",
                                                                lineNumber: 200,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                id: "name",
                                                                name: "name",
                                                                value: formData.name,
                                                                onChange: handleInputChange,
                                                                required: true,
                                                                placeholder: contactCopy.contactForm.fields.name.placeholder,
                                                                disabled: isSubmitting
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/Contact.jsx",
                                                                lineNumber: 201,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/Contact.jsx",
                                                        lineNumber: 199,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "email",
                                                                children: contactCopy.contactForm.fields.email.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/Contact.jsx",
                                                                lineNumber: 214,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                id: "email",
                                                                name: "email",
                                                                value: formData.email,
                                                                onChange: handleInputChange,
                                                                required: true,
                                                                placeholder: contactCopy.contactForm.fields.email.placeholder,
                                                                disabled: isSubmitting
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/Contact.jsx",
                                                                lineNumber: 215,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/Contact.jsx",
                                                        lineNumber: 213,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/Contact.jsx",
                                                lineNumber: 198,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "phone",
                                                                children: contactCopy.contactForm.fields.phone.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/Contact.jsx",
                                                                lineNumber: 230,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "tel",
                                                                id: "phone",
                                                                name: "phone",
                                                                value: formData.phone,
                                                                onChange: handleInputChange,
                                                                placeholder: contactCopy.contactForm.fields.phone.placeholder,
                                                                disabled: isSubmitting
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/Contact.jsx",
                                                                lineNumber: 231,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/Contact.jsx",
                                                        lineNumber: 229,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "urgency",
                                                                children: contactCopy.contactForm.fields.urgency.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/Contact.jsx",
                                                                lineNumber: 243,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                id: "urgency",
                                                                name: "urgency",
                                                                value: formData.urgency,
                                                                onChange: handleInputChange,
                                                                required: true,
                                                                disabled: isSubmitting,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: contactCopy.contactForm.fields.urgency.placeholder
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/Contact.jsx",
                                                                        lineNumber: 252,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    urgencyOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: option.value,
                                                                            children: option.label
                                                                        }, option.value, false, {
                                                                            fileName: "[project]/src/views/Contact.jsx",
                                                                            lineNumber: 254,
                                                                            columnNumber: 49
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/Contact.jsx",
                                                                lineNumber: 244,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/Contact.jsx",
                                                        lineNumber: 242,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/Contact.jsx",
                                                lineNumber: 228,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "service",
                                                        children: contactCopy.contactForm.fields.service.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/Contact.jsx",
                                                        lineNumber: 263,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "service",
                                                        name: "service",
                                                        value: formData.service,
                                                        onChange: handleInputChange,
                                                        disabled: isSubmitting,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: contactCopy.contactForm.fields.service.placeholder
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/Contact.jsx",
                                                                lineNumber: 271,
                                                                columnNumber: 41
                                                            }, this),
                                                            serviceOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: option.value,
                                                                    children: option.label
                                                                }, option.value, false, {
                                                                    fileName: "[project]/src/views/Contact.jsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 45
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/Contact.jsx",
                                                        lineNumber: 264,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/Contact.jsx",
                                                lineNumber: 262,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "message",
                                                        children: contactCopy.contactForm.fields.message.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/Contact.jsx",
                                                        lineNumber: 281,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        id: "message",
                                                        name: "message",
                                                        value: formData.message,
                                                        onChange: handleInputChange,
                                                        required: true,
                                                        rows: "6",
                                                        placeholder: contactCopy.contactForm.fields.message.placeholder,
                                                        disabled: isSubmitting
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/Contact.jsx",
                                                        lineNumber: 282,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/Contact.jsx",
                                                lineNumber: 280,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: `contact-submit-btn ${isSubmitting ? 'submitting' : ''}`,
                                                disabled: isSubmitting,
                                                children: isSubmitting ? contactCopy.contactForm.submittingButton : contactCopy.contactForm.submitButton
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Contact.jsx",
                                                lineNumber: 294,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "form-privacy-note",
                                                children: contactCopy.contactForm.privacyNote
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Contact.jsx",
                                                lineNumber: 302,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/Contact.jsx",
                                        lineNumber: 197,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Contact.jsx",
                                lineNumber: 179,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/Contact.jsx",
                        lineNumber: 126,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/Contact.jsx",
                    lineNumber: 125,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/Contact.jsx",
                lineNumber: 124,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FAQ$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/views/Contact.jsx",
                lineNumber: 312,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/views/Contact.jsx",
                lineNumber: 314,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/Contact.jsx",
        lineNumber: 94,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = Contact;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d49f942b._.js.map