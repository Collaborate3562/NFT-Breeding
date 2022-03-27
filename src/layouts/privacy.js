import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import { withStyles } from '@mui/styles'

import CloseIcon from '@mui/icons-material/Close'

function Terms(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
    '& .MuiPaper-root': {
      background: '#151C2D',
      border: '1px solid #1B2437',
      boxSizing: 'border-box',
      borderRadius: '6px',
      width: '100%'
    },
  }))

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props

    return (
      <DialogTitle sx={{ m: 0, p: 2, borderBottom: 'solid 1px #1B2437' }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: '#58627A',
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    )
  }

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  }

  const TitleColor = withStyles({
    root: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: '16px',
      lineHeight: '24px',
      background: "-webkit-linear-gradient(0deg, #10B07A 18.75%, #10E57A 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  })(Typography)

  return (
    < BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{ margin: 'auto' }
      }
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
      >
        <TitleColor>
          PRIVACY POLICY <small>(Last updated February 28, 2022)</small>
        </TitleColor>
      </BootstrapDialogTitle>
      <DialogContent >
        <Typography sx={{
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontSize: '14px',
          lineHeight: '20px',
          color: '#8690A7',
          marginTop: '10px'
        }}>
          Thank you for choosing to be part of our BreedingNFT community ("Company",
          "we", "us" or "our"). We are committed to protecting your personal information
          and your right to privacy. If you have any questions or concerns about this
          privacy policy or our practices in relation to personal information, please contact
          us at breedingnft@gmail.com.
          <br />
          <br />
          This privacy policy describes how we may use your information if:
          <br />
          <br />
          -You visit our website at http://www.breedingnft.co/<br />
          -Use our Facebook application - Facebook Pixel Of BreedingNFT - or other
          Pixels connected to our Facebook Business Accounts and/or Facebook page/s.<br />
          -Engage with us in other related ways - including sales, marketing or events
          <br />
          <br />
          In this privacy policy, if we refer to:
          <br />
          <br />
          -"Website", we refer to any of our websites that refer to or link to this.<br />
          -"App" policy, we we refer to any of our applications that reference or link to this
          policy, including those listed above.<br />
          -"Services", we refer to our website, apps and other related services, including
          sales, marketing or events. The purpose of this privacy policy is to explain to you
          as clearly as possible what information we collect, how we use it and what rights
          you have in relation to it.<br />
          -”Using BreedingNFT”, by visiting our website, you agree to the use, disclosure
          and procedures outlined in this Privacy Policy.

          <br />
          <br />
          The purpose of this privacy policy that you disagree with, please stop using our
          Services immediately.
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px' }}><i>Please read this privacy policy carefully, as it will help you understand
            what we do with the information we collect.</i></span>
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}>SUMMARY</span>
          <br />
          <br />
          1. WHAT INFORMATION DO WE COLLECT? <br />
          2. HOW DO WE USE YOUR INFORMATION? <br />
          3. WILL YOUR INFORMATION BE SHARED WITH SOMEONE? <br />
          4. WHO WILL YOUR INFORMATION BE SHARED WITH? <br />
          5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES? <br />
          6. IS YOUR INFORMATION TRANSFERRED INTERNATIONAL? <br />
          7. HOW LONG DO WE KEEP YOUR INFORMATION? <br />
          8. HOW DO WE KEEP YOUR INFORMATION SECURE? <br />
          9. DO WE COLLECT INFORMATION FROM MINORS? <br />
          10. WHAT ARE YOUR PRIVACY RIGHTS? <br />
          11. DO-NOT-TRACK FUNCTION CONTROLS <br />
          12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS? <br />
          13. DO WE MAKE UPDATES TO THIS NOTICE? <br />
          14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE? <br />
          15. HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT <br />
          FROM YOU? <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}>1. WHAT INFORMATION DO WE COLLECT?</span>
          <br />
          <br />
          Personal Information You Provide To Us In brief: We collect the personal
          information you provide to us. We collect personal information that you voluntarily
          provide to us when you express interest in obtaining information about us or our
          products and Services, when you participate in activities on the Services or
          otherwise when you contact us. The personal information we collect depends on
          the context of your interactions with us and the Services, the choices you make
          and the products and features you use. The personal information we collect may
          include the following: Personal information provided by you. We collect the id of
          the Metamask wallet; and other similar information.
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}><i>Payment details.</i></span>
          <br />
          <br />
          We may collect the data necessary to process your payment if you make
          purchases, such as your payment instrument number (such as the ID address of
          your Metamask wallet). All payment data are stored by BreedingNFT in order to
          guarantee the resale service as explained on the site.
          You can find links to the privacy policy here: https://consensys.net/privacy-policy/
          All personal information you provide to us must be true, complete and accurate
          and you must notify us of any changes to that personal information. Automatically
          Collected Information At a Glance: Certain information, such as your Internet
          Protocol (IP) address and / or browser and device characteristics, is
          automatically collected when you visit our Services. We automatically collect
          certain information when you visit, use or browse the Services. This information
          does not reveal your specific identity (such as your name or contact information)
          but may include device and usage information, such as IP address, browser and
          device characteristics, operating system, language preferences, URL of
          reference, device name, country, location, information on how and when you use
          our Services and other technical information. This information is primarily needed
          to maintain the security and operation of our Services and for our internal
          reporting and analysis purposes. Like many companies, we also collect
          information through cookies and similar technologies. The information we collect
          includes: Log and usage data. Log and usage data are service, diagnostic, usage
          and performance information that our servers automatically collect when you
          access or use our Services and that we record in log files. Depending on how
          you interact with us, this log data may include your IP address, device
          information, browser type and settings, and information about your activity on the
          Services (such as date / time associated with your use, pages and files viewed,
          searches and other actions taken, such as functions used), information about
          device events (such as system activity, error reports (sometimes called "crash
          dumps" and hardware settings).<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}><i>Device data.</i></span>
          <br />
          <br />
          We collect device data such as information about your computer, phone, tablet or
          other device that you use to access the Services. Depending on the device used,
          this device data may include information such as IP address (or proxy server),

          device and application identification numbers, location, browser type, hardware
          model Internet service provider and / or telephony operator mobile, operating
          system and information system configuration. Location data. We collect location
          data such as location information for your device, which can be accurate or
          inaccurate. The amount of information we collect depends on the type and
          settings of the device you use to access the Services. For example, we may use
          GPS and other technologies to collect geolocation data that tells us your current
          location (based on your IP address). You can choose not to allow us to collect
          this information by denying access to the information or by disabling your location
          setting on your device. Please note, however, that if you choose to opt out, you
          may not be able to use certain aspects of the Services.
          Information collected through our App In brief: We collect information relating to
          your geolocation, mobile device, Facebook permissions, when you use our app.
          If you use our App, we also collect the following information: Geolocation
          information. We may request access or authorization to and track location-based
          information from your mobile device, either continuously or while using our App,
          to provide certain location-based services. If you want to change our access or
          permissions, you can do so in your device settings. Mobile device data. We
          automatically collect device information (such as mobile device ID, model and
          manufacturer), operating system, version information and system configuration
          information, device and application identification numbers, browser type and
          version, hardware model, provider Internet service and / or mobile operator and
          Internet Protocol (IP) address (or proxy server). If you are using our App, we may
          also collect information about the telephone network associated with your mobile
          device, the operating system or platform of your mobile device, the type of mobile
          device you use, the unique device ID of your mobile device and information.
          about the functionalities of our App you are logged in to.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}><i>Facebook permissions.</i></span>
          <br />
          <br />
          By default, we access basic information from your Facebook account, including
          your name, email, gender, birthday, current city and profile picture URL, as well
          as other information you choose to make public. We may also request access to
          other permissions related to your account, such as friends, check-ins and likes,
          and you can choose to grant or deny us access to each individual permission.
          For more information on Facebook permissions, refer to the Facebook
          permissions reference page. This information is primarily needed to maintain the

          security and operation of our App, for troubleshooting, and for our internal
          reporting and analysis purposes.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}>2. HOW DO WE USE YOUR INFORMATION?</span>
          <br />
          <br />
          In short: We process your information for purposes based on legitimate business
          interests, the fulfillment of our contract with you, compliance with our legal
          obligations and / or your consent. We use personal information collected through
          our Services for a variety of business purposes described below. We process
          your personal information for these purposes based on our legitimate business
          interests, in order to enter into or perform a contract with you, with your consent
          and / or to fulfill our legal obligations. We indicate the specific reasons for the
          processing we rely on alongside each purpose listed below. We use the
          information we collect or receive to send you administrative information. We may
          use your personal information to send you information about products, services
          and new features and / or information about changes to our terms, conditions
          and policies. To protect our Services. We may use your information as part of our
          efforts to keep our Services safe and secure (for example, for monitoring and
          fraud prevention). To enforce our terms, conditions and policies for business
          purposes, to comply with legal and regulatory requirements or in connection with
          our contract. To respond to legal requests and prevent damage. If we receive a
          subpoena or other legal request, we may need to inspect our records to
          determine how to respond.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}><i>Fulfill and manage your orders.</i></span>
          <br />
          <br />
          We may use your information to fulfill and manage your orders, payments and
          resales made through the Services. Administer prize draws and contests. We
          may use your information to manage sweepstakes and contests when you
          decide to enter our contests. Provide and facilitate the provision of services to the
          user. We may use your information to provide you with the requested service. To
          respond to user requests / offer support to users. We may use your information to
          answer your questions and resolve any problems you may have with the use of
          our Services. To send you marketing and promotional communications. We and /
          or our third party marketing partners may use the personal information you
          submit to us for our own marketing purposes, if this is in accordance with your
          marketing preferences. For example, when we express interest in obtaining
          information about us or our Services, by engaging in marketing activities or by

          otherwise contacting us, we will collect personal information from you. You can
          opt out of our marketing emails at any time (see "WHAT ARE YOUR PRIVACY
          RIGHTS?" Below).<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}><i>Provide targeted advertising.</i></span>
          <br />
          <br />
          We may use your information to develop and display customized content and
          advertising (and work with third parties who do) tailored to your interests and / or
          location and to measure its effectiveness.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}><i>Provide targeted advertising.</i></span>
          <br />
          <br />
          We may use your information for other commercial purposes, such as data
          analysis, identifying usage trends, determining the effectiveness of our
          promotional campaigns and to evaluate and improve our Services, products,
          marketing, but above all the your experience. We may use and store this
          information in aggregate and anonymous form so that it is not associated with
          individual end users and does not include personal information.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}>3. WILL YOUR INFORMATION BE SHARED WITH SOMEONE?</span>
          <br />
          <br />
          In short: We only share information with your consent, to comply with laws, to
          provide you with services, to protect your rights or to fulfill business obligations.
          We may process or share your data that we hold on the basis of the following
          legal basis: - Consent: We may process your data if you have given us specific
          consent to use your personal information for a specific purpose.
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '14px', }}><i>-Legitimate interests:</i></span> We may process your data when it is reasonably necessary
          to achieve our legitimate business interests.
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '14px', }}><i>-Execution of a contract:</i></span>
          <br />
          <br />
          where we have entered into a contract with you, we may
          process your personal information to fulfill the terms of our contract.
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '14px', }}><i>-Legal Obligations:</i></span>
          <br />
          <br />
          We may disclose your information where we are legally
          required to do so in order to comply with applicable law, government requests,
          court proceedings, court order or legal process, for example in response to an
          injunction of the court or subpoena (including in response to public authorities to
          meet national security or law enforcement requirements).
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '14px', }}><i>- Vital interests:</i></span>
          <br />
          <br />
          We may disclose your information where we deem it necessary
          to investigate, prevent or take action regarding potential violations of our policies,
          suspected fraud, situations involving potential threats to the safety of any person
          and illegal activities, or as evidence in litigation in we are involved in.
          More specifically, we may need to process your data or share your personal
          information in the following situations:
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '14px', }}><i>-Business Transfers:</i></span>
          <br />
          <br />
          We may share or transfer your information in connection
          with, or during the negotiations of, any merger, sale of company assets, financing
          or acquisition of all or part of our business to another company. Third party
          vendors, consultants and other service providers. We may share your information
          with third party vendors, service providers, contractors or agents who perform
          services for us or on our behalf and require access to such information to
          perform such work.
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '14px', }}><i>-Examples include:</i></span>
          <br />
          <br />
          payment processing, data analytics, email delivery, hosting
          services, customer service, and marketing activities. We may allow selected third
          parties to use tracking technology on the Services, which will allow them to
          collect data on our behalf about how you interact with our Services over time.
          This information can be used, among other things, to analyze and track data,
          determine the popularity of certain content, pages or features, and better
          understand online activity. Except as described in this notice, we do not share,
          sell, rent or trade your information with third parties for their promotional
          purposes. We have contracts in place with our data processors, which are
          designed to help safeguard your personal information. This means that they
          cannot do anything with your personal information unless we have asked them to
          do so. Furthermore, they will not share your personal information with any
          organization other than us. They also undertake to protect the data they hold on
          our behalf and to keep it for the period indicated by us.
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '14px', }}><i>-Affiliates:</i></span>
          We may share your information with our affiliates, in which case we
          will require those affiliates to comply with this privacy policy. Affiliates include our
          parent company and any subsidiaries, joint venture partners or other companies
          that we control or are under our common control.
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '14px', }}><i>-Business Partners:</i></span>
          <br />
          <br />
          We may share your information with our business partners to
          offer you certain products, services or promotions.
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '14px', }}><i>-Offer Wall:</i></span>
          <br />
          <br />
          Our app may display a "wall of offers" hosted by third parties. This
          bulletin board allows third party advertisers to offer virtual currency, gifts or other
          items to users in exchange for accepting and completing an advertising offer.
          Such bulletin board may appear in our App and show you based on certain data,
          such as your geographic area or demographic information. When you click on an
          offer board, you will be directed to an external website belonging to other people
          and you will leave our App. A unique identifier, such as your user ID, will be
          shared with the offer wall provider in order to prevent fraud. and properly credit
          your account with the relevant reward. Please note that we do not control third
          party websites and have no responsibility for the content of such websites. The
          inclusion of a link to a third party website does not imply our endorsement of that
          website. Accordingly, we make no warranties with respect to such third party
          websites and will not be liable for any loss or damage caused by the use of such
          websites. Also, when you access any third party website, please understand that
          your rights when accessing and using such websites will be governed by the
          privacy policy and terms of service relating to your use of such websites.
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}>4. WHO WILL YOUR INFORMATION BE SHARED WITH?</span>
          <br />
          <br />
          In short: We only share information with the following third parties. We only share
          and disclose your information with the following third parties. If we have
          processed your data based on your consent and you wish to withdraw your
          consent, please contact us using the contact details provided in the section
          below titled "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?".
          Advertising, direct marketing and lead generation Facebook listening network
          Cloud computing services, Google Cloud Platform, Microsoft Azure, Cpanel and
          the latter's Aruba manager.
          Content Optimization Incorporates YouTube Videos, GitHub Social Plug-ins,
          Google Fonts and Google Site Search Retargeting Platforms Facebook Custom
          Audience, Facebook Remarketing, Perfect Audience, Google Ads Remarketing
          and Google Analytics Remarketing Social Sharing and Advertising media
          Facebook advertising, Facebook social plug-in, Instagram advertisement,
          Pinterest advertisement, Pinterest social plug-in, Reddit plug-in, Reddit
          advertisement, Twitter advertisement, Twitter social plug-in and plug-in social
          media of YouTube User comments and forum Google Tag Manager and

          Facebook comments Web and mobile analysis Facebook Ads conversion
          tracking, Facebook Analytics, Google Ads, Google Analytics, Google Analytics
          for Firebase, Google Tag Manager, Twitter Ads conversion tracking , Webtrends
          Analytics and TradeTracker WordPress.com website hosting, Altervista platform,
          cPanel for web-hosting, React.js, Material- Ui and Solidity.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '14px', }}>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span>
          <br />
          <br />
          In short: We may use cookies and other tracking technologies to collect and store
          your information. We may use cookies and similar tracking technologies (such as
          web beacons and pixels) to access or store information. Specific information on
          how we use these technologies and how you can refuse certain cookies can be
          found in our Cookie Policy.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '14px', }}>6. IS YOUR INFORMATION TRANSFERRED INTERNATIONAL?</span>
          <br />
          <br />
          In short: We may transfer, store and process your information in countries other
          than yours.
          We rely on platforms such as cPanel and Aruba for server service, while for the
          website we rely on GoDaddy. If you access our Services outside the United
          States and Canada, please note that your information may be transferred, stored
          and processed by us in our facilities and by those third parties with whom we
          may share your personal information (see "YOUR WILL INFORMATION BE
          SHARED WITH SOMEONE? "Above), in the United States and other countries. If
          you are a resident of the European Economic Area (EEA) or the United Kingdom
          (United Kingdom), these countries may not necessarily have data protection laws
          or other similar laws as complete as those in your country. However, we will take
          all necessary steps to protect your personal information in accordance with this
          privacy policy and applicable law.
          We also use IPFS and BSC (Binance Smart Chain) services to be able to provide
          you with our service. By accepting the foregoing, you also accept obligations and
          duties due to IPFS services.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}>European Commission Standard Contractual Clauses:</span>
          <br />
          <br />
          We have implemented measures to protect your personal information, including
          using the European Commission standard contractual clauses for transfers of
          personal information between our group companies and between us and our
          third-party suppliers. These clauses require all recipients to protect all personal
          information they process originating from the EEA or the UK in accordance with

          European data protection laws and regulations. Our standard contractual clauses
          can be provided upon request. We have implemented similar appropriate
          safeguards with our third party service providers and partners and further details
          can be provided upon request.
          We also use IPFS and BSC (Binance Smart Chain) services to be able to provide
          you with our service. By accepting the foregoing, you also accept obligations and
          duties due to IPFS services even if you are part of the EU.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}>7. HOW LONG DO WE KEEP YOUR INFORMATION?</span>
          <br />
          <br />
          In short: We retain your information for as long as necessary to fulfill the
          purposes described in this privacy policy, unless otherwise required by law. We
          will only retain your personal information for as long as necessary for the
          purposes set out in this privacy policy, unless a longer retention period is required
          or permitted by law (such as tax, accounting or other legal requirements). No
          purpose in this notice will require us to retain your personal information for more
          than 2 years. When we have no legitimate business need to process your
          personal information, we will delete or anonymize that information or, if this is not
          possible (for example, because your personal information has been stored in
          backup archives), we will do so securely. store your personal information and
          isolate it from any further processing until deletion is possible.
          If you stop using the decentralized application or request the deletion of your
          information, we may still retain some information you have provided to us to
          maintain BreedingNFT or to comply with relevant laws.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}>8. HOW DO WE KEEP YOUR INFORMATION SECURE?</span>
          <br />
          <br />
          In short: We are committed to ensuring that your information is protected, and we
          have selected third party vendors that use the Binance network, including
          Metamask, to help keep your personal information safe. We use a variety of
          physical and electronic security measures to keep your information safe,
          including encrypted user passwords and protecting all connections with industry
          standard transport layer security. We have implemented adequate technical and
          organizational security measures designed to protect the security of all personal
          information we process. However, despite our safeguards and efforts to protect
          your information, no electronic transmission over the Internet or information
          storage technology can be guaranteed to be 100% secure, so we cannot promise
          or guarantee that hackers, cybercriminals or other third parties unauthorized will
          not be able to defeat our security and improperly collect, access, steal or modify

          your information. While we will do our best to protect your personal information,
          the transmission of personal information to and from our Services is at your own
          risk. You should only access the Services in a secure environment.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}>9. DO WE COLLECT INFORMATION FROM MINORS?</span>
          <br />
          <br />
          In short: We do not knowingly collect data from or market to children under the
          age of 18. We do not knowingly solicit data or market to children under the age of
          18. By using the Services, you represent that you are at least 18 years old or that
          you are the parent or guardian of such minor and you agree to the use of the
          Services by such dependent minor. If we learn that personal information has
          been collected from users under the age of 18, we will deactivate your account
          and take reasonable steps to promptly delete such data from our records. If you
          become aware of any data we may have collected from children under the age of
          18, please contact us at breedingnft@gmail.com.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}>10. WHAT ARE YOUR PRIVACY RIGHTS?</span>
          <br />
          <br />
          In short: In some regions, such as the European Economic Area (EEA) and the
          United Kingdom (UK), you have rights that allow you greater access and control
          over your personal information. You can review, change or close your account at
          any time. In some regions (such as the EEA and the UK), you have certain rights
          under applicable data protection laws. These may include the right (i) to request
          access and obtain a copy of your personal information, (ii) to request rectification
          or deletion; (iii) to limit the processing of your personal information; and (iv) if
          applicable, to data portability. In certain circumstances, you may also have the
          right to object to the processing of your personal information. To make such a
          request, use the contact details provided below. We will consider and act on any
          request in accordance with applicable data protection laws. If we rely on your
          consent to process your personal information, you have the right to withdraw
          your consent at any time. Please note, however, that this will not affect the
          lawfulness of the processing prior to its revocation, nor will it affect the
          processing of your personal data based on legitimate processing grounds other
          than consent. If you are a resident of the EEA or UK and believe that we are
          illegally processing your personal information, you also have the right to lodge a
          complaint with your local data protection supervisory authority.<br />
          You can find their contact details here: <br />
          <a style={{ color: 'white' }} href='https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm'>https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>
          <br />
          If you are a resident of Switzerland, the contact details of the data protection
          authorities can be found here: <a style={{ color: 'white' }} href='https://www.edoeb.admin.ch/edoeb/en/home.html'> https://www.edoeb.admin.ch/edoeb/en/home.html</a>
          Cookies and similar technologies: Most web browsers are set to accept cookies
          by default. If you prefer, you can usually choose to set your browser to remove
          cookies and refuse cookies. If you choose to remove cookies or decline them,
          this may affect certain features or services of our Services. To opt out of
          interest-based advertising from advertisers on our Services, visit
          <a style={{ color: 'white' }} href='http://www.aboutads.info/choices/'>http://www.aboutads.info/choices/</a>.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}>11. DO-NOT-TRACK FUNCTION CONTROLS</span>
          <br />
          <br />
          Most web browsers and some mobile operating systems and mobile applications
          include a Do-Not-Track ("DNT") feature or setting that you can turn on to report
          your privacy preference to not track and collect data about your activities online
          navigation. A uniform technological standard for the recognition and
          implementation of DNT signals has not been finalized at this stage. Therefore,
          we do not currently respond to DNT browser signals or any other mechanism that
          automatically communicates your choice not to be tracked online. If a standard
          for online tracking is adopted that we need to follow in the future, we will notify
          you of that practice in a revised version of this privacy policy.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}>12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span>
          <br />
          <br />
          In short: Yes, if you are a California resident, you are granted specific rights
          regarding access to your personal information. Section 1798.83 of the California
          Civil Code, also known as the "Shine The Light" law, allows our California users
          to request and obtain from us, once a year and free of charge, information on
          categories of personal information (if any ) that disclosed to third parties for direct
          marketing purposes and the names and addresses of all third parties with whom
          we shared personal information in the immediately preceding calendar year. If
          you are a California resident and would like to make such a request, please send
          us your request in writing using the contact information provided below. If you are
          under the age of 18, reside in California and have a registered account with a
          Service, you have the right to request the removal of unwanted data that you
          publicly post on the Services. To request removal of this information, please
          contact us using the contact information provided below and including the email
          address associated with your account and a statement that you are a California
          resident. We will ensure that the data does not appear publicly on the Services,

          but please note that the data may not be completely or completely removed from
          all of our systems (e.g. backups, etc.).
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}><i>CCPA Privacy Policy</i></span>
          <br />
          <br />
          The California Code of Regulations defines a "resident" as: (1) any individual who
          is in the State of California for purposes other than temporary or transient and (2)
          any individual who is domiciled in the State of California who is outside the State
          of California for a Temporary or Transitional Purpose All other individuals are
          termed "non-resident". If this definition of "resident" applies to you, we must
          respect certain rights and obligations relating to your personal information. What
          categories of personal information do we collect? We have collected the following
          categories of personal information over the past twelve (12) months: Category
          examples collected
          <br />
          <br />
          A. Identifiers Contact details, such as real name, alias, postal address, telephone
          or mobile number, unique personal identifier, online identifier, Internet protocol
          address, email address and account name.
          <br />
          B. Categories of Personal Information Listed in the California Customer Records
          Statute Name, contact information, education, employment, employment history,
          and financial information.
          <br />
          C. Classification Features Protected Under California or Federal Law Gender and
          Date of Birth.
          <br />
          D. Business Information Transaction information, purchase history, financial
          details and payment information.
          <br />
          E. Biometric information Fingerprints and voice prints.
          <br />
          F. Internet or other similar network activity Browsing history, search history, online
          behavior, interest data and interactions with our and other websites, applications,
          systems and advertisements.
          <br />
          G. Geolocation data Location of the device.
          <br />
          H. Audio, electronic, visual, thermal, olfactory or similar information Images and
          audio, video or call recordings created in connection with our business activities.

          <br />
          I. Professional or work-related information Business contact details to provide
          you with our company-wide services, job title, employment history and
          professional qualifications if you apply for a job with us.
          <br />
          J. Education Information Student data and directory information.
          <br />
          K. Inferences from other personal information Deductions from any of the
          collected personal information listed above to create a profile or summary about,
          for example, an individual's preferences and characteristics.
          We may also collect other personal information outside of these categories when
          you interact with us in person, online or by telephone or post in the context of:
          Receiving help through our customer support channels; Participation in customer
          surveys or competitions; and Facilitating the provision of our Services and to
          respond to your inquiries.
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '14px', }}><i>How do we use and share your personal information?</i></span>
          <br />
          <br />
          BreedingNFT collects and shares your personal information through: Targeting
          cookies / Marketing cookies Social media cookies Beacon / Pixel / Tag Social
          media plugins: Facebook, Reddit, Instagram and Twitter. We use social media
          features, such as the "Like" button and widgets, such as the "Share" button on
          our website. These features can process your Internet Protocol (IP) address and
          keep track of the page you are visiting on our website. website. We may place a
          cookie to allow the function to work properly. If you are logged into a particular
          social media platform and interact with a widget or button belonging to that social
          media platform, this information may be recorded on your profile of that social
          media platform. To avoid this, you must log out of that social media platform
          before accessing or using the Services. Social media features and widgets may
          be hosted by a third party or hosted directly on our website. Your interactions with
          these features are governed by the privacy policies of the companies that provide
          them. By clicking on one of these buttons, you consent to the use of this plug-in
          and consequently to the transfer of personal information to the corresponding
          social media service. We have no control over the essence and extent of these
          transmitted data, as well as their additional processing. More information about
          our data collection and sharing practices can be found in this privacy policy. You
          can contact us by email at breedingnft@gmail.com or by referring to the contact

          details at the bottom of this document. If you are using an Authorized Agent to
          exercise your right to opt out, we may decline a request if the Authorized Agent
          fails to provide proof that they have been validly authorized to act on your behalf.
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '14px', }}><i>Will your information be shared with someone else?</i></span>
          <br />
          <br />
          We may disclose your personal information with our service providers under a
          written agreement between us and each service provider. Each service provider
          is a for-profit entity that processes information on our behalf. We may use your
          personal information for our own commercial purposes, for example to undertake
          internal research for technological development and demonstration. This is not
          considered a "sale" of your personal data. BreedingNFT has disclosed the
          following categories of personal information to third parties for commercial or
          commercial purposes in the preceding twelve (12) months:
          <br />
          <br />
          - Category A.
          <br />
          Identifiers, such as contact details, such as your real name, alias, postal address,
          telephone or mobile number, unique personal identifier, online identifier, Internet
          Protocol address, email address and account name.

          <br />
          -Category B.
          <br />
          Personal information, as defined in the California Customer Register Act, such as
          name, contact information, education, employment, employment history, and
          financial information.
          <br />
          - Category C.
          <br />
          Features of classifications protected under California or federal law, such as
          gender or date of birth.
          <br />
          - Category D.
          <br />
          Business information, such as transaction information, purchase history, financial
          details, and payment information.
          <br />
          - Category E.
          <br />
          Biometric information, such as fingerprints and voice prints.
          <br />
          - Category F.
          <br />
          Information about Internet or other electronic network activity, such as browsing
          history, search history, online behavior, interest data and interactions with our and
          other websites, applications, systems and advertisements.
          <br />
          - Category G.
          <br />
          Geolocation data, such as the location of the device.
          <br />
          -Category H.
          <br />
          Audio, electronic, visual and similar information, such as images and audio, video
          or call recordings created in connection with our business activities.
          <br />
          -Category I.
          <br />
          Professional or employment-related information, such as business contact details
          to provide you with our company-wide services, job title, work history and
          professional qualifications if you apply for a job with us.
          <br />
          - Category J.
          <br />
          Education information, such as student records and directory information.
          <br />
          -Category K.
          <br />
          Deductions drawn from any of the personal information listed above to create a
          profile or summary about, for example, an individual's preferences and
          characteristics. The categories of third parties to whom we have disclosed
          personal information for commercial or commercial purposes can be found under
          "WHO WILL YOUR INFORMATION BE SHARED WITH?". BreedingNFT has not
          sold any personal information to third parties for commercial or commercial
          purposes in the preceding twelve (12) months.
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '14px', }}><i>Your rights with respect to your personal data:</i></span>
          <br />
          <br />
          - Right to request the deletion of data - Request for deletion You can request the
          deletion of your personal information. If you ask us to delete your personal
          information, we will respect your request and delete your personal information,
          subject to some exceptions provided by law, such as (but not limited to) the
          exercise by another consumer of his right to freedom of word, our compliance
          requirements arising from a legal obligation or from any treatment that may be
          required for protection from illegal activity.

          <br />
          - Right to be informed - Request for knowledge Depending on the circumstances,
          you have the right to know: if we collect and use your personal information; the
          categories of personal information we collect; the purposes for which the
          personal information collected is used; if we sell your personal information to
          third parties; the categories of personal information that we have sold or
          disclosed for commercial purposes; the categories of third parties to whom the
          personal information has been sold or disclosed for commercial purposes; and
          the business or commercial purpose for collecting or selling personal information.
          In accordance with applicable law, we are not obligated to provide or delete
          consumer information that is anonymised in response to a consumer request or
          to re-identify individual data to verify a consumer request.
          <br />
          - Right to non-discrimination for the exercise of the consumer's rights to privacy.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '14px', }}><i>We will not discriminate against you if you exercise your privacy rights.</i></span>
          <br />
          <br />

          <span style={{ fontWeight: 'bold', fontSize: '16px', }}><i>VERIFICATION PROCESS</i></span>
          <br />
          <br />
          Upon receiving your request, we will need to verify your identity to determine that
          you are the same person whose information we have in our system. These
          verification efforts require us to ask you to provide information so that we can
          match it with the information you have previously provided to us. For example,
          depending on the type of request you send, we may ask you to provide certain
          information so that we can match the information you provide with information we
          already have on file, or we may contact you via a communication method (e.g.
          telephone or e -mail) that you have previously provided to us. We may also use
          other verification methods based on the circumstances. We will use the personal
          information provided in your request only to verify your identity or the authority to
          make the request. To the extent possible, we will avoid asking you for additional
          information for verification purposes. If, however, we are unable to verify your
          identity from information already held by us, we may ask you to provide
          additional information for the purpose of verifying your identity and for security or
          fraud prevention purposes. We will delete such additional information provided as
          soon as we are done with verification.
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '14px', }}>Other privacy rights:</span>
          <br />
          <br />
          -You can object to the processing of your personal data.
          <br />
          <br />
          -You can request the rectification of your personal data if incorrect or no longer
          relevant, or ask to limit the processing of data.
          <br />
          <br />
          -You can designate an authorized agent to make a request under the CCPA on
          your behalf.
          <br />
          <br />
          -We may refuse a request from an authorized agent who does not provide proof
          that they have been validly authorized to act on your behalf in accordance with
          the CCPA.
          <br />
          <br />
          -You can request to opt out of the future sale of your personal information to third
          parties. After receiving a waiver request, we will follow up on the request as soon
          as possible, but no later than 15 days from the date of submission of the request.
          <br />
          <br />
          To exercise these rights, you can contact us by email at breedingnft@gmail.com
          or by referring to the contact details at the bottom of this document.
          If you have a complaint about how we handle your data, we would like to hear
          from you.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}>13. DO WE MAKE UPDATES TO THIS NOTICE?</span>
          <br />
          <br />
          In short: Yes, we will update this notice as necessary to remain compliant with
          relevant laws. We may update this privacy policy from time to time. The updated
          version will be indicated by an updated "Revised" date and the updated version
          will be effective as soon as it is accessible. If we make material changes to this
          privacy policy, we may notify you by prominently posting a notice of those
          changes or by sending you a notification directly. We encourage you to review
          this privacy policy frequently to be informed of how we protect your information.
          Any use of BreedingNFT after a change to our Privacy Policy constitutes
          acceptance of the revised or modified agreement.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}>14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span>
          <br />
          <br />
          If you have any questions or comments about this notice, we will be happy to
          answer.
          You can email us at breedingnft@gmail.com.
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px', }}>15. HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT</span>
          <br />
          <br />
          FROM YOU?
          Under the applicable laws of your country, you may have the right to request
          access to the personal information we collect from you, modify that information,
          or delete it in certain circumstances. To request to review, update or delete your
          personal information, please send an email to breednft@gmail.com with the
          subject: "REQUEST FOR MY PERSONAL DATA"
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '14px', }}><i>Thank you for reading our privacy policy!</i></span>
        </Typography>
      </DialogContent>
    </BootstrapDialog >
  );
}

Terms.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Terms
