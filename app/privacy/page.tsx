import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const title = "Terms of Service - Activepieces";
    const description = "Activepieces offers hundreds of apps to choose from to automate your work with."
    return {
        title: title,
        description: description,
        icons: "/favicon.ico",
        openGraph: {
            title: title,
            description: description,
            siteName: "Activepieces",
            images: [
                {
                    url: "https://www.activepieces.com/meta1.png",
                    width: 1200,
                    height: 630,
                    alt: "Activepieces",
                },
            ],
            url: "https://www.activepieces.com",
        }
    };
}
export default async function Privacy() {
    return (
        <div className="container mx-auto p-4 text-white">
            <h1 id="-privacy-policy-" className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p>Last updated: March 11, 2022</p>
            <p>Welcome to the web site (the &quot;Site&quot;) of Activepieces Inc. (&quot;Activepieces&quot;, &quot;we&quot;, &quot;us&quot; and/or &quot;our&quot;). This Site is operated by Activepieces and has been created to provide information about our company and its content and data linking platform and related services (together with the Site, the &quot;Service(s)&quot;) to our Service visitors (&quot;you&quot;, &quot;your&quot;). “Personal Data” means any information relating to, or which can reasonably be ascribed to an identified or identifiable natural person. There are from two (2) classes of users possibly impacted by the Service: Administrators for entities that contract with us or that might be interested in contracting with us (“Customers”) and the persons that Customers may collect information or data on that are in their Services (“Customer End Users”). This Privacy Policy sets forth Activepieces’ policy with respect to &quot;Personal Data&quot; that is collected from visitors to the Site and Services.</p>
            <h2 id="note-to-customer-end-users" className="text-2xl font-bold mt-4 mb-2">Note To Customer End Users</h2>
            <p>Our Service allows Customers to create automated flows, sometimes using APIs. While a Customer may have access to Customer End User Personal Data and use our Service to work with it as it is stored with them and their other processors and transmit and store it through our Service. We do not control Customer of use of the Personal Data they collect from you and provide to us.</p>
            <p>Customers may store and transmit information using the Service which may include:</p>
            <p>Name, Email Address, Physical Address, Phone Number, and other similar contact information; Payment Information, including credit card and bank account information; Information about location; Information about a Customer End User organization and contacts, such as colleagues or people within your organization; Usernames, Aliases, Roles, and other Authentication and Security Credential Information; Content of feedback, Testimonials, Inquiries, Support Tickets, and any Phone Conversations, Chat Sessions and Emails with or to us; Images (still, video, and in some cases 3D), voice, and other identifiers that are personal. Information regarding identity, including government-issued identification information; Corporate and financial information; and VAT numbers and other tax identifiers.</p>
            <p>If you are a Customer End User and desire to exercise any of your rights with respect to your Personal Data, please contact the Customer directly as we will cooperate with them with respect to any lawful request.</p>
            <h2 className="text-2xl font-bold mt-4 mb-2" id="categories-of-personal-data-we-collect">Categories Of Personal Data We Collect</h2>
            <h5 className="text-xl font-bold mt-4 mb-2" id="site-visitors">Site Visitors</h5>
            <p>For anyone who visits the Site, we may collect information automatically using web tracking technologies such as cookies, web beacons, pixel tags, clear GIFs and third party tracking services in order to ensure that the Site and Services operate efficiently and to collect data related to usage of the Site and Services such as, but not limited to, the IP Address, browser type, language preference, referring site, and the date and time of each visitor or Customer request.</p>
            <p>Cookies: In visiting our site and in operating the Services, we may use a technology called &quot;cookies.&quot; A cookie is a piece of information that the computer that hosts our Services gives to your browser when you access the Services. Our cookies help provide additional functionality to the Services and help us analyze Services usage more accurately. For instance, our Services may set a cookie on your browser that allows you to access the Services without needing to remember and then enter a password more than once during a visit to the Services. In all cases in which we use cookies, we will not collect Personal Data except with your permission. On most web browsers, you will find a &quot;help&quot; section on the toolbar. Please refer to this section for information on how to receive notification when you are receiving a new cookie and how to turn cookies off. We recommend that you leave cookies turned on because they allow you to take advantage of the full capability of our Services&#39; features.</p>
            <p>&quot;Web Beacons&quot; (also known as Web bugs, pixel tags or clear GIFs) are tiny graphics with a unique identifier that may be included on our Services for several purposes, including to deliver or communicate with Cookies, to track and measure the performance of our Services, to monitor how many visitors view our Services, and to monitor the effectiveness of our advertising. Unlike Cookies, which are stored on the user&#39;s device, Web Beacons are typically embedded invisibly on web pages (or in an e-mail).</p>
            <p>If you are a visitor and make any inquires to us regarding your interest we will collect your name, email address and other contact information you provide us with in order to respond to your inquiry.</p>
            <h5 className="text-xl font-bold mt-4 mb-2" id="customers">Customers</h5>
            <p>With respect to Customers when you register or purchase our Services, we collect the name, business you work with, email address, address and password in order to administer the Services. Our payments processor will collect your billing information (credit card information, address and name) to process the payments for the Services.</p>
            <p>In order to use the Service, it will need to connect with the various online third-party services you want us to integrate with (&quot;Third-Party Services&quot;), so we will need to collect the usernames and passwords to for the various Third Party Services (&quot;Login Credentials&quot;).</p>
            <p>We also will collect IP Address, device ID and other information and log it in connection with your account information and use history to administer the Services, provide support, improve your experience and monitor the Service for fraud, misuse and other reasons permitted by law.</p>
            <h2 className="text-2xl font-bold mt-4 mb-2" id="how-we-use-your-personal-data">How We Use Your Personal Data</h2>
            <h5 className="text-xl font-bold mt-4 mb-2" id="providing-the-services">Providing the Services</h5>
            <p>We use Personal Data to administrate the Services, process payments and provide customer support for Customers. If you provide Personal Data for a certain reason, we may use the Personal Data in connection with the reason for which it was provided. For instance, if you contact us by email, we will use the Personal Data you provide to answer your question or resolve your problem. Also, if you provide Personal Data in order to obtain access to the Activepieces Services, we will use your Personal Data to provide you with access to such services and to monitor your use of such services. For persons located in the EEA, our lawful basis in the processing of such Personal Data is under Article 6.1 (c) and (f) of the GDPR.</p>
            <h5 className="text-xl font-bold mt-4 mb-2" id="direct-marketing-and-improvement-of-the-services-and-site">Direct Marketing and Improvement of the Services and Site</h5>
            <p>Activepieces and its subsidiaries and affiliates (the &quot;Activepieces Related Companies&quot;) may also use your Personal Data and other personally non-identifiable information collected through the Services to help us improve the content and functionality of the Services, to better understand our users and to improve the Activepieces Services. Activepieces and its affiliates may use this information to contact you in the future to tell you about services we believe will be of interest to you. If we do so, each communication we send you will contain instructions permitting you to &quot;opt-out&quot; of receiving future communications. In addition, if at any time you wish not to receive any future communications or you wish to have your name deleted from our mailing lists, please contact us as indicated below. For persons located in EEA lawful basis in the processing of such Personal Data is under Article 6.1 (f) of the GDPR.</p>
            <h5 className="text-xl font-bold mt-4 mb-2" id="detecting-of-fraud-and-misuse">Detecting of Fraud and Misuse</h5>
            <p>We review logs and Personal Data to detect fraud, misuse, illegal activity or violation of our terms. For persons located in the EEA, our lawful basis in the processing of such Personal Data is under Article 6.1 (d) and (f) of the GDPR</p>
            <h5 className="text-xl font-bold mt-4 mb-2" id="-third-party-service-integration">‍Third-Party Service Integration</h5>
            <p>Our Service allows Customers to integrate and create commands for various online third-party services (&quot;Third-Party Services&quot;). In order to take advantage of this feature, Customers may need to authenticate, register for or log into Third-Party Services through the Service or on the websites of their respective providers. When a Customer enables linking between or log in to Third-Party Services through the Service, we will collect relevant information necessary to enable the Service to access that Third-Party Service and Customer data and content contained within that Third-Party Service (&quot;Login Credentials&quot;). We store Customer Login Credentials long enough to enable linking to the Third-Party Service.</p>
            <p>When a Customer enables the Service to link content and data between Third-Party Services, the Third-Party Services will provide us with access to certain information that Customer may have provided to the Third-Party Services, and we will use, store and disclose such information in accordance with this Privacy Policy and the rules Customer sets to govern the linking. In addition, Customer can use the Service to share content and third party Personal Data amongst the Third-Party Services they integrate with the Service. Please remember that the manner in which Third-Party Services use, store and disclose your information is governed by the policies of such Third-Party Services, and Activepieces shall have no liability or responsibility for the privacy practices or other actions of any Third-Party Services that may be enabled within the Service.</p>
            <p>We may retain certain personally non-identifiable information related to the data or content linked between Third-Party Services (for example, date sent, link configuration, names of the Third-Party Services), for the purpose of improving our Services and as described below in the &quot;Aggregated Personal Data&quot; section. For persons located in the EEA, our lawful basis in the processing of such Personal Data is under Article 6.1 (c) and (f) of the GDPR.</p>
            <h5 className="text-xl font-bold mt-4 mb-2" id="aggregated-personal-data">Aggregated Personal Data</h5>
            <p>In an ongoing effort to better understand and serve the users of the Activepieces Services, Activepieces often conducts research on its customer demographics, interests and behavior based on the Personal Data and other information provided to us. This research may be compiled and analyzed on an aggregate basis, and Activepieces may share this aggregate data with its affiliates, agents and business partners. This aggregate information does not identify you personally and we do not collect or use such data on Customer End Users. Activepieces may also disclose aggregated user statistics in order to describe our services to current and prospective business partners, and to other third parties for other lawful purposes.</p>
            <h5 className="text-xl font-bold mt-4 mb-2" id="sharing-of-personal-data-with-third-parties">Sharing of Personal Data with Third Parties</h5>
            <p>Activepieces will not sell or rent to any third party any of the personal information or data that Customer provides to us. We share Personal Data as set forth below.</p>
            <p>Activepieces is not in the business of selling your information. We consider this information to be a vital part of our relationship with you. There are, however, certain circumstances in which we may share your Personal Data with certain third parties without further notice to you, as set forth below:</p>
            <h5 className="text-xl font-bold mt-4 mb-2" id="third-party-integrations">Third Party Integrations</h5>
            <p>We will share Customer login data and End User Personal Data in order to provide the Services as instructed by Customer.</p>
            <h5 className="text-xl font-bold mt-4 mb-2" id="your-activepieces-team-members">Your Activepieces Team Members</h5>
            <p>If you are invited to join a Activepieces team account, and you accept the invitation, you are agreeing that certain of your information will be shared with the team account holder and other team members. In particular, the team account holder will have access to your name, email address, avatar (if any) and task usage, and other team members will have access to your name, email address and avatar (if any). Any information you share via a team account, including workflows you create or Third-Party Services you link to, will be available to all team members of the team account you have joined. To remove yourself from a team please contact us at  privacy@activepieces.com  and we will confirm removal before implementing.</p>
            <h2 className="text-2xl font-bold mt-4 mb-2" id="law-enforcement-and-internal-operations">Law Enforcement And Internal Operations</h2>
            <p>Personal Data may be provided where we are required to do so by law, or if we believe in good faith that it is reasonably necessary (i) to respond to claims asserted against Activepieces or to comply with the legal process (for example, discovery requests, subpoenas or warrants); (ii) to enforce or administer our policies and agreements with users; (iii) for fraud prevention, risk assessment, investigation, customer support, product development and debugging purposes; or (iv) to protect the rights, property or safety of us, our users or members of the general public. We will use commercially reasonable efforts to notify users about law enforcement or court ordered requests for data unless otherwise prohibited by law. However, nothing in this Privacy Policy is intended to limit any legal defenses or objections that you may have to any third-party request to compel disclosure of your information.</p>
            <h2 className="text-2xl font-bold mt-4 mb-2" id="business-transfer">Business Transfer</h2>
            <p>We may sell, transfer or otherwise share some or all of its assets, in connection with a merger, acquisition, reorganization or sale of assets or in the event of bankruptcy. Under such circumstances, we will use commercially reasonable efforts to notify its users if their personal information is to be disclosed or transferred and/or becomes subject to a different privacy policy.</p>
            <h2 className="text-2xl font-bold mt-4 mb-2" id="third-parties">Third-Parties</h2>
            <p>We sometimes contract with other companies and individuals to perform functions or services on our behalf, such as payments processing software maintenance, data hosting, sending email messages, etc. We necessarily have to share your Personal Data with such third-parties as may be required to perform their functions. We take steps to ensure that these parties take protecting your privacy as seriously as we do, including entering into Data Processing Addendum(s), EU Model Clauses and/or ensuring these third-parties have Binding Corporate Rules or other acceptable legal basis for transfer and protection of Personal Data.</p>
            <h2 className="text-2xl font-bold mt-4 mb-2" id="third-parties-collecting-data-on-our-behalf">Third Parties Collecting Data On Our Behalf</h2>
            <p>Google Analytics. Our Site and Services utilize Google Analytics to collect information about the use of the Sites and Services. Google Analytics collects information such as how often users visit this site, what pages they visit, when they do so, and what other sites they used prior to coming to this site. We use the information we get from Google Analytics only to improve this site, but in anonymous form. Google Analytics collects only the IP address assigned to you on the date you visit this site and assigns a user ID code, rather than your name or other identifying information. We do not combine the information collected through the use of Google Analytics with personally identifiable information. Google uses this information to analyze your use of the website, to generate reports about website activities for website operators and to provide further services related to website and internet use. Google may also share such information with third parties to the extent it is legally required to do so and/or to the extent third parties process data on behalf of Google. Although Google Analytics plants a permanent cookie on your web browser to identify you as a unique user the next time you visit this site, the cookie cannot be used by anyone but Google. Google’s ability to use and share information collected by Google Analytics about your visits to this site is restricted by the Google Analytics Terms of Use and the Google Privacy Policy. You can prevent Google Analytics from recognizing you on return visits to this site by disabling cookies on your browser. You may block Google Analytics on some browsers with the help of a browser add-on if you do not want us to use this website analysis. This add-on can be downloaded at: &#39;<a href="http://tools.google.com/dlpage/gaoptout?hl=en">http://tools.google.com/dlpage/gaoptout?hl=en</a>. For more information on Google Analytics and Google’s privacy practices, please review their privacy policy at <a href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a>.</p>
            <p>We may use Intercom, Mixpanel, Userback or other marketing, user engagement, communication but not limited to these categories in connection with our Site and Services to store and track usage statistics, support conversations and contact information such as name and email in connection with those support live chat conversations. Please refer to the their Privacy Policy for more information.</p>
            <p>We utilize Stripe as a payment gateway for payments. Data Processing takes place in the United States.. Users should review Stripe’s security policy before initiating transactions on the Site.</p>
            <h2 className="text-2xl font-bold mt-4 mb-2" id="transfer-of-data">Transfer Of Data</h2>
            <p>If you are providing your Personal Data to us directly to use our Services, we will transmit your data, including your Personal Data, to the United States in order to fulfill our contractual obligations to you.</p>
            <h2 className="text-2xl font-bold mt-4 mb-2" id="your-choices">Your Choices</h2>
            <p>It may be possible to visit the Site without providing any Personal Data. However, if you choose not to provide any Personal Data, you may not be able to use certain Activepieces Services.</p>
            <h2 className="text-2xl font-bold mt-4 mb-2" id="changing-updating-and-removing-personal-data">Changing, Updating And Removing Personal Data</h2>
            <p>If your Personal Data changes, you may correct, update, amend, remove, or ask to have it removed by making the change on your user account settings page dashboard within your account, or by contacting us by phone or email at the contact information available on our Site. To the extent you cannot remove our own Personal Data you may request we do so by contacting support at  privacy@activepieces.com,</p>
            <p>Generally speaking, we will still retain your information for as long as your account is active, as needed to provide you the Services and as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. While we will remove Personal Data from use in connection with the Services, will retain Personal Data as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements or as otherwise required by law.</p>
            <h2 className="text-2xl font-bold mt-4 mb-2" id="removal-from-communications">Removal From Communications</h2>
            <p>You can choose at any time to opt out of receiving marketing communications from us by following the removal instructions on the bottom of our communications to you.</p>
            <p>The Personal Information that you provide can be accessed at any time through your account or you can contact our customer support at privacy@activepieces.com  if you need help accessing your account.</p>
            <h2 className="text-2xl font-bold mt-4 mb-2" id="choices-for-eu-uk-and-eea-residents">Choices For EU, UK AND EEA Residents</h2>
            <p>If you are located in the European Economic Area (EEA) or the United Kingdom you have the following additional rights:</p>
            <h5 className="text-2xl font-bold mt-4 mb-2" id="right-to-withdraw-consent">Right to Withdraw Consent</h5>
            <p>You have the right to withdraw consent where such consent is required to share or use data and you may request that we delete your Personal Data.</p>
            <p>If you receive communications from us and no longer wish to receive them, please follow the removal instructions in the email or change your account settings.</p>
            <h5 className="text-2xl font-bold mt-4 mb-2" id="right-to-be-forgotten">Right to be Forgotten</h5>
            <p>As detailed above, you can delete your Personal Data by logging into your account and deleting your account or, to the extent required by law, you may request to do so at  privacy@activepieces.com  subject to our confirmation of your identity. However, since your Personal Data is required for us to provide the Services to you, deleting it or making such a request will also terminate your access to the Services. Deleting your Personal Data does not mean that all of it will be removed. We take steps to delete Personal Data and content that is no longer necessary in relation to provide the Services by deleting it within 12 months of you terminating your account.</p>
            <p>If you are located in the EEA and wish to make a request for removal (Right to Be Forgotten), you may contact us at  privacy@activepieces.com:</p>
            <p>If we are legally required to comply with such a request, we will confirm your identity and delete your personal data in such time frame as required by law.</p>
            <p>We may be required by law or to retain it to exercise or defend legal claims, or contractual obligations with our customers to retain some information in connection with our obligation to provide the Services. We may de-identify and anonymize some data for purposes of retaining it.</p>
            <h5 className="text-xl font-bold mt-4 mb-2" id="data-portability">Data Portability</h5>
            <p>If you are located in the EEA or the UK and you would like us to transmit your Personal Data to another company providing similar services, we will work with them to do so upon request and verification of such request with both the requestor and the company receiving the Personal Data.</p>
            <h5 className="text-2xl font-bold mt-4 mb-2" id="california-privacy-rights">California Privacy Rights</h5>
            <p>We do not believe that we sell Consumer Personal Information as defined by the California Consumer Privacy Act (“CCPA”).</p>
            <p>To the extent provided for by law and subject to applicable exceptions, California residents that are “Consumers” under the CCPA have the following privacy rights in relation to the Personal Information we collect:</p>
            <p>The right to know the categories of Personal Data collected and/or sold for a business purpose and the purpose for use, as well as what Personal Data was collected and how we have used and disclosed that Personal Information;</p>
            <p>The right to request deletion of your Personal Information; and</p>
            <p>The right to be free from discrimination relating to the exercise of any of your privacy rights.</p>
            <p>Exercising Your Rights: You may be able to delete or change your information within your account dashboard. California residents can also exercise the above privacy rights by emailing us at:  contact@activepieces.com</p>
            <p>The right to “Opt Out” of the sale of Consumer Personal Information. We do not believe that we “sell” Personal Information as defined in the CCPA. However, if you wish to make such a request, you may make the request via email at  privacy@activepieces.com</p>
            <p>Verification: in order to protect your Personal Information from unauthorized access or deletion, we may require you to verify your login credentials before you can submit a request to know or delete Personal Information. If you do not have an account with us, or if we suspect fraudulent or malicious activity, we may ask you to provide additional Personal Information for verification. If we cannot verify your identity, we will not provide or delete your Personal Information.</p>
            <p>Authorized Agents: you may submit a request to know or a request to delete your Personal Information through an authorized agent. If you do so, the agent must present signed written permission to act on your behalf and you may also be required to independently verify your identity with us.</p>
            <h2 className="text-2xl font-bold mt-4 mb-2" id="nevada-and-california-residents-your-privacy-rights">Nevada And California Residents – Your Privacy Rights</h2>
            <p>California and Nevada residents may request and obtain from us, once a year, free of charge, a list of third parties, if any, to which we disclosed their Personal Information for direct marketing purposes during the preceding calendar year and the categories of Personal Information shared with those third parties. If you are a California or Nevada resident and wish to obtain that information, please submit your request by sending us an email at  contact@activepieces.com, we will confirm your identity and response in accordance with legal requirements.</p>
            <h2 className="text-2xl font-bold mt-4 mb-2" id="children">Children</h2>
            <p>Activepieces does not knowingly collect Personal Data from children under the age of 16. If you are under the age of 16, please do not submit any Personal Data through the Services. We encourage parents and legal guardians to monitor their children&#39;s Internet usage and to help enforce our Privacy Policy by instructing their children never to provide Personal Data on the Services without their permission. If you have reason to believe that a child under the age of 16 has provided Personal Data to Activepieces through the Services, please contact us, and we will take such steps are necessary to comply with the law.</p>
            <h2 className="text-2xl font-bold mt-4 mb-2" id="links-of-other-websites">Links Of Other Websites</h2>
            <p>This Privacy Policy applies only to the Services. The Services may contain links to other web sites not operated or controlled by Activepieces (the &quot;Third-Party Sites&quot;). The policies and procedures we described here do not apply to the Third-Party Sites. The links from the Services do not imply that Activepieces endorses or has reviewed the Third-Party Sites. These other websites may place their own cookies or other files on your computer, collect data or solicit personal information from you. Other sites follow different rules regarding the use or disclosure of the Personal Data you submit to them. We encourage you to read the privacy policies or statements of the other websites you visit.</p>
            <h2 className="text-2xl font-bold mt-4 mb-2" id="security">Security</h2>
            <p>We are very concerned with safeguarding your information. The security of your Personal Data is important to us. Activepieces takes reasonable steps and has organizational and technical measures in place intended to protect the Personal Data provided via the Services from loss, misuse, and unauthorized access, disclosure, alteration, or destruction, including encrypting, logins, metadata and other data stored by Activepieces or transmitted via Activepieces including, but not limited to restricting access to Personal Data and encryption of data in transit and at rest as well. However, no Internet or email transmission is ever fully secure or error free. In particular, email sent to or from the Services may not be secure. Therefore, you should take special care in deciding what information you send to us via email. Please keep this in mind when disclosing any Personal Data to Activepieces via the Internet.</p>
            <h2 className="text-2xl font-bold mt-4 mb-2" id="changes-to-activepieces-privacy-policy">Changes To Activepieces’ Privacy Policy</h2>
            <p>The Services and our business may change from time to time. As a result, at times it may be necessary for Activepieces to make changes to this Privacy Policy. Activepieces reserves the right to update or modify this Privacy Policy at any time and from time to time. If we do this, we will post the changes to this Privacy Policy on this page and will indicate at the top of this page the date these terms were last revised. We will also notify you, either through the Service user interface, in an email notification or through other reasonable means. Please review this policy periodically, and especially before you provide any Personal Data. Any such changes will become effective no earlier than fourteen (14) days after they are posted, except that changes addressing new functions of the Service or changes made for legal reasons will be effective immediately. This Privacy Policy was last updated on the date indicated above. Your continued use of the Service after the date any such changes become effective constitutes your acceptance of the new Privacy Policy.</p>
            <h2 className="text-2xl font-bold mt-4 mb-2" id="other-terms">Other Terms</h2>
            <p>Your access to and use of the Services is subject to the Terms of Service at <a href="https://www.activepieces.com/terms">https://www.activepieces.com/terms</a> .</p>
            <h2 className="text-2xl font-bold mt-4 mb-2" id="contacting-activepieces">Contacting Activepieces</h2>
            <p>To keep your Personal Data accurate, current, and complete, please contact us as specified below. We will take reasonable steps to update or correct Personal Data in our possession that you have previously submitted via the Services. Please also feel free to contact us if you have any questions about Activepieces’ Privacy Policy or the information practices of the Services.</p>
            <p>You may contact us as follows:  contact@activepieces.com  or mail us at  privacy@activepieces.com.</p>
        </div>
    );
}


