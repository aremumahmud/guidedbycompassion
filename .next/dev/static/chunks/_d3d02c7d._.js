(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/gooeybtn.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
;
function GooeyBtn({ text, variant = 'black', extendby = 0, direction = 'right' }) {
    const isRight = direction === 'right';
    const defaultTransform = isRight ? 'translateX(-40px)' : 'translateX(40px)';
    const defaultHoverTransform = isRight ? 'translateX(-84px)' : 'translateX(84px)';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            !isRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `gooey-btn-arrow ${variant} left`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `gooey-btn-main ${variant}`,
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/gooeybtn.jsx",
                lineNumber: 35,
                columnNumber: 9
            }, this),
            isRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `gooey-btn-arrow ${variant} right`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c = GooeyBtn;
const __TURBOPACK__default__export__ = GooeyBtn;
var _c;
__turbopack_context__.k.register(_c, "GooeyBtn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/copy/home.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"images\":{\"logo\":\"https://res.cloudinary.com/dvauarkh6/image/upload/v1761836162/Logo-Color_vmvekl.png\",\"hero\":{\"rotatingImages\":[\"https://res.cloudinary.com/dvauarkh6/image/upload/v1751556625/pexels-shkrabaanthony-7345465_lnzjkh.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1747917952/pexels-vlada-karpovich-5790808_nopxnn.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1761228853/blog-images/Family_meeting_with_a_caregiver_to_discuss_home_care_questions_and_options_in_Pflugerville_Texas._qavsnh.png\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1747917955/pexels-yaroslav-shuraev-8088910_phrxs8.jpg\"],\"decor\":\"/assets/download.svg\"},\"about\":{\"main\":\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757651526/istockphoto-2197953344-612x612_aafwiv.jpg\"},\"services\":{\"serviceImages\":[\"https://res.cloudinary.com/dvauarkh6/image/upload/v1747917952/pexels-vlada-karpovich-5790702_1_jsorsb.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757647571/pexels-kampus-7477691_fbuzpo.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757647660/pexels-jsme-mila-523821574-29372742_btuql4.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757648020/pexels-mike-jones-8805864_tpce8a.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757648078/pexels-kampus-7551646_mznizh.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757648473/pexels-liliana-drew-9462344_crre4v.jpg\"],\"verifiedIcon\":\"✓\"},\"testimonials\":{\"profileImages\":[\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759287743/pexels-divinetechygirl-1181690_s6affc.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1741494115/client2_att5pf.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1744211718/pexels-cristian-rojas-8460370_jmjmux.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1741565451/pexels-hannah-nelson-390257-1065084_ayajb2.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759287732/pexels-hannah-nelson-390257-1065084_i5llk9.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759287886/pexels-olly-834863_vnotgs.jpg\"]},\"blog\":{\"articleImages\":[\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757652518/pexels-olly-3791664_skfn2f.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757651528/istockphoto-2047480956-612x612_ghepml.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757651536/istockphoto-2185020253-612x612_ir8lka.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1753007261/pexels-kampus-7551617_2_rilfqn.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1753007241/pexels-olly-3768131_rjvx7r.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757648020/pexels-mike-jones-8805864_tpce8a.jpg\"],\"profileImages\":[\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759290370/pexels-fernando-capetillo-94107723-34093130_agqll2.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759290462/pexels-edward-jenner-4033143_xxjb7e.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759291688/pexels-olly-3768911_sy5y7d.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759291553/pexels-md-ishak-rahman-2152426164-34070074_lixkw8.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759291434/pexels-olly-3823497_yktzjc.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759290819/doctor-hospital_1098-19685_bjxffs.avif\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759291027/pexels-cottonbro-7578806_ijdqqd.jpg\",\"https://res.cloudinary.com/dvauarkh6/image/upload/v1759291324/pexels-vanessa-garcia-6326051_lh8hva.jpg\"]},\"refer\":{\"main\":\"https://res.cloudinary.com/dvauarkh6/image/upload/v1757648078/pexels-kampus-7551646_mznizh.jpg\"}},\"header\":{\"logo\":{\"alt\":\"Logo\"},\"navigation\":{\"about\":\"About\",\"services\":\"Services\",\"careers\":\"Careers\",\"blog\":\"Blog\",\"referUs\":\"Refer Us\"},\"servicesDropdown\":{\"personalCare\":\"Personal Assistance Services (PAS)\",\"companionCare\":\"Companionship & Emotional Support\",\"respiteCare\":\"Respite & Family Relief Care\",\"postHospitalSupport\":\"Post-Hospital / Post-Surgery Support\",\"specializedCare\":\"Specialty Service Packages\",\"endOfLifeCare\":\"End-of-Life Care\"},\"ctaButtons\":{\"contact\":\"Contact\",\"scheduleCare\":\"Schedule Care\",\"contactUs\":\"Contact Us\"},\"mobileMenu\":{\"toggleAriaLabel\":\"Toggle mobile menu\"}},\"hero\":{\"badge\":\"Free Care Assessment\",\"mainHeading\":\"Providing Reliable Care for Your Peace of Mind\",\"mainDescription\":\"Your family is our family — we treat every client with the dignity, respect, and compassion they deserve. Offering 13 comprehensive home care services from personal assistance to specialized care, serving Houston, TX with reliable care you can count on.\",\"teamStats\":\"Trusted by Houston Families\",\"ctaButton\":\"Get Started Today\",\"imageOverlay\":{\"badges\":{\"personalCare\":\"PERSONAL CARE\",\"homeHealthCare\":\"PERSONAL ASSISTANCE SERVICES\",\"houstonTX\":\"HOUSTON, TX\"}},\"rotatingContent\":[{\"heading\":\"Personal Assistance Services (PAS)\",\"description\":\"Complete daily living support - personal care, homemaking, transportation, medication reminders.\",\"popularHeading\":\"Most Popular\",\"popularDescription\":\"Comprehensive PAS services with certified caregivers.\"},{\"heading\":\"Companionship & Wellness\",\"description\":\"Social engagement, wellness check-ins, emotional support, and optional pet care.\",\"popularHeading\":\"Essential Service\",\"popularDescription\":\"Companion care that enhances quality of life daily.\"},{\"heading\":\"Respite & 24-Hour Care\",\"description\":\"Hourly, overnight, or continuous 24-hour support for family caregiver relief.\",\"popularHeading\":\"Family Support\",\"popularDescription\":\"Flexible respite care from hourly to full-time.\"},{\"heading\":\"Specialty Care Packages\",\"description\":\"Memory care, bedbound care, post-hospital recovery, preferred caregiver matching.\",\"popularHeading\":\"Expert Care\",\"popularDescription\":\"Specialized packages for complex health challenges.\"}]},\"statistics\":{\"familiesServed\":{\"number\":300,\"label\":\"Houston Families Served\"},\"certifiedCaregivers\":{\"number\":35,\"label\":\"Certified Caregivers\"},\"citiesCovered\":{\"number\":10,\"label\":\"Service Areas Covered\"},\"satisfactionRate\":{\"number\":98,\"label\":\"Client Satisfaction Rate\"}},\"about\":{\"badge\":\"About Guided by Compassion\",\"title\":\"Providing Reliable Care\",\"titleHighlight\":\"for Your Peace of Mind\",\"description\":\"At Guided by Compassion, we believe home is where care feels most meaningful. That's why we provide 13 comprehensive in-home care services—from personal care and homemaking to specialized memory care and 24-hour support—designed to meet the unique needs of each client and their family. Serving Houston, Texas and surrounding communities, we are committed to helping clients live comfortably and independently while giving families the reassurance they deserve.\",\"imageOverlay\":{\"yearsExperience\":\"NEW\",\"yearsLabel\":\"Starting Fresh in Houston\"}},\"services\":{\"badge\":\"Our Home Care Services\",\"title\":\"Comprehensive Care Services\",\"titleHighlight\":\"in Houston, TX\",\"subtitle\":\"We offer 13 comprehensive home care services organized into 6 specialized categories, designed to meet your unique needs and enhance your quality of life in the comfort of your own home—from personal care and companionship to specialized memory care and 24-hour support.\",\"serviceCards\":[{\"title\":\"Personal Assistance Services (PAS)\",\"description\":\"Comprehensive daily living support including personal care (bathing, dressing, grooming, mobility, toileting), homemaking (housekeeping, meal prep, laundry), transportation & errands (appointments, prescriptions, shopping), and medication reminders with dignity and respect.\",\"detailedServices\":[\"Personal Care: bathing, grooming, dressing, toileting, incontinence care, mobility assistance\",\"Homemaking: light housekeeping, laundry, dishwashing, meal planning, organizing supplies\",\"Transportation: medical appointments, errands, prescriptions, groceries\",\"Medication Reminders: tracking, refill alerts, container assistance\"],\"stats\":{\"clients\":\"150+\",\"satisfaction\":\"98%\"},\"learnMore\":\"Learn more about PAS services\"},{\"title\":\"Companionship & Emotional Support\",\"description\":\"Social engagement, friendly conversation, reading, games, crafts, walks, emotional support, wellness check-ins (15-60 min daily visits), safety assessments, routine assistance, mail sorting, scheduling help, and optional pet care to combat loneliness and enhance wellbeing.\",\"detailedServices\":[\"Companionship: conversation, games, crafts, reading aloud, walks, outings\",\"Emotional Support: reassurance, safety supervision, fall prevention\",\"Wellness Support: daily check-ins, safety assessments, healthy habits\",\"Pet Assistance: feeding, walking, companionship for pets (optional add-on)\"],\"stats\":{\"clients\":\"120+\",\"satisfaction\":\"97%\"},\"learnMore\":\"Learn more about companionship care\"},{\"title\":\"Respite & Family Relief Care\",\"description\":\"Hourly, overnight, and weekend coverage for family caregivers. Includes temporary respite care, awake overnight supervision, sleep-in companions, continuous 24-hour care options for full-time needs, and emergency respite support to prevent caregiver burnout.\",\"detailedServices\":[\"Respite Care: hourly, weekend, emergency coverage for family relief\",\"Overnight Care: awake supervision, sleep-in companion support\",\"24-Hour Care: continuous daily support for full-time care needs\",\"Professional caregivers for peace of mind and family self-care time\"],\"stats\":{\"clients\":\"80+\",\"satisfaction\":\"99%\"},\"learnMore\":\"Learn more about respite care\"},{\"title\":\"Post-Hospital / Post-Surgery Support\",\"description\":\"Professional in-home care support to help individuals recover safely and comfortably after hospital discharge or surgical procedures. Includes assistance during recovery, mobility support, medication reminders, meal preparation, and coordination with healthcare providers.\",\"detailedServices\":[\"Recovery assistance after hospital discharge\",\"Post-surgery mobility and comfort support\",\"Medication reminders and follow-up visit coordination\",\"Meal preparation and rest assistance during recovery\"],\"stats\":{\"clients\":\"60+\",\"satisfaction\":\"96%\"},\"learnMore\":\"Learn more about post-hospital support\"},{\"title\":\"Specialty Service Packages\",\"description\":\"Expert packages for Memory & Cognitive Care (Alzheimer's/Dementia supervision, redirection, daily structure), Bedbound & Limited Mobility Care (repositioning, bed baths, Hoyer lift support), Post-Hospital/Post-Surgery Recovery, and Preferred Caregiver Matching for personalized continuity of care.\",\"detailedServices\":[\"Memory Care: Alzheimer's/Dementia supervision, calming techniques, mental engagement\",\"Bedbound Care: repositioning, bed baths, linen changes, incontinence care, ROM exercises\",\"Post-Hospital Support: recovery assistance, mobility support, medication reminders\",\"Preferred Caregiver Matching: custom care matching based on client preferences\"],\"stats\":{\"clients\":\"90+\",\"satisfaction\":\"98%\"},\"learnMore\":\"Learn more about specialty packages\"},{\"title\":\"End-of-Life Care\",\"description\":\"Comfort and compassion during life's final journey. Pain relief and comfort-focused care, emotional and spiritual support for clients and families, assistance with daily needs, dignified care, 24-hour options available, and compassionate presence for peace and dignity.\",\"detailedServices\":[\"Pain relief and comfort-focused care management\",\"Emotional and spiritual support for clients and families\",\"Assistance with daily tasks and personal care needs\",\"24-hour care options and compassionate presence available\"],\"stats\":{\"clients\":\"40+\",\"satisfaction\":\"100%\"},\"learnMore\":\"Learn more about end-of-life care\"}],\"learnMoreButton\":\"Learn More\",\"ctaSection\":{\"title\":\"Schedule Your Free In-Home Care Assessment Today!\",\"description\":\"Discover how we can help your loved one live independently and comfortably at home. Contact us today to get started.\",\"button\":\"Schedule a Free Assessment\"}},\"trust\":{\"title\":\"Why Houston Families <br> Trust Guided by Compassion\",\"trustPoints\":[{\"title\":\"Certified Home Care Professionals\",\"description\":\"Professional caregivers trained in comprehensive home care services who provide reliable, compassionate support with dignity and respect.\",\"icon\":\"◯\"},{\"title\":\"Personalized Care Plans\",\"description\":\"Customized home care services tailored to each client's unique needs, preferences, and independence goals.\",\"icon\":\"□\"},{\"title\":\"Local Houston Service\",\"description\":\"Dedicated to serving Houston and surrounding areas with reliable, consistent home care services.\",\"icon\":\"◐\"},{\"title\":\"Compassionate Professional Care\",\"description\":\"Committed to enhancing quality of life through professional home care services with genuine care and understanding.\",\"icon\":\"◆\"}]},\"testimonials\":{\"badge\":\"Client Testimonials\",\"title\":\"What Houston Families Say\",\"subtitle\":\"Read stories from families who have experienced the Guided by Compassion difference.\",\"clientFeedbackLabel\":\"Client Feedback\",\"testimonials\":[{\"feedback\":\"I live out of state, so I naturally worry about my mom. She's getting older and lives alone, but having the caregivers from Guided by Compassion come and check in on her really helps her out. I'm always grateful for them.\",\"name\":\"Hannah S.\",\"location\":\"Houston, TX\"},{\"feedback\":\"After my knee surgery, it was really hard to do the things that were so easy for me before. The support I got from Guided by Compassion gave me the support I needed to heal faster.\",\"name\":\"Stephen H.\",\"location\":\"Houston, TX\"},{\"feedback\":\"The team at Guided by Compassion have treated my father with respect. He tells me about how great the caregivers are over our phone calls. It's nice to know that he's in good hands.\",\"name\":\"Taylor A.\",\"location\":\"Houston, TX\"},{\"feedback\":\"When my mother needed specialized care for her dementia, Guided by Compassion provided exactly what we needed. Their caregivers are trained and compassionate, making such a difficult time more manageable for our family.\",\"name\":\"Maria G.\",\"location\":\"Houston, TX\"},{\"feedback\":\"The respite care services from Guided by Compassion have been a lifesaver. As a full-time caregiver for my husband, having trusted professionals take over for a few hours gives me the break I desperately need.\",\"name\":\"Patricia L.\",\"location\":\"Houston, TX\"},{\"feedback\":\"Guided by Compassion's end-of-life care services provided comfort and dignity during my father's final weeks. Their compassionate approach helped our entire family through an incredibly difficult time.\",\"name\":\"Robert M.\",\"location\":\"Houston, TX\"}],\"carouselControls\":{\"previousAriaLabel\":\"Previous testimonials\",\"nextAriaLabel\":\"Next testimonials\",\"goToSlideAriaLabel\":\"Go to slide\"}},\"parallax\":{\"text\":\"Want to spread the love?\"},\"refer\":{\"badge\":\"Refer With Confidence\",\"title\":\"Share the Gift of\",\"titleHighlight\":\"Professional Home Care Services\",\"description\":\"Know someone in Houston who could benefit from our 13 comprehensive home care services? From personal assistance and companionship to specialized memory care and 24-hour support, your referral helps us extend our compassionate care to more families in need.\",\"reasonsTitle\":\"Why Refer to Guided by Compassion?\",\"reasons\":[{\"title\":\"Certified Home Care Services\",\"description\":\"Our caregivers are thoroughly vetted, certified, and trained in comprehensive home care services to provide exceptional care.\"},{\"title\":\"Compassionate Professional Care\",\"description\":\"We treat each client with dignity, respect, and genuine care, focusing on their unique home care needs.\"},{\"title\":\"Local Houston Service\",\"description\":\"We value your trust and confidence in our services. Ask about our referral appreciation program for Houston families.\"}],\"ctaButton\":\"Refer Someone Today\",\"imageOverlay\":{\"mainText\":\"Making a difference\",\"subText\":\"in Houston families\"}},\"blog\":{\"badge\":\"Latest Articles\",\"title\":\"Care Tips & Insights\",\"subtitle\":\"Stay informed with our latest articles on home care, health tips, and family support strategies.\",\"articles\":[{\"title\":\"Essential Tips for Caring for Seniors at Home\",\"category\":\"Senior Care\",\"date\":\"1/15/2024\",\"readTime\":\"5 min read\",\"excerpt\":\"Learn practical strategies to create a safe and comfortable environment for elderly family members receiving home care.\"},{\"title\":\"Understanding Alzheimer's: A Family Guide\",\"category\":\"Health\",\"date\":\"1/12/2024\",\"readTime\":\"8 min read\",\"excerpt\":\"Comprehensive information about Alzheimer's disease and how families can provide the best support for their loved ones.\"},{\"title\":\"The Benefits of Companion Care for Elderly Adults\",\"category\":\"Companion Care\",\"date\":\"1/10/2024\",\"readTime\":\"6 min read\",\"excerpt\":\"Discover how companion care services can improve quality of life and provide emotional support for seniors.\"},{\"title\":\"Respite Care: Supporting Family Caregivers\",\"category\":\"Respite Care\",\"date\":\"1/8/2024\",\"readTime\":\"4 min read\",\"excerpt\":\"Learn how respite care services can help prevent caregiver burnout and maintain family well-being.\"},{\"title\":\"Creating a Safe Home Environment for Seniors\",\"category\":\"Safety\",\"date\":\"1/5/2024\",\"readTime\":\"7 min read\",\"excerpt\":\"Essential home modifications and safety tips to prevent falls and accidents for elderly residents.\"},{\"title\":\"Nutrition and Meal Planning for Seniors\",\"category\":\"Nutrition\",\"date\":\"1/3/2024\",\"readTime\":\"5 min read\",\"excerpt\":\"Important dietary considerations and meal planning strategies to maintain health and nutrition in older adults.\"}],\"readMoreButton\":\"Read more\",\"viewAllButton\":\"View All Articles\"},\"contact\":{\"badge\":\"Contact Us\",\"title\":\"Get in Touch\",\"subtitle\":\"Ready to learn more about our home care services? Contact Guided by Compassion today for a free consultation.\",\"infoTitle\":\"Contact Information\",\"contactInfo\":[{\"icon\":\"📧\",\"title\":\"Email Us\",\"details\":\"contact@guidedbycompassion.com\",\"subtext\":\"We'll respond within 24 hours\"},{\"icon\":\"📞\",\"title\":\"Call Us\",\"details\":\"713-325-0885\",\"subtext\":\"Mon-Fri: 9AM-5PM, On Call Sundays\"},{\"icon\":\"📍\",\"title\":\"Service Area\",\"details\":\"Houston, Texas and surrounding areas\",\"subtext\":\"Serving the greater Houston area\"}],\"form\":{\"fullNameLabel\":\"Full Name\",\"fullNamePlaceholder\":\"Enter your full name\",\"emailLabel\":\"Email Address\",\"emailPlaceholder\":\"Enter your email\",\"phoneLabel\":\"Phone Number\",\"phonePlaceholder\":\"Enter your phone number\",\"serviceLabel\":\"Service of Interest\",\"servicePlaceholder\":\"Select a service\",\"serviceOptions\":[\"Personal Assistance Services (PAS)\",\"Companionship & Emotional Support\",\"Respite & Family Relief Care\",\"Post-Hospital / Post-Surgery Support\",\"Specialty Service Packages\",\"End-of-Life Care\",\"Free Consultation\"],\"messageLabel\":\"Message\",\"messagePlaceholder\":\"Tell us about your care needs...\",\"submitButton\":\"Send Message\"}},\"newsletter\":{\"badge\":\"Stay Connected\",\"title\":\"Subscribe to Our Newsletter\",\"subtitle\":\"Stay updated with the latest home care tips, health information, and news from Guided by Compassion.\",\"formTitle\":\"Join Our Newsletter\",\"formSubtitle\":\"Get valuable home care tips, health insights, and updates delivered to your inbox.\",\"emailPlaceholder\":\"Enter your email address\",\"subscribeButton\":\"Subscribe\",\"successMessage\":\"✓ Thank you for subscribing! Check your email for confirmation.\",\"privacyText\":\"We respect your privacy. Unsubscribe at any time.\"},\"faq\":{\"badge\":\"FAQ\",\"title\":\"Frequently Asked Questions\",\"subtitle\":\"Find answers to common questions about our home care services and how we can help your family in Houston.\",\"questions\":[{\"question\":\"What home care services does Guided by Compassion provide?\",\"answer\":\"We offer 13 comprehensive home care services grouped into 6 categories: (1) Personal Assistance Services (PAS) - personal care, homemaking, transportation & errands, medication reminders; (2) Companionship & Emotional Support - social engagement, wellness check-ins, optional pet care; (3) Respite & Family Relief Care - hourly, overnight, and 24-hour care options; (4) Post-Hospital / Post-Surgery Support - recovery assistance after hospital discharge or surgical procedures; (5) Specialty Service Packages - memory/cognitive care, bedbound care, preferred caregiver matching; (6) End-of-Life Care - comfort and dignity-focused care. All services are provided by certified, background-checked caregivers in Houston.\"},{\"question\":\"What areas in Houston do you serve?\",\"answer\":\"We proudly serve the Great Houston area and surrounding communities including Harris, Montgomery, and Galveston counties. Our goal is to bring professional home care services directly to your doorstep throughout the greater Houston area.\"},{\"question\":\"Are you licensed and insured in Texas?\",\"answer\":\"Guided by Compassion is fully licensed and insured to provide peace of mind for you and your family. All of our caregivers are trained, thoroughly background-checked, and bonded.\"},{\"question\":\"How do you create personalized care plans?\",\"answer\":\"We start with a comprehensive assessment of your needs, preferences, and health conditions. Our team then develops a customized care plan that addresses specific requirements while maintaining dignity and independence.\"},{\"question\":\"What are your rates and do you accept insurance?\",\"answer\":\"Our rates vary depending on the type and level of care needed. We accept long-term care insurance, private pay (using Visa/Mastercard/Discover), and work with families to explore all payment options to ensure you receive the care you need. Contact us for a free consultation to discuss pricing and payment options.\"},{\"question\":\"What are your business hours?\",\"answer\":\"Our business hours are Monday to Friday (8am to 5pm), and On Call on the Weekends. We offer flexible scheduling to meet your care needs.\"},{\"question\":\"What if I'm not satisfied with the caregiver?\",\"answer\":\"Your satisfaction is our priority. If you're not completely satisfied with your caregiver, we'll work with you to address concerns and, if necessary, provide a replacement caregiver at no additional cost.\"},{\"question\":\"What makes your agency different from other home care providers?\",\"answer\":\"At Guided by Compassion Home Care, we combine professional care with genuine heart, where safety, comfort, and respect come first. Families work directly with our small, dedicated team—no call centers or corporate layers—so every decision is made with compassion and personal attention.\"},{\"question\":\"How do you screen and train your caregivers?\",\"answer\":\"All caregivers undergo thorough background checks, reference verification, and skills assessments before hire. Once onboard, they receive hands-on training focused on safety, communication, and compassionate, client-centered care.\"},{\"question\":\"What happens if my caregiver can't make it to a shift?\",\"answer\":\"Life happens, and if a caregiver is unavailable, our care team will do our best to immediately arrange a qualified replacement and keeps you informed every step of the way. We make sure care continues smoothly so your loved one is never left without support.\"}],\"ctaSection\":{\"title\":\"Still have questions?\",\"description\":\"Our team is here to help. Contact us for a free consultation.\",\"button\":\"Contact Us Today\"}},\"footer\":{\"companyName\":\"Guided by Compassion\",\"companyDescription\":\"Providing reliable care for your peace of mind in Houston and surrounding areas. Offering 13 comprehensive home care services including personal assistance, companionship, respite care, specialized memory care, and 24-hour support. Bringing compassionate caregivers to your doorstep with dignity, respect, and genuine human connection.\",\"badges\":[\"Qualified & Insured\",\"Qualified Caregivers\",\"Caregiver Matching\",\"Personalized Care Plans\"],\"sections\":{\"ourServices\":{\"title\":\"Our Home Care Services\",\"links\":[\"Personal Assistance Services (PAS)\",\"Companionship & Emotional Support\",\"Respite & Family Relief Care\",\"Post-Hospital / Post-Surgery Support\",\"Specialty Service Packages\",\"End-of-Life Care\"],\"ctaButton\":\"Schedule Assessment\"},\"quickLinks\":{\"title\":\"Quick Links\",\"links\":[\"About Us\",\"Our Services\",\"Careers\",\"Blog\",\"Contact\",\"Refer Us\"]},\"locations\":{\"title\":\"Our Locations\",\"links\":[\"Sugar Land\",\"Houston\",\"Friendswood\",\"Alvin\",\"Pearland\",\"Webster\",\"League City\",\"Clear Lake\",\"Deer Park\",\"Pasadena\",\"Seabrook\",\"Dickinson\",\"Santa Fe\",\"Missouri City\",\"Texas City\"]},\"contactInfo\":{\"title\":\"Contact Information\",\"location\":\"Houston, Texas\",\"serviceArea\":\"Houston, Texas and surrounding areas\",\"phone\":\"713-325-0885\",\"email\":\"contact@guidedbycompassion.com\"},\"businessHours\":{\"title\":\"Business Hours\",\"weekdays\":{\"days\":\"Monday - Friday:\",\"hours\":\"8:00 AM – 5:00 PM\"},\"weekends\":{\"days\":\"Saturday & Sunday:\",\"hours\":\"On Call\"},\"emergency\":{\"days\":\"\",\"hours\":\"\"}}},\"newsletter\":{\"title\":\"Stay Connected with Guided by Compassion\",\"description\":\"Get home care tips, updates, and news delivered to your inbox.\",\"emailPlaceholder\":\"Enter your email address\",\"subscribeButton\":\"Subscribe\"},\"copyright\":\"© 2026 Guided by Compassion. All rights reserved.\",\"tagline\":\"Serving the areas of Houston, Texas. Experts in providing compassionate in-home care. Offering 13 comprehensive services: personal care assistance, homemaking, transportation & errands, medication reminders, companionship & emotional support, wellness check-ins, pet assistance, respite & family relief, overnight & 24-hour care, post-hospital/post-surgery support, memory & cognitive care, bedbound care, and preferred caregiver matching.\"}}"));}),
"[project]/copy/contact.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"contactDetails":{"phone":"713-325-0885","phoneFormatted":"713-325-0885","phoneLink":"tel:7133250885","email":"contact@guidedbycompassion.com","emailLink":"mailto:contact@guidedbycompassion.com"},"images":{"hero":{"main":"/assets/p1.jpg"}},"hero":{"badge":"Contact Us","title":"Let's Start Your","titleHighlight":"Home Care Journey","description":"Ready to provide the best home care services for you or your loved one? Contact Guided by Compassion today for a free consultation. We're here to answer your questions and help you find the perfect home care solution in Houston.","stats":[{"number":"98%","label":"Client Satisfaction"},{"number":"Free","label":"Initial Consultation"},{"number":"Same Day","label":"Response Time"}]},"contactInfo":{"title":"Get in Touch","subtitle":"We're here to help you navigate your home care options. Reach out to us through any of these channels.","contactItems":[{"icon":"📞","title":"Call Us","details":"713-325-0885","subtext":"Available during business hours","link":"tel:7133250885"},{"icon":"📧","title":"Email Us","details":"contact@guidedbycompassion.com","subtext":"We respond within 24 hours","link":"mailto:contact@guidedbycompassion.com"},{"icon":"📍","title":"Service Area","details":"Houston, TX & Surrounding Areas","subtext":"Serving Houston and surrounding communities","link":null},{"icon":"🕐","title":"Business Hours","details":"Mon-Fri: 8AM-5PM, Sat & Sun: On Call","subtext":"On call support available on weekends","link":null}],"emergencyNotice":{"title":"Emergency Situations","text":"For immediate home care needs or emergencies, please call 911"}},"contactForm":{"title":"Send Us a Message","subtitle":"Fill out the form below and we'll get back to you as soon as possible.","successMessage":{"title":"Message Sent Successfully!","description":"Thank you for reaching out. We'll contact you within 24 hours."},"fields":{"name":{"label":"Full Name *","placeholder":"Enter your full name"},"email":{"label":"Email Address *","placeholder":"Enter your email"},"phone":{"label":"Phone Number","placeholder":"Enter your phone number"},"urgency":{"label":"Timeline *","placeholder":"Select timeline"},"service":{"label":"Service of Interest","placeholder":"Select a service (optional)"},"message":{"label":"Message *","placeholder":"Tell us about your home care needs, questions, or any specific requirements..."}},"options":{"services":[{"value":"personal-care","label":"Personal Assistance Services (PAS)"},{"value":"companion-care","label":"Companionship & Emotional Support"},{"value":"respite-care","label":"Respite & Family Relief Care"},{"value":"post-hospital-support","label":"Post-Hospital / Post-Surgery Support"},{"value":"specialized-care","label":"Specialty Service Packages"},{"value":"end-of-life-care","label":"End-of-Life Care"},{"value":"consultation","label":"Free Consultation"},{"value":"other","label":"Other"}],"urgency":[{"value":"immediate","label":"Immediate (Within 24 hours)"},{"value":"urgent","label":"Urgent (Within 3 days)"},{"value":"soon","label":"Soon (Within a week)"},{"value":"planning","label":"Planning ahead"}]},"submitButton":"Send Message","submittingButton":"Sending Message...","privacyNote":"By submitting this form, you agree to our privacy policy. We will never share your personal information with third parties."}});}),
"[project]/src/components/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gooeybtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gooeybtn.jsx [app-client] (ecmascript)");
// import ThemeToggle from './ThemeToggle'
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ContentContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/home.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$contact$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/contact.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function Header() {
    _s();
    const { homeData, contactData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const homeCopy = homeData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"];
    const contactCopy = contactData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$contact$2e$json__$28$json$29$__["default"];
    const [isServicesOpen, setIsServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
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
            return ({
                "Header.useEffect": ()=>{
                    document.body.style.overflow = 'unset';
                    document.body.style.overflowX = 'unset';
                    document.documentElement.style.overflowX = 'unset';
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        isMobileMenuOpen
    ]);
    // Close mobile menu on window resize if moving to desktop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleResize = {
                "Header.useEffect.handleResize": ()=>{
                    if (window.innerWidth > 768 && isMobileMenuOpen) {
                        setIsMobileMenuOpen(false);
                        setIsServicesOpen(false);
                    }
                }
            }["Header.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "Header.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "top-banner",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "top-banner-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "top-banner-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: contactCopy.contactDetails.phoneLink,
                                className: "top-banner-item",
                                title: "Call us",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "top-banner-icon",
                                        children: "📞"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.jsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "top-banner-text desktop-only",
                                        children: contactCopy.contactDetails.phone
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.jsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: contactCopy.contactDetails.emailLink,
                                className: "top-banner-item",
                                title: "Email us",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "top-banner-icon desktop-only",
                                        children: "📧"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.jsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "top-banner-text desktop-only",
                                        children: contactCopy.contactDetails.email
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.jsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header",
                "data-aos": "fade-down",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "header-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "logo",
                                "data-aos": "fade-right",
                                "data-aos-delay": "100",
                                onClick: closeMobileMenu,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "nav desktop-nav",
                                "data-aos": "fade-down",
                                "data-aos-delay": "200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "nav-list",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "nav-item dropdown",
                                            onMouseEnter: ()=>setIsServicesOpen(true),
                                            onMouseLeave: ()=>setIsServicesOpen(false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/services",
                                                    className: "nav-link dropdown-toggle",
                                                    children: [
                                                        homeCopy.header.navigation.services,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `dropdown-menu ${isServicesOpen ? 'show' : ''}`,
                                                    children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cta-buttons desktop-cta",
                                "data-aos": "fade-left",
                                "data-aos-delay": "300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gooeybtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "mobile-menu-btn",
                                onClick: handleMobileMenuToggle,
                                "aria-label": homeCopy.header.mobileMenu.toggleAriaLabel,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `hamburger ${isMobileMenuOpen ? 'active' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                            fileName: "[project]/src/components/Header.jsx",
                                            lineNumber: 149,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                            fileName: "[project]/src/components/Header.jsx",
                                            lineNumber: 150,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mobile-nav ${isMobileMenuOpen ? 'active' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mobile-nav-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mobile-nav-list",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "mobile-dropdown",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "mobile-nav-link dropdown-toggle",
                                                    onClick: handleServiceClick,
                                                    children: [
                                                        homeCopy.header.navigation.services,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `mobile-dropdown-menu ${isServicesOpen ? 'show' : ''}`,
                                                    children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mobile-cta-buttons",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(Header, "8/fQl3FL5h0qA/Jb9E8hS0kgGOU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gooeybtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gooeybtn.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
// import GradientBlinds from '../../backgrounds/GradientBlinds/GradientBlinds'
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ContentContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/home.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Hero() {
    _s();
    const { homeData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const homeCopy = homeData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"];
    // Array of all images from JSON
    const images = homeCopy.images.hero.rotatingImages;
    // Array of text content for each image
    const textContent = homeCopy.hero.rotatingContent;
    const contactButtonLabel = homeCopy?.header?.ctaButtons?.contactUs || 'Contact Us';
    // State to track current image index
    const [currentImageIndex, setCurrentImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Effect to cycle through images every 6 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const interval = setInterval({
                "Hero.useEffect.interval": ()=>{
                    setIsTransitioning(true);
                    setTimeout({
                        "Hero.useEffect.interval": ()=>{
                            setCurrentImageIndex({
                                "Hero.useEffect.interval": (prevIndex)=>(prevIndex + 1) % images.length
                            }["Hero.useEffect.interval"]);
                            setIsTransitioning(false);
                        }
                    }["Hero.useEffect.interval"], 600); // Half of transition duration
                }
            }["Hero.useEffect.interval"], 6000); // 6 seconds
            return ({
                "Hero.useEffect": ()=>clearInterval(interval)
            })["Hero.useEffect"]; // Cleanup on unmount
        }
    }["Hero.useEffect"], [
        images.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hero-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hero-content",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "left-content",
                    "data-aos": "fade-right",
                    "data-aos-delay": "100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-heading",
                            "data-aos": "fade-up",
                            "data-aos-delay": "300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: homeCopy.hero.mainHeading
                                }, void 0, false, {
                                    fileName: "[project]/src/components/hero.jsx",
                                    lineNumber: 49,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        homeCopy.hero.mainDescription,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/hero.jsx",
                                            lineNumber: 50,
                                            columnNumber: 60
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/hero.jsx",
                                    lineNumber: 50,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/hero.jsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cta-buttons",
                            "data-aos": "fade-up",
                            "data-aos-delay": "500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "desktop-primary-cta",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gooeybtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    extendby: 100,
                                    direction: "left",
                                    text: homeCopy.hero.ctaButton
                                }, void 0, false, {
                                    fileName: "[project]/src/components/hero.jsx",
                                    lineNumber: 65,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/hero.jsx",
                                lineNumber: 64,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero.jsx",
                            lineNumber: 63,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/hero.jsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "right-content",
                    "data-aos": "fade-left",
                    "data-aos-delay": "200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: images[currentImageIndex],
                            alt: "Compassionate home care services for seniors in Houston",
                            className: `hero-image ${isTransitioning ? 'transitioning-out' : 'transitioning-in'}`,
                            style: {
                                transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                opacity: isTransitioning ? 0 : 1,
                                transform: isTransitioning ? 'scale(1.1) translateY(-10px) rotateX(5deg)' : 'scale(1) translateY(0) rotateX(0deg)',
                                filter: isTransitioning ? 'blur(2px)' : 'blur(0px)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero.jsx",
                            lineNumber: 89,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "whole_page",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                    fileName: "[project]/src/components/hero.jsx",
                                    lineNumber: 112,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bottom",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "900",
                                            className: "blur_arrow",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsArrowUpRight"], {
                                                color: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hero.jsx",
                                                lineNumber: 116,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero.jsx",
                                            lineNumber: 115,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "1000",
                                            className: "info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "heading",
                                                    style: {
                                                        transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                                        opacity: isTransitioning ? 0 : 1,
                                                        transform: isTransitioning ? 'translateX(-30px) translateY(-10px)' : 'translateX(0) translateY(0)',
                                                        filter: isTransitioning ? 'blur(1px)' : 'blur(0px)'
                                                    },
                                                    children: textContent[currentImageIndex].heading
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/hero.jsx",
                                                    lineNumber: 119,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "para pmain",
                                                    style: {
                                                        transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                                        transitionDelay: '0.1s',
                                                        opacity: isTransitioning ? 0 : 1,
                                                        transform: isTransitioning ? 'translateX(-20px) translateY(-5px)' : 'translateX(0) translateY(0)',
                                                        filter: isTransitioning ? 'blur(1px)' : 'blur(0px)'
                                                    },
                                                    children: textContent[currentImageIndex].description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/hero.jsx",
                                                    lineNumber: 132,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/hero.jsx",
                                            lineNumber: 118,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/hero.jsx",
                                    lineNumber: 113,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/hero.jsx",
                            lineNumber: 103,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/hero.jsx",
                    lineNumber: 88,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero.jsx",
            lineNumber: 44,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/hero.jsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
_s(Hero, "eiofFGd180kU0WTrxFm46LT55LQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/About.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ContentContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/home.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function About() {
    _s();
    const { homeData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const homeCopy = homeData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "about-section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "about-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "about-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "about-badge",
                                "data-aos": "fade-up",
                                "data-aos-delay": "100",
                                children: homeCopy.about.badge
                            }, void 0, false, {
                                fileName: "[project]/src/components/About.jsx",
                                lineNumber: 15,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "about-title",
                                "data-aos": "fade-up",
                                "data-aos-delay": "200",
                                children: [
                                    homeCopy.about.title,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "title-highlight",
                                        children: homeCopy.about.titleHighlight
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About.jsx",
                                        lineNumber: 20,
                                        columnNumber: 52
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/About.jsx",
                                lineNumber: 19,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "about-description",
                                "data-aos": "fade-up",
                                "data-aos-delay": "300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: homeCopy.about.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.jsx",
                                    lineNumber: 24,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/About.jsx",
                                lineNumber: 23,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/About.jsx",
                        lineNumber: 14,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about-image",
                        "data-aos": "fade-left",
                        "data-aos-delay": "300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: homeCopy.images.about.main,
                            alt: "Compassionate caregiving"
                        }, void 0, false, {
                            fileName: "[project]/src/components/About.jsx",
                            lineNumber: 31,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/About.jsx",
                        lineNumber: 30,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/About.jsx",
                lineNumber: 13,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/About.jsx",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/About.jsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_s(About, "JwGl05O+p60EN55v0P9zwPa1PXI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c = About;
const __TURBOPACK__default__export__ = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Services.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ContentContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/home.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Services({ cityName }) {
    _s();
    const { homeData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const homeCopy = homeData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"];
    const services = homeCopy.services.serviceCards.map((service, index)=>({
            id: index + 1,
            title: service.title,
            image: homeCopy.images.services.serviceImages[index],
            description: service.description,
            stats: service.stats,
            verified: true
        }));
    const badge = cityName ? `Our Services in ${cityName}` : homeCopy.services.badge;
    const title = cityName ? 'Home Care Services' : homeCopy.services.title;
    const highlight = cityName ? `in ${cityName}, TX` : homeCopy.services.titleHighlight;
    const subtitle = cityName ? `Every service is delivered by trained, compassionate caregivers and tailored to the unique needs of each individual and family in ${cityName}, TX.` : homeCopy.services.subtitle;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "services-section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "services-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "services-header",
                    "data-aos": "fade-up",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "services-badge",
                            children: badge
                        }, void 0, false, {
                            fileName: "[project]/src/components/Services.jsx",
                            lineNumber: 31,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "services-title",
                            children: [
                                title,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "title-highlight",
                                    children: highlight
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Services.jsx",
                                    lineNumber: 33,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Services.jsx",
                            lineNumber: 32,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "services-subtitle",
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/components/Services.jsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Services.jsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "services-grid",
                    children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "service-card",
                            "data-aos": "fade-up",
                            "data-aos-delay": `${(index + 1) * 100}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "service-img",
                                    src: service.image,
                                    alt: service.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Services.jsx",
                                    lineNumber: 48,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "service-content_1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "service-info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "service-name",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: service.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Services.jsx",
                                                            lineNumber: 53,
                                                            columnNumber: 41
                                                        }, this),
                                                        service.verified && // <div className="verified-badge">✓</div>
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "verified-badge",
                                                            children: homeCopy.images.services.verifiedIcon
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Services.jsx",
                                                            lineNumber: 56,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Services.jsx",
                                                    lineNumber: 52,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "service-desc",
                                                    children: service.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Services.jsx",
                                                    lineNumber: 59,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Services.jsx",
                                            lineNumber: 51,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "service-cta",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "service-btn",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: homeCopy.services.learnMoreButton
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Services.jsx",
                                                        lineNumber: 75,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "btn-icon",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Services.jsx",
                                                        lineNumber: 76,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Services.jsx",
                                                lineNumber: 74,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Services.jsx",
                                            lineNumber: 62,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Services.jsx",
                                    lineNumber: 50,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, service.id, true, {
                            fileName: "[project]/src/components/Services.jsx",
                            lineNumber: 42,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Services.jsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "services-cta-section",
                    "data-aos": "fade-up",
                    "data-aos-delay": "200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "cta-title",
                            children: homeCopy.services.ctaSection.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/Services.jsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "cta-description1",
                            children: homeCopy.services.ctaSection.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/Services.jsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "cta-button",
                                children: homeCopy.services.ctaSection.button
                            }, void 0, false, {
                                fileName: "[project]/src/components/Services.jsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Services.jsx",
                            lineNumber: 89,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Services.jsx",
                    lineNumber: 84,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Services.jsx",
            lineNumber: 29,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Services.jsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_s(Services, "JwGl05O+p60EN55v0P9zwPa1PXI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c = Services;
const __TURBOPACK__default__export__ = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Trust.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ContentContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/home.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Trust() {
    _s();
    const { homeData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const homeCopy = homeData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"];
    const trustPoints = homeCopy.trust.trustPoints.map((point, index)=>({
            id: index + 1,
            title: point.title,
            description: point.description,
            icon: point.icon
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "trust-section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "trust-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "trust-header",
                    "data-aos": "fade-up",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "trust-title",
                        dangerouslySetInnerHTML: {
                            __html: homeCopy.trust.title
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Trust.jsx",
                        lineNumber: 20,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Trust.jsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "trust-grid",
                    children: trustPoints.map((point, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "trust-item",
                            "data-aos": "fade-up",
                            "data-aos-delay": `${(index + 1) * 150}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "trust-icon",
                                    children: point.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Trust.jsx",
                                    lineNumber: 31,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "trust-item-title",
                                    children: point.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Trust.jsx",
                                    lineNumber: 34,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "trust-item-description",
                                    children: point.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Trust.jsx",
                                    lineNumber: 35,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, point.id, true, {
                            fileName: "[project]/src/components/Trust.jsx",
                            lineNumber: 25,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Trust.jsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Trust.jsx",
            lineNumber: 18,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Trust.jsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_s(Trust, "JwGl05O+p60EN55v0P9zwPa1PXI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c = Trust;
const __TURBOPACK__default__export__ = Trust;
var _c;
__turbopack_context__.k.register(_c, "Trust");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Testimonials.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ContentContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/home.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Testimonials({ cityName }) {
    _s();
    const { homeData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const homeCopy = homeData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"];
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAutoPlaying, setIsAutoPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [itemsPerSlide, setItemsPerSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const testimonials = homeCopy.testimonials.testimonials.map((testimonial, index)=>({
            id: index + 1,
            feedback: testimonial.feedback,
            name: testimonial.name,
            location: testimonial.location,
            image: homeCopy.images.testimonials.profileImages[index]
        }));
    const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);
    // Handle responsive items per slide
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonials.useEffect": ()=>{
            const handleResize = {
                "Testimonials.useEffect.handleResize": ()=>{
                    const width = window.innerWidth;
                    if (width <= 600) {
                        setItemsPerSlide(1); // Mobile: 1 testimonial
                    } else if (width <= 1024) {
                        setItemsPerSlide(2); // Tablet: 2 testimonials
                    } else {
                        setItemsPerSlide(3); // Desktop: 3 testimonials
                    }
                }
            }["Testimonials.useEffect.handleResize"];
            // Set initial value
            handleResize();
            // Add event listener
            window.addEventListener('resize', handleResize);
            // Cleanup
            return ({
                "Testimonials.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["Testimonials.useEffect"];
        }
    }["Testimonials.useEffect"], []);
    // Reset current slide when itemsPerSlide changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonials.useEffect": ()=>{
            setCurrentSlide(0);
        }
    }["Testimonials.useEffect"], [
        itemsPerSlide
    ]);
    // Auto-play functionality
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonials.useEffect": ()=>{
            if (!isAutoPlaying) return;
            const interval = setInterval({
                "Testimonials.useEffect.interval": ()=>{
                    setCurrentSlide({
                        "Testimonials.useEffect.interval": (prev)=>(prev + 1) % totalSlides
                    }["Testimonials.useEffect.interval"]);
                }
            }["Testimonials.useEffect.interval"], 5000);
            return ({
                "Testimonials.useEffect": ()=>clearInterval(interval)
            })["Testimonials.useEffect"];
        }
    }["Testimonials.useEffect"], [
        isAutoPlaying,
        totalSlides
    ]);
    const nextSlide = ()=>{
        setCurrentSlide((prev)=>(prev + 1) % totalSlides);
        setIsAutoPlaying(false);
    };
    const prevSlide = ()=>{
        setCurrentSlide((prev)=>(prev - 1 + totalSlides) % totalSlides);
        setIsAutoPlaying(false);
    };
    const goToSlide = (index)=>{
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };
    const getCurrentTestimonials = ()=>{
        const start = currentSlide * itemsPerSlide;
        const end = start + itemsPerSlide;
        return testimonials.slice(start, end);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "testimonials-section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "testimonials-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "testimonials-header",
                    "data-aos": "fade-up",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "testimonials-badge",
                            children: cityName ? `Families in ${cityName} Speak` : homeCopy.testimonials.badge
                        }, void 0, false, {
                            fileName: "[project]/src/components/Testimonials.jsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "testimonials-title",
                            children: cityName ? `What ${cityName} Families Say About Our Care` : homeCopy.testimonials.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/Testimonials.jsx",
                            lineNumber: 89,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "testimonials-subtitle",
                            children: cityName ? `Real experiences from families we've served in ${cityName}, TX and the Greater Houston area.` : homeCopy.testimonials.subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/components/Testimonials.jsx",
                            lineNumber: 90,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Testimonials.jsx",
                    lineNumber: 87,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "carousel-container",
                    "data-aos": "fade-up",
                    "data-aos-delay": "200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "carousel-wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "carousel-nav prev",
                                    onClick: prevSlide,
                                    "aria-label": homeCopy.testimonials.carouselControls.previousAriaLabel,
                                    children: "←"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Testimonials.jsx",
                                    lineNumber: 97,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "testimonials-carousel",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "testimonials-track",
                                        style: {
                                            transform: `translateX(-${currentSlide * 100}%)`
                                        },
                                        children: Array.from({
                                            length: totalSlides
                                        }).map((_, slideIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "testimonials-slide",
                                                children: testimonials.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimonial-card",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testimonial-header",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "testimonial-label",
                                                                        children: homeCopy.testimonials.clientFeedbackLabel
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Testimonials.jsx",
                                                                        lineNumber: 111,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "quote-icon",
                                                                        children: '"'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Testimonials.jsx",
                                                                        lineNumber: 112,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Testimonials.jsx",
                                                                lineNumber: 110,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testimonial-content",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "testimonial-text",
                                                                    children: testimonial.feedback
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Testimonials.jsx",
                                                                    lineNumber: 116,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Testimonials.jsx",
                                                                lineNumber: 115,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testimonial-footer",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "client-profile",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: testimonial.image,
                                                                            alt: testimonial.name,
                                                                            className: "client-avatar"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Testimonials.jsx",
                                                                            lineNumber: 123,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "client-info",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                    className: "client-name",
                                                                                    children: testimonial.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/Testimonials.jsx",
                                                                                    lineNumber: 129,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "client-location",
                                                                                    children: testimonial.location
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/Testimonials.jsx",
                                                                                    lineNumber: 130,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/Testimonials.jsx",
                                                                            lineNumber: 128,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/Testimonials.jsx",
                                                                    lineNumber: 122,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Testimonials.jsx",
                                                                lineNumber: 121,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, testimonial.id, true, {
                                                        fileName: "[project]/src/components/Testimonials.jsx",
                                                        lineNumber: 109,
                                                        columnNumber: 45
                                                    }, this))
                                            }, slideIndex, false, {
                                                fileName: "[project]/src/components/Testimonials.jsx",
                                                lineNumber: 107,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Testimonials.jsx",
                                        lineNumber: 102,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Testimonials.jsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "carousel-nav next",
                                    onClick: nextSlide,
                                    "aria-label": homeCopy.testimonials.carouselControls.nextAriaLabel,
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Testimonials.jsx",
                                    lineNumber: 141,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Testimonials.jsx",
                            lineNumber: 96,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "carousel-indicators",
                            children: Array.from({
                                length: totalSlides
                            }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `indicator ${index === currentSlide ? 'active' : ''}`,
                                    onClick: ()=>goToSlide(index),
                                    "aria-label": `${homeCopy.testimonials.carouselControls.goToSlideAriaLabel} ${index + 1}`
                                }, index, false, {
                                    fileName: "[project]/src/components/Testimonials.jsx",
                                    lineNumber: 148,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Testimonials.jsx",
                            lineNumber: 146,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Testimonials.jsx",
                    lineNumber: 95,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Testimonials.jsx",
            lineNumber: 86,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Testimonials.jsx",
        lineNumber: 85,
        columnNumber: 9
    }, this);
}
_s(Testimonials, "vAmPMO5r3M1Jvx8TcPPMJQFqELE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c = Testimonials;
const __TURBOPACK__default__export__ = Testimonials;
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SplitText.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const SplitText = ({ text, className = "", delay = 100, duration = 0.8, ease = "power3.out", from = {
    opacity: 0,
    y: 50,
    rotateX: -90
}, to = {
    opacity: 1,
    y: 0,
    rotateX: 0
}, threshold = 0.1, tag = "h1", trigger = false })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [fontsLoaded, setFontsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplitText.useEffect": ()=>{
            if (document.fonts.status === "loaded") {
                setFontsLoaded(true);
            } else {
                document.fonts.ready.then({
                    "SplitText.useEffect": ()=>{
                        setFontsLoaded(true);
                    }
                }["SplitText.useEffect"]);
            }
        }
    }["SplitText.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "SplitText.useGSAP": ()=>{
            if (!ref.current || !text || !fontsLoaded) return;
            const el = ref.current;
            // Split text into characters
            const chars = text.split('').map({
                "SplitText.useGSAP.chars": (char, index)=>{
                    if (char === ' ') {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "split-char space",
                            children: " "
                        }, index, false, {
                            fileName: "[project]/src/components/SplitText.jsx",
                            lineNumber: 42,
                            columnNumber: 18
                        }, ("TURBOPACK compile-time value", void 0));
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                }
            }["SplitText.useGSAP.chars"]);
            // Update the element with split characters
            el.innerHTML = '';
            chars.forEach({
                "SplitText.useGSAP": (char)=>{
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = char.props.children === '\u00A0' ? '&nbsp;' : char.props.children;
                    const spanEl = document.createElement('span');
                    spanEl.className = 'split-char';
                    spanEl.style.display = 'inline-block';
                    spanEl.innerHTML = tempDiv.innerHTML;
                    el.appendChild(spanEl);
                }
            }["SplitText.useGSAP"]);
            const splitChars = el.querySelectorAll('.split-char');
            // Set initial state
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(splitChars, from);
            // Create animation timeline without ScrollTrigger if trigger prop is passed
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
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
            return ({
                "SplitText.useGSAP": ()=>{
                    if (el._gsapTimeline) {
                        el._gsapTimeline.kill();
                    }
                }
            })["SplitText.useGSAP"];
        }
    }["SplitText.useGSAP"], {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplitText.useEffect": ()=>{
            if (!ref.current || !ref.current._gsapTimeline) return;
            if (trigger) {
                ref.current._gsapTimeline.play();
            } else {
                ref.current._gsapTimeline.reverse();
            }
        }
    }["SplitText.useEffect"], [
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                ref: ref,
                style: style,
                className: classes
            }, void 0, false, {
                fileName: "[project]/src/components/SplitText.jsx",
                lineNumber: 117,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case "h2":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                ref: ref,
                style: style,
                className: classes
            }, void 0, false, {
                fileName: "[project]/src/components/SplitText.jsx",
                lineNumber: 119,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case "h3":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                ref: ref,
                style: style,
                className: classes
            }, void 0, false, {
                fileName: "[project]/src/components/SplitText.jsx",
                lineNumber: 121,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(SplitText, "VM+EwUpySmbzY91BNAahns4G0MU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = SplitText;
const __TURBOPACK__default__export__ = SplitText;
var _c;
__turbopack_context__.k.register(_c, "SplitText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Parallax.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplitText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SplitText.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ContentContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/home.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Parallax() {
    _s();
    const { homeData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const homeCopy = homeData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"];
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const spacerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Parallax.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Parallax.useEffect": ([entry])=>{
                    setIsVisible(entry.isIntersecting);
                }
            }["Parallax.useEffect"], {
                threshold: 0.1,
                rootMargin: '0px 0px -50% 0px'
            });
            if (spacerRef.current) {
                observer.observe(spacerRef.current);
            }
            return ({
                "Parallax.useEffect": ()=>{
                    if (spacerRef.current) {
                        observer.unobserve(spacerRef.current);
                    }
                }
            })["Parallax.useEffect"];
        }
    }["Parallax.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: spacerRef,
                className: "parallax-spacer"
            }, void 0, false, {
                fileName: "[project]/src/components/Parallax.jsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `parallax-section ${isVisible ? 'visible' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "parallax-content",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplitText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(Parallax, "PumhkTsChIDqeComAc/prm0U9vU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c = Parallax;
const __TURBOPACK__default__export__ = Parallax;
var _c;
__turbopack_context__.k.register(_c, "Parallax");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Refer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ContentContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/home.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Refer({ cityName }) {
    _s();
    const { homeData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const homeCopy = homeData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"];
    const referralReasons = homeCopy.refer.reasons.map((reason, index)=>({
            id: index + 1,
            title: reason.title,
            description: reason.description
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "refer-section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "refer-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "refer-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "refer-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "refer-badge",
                                "data-aos": "fade-up",
                                "data-aos-delay": "100",
                                children: cityName ? `Refer a Family in ${cityName}` : homeCopy.refer.badge
                            }, void 0, false, {
                                fileName: "[project]/src/components/Refer.jsx",
                                lineNumber: 22,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "refer-title",
                                "data-aos": "fade-up",
                                "data-aos-delay": "200",
                                children: cityName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        homeCopy.refer.title,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "title-highlight",
                                            children: [
                                                "a Neighbor in ",
                                                cityName
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Refer.jsx",
                                            lineNumber: 28,
                                            columnNumber: 60
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        homeCopy.refer.title,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "title-highlight",
                                            children: homeCopy.refer.titleHighlight
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Refer.jsx",
                                            lineNumber: 29,
                                            columnNumber: 60
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Refer.jsx",
                                lineNumber: 26,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "refer-description",
                                "data-aos": "fade-up",
                                "data-aos-delay": "300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: cityName ? `Know someone in ${cityName}, TX who could benefit from compassionate home care? Refer them to Guided by Compassion and help connect them with the support they deserve.` : homeCopy.refer.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Refer.jsx",
                                    lineNumber: 34,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Refer.jsx",
                                lineNumber: 33,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "refer-reasons",
                                "data-aos": "fade-up",
                                "data-aos-delay": "400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "reasons-title",
                                        children: homeCopy.refer.reasonsTitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Refer.jsx",
                                        lineNumber: 43,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "reasons-list",
                                        children: referralReasons.map((reason, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "reason-item",
                                                "data-aos": "fade-up",
                                                "data-aos-delay": `${500 + index * 100}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "reason-icon",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Refer.jsx",
                                                        lineNumber: 47,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "reason-content",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "reason-title",
                                                                children: reason.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Refer.jsx",
                                                                lineNumber: 49,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "reason-description",
                                                                children: reason.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Refer.jsx",
                                                                lineNumber: 50,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Refer.jsx",
                                                        lineNumber: 48,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, reason.id, true, {
                                                fileName: "[project]/src/components/Refer.jsx",
                                                lineNumber: 46,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Refer.jsx",
                                        lineNumber: 44,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Refer.jsx",
                                lineNumber: 42,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "refer-cta",
                                "data-aos": "fade-up",
                                "data-aos-delay": "800",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/refer-us",
                                    className: "refer-button",
                                    children: homeCopy.refer.ctaButton
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Refer.jsx",
                                    lineNumber: 58,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Refer.jsx",
                                lineNumber: 57,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Refer.jsx",
                        lineNumber: 21,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "refer-image",
                        "data-aos": "fade-left",
                        "data-aos-delay": "300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: homeCopy.images.refer.main,
                            alt: "Caregiver helping senior"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Refer.jsx",
                            lineNumber: 65,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Refer.jsx",
                        lineNumber: 64,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Refer.jsx",
                lineNumber: 20,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Refer.jsx",
            lineNumber: 19,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Refer.jsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
_s(Refer, "JwGl05O+p60EN55v0P9zwPa1PXI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c = Refer;
const __TURBOPACK__default__export__ = Refer;
var _c;
__turbopack_context__.k.register(_c, "Refer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/blogsData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogCategories",
    ()=>blogCategories,
    "blogsData",
    ()=>blogsData,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/home.json (json)");
;
const blogCategories = [
    'All',
    'Senior Care',
    'Health & Wellness',
    'Safety',
    'Nutrition',
    'Mental Health',
    'Family Support',
    'Care Tips'
];
const blogsData = [
    {
        id: 1,
        title: "The Complete Guide to Creating a Safe Home Environment for Seniors",
        category: "Safety",
        date: "January 15, 2024",
        readTime: "8 min read",
        excerpt: "Learn essential home modifications and safety tips to prevent falls and accidents while maintaining independence for elderly family members.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"].images.blog.articleImages[0],
        content: `Creating a safe home environment for seniors is one of the most important steps you can take to ensure their well-being and independence. As we age, our physical abilities may change, making certain areas of the home potentially hazardous. However, with proper planning and modifications, you can create a space that promotes both safety and comfort.

Falls are the leading cause of injury among seniors, with one in four adults aged 65 and older experiencing a fall each year. The good news is that many of these accidents are preventable with the right home modifications and safety measures.

Start with a comprehensive home safety assessment. Walk through each room with fresh eyes, looking for potential hazards such as loose rugs, poor lighting, cluttered walkways, or unstable furniture. Pay special attention to areas where your loved one spends the most time.

Lighting is crucial for preventing falls and accidents. Install bright, even lighting throughout the home, paying special attention to staircases, hallways, and entryways. Consider motion-activated lights for nighttime navigation, and ensure light switches are easily accessible from bed.

Bathroom safety is particularly important, as this is where many falls occur. Install grab bars near the toilet and in the shower or bathtub. Consider a shower chair or bench, and use non-slip mats both inside and outside the tub or shower. A raised toilet seat can also make bathroom use safer and more comfortable.

Remove or secure loose rugs, which can be tripping hazards. If rugs are necessary, use non-slip backing or double-sided tape to keep them in place. Ensure all walkways are clear of clutter, electrical cords, and obstacles.

Install handrails on both sides of staircases, and consider adding a second railing at a lower height if needed. Make sure all steps are in good repair and clearly marked with contrasting tape if necessary.

In the kitchen, organize frequently used items at waist level to avoid reaching up high or bending down low. Install lever-style handles on faucets and doors, which are easier to operate than round knobs. Consider automatic shut-off devices for stoves and other appliances.

Technology can also play a role in home safety. Medical alert systems, smart home devices, and monitoring systems can provide peace of mind for both seniors and their families. These tools can help summon help quickly in case of an emergency.

Remember that home safety modifications should be personalized based on your loved one's specific needs and abilities. What works for one person may not be appropriate for another. Consider consulting with an occupational therapist who specializes in home safety assessments for personalized recommendations.

Regular maintenance is also key to home safety. Check and replace smoke detector batteries regularly, ensure all safety equipment is in good working order, and update modifications as needs change over time.

Creating a safe home environment is an ongoing process, not a one-time project. By taking a proactive approach and making gradual improvements, you can help your loved one maintain their independence while staying safe and comfortable in their own home.`,
        tags: [
            "Home Safety",
            "Fall Prevention",
            "Independence",
            "Modifications"
        ],
        author: {
            name: "Dr. Sarah Johnson",
            title: "Occupational Therapist & Home Safety Specialist",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"].images.blog.profileImages[0]
        }
    },
    {
        id: 2,
        title: "Understanding Alzheimer's Disease: A Comprehensive Family Guide",
        category: "Health & Wellness",
        date: "January 12, 2024",
        readTime: "12 min read",
        excerpt: "A detailed guide to understanding Alzheimer's disease, its stages, symptoms, and how families can provide the best support and care for their loved ones.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"].images.blog.articleImages[1],
        content: `Alzheimer's disease affects millions of families worldwide, yet many people don't fully understand what it is or how it progresses. This comprehensive guide will help you understand the disease and learn how to provide the best possible care and support for your loved one.

Alzheimer's disease is a progressive brain disorder that slowly destroys memory and thinking skills. It's the most common cause of dementia, accounting for 60-80% of all dementia cases. The disease is named after Dr. Alois Alzheimer, who first described it in 1906 after examining the brain tissue of a woman who had died of an unusual mental illness.

The disease progresses through several stages, each with distinct characteristics and care needs. Understanding these stages can help families prepare for what's ahead and make informed decisions about care.

In the early stage, symptoms may be subtle and often attributed to normal aging. Your loved one might experience mild memory loss, difficulty finding words, or challenges with complex tasks like managing finances. They may become more withdrawn or show changes in mood or personality. At this stage, they can still live independently with some support.

The middle stage is typically the longest, lasting several years. Memory loss becomes more pronounced, and your loved one may have difficulty recognizing family members or remembering recent events. They might become confused about where they are or what time it is. Behavioral changes can include restlessness, aggression, or wandering. Daily activities like dressing, bathing, and eating may require assistance.

The late stage is characterized by severe cognitive decline. Your loved one may lose the ability to communicate verbally, recognize loved ones, or care for themselves. They become vulnerable to infections and other medical complications. Round-the-clock care is typically required at this stage.

While there's currently no cure for Alzheimer's disease, there are treatments that may help slow its progression and manage symptoms. Medications like cholinesterase inhibitors and memantine may provide some benefit, particularly in the early to moderate stages. It's important to work closely with healthcare providers to develop an appropriate treatment plan.

Creating a supportive environment is crucial for someone with Alzheimer's. Maintain familiar routines and surroundings as much as possible. Use clear, simple communication and be patient when your loved one has difficulty understanding or expressing themselves. Provide gentle reminders and cues to help them navigate daily activities.

Safety considerations become increasingly important as the disease progresses. Remove potential hazards from the home, install locks on cabinets containing dangerous items, and consider using tracking devices if wandering becomes an issue. Ensure your loved one wears identification and keep recent photos available.

Caring for someone with Alzheimer's can be emotionally and physically demanding. It's essential for caregivers to take care of themselves too. Seek support from family, friends, and community resources. Consider joining a support group for Alzheimer's caregivers, where you can share experiences and learn from others facing similar challenges.

Plan for the future while your loved one can still participate in decision-making. Discuss their wishes regarding care, living arrangements, and end-of-life preferences. Complete important legal documents like advance directives, power of attorney, and wills.

Remember that while Alzheimer's disease changes the person you love, they still need your love, patience, and understanding. Focus on making each day as meaningful and comfortable as possible, cherishing the moments of connection and joy that are still possible.

Research into Alzheimer's disease continues to advance, offering hope for better treatments and eventually a cure. Stay informed about new developments and consider participating in research studies if appropriate for your situation.

Every person's journey with Alzheimer's is unique, and there's no single right way to provide care. Trust your instincts, seek professional guidance when needed, and remember that providing love and support in whatever form possible is what matters most.`,
        tags: [
            "Alzheimer's",
            "Dementia Care",
            "Family Support",
            "Caregiver Resources"
        ],
        author: {
            name: "Dr. Michael Chen",
            title: "Neurologist & Dementia Care Specialist",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"].images.blog.profileImages[1]
        }
    },
    {
        id: 3,
        title: "The Power of Companion Care: Combating Loneliness in Seniors",
        category: "Mental Health",
        date: "January 10, 2024",
        readTime: "6 min read",
        excerpt: "Discover how companion care services can significantly improve quality of life, provide emotional support, and reduce social isolation among elderly adults.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"].images.blog.articleImages[2],
        content: `Loneliness among seniors has reached epidemic proportions, with serious consequences for both physical and mental health. Studies show that social isolation can be as harmful to health as smoking 15 cigarettes a day. Companion care offers a powerful solution to this growing problem, providing not just practical support but meaningful human connection.

As we age, many factors can contribute to social isolation. Friends and family members may move away or pass away, mobility issues can make it difficult to get out and socialize, and health problems may limit social activities. The COVID-19 pandemic has further exacerbated these issues, leaving many seniors feeling more isolated than ever.

The health impacts of loneliness are profound and well-documented. Chronic loneliness has been linked to increased risk of depression, anxiety, cognitive decline, heart disease, and stroke. It can weaken the immune system, increase inflammation, and even shorten lifespan. The good news is that companion care can help address these issues by providing regular social interaction and emotional support.

Companion care goes beyond basic caregiving tasks to focus on building meaningful relationships and enhancing quality of life. A companion caregiver provides friendship, conversation, and emotional support while also assisting with light daily activities. This type of care recognizes that social and emotional needs are just as important as physical needs.

The benefits of companion care extend far beyond simply having someone to talk to. Regular social interaction can help maintain cognitive function, improve mood, and provide motivation to stay active and engaged. Companions can encourage participation in hobbies and interests, help maintain social connections, and introduce new activities that bring joy and purpose.

Companion caregivers can assist with a wide range of activities that promote social engagement and well-being. They might accompany seniors to social events, medical appointments, or shopping trips. They can help with technology to stay connected with family and friends, assist with hobbies and crafts, or simply provide companionship during meals and daily activities.

One of the unique aspects of companion care is its flexibility. Services can be customized to meet individual needs and preferences. Some seniors might benefit from daily visits, while others may only need companionship a few times a week. The focus is always on building a genuine relationship based on mutual respect and understanding.

When choosing a companion care provider, it's important to find someone who matches well with your loved one's personality and interests. Look for caregivers who are patient, compassionate, and genuinely enjoy spending time with seniors. Many agencies provide matching services to help ensure compatibility between caregivers and clients.

Family members often worry about how their loved one will react to having a companion caregiver. It's natural for seniors to be hesitant about accepting help from a stranger. Start slowly, perhaps with short visits focused on specific activities or outings. Allow time for the relationship to develop naturally, and be patient if there's initial resistance.

The impact of companion care often extends to family members as well. Knowing that their loved one has regular social interaction and support can provide tremendous peace of mind for adult children and other family members. It can also reduce the pressure on family members to be the sole source of social support.

Technology can enhance companion care by facilitating connections with family and friends who live far away. Companion caregivers can help seniors use video calling, social media, and other technologies to stay connected with loved ones. They can also introduce seniors to online communities and activities that match their interests.

The investment in companion care is an investment in overall health and well-being. While the primary goal is to provide social and emotional support, the benefits often include improved physical health, better medication compliance, enhanced safety, and greater overall life satisfaction.

Remember that it's never too early to consider companion care. You don't have to wait until social isolation becomes severe or health problems develop. Companion care can be preventive, helping maintain social connections and emotional well-being before problems arise.

If you're considering companion care for a loved one, start by having an open conversation about their needs and preferences. Explain how companion care can enhance their quality of life while helping them maintain independence. With the right companion caregiver, your loved one can enjoy meaningful relationships, stay engaged with life, and continue to thrive in their golden years.`,
        tags: [
            "Companion Care",
            "Social Isolation",
            "Mental Health",
            "Quality of Life"
        ],
        author: {
            name: "Lisa Rodriguez",
            title: "Licensed Social Worker & Aging Specialist",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"].images.blog.profileImages[2]
        }
    },
    {
        id: 4,
        title: "Nutrition Essentials: Healthy Eating for Seniors",
        category: "Nutrition",
        date: "January 8, 2024",
        readTime: "7 min read",
        excerpt: "Learn about important dietary considerations, meal planning strategies, and nutritional needs specific to older adults to maintain health and vitality.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"].images.blog.articleImages[3],
        content: `Proper nutrition becomes increasingly important as we age, yet many seniors face unique challenges when it comes to maintaining a healthy diet. Changes in taste, smell, appetite, and physical abilities can all impact eating habits. Understanding these challenges and knowing how to address them is crucial for maintaining health, energy, and quality of life in later years.

As we age, our nutritional needs change in several important ways. Calorie needs typically decrease due to reduced activity levels and slower metabolism, but the need for certain nutrients actually increases. Seniors need more protein to maintain muscle mass, more calcium and vitamin D for bone health, and more B vitamins to support brain function.

Protein is particularly important for seniors, as age-related muscle loss (sarcopenia) can begin as early as age 30 and accelerate after age 60. Adequate protein intake can help maintain muscle mass, strength, and independence. Good sources include lean meats, fish, eggs, dairy products, beans, and nuts. Aim for protein at every meal and snack.

Hydration is another critical concern for seniors. The sense of thirst diminishes with age, and certain medications can increase the risk of dehydration. Encourage regular fluid intake throughout the day, including water, herbal teas, and foods with high water content like fruits and vegetables.

Many seniors don't get enough fiber, which is important for digestive health and can help prevent constipation, a common problem in older adults. Good sources of fiber include whole grains, fruits, vegetables, and legumes. Increase fiber intake gradually and ensure adequate fluid intake to prevent digestive discomfort.

Calcium and vitamin D are essential for bone health, but many seniors don't get enough of either. Dairy products, leafy greens, and fortified foods provide calcium, while vitamin D can be obtained from sunlight exposure, fatty fish, and fortified foods. Many seniors may need supplements to meet their vitamin D needs.

Several factors can make it challenging for seniors to maintain proper nutrition. Changes in taste and smell can make food less appealing, leading to decreased appetite and food intake. Dental problems can make it difficult to chew certain foods, leading to avoidance of nutritious options like fruits and vegetables.

Medications can also impact nutrition by affecting appetite, taste, or nutrient absorption. Some medications need to be taken with food, while others should be taken on an empty stomach. It's important to understand how medications interact with food and nutrition.

Physical limitations can make shopping for groceries and preparing meals challenging. Arthritis, vision problems, or mobility issues can all impact a senior's ability to maintain proper nutrition independently. Social isolation can also affect eating habits, as many people eat less when dining alone.

Meal planning and preparation strategies can help address many of these challenges. Plan meals around foods that are both nutritious and appealing. Use herbs and spices to enhance flavor when taste is diminished. Choose softer foods or modify textures when chewing is difficult.

Make meals social when possible. Eating with others not only makes meals more enjoyable but often leads to better food intake. Consider community dining programs, family meals, or even video calls with distant family members during mealtime.

Prepare foods in advance when energy levels are higher. Cook larger batches and freeze portions for later use. Keep healthy, easy-to-prepare options on hand for times when cooking feels overwhelming. Pre-cut vegetables, canned beans, and frozen fruits can be nutritious convenience options.

Consider meal delivery services or grocery delivery if shopping becomes difficult. Many communities offer nutrition programs specifically for seniors, including home-delivered meals and congregate dining sites.

Supplements may be necessary to meet certain nutritional needs, but they should complement, not replace, a healthy diet. Consult with healthcare providers before starting any supplements, as they can interact with medications or other health conditions.

Watch for signs of malnutrition, which can be subtle in seniors. Unintended weight loss, fatigue, weakness, frequent infections, or slow wound healing may all indicate poor nutrition. If you notice these signs, consult with a healthcare provider or registered dietitian.

Creating a pleasant eating environment can also encourage better nutrition. Ensure adequate lighting for meals, use favorite dishes and utensils, and eliminate distractions like television during mealtime. Make eating a pleasure, not a chore.

Remember that maintaining good nutrition is an investment in overall health and independence. Proper nutrition can help maintain energy levels, support immune function, preserve cognitive abilities, and improve quality of life. With planning, creativity, and support, seniors can enjoy nutritious, satisfying meals that support their health and well-being.

If you're caring for a senior who is struggling with nutrition, don't hesitate to seek help from healthcare professionals, registered dietitians, or community resources. Good nutrition is too important to tackle alone, and there are many resources available to help ensure your loved one gets the nourishment they need to thrive.`,
        tags: [
            "Nutrition",
            "Healthy Eating",
            "Meal Planning",
            "Senior Health"
        ],
        author: {
            name: "Jennifer Adams, RD",
            title: "Registered Dietitian & Nutrition Specialist",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"].images.blog.profileImages[3]
        }
    },
    {
        id: 5,
        title: "Respite Care: Essential Support for Family Caregivers",
        category: "Family Support",
        date: "January 5, 2024",
        readTime: "5 min read",
        excerpt: "Understanding the importance of respite care and how it can help prevent caregiver burnout while ensuring continuous quality care for your loved one.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"].images.blog.articleImages[4],
        content: `Caring for an aging or disabled family member can be one of the most rewarding experiences in life, but it can also be physically and emotionally exhausting. Family caregivers often put their own needs aside to focus on their loved one's care, leading to stress, burnout, and health problems. Respite care offers a vital solution, providing temporary relief for caregivers while ensuring their loved one continues to receive quality care.

Respite care is exactly what it sounds like – a break or rest from caregiving responsibilities. It can range from a few hours of care to allow for errands or personal time, to several days or weeks for vacation or to address personal health needs. The key is that it provides professional, reliable care for your loved one while giving you the opportunity to rest and recharge.

The need for respite care is more common than many people realize. According to the National Alliance for Caregiving, there are more than 53 million unpaid family caregivers in the United States. Many of these caregivers provide care for multiple years, often while juggling work and other family responsibilities. Without adequate support and breaks, caregiver burnout is almost inevitable.

Caregiver burnout is a state of physical, emotional, and mental exhaustion that can have serious consequences for both the caregiver and the person receiving care. Signs of burnout include chronic fatigue, increased illness, anxiety, depression, irritability, and difficulty concentrating. Burned-out caregivers may become less patient and effective in their caregiving role, potentially compromising the quality of care their loved one receives.

Respite care can help prevent burnout by providing regular breaks from caregiving responsibilities. Even short breaks can make a significant difference in a caregiver's well-being. A few hours away can provide time for personal care, social activities, exercise, or simply rest. Longer respite periods can allow for vacation, medical appointments, or addressing other family needs.

There are several types of respite care available, each designed to meet different needs and circumstances. In-home respite care brings a trained caregiver to your home to provide care while you're away. This option allows your loved one to remain in familiar surroundings and maintain their regular routine.

Adult day programs provide daytime care in a community setting, offering social activities, meals, and supervision. This option can be particularly beneficial for people with dementia or those who enjoy social interaction. Many programs offer specialized activities and services tailored to specific conditions or interests.

Residential respite care provides temporary stays in assisted living facilities, nursing homes, or specialized respite facilities. This option is useful for longer breaks or when the level of care needed exceeds what can be provided at home.

Some communities offer volunteer respite programs, where trained volunteers provide companionship and basic supervision. While these programs may not provide medical care, they can offer valuable social interaction and basic support.

When choosing respite care, it's important to consider your loved one's specific needs and preferences. Some people adapt well to new environments and caregivers, while others may find change stressful. Start with shorter periods of respite care to help your loved one adjust, and gradually increase the time as they become more comfortable.

Prepare your loved one and the respite caregiver for success by providing detailed information about routines, preferences, medications, and any special needs. Create written instructions and emergency contact information. Introduce the respite caregiver gradually if possible, allowing time for relationship building before you need to leave.

It's normal to feel guilty about taking time away from caregiving, but remember that respite care benefits both you and your loved one. Well-rested, healthy caregivers provide better care than those who are exhausted and stressed. Taking care of yourself is not selfish – it's necessary for providing the best possible care for your loved one.

Financial assistance for respite care may be available through various sources. Some insurance plans cover respite care, particularly when it's provided as part of a medical treatment plan. Veterans may be eligible for respite care through VA programs. Local Area Agencies on Aging often provide information about respite care resources and may offer sliding-scale fees based on income.

Many communities have nonprofit organizations that provide respite care services or can help connect families with resources. Religious organizations, community groups, and volunteer organizations may also offer respite care support.

Planning for respite care should be done before you desperately need it. Research available options in your area, visit facilities or interview caregivers, and establish relationships with providers. Having a respite care plan in place means you can access support quickly when needed, whether for a planned break or an emergency.

Remember that using respite care doesn't mean you're failing as a caregiver or abandoning your loved one. It means you're being smart about maintaining your own health and well-being so you can continue providing care for the long term. Quality respite care can actually strengthen family relationships by reducing stress and preventing resentment that can build up over time.

If you're a family caregiver, don't wait until you're overwhelmed to seek respite care. Regular breaks, even short ones, can help you maintain your physical and emotional health while providing the best possible care for your loved one. You deserve support, and your loved one benefits when you're at your best.`,
        tags: [
            "Respite Care",
            "Caregiver Support",
            "Family Caregiving",
            "Burnout Prevention"
        ],
        author: {
            name: "Maria Santos",
            title: "Family Care Coordinator & Support Specialist",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"].images.blog.profileImages[4]
        }
    },
    {
        id: 6,
        title: "Exercise and Physical Activity for Seniors: Staying Active and Independent",
        category: "Health & Wellness",
        date: "January 3, 2024",
        readTime: "9 min read",
        excerpt: "Discover safe and effective exercise strategies for seniors that can improve strength, balance, flexibility, and overall health while maintaining independence.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"].images.blog.articleImages[5],
        content: `Regular physical activity is one of the most important things seniors can do to maintain their health, independence, and quality of life. Despite common misconceptions, age is not a barrier to exercise – in fact, staying active becomes even more crucial as we get older. The right exercise program can help prevent chronic diseases, improve mental health, maintain cognitive function, and reduce the risk of falls.

The benefits of exercise for seniors are extensive and well-documented. Regular physical activity can help manage or prevent chronic conditions like heart disease, diabetes, arthritis, and osteoporosis. It can improve cardiovascular health, strengthen bones and muscles, enhance balance and coordination, and boost immune function.

Exercise also has significant mental health benefits. Physical activity releases endorphins, which can improve mood and reduce symptoms of depression and anxiety. It can enhance cognitive function, potentially reducing the risk of dementia and Alzheimer's disease. Regular exercise can also improve sleep quality and increase energy levels.

One of the most important benefits of exercise for seniors is fall prevention. Falls are a leading cause of injury among older adults, often resulting in fractures, hospitalizations, and loss of independence. Exercise programs that focus on balance, strength, and flexibility can significantly reduce fall risk.

Before starting any exercise program, it's important for seniors to consult with their healthcare provider, especially if they have chronic health conditions or haven't been active recently. A healthcare provider can help determine what types and intensity of exercise are safe and appropriate based on individual health status and medical history.

The ideal exercise program for seniors includes four main components: cardiovascular exercise, strength training, flexibility work, and balance training. Each component addresses different aspects of fitness and health, and all are important for maintaining overall well-being.

Cardiovascular exercise, also called aerobic exercise, strengthens the heart and lungs while improving circulation. Good options for seniors include walking, swimming, cycling, dancing, and low-impact aerobics. The goal is to gradually work up to at least 150 minutes of moderate-intensity aerobic activity per week, as recommended by health guidelines.

Walking is often the best place to start for seniors who are new to exercise or returning to activity after a period of inactivity. It's low-impact, requires no special equipment beyond comfortable shoes, and can be done almost anywhere. Start with short walks and gradually increase duration and pace as fitness improves.

Swimming and water aerobics are excellent options for seniors with arthritis or joint problems. The buoyancy of water reduces stress on joints while providing resistance for strength building. Many community centers and gyms offer water exercise classes specifically designed for seniors.

Strength training is crucial for maintaining muscle mass and bone density, both of which naturally decline with age. Resistance exercises can be done using weights, resistance bands, or body weight. Focus on major muscle groups including legs, arms, back, chest, and core. Start with light weights or resistance and gradually increase as strength improves.

Flexibility exercises help maintain range of motion in joints and can reduce stiffness and pain associated with conditions like arthritis. Stretching should be done regularly, preferably daily, and should include all major muscle groups. Hold stretches for 15-30 seconds and avoid bouncing, which can cause injury.

Balance training is particularly important for fall prevention. Simple exercises like standing on one foot, heel-to-toe walking, or tai chi can significantly improve balance and stability. Many yoga and tai chi classes are specifically designed for seniors and focus on gentle movements that improve balance and flexibility.

When starting an exercise program, it's important to begin slowly and progress gradually. This approach reduces the risk of injury and helps build confidence. Start with activities you enjoy, as you're more likely to stick with an exercise program that you find pleasant and rewarding.

Safety should always be a priority when exercising. Choose appropriate footwear with good support and traction. Exercise in well-lit, safe environments. Stay hydrated, especially during warm weather. Listen to your body and stop if you experience pain, dizziness, or shortness of breath.

Group exercise classes can provide additional benefits beyond physical fitness. They offer social interaction, motivation, and support from peers. Many communities offer senior-specific exercise classes that are designed to meet the needs and abilities of older adults.

Technology can also support senior fitness goals. Fitness trackers can help monitor activity levels and provide motivation to stay active. There are numerous exercise videos and apps designed specifically for seniors, offering convenient ways to stay active at home.

For seniors with chronic conditions, exercise may need to be modified but can still be beneficial. People with arthritis may benefit from water exercises or gentle yoga. Those with heart conditions may need to monitor their heart rate and exercise at lower intensities. Diabetes management can actually be improved with regular exercise, though blood sugar levels may need to be monitored more closely.

Fall prevention exercises deserve special attention. Balance training, leg strengthening, and flexibility work can all contribute to better stability and reduced fall risk. Tai chi has been particularly well-studied for fall prevention and has shown significant benefits for seniors.

Creating an exercise routine that becomes a regular part of daily life is key to long-term success. Schedule exercise at the same time each day, choose activities you enjoy, and consider exercising with a friend or group for motivation and accountability.

Remember that any amount of physical activity is better than none. Even small increases in activity can provide health benefits. If current activity levels are very low, start with just a few minutes of movement each day and gradually build up over time.

The goal is not to become an elite athlete but to maintain functional ability and independence for as long as possible. Regular physical activity can help seniors continue to do the things they love and maintain their quality of life as they age.

Exercise is truly one of the best medicines available for healthy aging. With proper guidance, a gradual approach, and attention to safety, seniors can enjoy the many benefits of staying active while reducing their risk of chronic disease and maintaining their independence.`,
        tags: [
            "Exercise",
            "Physical Activity",
            "Fall Prevention",
            "Healthy Aging"
        ],
        author: {
            name: "Dr. Robert Kim",
            title: "Geriatrician & Exercise Medicine Specialist",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"].images.blog.profileImages[5]
        }
    },
    {
        id: 8,
        title: "Technology for Seniors: Staying Connected in the Digital Age",
        category: "Care Tips",
        date: "December 25, 2023",
        readTime: "8 min read",
        excerpt: "Explore how modern technology can enhance independence, safety, and social connection for seniors, with practical tips for getting started.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"].images.blog.articleImages[3],
        content: `Technology has revolutionized how we communicate, access information, and manage our daily lives. For seniors, embracing technology can open up new possibilities for staying connected with family and friends, accessing healthcare services, managing home safety, and maintaining independence. While the digital world can seem overwhelming at first, the right approach can help seniors harness technology's benefits while avoiding its pitfalls.

The digital divide between generations has been steadily narrowing as more seniors recognize the value of technology in their daily lives. According to recent studies, internet usage among seniors has grown dramatically in recent years, with many now using smartphones, tablets, and computers regularly. However, many seniors still feel intimidated by new technologies or worry about making mistakes.

One of the most significant benefits of technology for seniors is improved communication with family and friends. Video calling applications like FaceTime, Skype, and Zoom allow face-to-face conversations with loved ones who live far away. Social media platforms can help seniors stay updated on family news and reconnect with old friends. Email provides a convenient way to maintain regular contact with multiple people.

Smartphones and tablets can be particularly valuable for seniors due to their portability and ease of use. Modern devices often include accessibility features like larger text, voice commands, and simplified interfaces designed specifically for older users. Many seniors find tablets easier to use than traditional computers due to their intuitive touch interfaces.

Health and safety applications represent another major benefit of technology for seniors. Medication reminder apps can help ensure medications are taken on time and in the correct dosages. Health monitoring apps can track important metrics like blood pressure, blood sugar, or weight. Some applications can even detect falls and automatically call for help.

Telehealth services have become increasingly important, especially since the COVID-19 pandemic. Many healthcare providers now offer virtual appointments, allowing seniors to consult with their doctors from home. This can be particularly valuable for routine check-ups or when travel to medical appointments is difficult.

Smart home technology can enhance both safety and convenience for seniors. Smart doorbells with cameras allow seniors to see who's at the door without having to answer it. Smart thermostats can maintain comfortable temperatures automatically. Voice-activated assistants can control lights, answer questions, play music, or call for help hands-free.

Emergency response systems have evolved far beyond traditional medical alert pendants. Modern systems can include GPS tracking, fall detection, medication reminders, and two-way communication. Some systems integrate with smartphones and can automatically alert family members or emergency contacts when help is needed.

Getting started with technology doesn't have to be overwhelming. Begin with one device or application and take time to become comfortable with it before adding others. Many community centers, libraries, and senior centers offer technology classes specifically designed for older adults. These classes provide hands-on learning in a supportive environment with instructors who understand the challenges seniors face.

When choosing devices, prioritize simplicity and ease of use over advanced features. Look for devices with larger screens, simple interfaces, and good customer support. Many manufacturers now offer senior-friendly versions of popular devices with simplified features and enhanced accessibility options.

Online safety is a crucial consideration for seniors entering the digital world. Scammers often target older adults with fraudulent emails, fake websites, and phone scams. Learn to recognize common scams and be skeptical of unsolicited emails or requests for personal information. Use strong, unique passwords for different accounts and consider using a password manager to keep track of them.

Privacy settings on social media platforms and other applications should be reviewed and adjusted to control who can see personal information. Be cautious about sharing personal details online and think twice before posting information that could be used by scammers or identity thieves.

Online shopping can provide convenience for seniors who have difficulty getting to stores, but it's important to shop safely. Use reputable websites, look for secure payment options, and be wary of deals that seem too good to be true. Read reviews and return policies before making purchases.

Banking and financial management can be simplified with online tools, but security is paramount. Use official bank websites or applications, never access accounts from public Wi-Fi, and monitor accounts regularly for unauthorized transactions. Many banks offer enhanced security features like two-factor authentication that provide additional protection.

Entertainment options through technology are virtually limitless. Streaming services provide access to movies, TV shows, and documentaries. E-readers and audiobook applications can provide access to thousands of books without trips to the library. Online games can provide mental stimulation and social interaction through multiplayer options.

Learning new skills through online platforms has become increasingly popular among seniors. Websites and applications offer courses on everything from cooking and crafts to history and science. Many are specifically designed for older learners and allow participants to learn at their own pace.

For family members helping seniors with technology, patience and understanding are key. Don't assume that what seems simple to you will be obvious to someone who didn't grow up with technology. Provide hands-on assistance, write down instructions, and be prepared to repeat explanations multiple times.

Consider the physical aspects of technology use for seniors. Ensure devices are positioned at comfortable heights and angles to avoid neck or back strain. Good lighting is important for reading screens, and external keyboards or styluses might be helpful for those with arthritis or other hand conditions.

Regular maintenance and updates are important for keeping devices secure and functioning properly. Help seniors understand the importance of software updates and provide assistance with backing up important data. Consider setting up automatic updates when possible to reduce the maintenance burden.

The key to successful technology adoption for seniors is focusing on tools that solve real problems or enhance quality of life. Technology should make life easier, not more complicated. Start with applications that address specific needs or interests, and gradually expand from there.

Remember that it's never too late to learn new technology skills. Many seniors who were initially resistant to technology have become enthusiastic users once they discovered its benefits. With patience, practice, and support, technology can become a valuable tool for maintaining independence, staying connected, and enriching daily life.

The digital world offers tremendous opportunities for seniors to stay connected, informed, and engaged. While there may be a learning curve, the benefits of embracing technology often far outweigh the initial challenges. With the right approach and support, seniors can successfully navigate the digital age and enjoy all it has to offer.`,
        tags: [
            "Technology",
            "Digital Literacy",
            "Online Safety",
            "Smart Home"
        ],
        author: {
            name: "Tom Anderson",
            title: "Senior Technology Specialist & Digital Literacy Instructor",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"].images.blog.profileImages[7]
        }
    }
];
const __TURBOPACK__default__export__ = {
    blogsData,
    blogCategories
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Blog.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$blogsData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/blogsData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ContentContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/home.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Blog() {
    _s();
    const { homeData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const homeCopy = homeData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"];
    // Use the same data structure as Blogs.jsx but limit to 6 articles for home page
    const articles = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$blogsData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogsData"].slice(0, 6).map((article, index)=>({
            id: article.id,
            title: article.title,
            category: article.category,
            date: article.date,
            readTime: article.readTime,
            excerpt: article.excerpt,
            image: homeCopy.images.blog.articleImages[index] || article.image
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "blog-section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "blog-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "blog-header",
                    "data-aos": "fade-up",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "blog-badge",
                            children: homeCopy.blog.badge
                        }, void 0, false, {
                            fileName: "[project]/src/components/Blog.jsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "blog-title",
                            children: homeCopy.blog.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/Blog.jsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "blog-subtitle",
                            children: homeCopy.blog.subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/components/Blog.jsx",
                            lineNumber: 29,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Blog.jsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "blog-grid",
                    children: articles.map((article, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "blog-card",
                            "data-aos": "fade-up",
                            "data-aos-delay": `${(index + 1) * 100}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "blog-image",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: article.image,
                                            alt: article.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Blog.jsx",
                                            lineNumber: 43,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "blog-category",
                                            children: article.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Blog.jsx",
                                            lineNumber: 44,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Blog.jsx",
                                    lineNumber: 42,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "blog-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "blog-meta",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "blog-date",
                                                    children: article.date
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Blog.jsx",
                                                    lineNumber: 49,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "blog-read-time",
                                                    children: article.readTime
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Blog.jsx",
                                                    lineNumber: 50,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Blog.jsx",
                                            lineNumber: 48,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "blog-article-title",
                                            children: article.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Blog.jsx",
                                            lineNumber: 53,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "blog-excerpt",
                                            children: article.excerpt
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Blog.jsx",
                                            lineNumber: 55,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/blogs/${article.id}`,
                                            className: "blog-read-more",
                                            children: [
                                                homeCopy.blog.readMoreButton,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "arrow",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Blog.jsx",
                                                    lineNumber: 59,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Blog.jsx",
                                            lineNumber: 57,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Blog.jsx",
                                    lineNumber: 47,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, article.id, true, {
                            fileName: "[project]/src/components/Blog.jsx",
                            lineNumber: 36,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Blog.jsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "blog-footer",
                    "data-aos": "fade-up",
                    "data-aos-delay": "700",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/blogs",
                        className: "view-all-btn",
                        children: homeCopy.blog.viewAllButton
                    }, void 0, false, {
                        fileName: "[project]/src/components/Blog.jsx",
                        lineNumber: 67,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Blog.jsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Blog.jsx",
            lineNumber: 25,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Blog.jsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_s(Blog, "JwGl05O+p60EN55v0P9zwPa1PXI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c = Blog;
const __TURBOPACK__default__export__ = Blog;
var _c;
__turbopack_context__.k.register(_c, "Blog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/emailService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Contact.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$emailService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/emailService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ContentContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/home.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$contact$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/contact.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Contact({ cityName }) {
    _s();
    const { homeData, contactData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const homeCopy = homeData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"];
    const contactCopy = contactData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$contact$2e$json__$28$json$29$__["default"];
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        service: '',
        urgency: 'planning',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuccessMessage, setShowSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
            const adminResult = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$emailService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sendContactFormEmail(formData);
            if (adminResult.success) {
                console.log('Contact form submitted successfully:', formData);
                // Send user confirmation email (only if user provided email)
                if (formData.email) {
                    try {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$emailService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sendContactConfirmationEmail(formData);
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
                    urgency: 'planning',
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
    const contactInfo = homeCopy.contact.contactInfo;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "contact-section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "contact-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "contact-header",
                    "data-aos": "fade-up",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "contact-badge",
                            children: cityName ? `Contact Us in ${cityName}` : homeCopy.contact.badge
                        }, void 0, false, {
                            fileName: "[project]/src/components/Contact.jsx",
                            lineNumber: 89,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "contact-title1",
                            children: cityName ? `Request Home Care Services in ${cityName}, TX` : homeCopy.contact.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/Contact.jsx",
                            lineNumber: 90,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "contact-subtitle",
                            children: cityName ? `Fill out the form below and our ${cityName} care coordinator will respond within one business day.` : homeCopy.contact.subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/components/Contact.jsx",
                            lineNumber: 91,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Contact.jsx",
                    lineNumber: 88,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "contact-content1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "contact-info",
                            "data-aos": "fade-right",
                            "data-aos-delay": "200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "info-title",
                                    children: homeCopy.contact.infoTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Contact.jsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "contact-items",
                                    children: contactInfo.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "contact-icon",
                                                    children: item.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "contact-details",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "contact-item-title",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.jsx",
                                                            lineNumber: 107,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "contact-item-details",
                                                            children: item.details
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.jsx",
                                                            lineNumber: 108,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "contact-item-subtext",
                                                            children: item.subtext
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.jsx",
                                                            lineNumber: 109,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Contact.jsx",
                                                    lineNumber: 106,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/Contact.jsx",
                                            lineNumber: 104,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Contact.jsx",
                                    lineNumber: 102,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Contact.jsx",
                            lineNumber: 100,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "contact-form-wrapper",
                            "data-aos": "fade-left",
                            "data-aos-delay": "300",
                            children: [
                                showSuccessMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "success-message",
                                    "data-aos": "fade-in",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "success-icon",
                                            children: "✅"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.jsx",
                                            lineNumber: 119,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "success-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: "Thank You for Your Message!"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.jsx",
                                                    lineNumber: 121,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "We've received your message and will get back to you within 24 hours."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.jsx",
                                                    lineNumber: 122,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Contact.jsx",
                                            lineNumber: 120,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Contact.jsx",
                                    lineNumber: 118,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "contact-form",
                                    onSubmit: handleSubmit,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "name",
                                                    children: homeCopy.contact.form.fullNameLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.jsx",
                                                    lineNumber: 129,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: "name",
                                                    name: "name",
                                                    value: formData.name,
                                                    onChange: handleInputChange,
                                                    required: true,
                                                    placeholder: homeCopy.contact.form.fullNamePlaceholder,
                                                    disabled: isSubmitting
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.jsx",
                                                    lineNumber: 130,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Contact.jsx",
                                            lineNumber: 128,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "email",
                                                            children: homeCopy.contact.form.emailLabel
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.jsx",
                                                            lineNumber: 144,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "email",
                                                            id: "email",
                                                            name: "email",
                                                            value: formData.email,
                                                            onChange: handleInputChange,
                                                            required: true,
                                                            placeholder: homeCopy.contact.form.emailPlaceholder,
                                                            disabled: isSubmitting
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.jsx",
                                                            lineNumber: 145,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Contact.jsx",
                                                    lineNumber: 143,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "phone",
                                                            children: homeCopy.contact.form.phoneLabel
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.jsx",
                                                            lineNumber: 158,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "tel",
                                                            id: "phone",
                                                            name: "phone",
                                                            value: formData.phone,
                                                            onChange: handleInputChange,
                                                            placeholder: homeCopy.contact.form.phonePlaceholder,
                                                            disabled: isSubmitting
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.jsx",
                                                            lineNumber: 159,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Contact.jsx",
                                                    lineNumber: 157,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Contact.jsx",
                                            lineNumber: 142,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "service",
                                                    children: homeCopy.contact.form.serviceLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.jsx",
                                                    lineNumber: 172,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    id: "service",
                                                    name: "service",
                                                    value: formData.service,
                                                    onChange: handleInputChange,
                                                    required: true,
                                                    disabled: isSubmitting,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: homeCopy.contact.form.servicePlaceholder
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.jsx",
                                                            lineNumber: 181,
                                                            columnNumber: 37
                                                        }, this),
                                                        homeCopy.contact.form.serviceOptions.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: option.toLowerCase().replace(/\s+/g, '-'),
                                                                children: option
                                                            }, index, false, {
                                                                fileName: "[project]/src/components/Contact.jsx",
                                                                lineNumber: 183,
                                                                columnNumber: 41
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Contact.jsx",
                                                    lineNumber: 173,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Contact.jsx",
                                            lineNumber: 171,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "message",
                                                    children: homeCopy.contact.form.messageLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.jsx",
                                                    lineNumber: 189,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    id: "message",
                                                    name: "message",
                                                    value: formData.message,
                                                    onChange: handleInputChange,
                                                    rows: "5",
                                                    placeholder: homeCopy.contact.form.messagePlaceholder,
                                                    disabled: isSubmitting
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.jsx",
                                                    lineNumber: 190,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Contact.jsx",
                                            lineNumber: 188,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: `contact-submit-btn ${isSubmitting ? 'submitting' : ''}`,
                                            disabled: isSubmitting,
                                            children: isSubmitting ? 'Sending...' : homeCopy.contact.form.submitButton
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.jsx",
                                            lineNumber: 201,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Contact.jsx",
                                    lineNumber: 127,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Contact.jsx",
                            lineNumber: 116,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Contact.jsx",
                    lineNumber: 99,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.jsx",
            lineNumber: 87,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Contact.jsx",
        lineNumber: 86,
        columnNumber: 9
    }, this);
}
_s(Contact, "CO6TNzeEmBNC4OQEnuyk3WIa5Lo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c = Contact;
const __TURBOPACK__default__export__ = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Newsletter.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$emailService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/emailService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ContentContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/home.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Newsletter() {
    _s();
    const { homeData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const homeCopy = homeData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"];
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (email) {
            setIsSubmitting(true);
            try {
                // Send admin notification email
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$emailService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sendNewsletterSubscriptionEmail({
                    email
                });
                if (result.success) {
                    console.log('Newsletter subscription successful:', email);
                    setIsSubmitted(true);
                    setEmail('');
                    // Reset success message after 5 seconds
                    setTimeout(()=>{
                        setIsSubmitted(false);
                    }, 5000);
                } else {
                    console.error('Failed to send newsletter subscription:', result.error);
                    alert('Sorry, there was an error subscribing to our newsletter. Please try again or contact us directly.');
                }
            } catch (error) {
                console.error('Newsletter subscription error:', error);
                alert('Sorry, there was an error subscribing to our newsletter. Please try again or contact us directly.');
            } finally{
                setIsSubmitting(false);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "newsletter-section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "newsletter-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "newsletter-content",
                "data-aos": "fade-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "newsletter-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "newsletter-badge",
                                children: homeCopy.newsletter.badge
                            }, void 0, false, {
                                fileName: "[project]/src/components/Newsletter.jsx",
                                lineNumber: 51,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "newsletter-title",
                                children: homeCopy.newsletter.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Newsletter.jsx",
                                lineNumber: 52,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "newsletter-subtitle",
                                children: homeCopy.newsletter.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/Newsletter.jsx",
                                lineNumber: 53,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Newsletter.jsx",
                        lineNumber: 50,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "newsletter-form-section",
                        "data-aos": "fade-up",
                        "data-aos-delay": "200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "form-title",
                                children: homeCopy.newsletter.formTitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/Newsletter.jsx",
                                lineNumber: 59,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "form-subtitle",
                                children: homeCopy.newsletter.formSubtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/Newsletter.jsx",
                                lineNumber: 60,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "newsletter-form",
                                onSubmit: handleSubmit,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "input-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            placeholder: homeCopy.newsletter.emailPlaceholder,
                                            required: true,
                                            className: "newsletter-input1",
                                            disabled: isSubmitting
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Newsletter.jsx",
                                            lineNumber: 66,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: `newsletter-btn ${isSubmitting ? 'submitting' : ''}`,
                                            disabled: isSubmitting,
                                            children: isSubmitting ? 'Subscribing...' : homeCopy.newsletter.subscribeButton
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Newsletter.jsx",
                                            lineNumber: 75,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Newsletter.jsx",
                                    lineNumber: 65,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Newsletter.jsx",
                                lineNumber: 64,
                                columnNumber: 25
                            }, this),
                            isSubmitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "success-message",
                                "data-aos": "fade-in",
                                children: homeCopy.newsletter.successMessage
                            }, void 0, false, {
                                fileName: "[project]/src/components/Newsletter.jsx",
                                lineNumber: 86,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "privacy-text",
                                children: homeCopy.newsletter.privacyText
                            }, void 0, false, {
                                fileName: "[project]/src/components/Newsletter.jsx",
                                lineNumber: 91,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Newsletter.jsx",
                        lineNumber: 58,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Newsletter.jsx",
                lineNumber: 49,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Newsletter.jsx",
            lineNumber: 48,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Newsletter.jsx",
        lineNumber: 47,
        columnNumber: 9
    }, this);
}
_s(Newsletter, "NrBtoJowoK4FtGS4BOwFE4bu8fE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c = Newsletter;
const __TURBOPACK__default__export__ = Newsletter;
var _c;
__turbopack_context__.k.register(_c, "Newsletter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FAQ.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ContentContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/home.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function FAQ() {
    _s();
    const { homeData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const homeCopy = homeData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"];
    const [openItem, setOpenItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const faqs = homeCopy.faq.questions.map((faq, index)=>({
            id: index + 1,
            question: faq.question,
            answer: faq.answer
        }));
    const toggleItem = (id)=>{
        setOpenItem(openItem === id ? null : id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "faq-section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "faq-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "faq-header",
                    "data-aos": "fade-up",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "faq-badge",
                            children: homeCopy.faq.badge
                        }, void 0, false, {
                            fileName: "[project]/src/components/FAQ.jsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "faq-title",
                            children: homeCopy.faq.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/FAQ.jsx",
                            lineNumber: 29,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "faq-list",
                    "data-aos": "fade-up",
                    "data-aos-delay": "200",
                    children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `faq-item ${openItem === faq.id ? 'open' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "faq-question",
                                    onClick: ()=>toggleItem(faq.id),
                                    "aria-expanded": openItem === faq.id,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "question-text",
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FAQ.jsx",
                                            lineNumber: 48,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "faq-answer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "answer-content",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "faq-footer",
                    "data-aos": "fade-up",
                    "data-aos-delay": "800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "faq-cta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: homeCopy.faq.ctaSection.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/FAQ.jsx",
                                lineNumber: 64,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: homeCopy.faq.ctaSection.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/FAQ.jsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(FAQ, "cfh2J+ouiH+XJivwoWWLm3wGAxk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c = FAQ;
const __TURBOPACK__default__export__ = FAQ;
var _c;
__turbopack_context__.k.register(_c, "FAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ContentContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/copy/home.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Footer() {
    _s();
    const { homeData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const homeCopy = homeData || __TURBOPACK__imported__module__$5b$project$5d2f$copy$2f$home$2e$json__$28$json$29$__["default"];
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleNewsletterSubmit = (e)=>{
        e.preventDefault();
        if (email) {
            console.log('Footer newsletter subscription:', email);
            setEmail('');
        // Add success handling here
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "footer",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "footer-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-section company-info",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "footer-logo",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: homeCopy.images.logo,
                                            alt: homeCopy.footer.companyName,
                                            className: "footer-logo-img"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 30,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "company-description",
                                    children: homeCopy.footer.companyDescription
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 33,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "company-badges",
                                    children: homeCopy.footer.badges.map((badge, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "footer-heading",
                                    children: homeCopy.footer.sections.ourServices.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "footer-links",
                                    children: homeCopy.footer.sections.ourServices.links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "footer-heading",
                                    children: homeCopy.footer.sections.quickLinks.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 58,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "footer-links",
                                    children: homeCopy.footer.sections.quickLinks.links.map((link, index)=>{
                                        let linkElement;
                                        if (link === "Refer Us") {
                                            linkElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/refer-us",
                                                children: link
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 63,
                                                columnNumber: 51
                                            }, this);
                                        } else if (link === "About Us") {
                                            linkElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                children: link
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 65,
                                                columnNumber: 51
                                            }, this);
                                        } else if (link === "Our Services") {
                                            linkElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/services",
                                                children: link
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 67,
                                                columnNumber: 51
                                            }, this);
                                        } else if (link === "Careers") {
                                            linkElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/careers",
                                                children: link
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 69,
                                                columnNumber: 51
                                            }, this);
                                        } else if (link === "Blog") {
                                            linkElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/blogs",
                                                children: link
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 71,
                                                columnNumber: 51
                                            }, this);
                                        } else if (link === "Contact") {
                                            linkElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                children: link
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 73,
                                                columnNumber: 51
                                            }, this);
                                        } else {
                                            linkElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `#${link.toLowerCase().replace(/\s+/g, '-')}`,
                                                children: link
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 75,
                                                columnNumber: 51
                                            }, this);
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "footer-heading",
                                    children: homeCopy.footer.sections.locations?.title || "Our Locations"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "footer-links",
                                    children: homeCopy.footer.sections.locations?.links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/locations/texas/${link.toLowerCase().replace(/\s+/g, '-')}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "footer-heading",
                                    children: homeCopy.footer.sections.contactInfo.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 96,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "contact-info1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Location"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 99,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Service Area"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 103,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 107,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 111,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "business-hours",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "footer-heading",
                                            children: homeCopy.footer.sections.businessHours.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 117,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hours-list",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hours-item",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hours-icon",
                                                            children: "🕘"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.jsx",
                                                            lineNumber: 120,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: homeCopy.footer.sections.businessHours.weekdays.days
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.jsx",
                                                                    lineNumber: 122,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hours-item",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hours-icon",
                                                            children: "🚨"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.jsx",
                                                            lineNumber: 128,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: homeCopy.footer.sections.businessHours.weekends.days
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.jsx",
                                                                    lineNumber: 130,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-newsletter",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "newsletter-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: homeCopy.footer.newsletter.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 149,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: homeCopy.footer.newsletter.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 150,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "footer-newsletter-form",
                                onSubmit: handleNewsletterSubmit,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-bottom",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "footer-bottom-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "copyright",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-tagline",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(Footer, "jZR/Cb1YFWLKf3IOJtVp3+4ZGr4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d3d02c7d._.js.map