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
          TERMS & CONDITIONS - BREEDINGNFT
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
          PLEASE FIND BELOW THE TERMS AND CONDITIONS GOVERNING THE
          BreedingNFT OFFERINGS, INCLUDING:
          • ACCESSING WITH CRYPTO WALLET OR USING ANY OF THE
          BreedingNFT;
          • TRADING, BUYING, SELLING, TRANSFERRING OR RECEIVING ANY
          COLLECTIBLE THAT WAS CREATED ON A BreedingNFT;
          • USING, SENDING NFTs TO,RECEIVING TOKENS FROM OR OTHERWISE
          TRANSACTING WITH BreedingNFT;
          These terms and conditions (these “Terms”) have been established by
          BreedingNFT to govern the Offerings.<br /> By engaging in or undertaking any of the
          aforementioned activities, you will be deemed to be a “User” who is legally
          bound by these Terms.
          Please contact us at breedingnft@gmail.com for any questions or issues.
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '21px' }}>AGREEMENT</span>
          <br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px' }}>1. CERTAIN DEFINED TERMS AND RELATED INFORMATION</span>
          <br />
          <br />
          1.1 NFTs and Collectibles.
          (a) “NFTs” means Binance Smart Chain-based tokens complying with the
          ERC-721 standard, ERC-1155 standard or other similar “non-fungible” token
          standard.<br /> NFTs are intended to be “non-fungible” tokens representing a unique
          Collectible; however, certain NFTs may be fungible with one another (i.e., all
          such NFTs are associated with the same Collectible Metadata) while being
          non-fungible with other NFTs (i.e., such NFTs are associated with different
          Collectible Metadata).
          (b) Collectibles
          (i) “Collectible” means the association on Binance Smart Chain of an NFT with a
          Uniform Resource Identifier (“URI”) identifying an appropriately configured JSON
          file conforming to the ERC-721 Metadata JSON Schema, ERC-1155 Metadata
          URI JSON Schema or a similar JSON schema, as applicable (such JSON file,
          the “Collectible ID”).<br /> 2
          (ii) The Collectible ID of a Collectible specifies the properties of the Collectible,
          including the name and description of the Collectible (the “Collectible
          Descriptors”), a URI identifying any image file associated with the Collectible

          (the “Collectible Image”) and potentially other “metadata” associated with the
          Collectible (the Collectible Descriptors, Collectible Image and such other
          metadata, collectively, the “Collectible Metadata”).<br /> The Collectible Metadata for
          Collectibles created through the BreedingNFT are typically stored on IPFS.
          (iii) There can be no guarantee or assurance of the uniqueness, originality or
          quality of any Collectible or Collectible Metadata.<br /> In the absence of an express
          legal agreement between the creator of a Collectible and purchasers of the
          Collectible, there cannot be any guarantee or assurance that the purchase or
          holding of the Collectible confers any license to or ownership of the Collectible
          Metadata or other intellectual property associated with the Collectible or any
          other right or entitlement, notwithstanding that User may rightfully own or
          possess the NFT associated with the Collectible.
          (iv) BreedingNFT may from time to time remove certain Collectibles from the
          BreedingNFT platform or restrict the creation of Collectibles on the BreedingNFT
          platform, including in connection with any belief by BreedingNFT that such
          Collectible violates these Terms or the terms and conditions or privacy policy of
          the BreedingNFT platform.<br /> BreedingNFT does not commit and shall not be liable
          for any failure to support, display or offer or continue to support, display or offer
          any Collectible.
          1.2 Offerings.
          (a) “Offerings” means the BreedingNFT Platform and all uses thereof
          (b) “BUSD" means the tokens used in the "BreedingNFT platform", the supply
          and balances of which are tracked by the smart contract distributed to direct
          0x4fabb145d64652a948d72533023f6e7a623c7c53 to Binance Smart Chain.
          (c) “BreedingNFT Platform” means the consumer software applications created,
          operated and made publicly available by BreedingNFT for transactions involving
          Collectibles, BreedingNFT Apps and BreedingNFT DEX System.<br /> On the date
          these Terms were first published, the BreedingNFT Platform consisted of the
          world wide web application hosted at https://www.breedingnft.co/ (the
          “BreedingNFT Website”).<br /> In the future, BreedingNFT may release one or more
          mobile applications.
          (d) “BreedingNFT DEX System” means the bytecodes (aka “smart contracts”) for
          creating, buying, selling and transferring NFTs and Collectibles that are officially
          supported in the BreedingNFT Platform, as they may be modified or
          supplemented from time to time pursuant to Section 3.4.<br /> On the date these
          Terms were first published, the BreedingNFT DEX System comprised the
          bytecodes deployed to the following Binance Smart Chain network.

          (e) “P.I.” (Price Increase) means the automatic system for increasing the price at
          the percentage established by the NFT itself.<br /> For each resale made by the User,
          the price increases by the P.I.<br /> established.
          1.3 “Binance Smart Chain” means the Binance Smart Chain mainnet and the
          consensus blockchain for such mainnet (networkID:1, chainID:1) as recognized
          by the official Go Binance Smart Chain Client, or, if applicable, the network and
          blockchain generally recognized as the legitimate successor thereto.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px' }}>2. CERTAIN GENERAL TERMS</span>
          <br />
          <br />
          2.1 User Responsible for Accounts / Addresses.
          Users are responsible for all matters relating to their accounts (if any) on the
          BreedingNFT Platform or the blockchain accounts or addresses through which
          they interact with the Offerings, and for ensuring that all uses thereof comply
          fully with these Terms.<br /> Users are responsible for protecting the confidentiality of
          their login information and passwords (if applicable) for the BreedingNFT
          Platform or the private keys controlling the relevant blockchain accounts or
          addresses through which they interact with the Offerings.
          2.2 BreedingNFT May Discontinue Offerings.<br /> BreedingNFT shall have the right
          at any time to change or discontinue any or all aspects or features of the
          Offerings.
          2.3 BreedingNFT May Deny Access to or Use of the Offerings.<br /> BreedingNFT
          reserves the right to terminate a User’s access to or use of any or all of the
          Offerings at any time, without or without notice, for violation of these Terms or for
          any other reason, or based on the discretion of BreedingNFT.<br /> BreedingNFT
          reserves the right at all times to disclose any information as it deems necessary
          to satisfy any applicable law, regulation, legal process or governmental request,
          or to edit, refuse to post or to remove any information or materials, in whole or in
          part, in BreedingNFT sole discretion.<br /> Collectibles or other materials uploaded to
          the Offerings may be subject to limitations on usage, reproduction and/or
          dissemination; Users are responsible for adhering to such limitations if you
          acquire a Collectible.<br /> Users must always use caution when giving out any
          personally identifiable information through any of the Offerings.<br /> BreedingNFT
          does not control or endorse the content, messages or information found in any
          Offerings and BreedingNFT specifically disclaims any liability with regard to the
          Offerings and any actions resulting from any User’s participation in any
          Offerings.
          2.4 Monitoring.<br /> BreedingNFT shall have the right, but not the obligation, to
          monitor the content of the Offerings, to determine compliance with this TOU and
          any operating rules established by BreedingNFT and to satisfy any law,

          regulation or authorized government request.<br /> BreedingNFT shall have the right
          in its sole discretion to edit, refuse to post or remove any material submitted to
          or posted through the Offerings.<br /> Without limiting the foregoing, BreedingNFT
          shall have the right to remove any material that BreedingNFT, in its sole
          discretion, finds to be in violation of the provisions hereof or otherwise
          objectionable.
          2.5 Copyright Notice.<br /> “BreedingNFT” and its logos are trademarks of
          BreedingNFT.<br /> All rights reserved.<br /> All other trademarks appearing in the Offerings
          are the property of their respective owners.
          2.6 Privacy Policy.<br /> To access the Offerings, a User must explicitly consent to
          BreedingNFT’s privacy and data security practices, which can be found by
          visiting our privacy policy.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px' }}>3. The BreedingNFT DEX SYSTEM and BreedingNFT APPS</span>
          <br />
          <br />
          3.1 Nature of BreedingNFT's DEX system.<br /> The BreedingNFT DEX system is a
          public software utility distributed on the Binance Smart Chain, accessible directly
          through any Binance Smart Chain node or indirectly through any compatible
          Binance Smart Chain "wallet" application that interacts with that node.<br /> Through
          BreedingNFT's DEX system, any person can buy and sell collectibles coined
          only by BreedingNFT.
          3.2 License to Use the BreedingNFT Platform.<br /> Each User, subject to and
          conditioned upon such User’s acceptance of and adherence to these Terms, is
          hereby granted a nontransferable, personal, non-sublicensable license to use
          the BreedingNFT Platform.
          3.3 Alterations to BreedingNFT DEX System.<br /> BreedingNFT may from time to
          time alter the list of smart contracts which are included in the BreedingNFT DEX
          System by adding or removing bytecode addresses from the official list of smart
          contracts supported by the BreedingNFT Apps, including pursuant to upgrades,
          forks, security incident responses or chain migrations.<br /> In the event any bytecode
          is removed from the BreedingNFT DEX System, users would no longer be able
          to interact with or read the data that is associated such bytecode through the
          BreedingNFT Apps.<br /> It is intended (though cannot be guaranteed) that Users
          would continue to be able to interact with such bytecode directly through any
          Binance Smart Chain node or indirectly through any compatible Binance Smart
          Chain wallet application, but such interactions may require technical expertise
          beyond those of most Users.
          3.4 Content.<br /> All content on the BreedingNFT Platform is created by
          BreedingNFT.<br /> Users can only buy and resell Collectibles created by
          BreedingNFT.<br /> BreedingNFT shall not be liable for any errors, omissions in, of,

          and about, the content, nor for the availability of the content.<br /> BreedingNFT shall
          not be liable for any losses, injuries, or damages from the purchase, inability to
          purchase, display, or use of content.

          3.5 DMCA Notices for Claims of Copyright Infringement.
          (a) Takedown Requests.<br /> BreedingNFT will respond to notices of alleged
          copyright infringement under the United States Digital Millennium Copyright Act.
          If a User or other person believes that their intellectual property rights have been
          infringed, please notify us immediately.<br /> For BreedingNFT to respond, the
          complaint must provide the following information:
          (i) a physical or electronic signature of the copyright owner or of a person
          authorized to act on behalf of the copyright owner;
          (ii) a clear identification of the copyrighted work that is claimed to be infringing;
          (iii) identification of the online material that is claimed to be infringing, including,
          if possible, a URL representing a link to the material on the BreedingNFT
          website;
          (iv) information sufficient to permit BreedingNFT to contact the complainant,
          such as email address, physical address, and/or telephone number;
          (v) a statement that the complainant has a good-faith belief that the relevant
          material is being used in a way that is not authorized by the copyright owner, its
          agent, or under the law; and
          (vi) a statement, made under penalty of perjury, that the above information is
          accurate, and the complainant is the copyright owner or is authorized to act on
          behalf of the copyright owner.
          (b) Submission of Takedown Requests.<br /> Users may submit their takedown
          requests using the following contact information :
          email: breedingnft@gmail.com subject: CLAIM DMCA
          (c) DMCA Counter-Notices.<br /> If a User believes that a User’s material has been
          removed by mistake or misidentification, the User may provide BreedingNFT
          with a written counternotification containing the following information:
          (i) the User’s name, address, telephone number, and email address;
          (ii) a description of the material that was removed, along with the URL where the
          content was posted in the Offerings prior to its removal;

          (iii) the following statement: “I swear, UNDER PENALTY OF PERJURY, that I
          have a good-faith belief that the material was removed or disabled due to a
          mistake or misidentification of the material to be removed or disabled”;
          (iv) a statement that the User consents to the jurisdiction of the Federal District
          Court for the judicial district in which your address is located, or if the User’s
          address is outside of the United States, any jurisdiction in which the User may
          be properly served, and that the User will accept service of process from the
          person (or their agent) who filed the original DMCA notice; and
          (v) the User’s electronic or physical signature.<br /> Upon receipt of a valid counter
          notification, BreedingNFT will forward it to the party who submitted the original
          DMCA notification.<br /> The original party (or their representative) will then have ten
          (10) days to notify us that he or she has filed legal action relating to the allegedly
          infringing material.<br /> If BreedingNFT does not receive any such notification within
          10 days, BreedingNFT may restore the material to the Offerings.<br /> (d) Repeat
          Infringers.<br /> BreedingNFT reserves the right to terminate the accounts or block
          usage of the Offerings of any party who is a repeat infringer or who is repeatedly
          charged with infringement.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px' }}>4. FEES, COMMISSIONS, ROYALTIES AND OTHER CHARGES</span>
          <br />
          <br />
          4.1 Fees.
          Creating, buying, selling or transferring Collectibles may be subject to fees,
          commissions, royalties and other charges (“Fees”) established from time to time
          in the sole discretion of BreedingNFT, a Collectible creator or participants in the
          Binance Smart Chain ecosystem.<br /> On the date of initial publication of these
          Terms, Fees include: (a) service fees established by and payable to
          BreedingNFT; (b) commissions on secondary sales of Collectibles, established
          by and payable to the creators of such Collectibles; and (c) “gas” (fees paid to
          Binance Smart Chain miners in BNB through Users’ independent wallet
          applications as consideration for mining the Users’ transactions).<br /> Service fees
          may be adjusted from time to time in the sole discretion of BreedingNFT.
          Commissions are set in the sole discretion of the Collectible creator and may
          range from 0% to 100%; in the event that a User acquires a Collectible with a
          100% commission, the User will be unable to collect any proceeds of a sale of
          that Collectible on the BreedingNFT Platform.<br /> “Gas” fees are set by the User
          through the User’s independent Binance Smart Chain wallet application, based
          on the market conditions on Binance Smart Chain.

          4.2 Forms of Payment.<br /> Fees may be paid or payable solely in the manner
          determined in the sole discretion of BreedingNFT.<br /> On the date of initial
          publication of these Terms, all Fees must be paid in BNB.
          4.3 Finality; No Refunds.<br /> All transactions involving the Offering are final.<br /> All Fees
          relating are non-refundable except at the sole discretion of BreedingNFT(for
          service fees and other fees within its control) or applicable third parties (Binance
          Smart Chain miners, etc.).<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px' }}>5. ACCEPTABLE & PROHIBITED USES OF THE OFFERINGS</span>
          <br />
          <br />
          5.1 Acceptable Uses.<br /> The BreedingNFT Platform and other Offerings are
          reserved exclusively for lawful consumer entertainment and artistic purposes
          (the “Permitted Uses”).<br /> On the BreedingNFT platform, users can only buy and
          resell Collectibles created by BreedingNFT at an automatically defined price via
          the P.I.<br /> system.<br /> The P.I.<br /> automates the price increase at the percentage
          established by the NFT itself.
          5.2 Prohibited Uses.<br /> Users must not, directly or indirectly: (a) employ any
          device, scheme or artifice to defraud, or otherwise materially mislead,
          BreedingNFT or any member of the BreedingNFT Community, including by
          impersonating or assuming any false identity; (b) engage in any act, course or
          practice of business that operates or would operate as a fraud or deceit upon the
          BreedingNFT or any member of the BreedingNFT Community; (c) violate,
          breach or fail to comply with any applicable provision of these Terms or any
          other terms of service, privacy policy, trading policy or other contract governing
          the use of any the Offerings or any relevant NFTs or Collectibles; (d) use the
          Offerings by or on behalf of a competitor of the BreedingNFT or competing
          platform or service for the purpose of interfering with the Offerings to obtain a
          competitive advantage; 7 (e) engage or attempt to engage in or assist any hack
          of or attack on the BreedingNFT Platform Community, including any “sybil
          attack”, “DoS attack” or “griefing attack” or theft of Collectibles, funds, or upload
          files that contain viruses, Trojan horses, worms, time bombs, cancelbots,
          corrupted files, or any other similar software or programs that may damage the
          operation of another’s computer or property or interfere with the Offerings; (f)
          create, buy, sell or use any Collectible that infringes or in a manner infringing the
          copyright, trademark, patent, trade secret or other intellectual property or other
          proprietary rights of others, or upload, or otherwise make available, files that
          contain images, photographs, software or other material protected by intellectual
          property laws (including, copyright or trademark laws) or rights of privacy or
          publicity unless the applicable User owns or controls the rights thereto or has
          received all necessary consent to do the same; (g) commit any violation of
          applicable laws, rules or regulations; (h) use the Offerings in connection with

          surveys, contests, pyramid schemes, chain letters, junk email, spamming, or any
          duplicative or unsolicited messages (commercial or otherwise); (i) defame,
          abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights
          of privacy and publicity) of other; (j) publish, post, distribute or disseminate any
          profane, obscene, pornographic indecent or unlawful content, pictures, topic,
          name, material or information; (k) engage in or knowingly facilitate any
          “front-running,” “wash trading,” “pump and dump trading,” “ramping,” “cornering”
          or fraudulent, deceptive or manipulative trading activities, including: (i) trading a
          Collectible at successively lower or higher prices for the purpose of creating or
          inducing a false, misleading or artificial appearance of activity in such
          Collectible, unduly or improperly influencing the market price for such Collectible
          or establishing a price which does not reflect the true state of the market in such
          Collectible; (ii) for the purpose of creating or inducing a false or misleading
          appearance of activity in a Collectible or creating or inducing a false or
          misleading appearance with respect to the market in a Collectible: (A) executing
          or causing the execution of any transaction in a Collectible which involves no
          material change in the beneficial ownership thereof; or (B) entering any order for
          the purchase or sale of a Collectible with the knowledge that an order of
          substantially the same size, and at substantially the same price, for the sale of
          such Collectible, has been or will be entered by or for the same or different
          parties; or (iii) participating in, facilitating, assisting or knowingly transacting with
          any pool, syndicate or joint account organized for the purpose of unfairly or
          deceptively influencing the market price of a Collectible; (l) utilize the Offerings
          to transact in securities, commodities futures, trading of commodities on a
          leveraged, margined or financed basis, binary options (including
          prediction-market 8 transactions), real estate or real estate leases, equipment
          leases, debt financings, equity financings or other similar transactions; (m) utilize
          the Offerings to buy, sell or advertise personal, professional or business
          services; (n) utilize the Offerings to engage in token-based or other financings of
          a business, enterprise, venture, DAO, software development project or other
          initiative, including ICOs, DAICOs, IEOs, “yield farming” or other token-based
          fundraising events; or (o) utilize the Offerings primarily as a general-purpose
          communications or messaging or social networking platform.<br /> The foregoing
          matters are referred to herein as “Prohibited Uses”.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px' }}>6. RISKS, DISCLAIMERS AND LIMITATIONS OF LIABILITY.</span>
          <br />
          <br />
          6.1 No Consequential, Incidental or Punitive Damages.<br /> Notwithstanding
          anything to the contrary contained in these Terms, BreedingNFT shall not be
          liable to any person, tort (including pursuant to any cause of action alleging

          negligence), warranty or otherwise, for special, incidental, consequential,
          indirect, punitive or exemplary damages (including but not limited to lost data,
          lost profits or savings, loss of business or other economic loss) arising out of or
          related to these Terms, BreedingNFT has been advised or knew of the
          possibility of such damages, and regardless of the nature of the cause of action
          or theory asserted.
          6.2 Limitation of Liability.<br /> BreedingNFT’s liability for damages to each User shall
          in all cases be limited to, and under no circumstances shall exceed,
          BreedingNFT’s service fees actually received by BreedingNFT from such User.
          6.3 Disclaimer of Representations.<br /> The Offerings are being provided on an “AS
          IS” and “AS AVAILABLE” basis.<br /> To the fullest extent permitted by law,
          BreedingNFT is not making, and hereby disclaims, any and all information,
          statements, omissions, representations and warranties, express or implied,
          written or oral, equitable, legal or statutory, in connection with the Offerings and
          the other matters contemplated by these Terms, including any representations or
          warranties of title, non-infringement, merchantability, usage, security, uptime,
          reliability, suitability or fitness for any particular purpose, workmanship or
          technical quality of any code or software used in or relating to the Offerings.
          User acknowledges and agrees that use of the Offerings is at the User’s own
          risk.
          6.4 No liability for collectible items; No guarantee of uniqueness or IP.
          BreedingNFT has no responsibility for collectibles created or traded by Users on
          the BreedingNFT platform.<br /> BreedingNFT does not investigate and cannot
          guarantee or warrant the authenticity, originality, uniqueness, marketability,
          lawfulness or value of any Collectible Item created or traded by Users on the
          BreedingNFT Platform, despite the Platform only permitting Users to buy and
          resell NFTs created by BreedingNFT.<br /> Collectors on the BreedingNFT platform
          must verify the authenticity of the arte.<br /> BreedingNFT is not responsible for any
          losses.
          6.5 No Professional Advice or Liability.<br /> All information provided by or on behalf
          of BreedingNFT is for informational purposes only and should not be construed
          as professional, accounting or legal advice.<br /> Users should not take or refrain from
          taking any action in reliance on any information contained in these Terms or
          provided by or on behalf of BreedingNFT.<br /> Before Users make any financial,
          legal, or other decisions involving the Offerings, Users should seek independent
          professional advice from persons licensed and qualified in the area for which
          such advice would be appropriate.
          6.6 Limited Survival Period for Claims.<br /> Any claim or cause of action a User may
          have or acquire in connection with the Offerings or any of the other matters

          contemplated by these Terms shall survive for the shorter of, and may be
          brought against BreedingNFT solely prior to: (a) the expiration of the statute of
          limitations applicable thereto; and (b) the date that is six months after the date
          on which the facts and circumstances giving rise to such claim or cause of action
          first arose.
          6.7 Third-Party Offerings and Content.<br /> References, links or referrals to or
          connections with or reliance on third-party resources, products, services or
          content, including smart contracts developed or operated by third parties, may
          be provided to Users in connection with the Offerings.<br /> In addition, third parties
          may offer promotions related to the Offerings.<br /> BreedingNFT does not endorse or
          assume any responsibility for any activities of or resources, products, services,
          content or promotions owned, controlled, operated or sponsored by third parties.
          If Users access any such resources, products, services or content or participate
          in any such promotions, Users do so solely at their own risk.<br /> Each User hereby
          expressly waives and releases BreedingNFT from all liability arising from User’s
          use of any such resources, products, services or content or participation in any
          such promotions.<br /> User further acknowledges and agrees that BreedingNFT shall
          not be responsible or liable, directly or indirectly, for any damage or loss caused
          or alleged to be caused by or in connection with use of or reliance on any such
          resources, products, services, content or promotions from third parties.
          6.8 Certain Uses and Risks of Blockchain Technology.<br /> (a) Use of Blockchain
          Technology.<br /> BreedingNFT utilizes experimental cryptographic technologies and
          blockchain technologies, including tokens, cryptocurrencies, stablecoins, “smart
          contracts,” consensus algorithms, voting systems and distributed, decentralized
          or peer-to-peer networks or systems in performing the Offerings.<br /> Each User
          acknowledges and agrees that such technologies are novel, experimental, and
          speculative, and that therefore there is significant uncertainty regarding the
          operation and effects and risks thereof and the application of existing law
          thereto.<br /> (b) Certain Risks of Blockchain Technology.<br /> The technology utilized in
          delivering the Offerings depends on public peer-to-peer networks such as
          Binance Smart Chain that are not under the control or influence of BreedingNFT
          and are subject to many risks and uncertainties.<br /> Such technologies include the
          BreedingNFT DEX System, which BreedingNFT may have limited or no ability to
          change, other than ceasing to support certain “smart contracts” and adding
          support for new “smart contracts”.<br /> Users are solely responsible for the
          safekeeping of the private key associated with the blockchain address used to
          participate in the Offerings.<br /> BreedingNFT will not be able to restore or issue any
          refund in respect of any Collectibles due to lost private keys.<br /> If a User are not
          able to spend or use a Collectible due to loss or theft of the corresponding
          private key or otherwise, a User will be unable to exercise their rights with

          respect to such Collectible.<br /> (c) Certain Risks of Smart Contract Technology.
          Collectibles and other digital assets relevant to the BreedingNFT Platform
          depend on the BreedingNFT DEX System or other smart contracts deployed to
          Binance Smart Chain, some of which may be coded or deployed by persons
          other than BreedingNFT.<br /> Once deployed to Binance Smart Chain, the code of
          smart contracts, including the BreedingNFT DEX System, cannot be modified.<br /> In
          the event that the BreedingNFT DEX System or other smart contracts are
          adversely affected by malfunctions, bugs, defects, malfunctions, hacking, theft,
          attacks, negligent coding or design choices, or changes to the protocol rules of
          Binance Smart Chain, Users may be exposed to a risk of total loss and forfeiture
          of all Collectibles and other relevant digital assets.<br /> BreedingNFT assumes no
          liability or responsibility for any of the foregoing matters, except as otherwise
          expressly provided by these Terms or required by applicable law.<br /> (d) Asset
          Prices.<br /> The fiat-denominated prices and value in public markets of assets such
          as BNB, NFTs and Collectibles have historically been subject to dramatic
          fluctuations and are highly volatile.<br /> As relatively new products and technologies,
          blockchain-based assets are not widely accepted as a means of payment for
          goods and services.<br /> A significant portion of demand for these assets is
          generated by speculators and investors seeking to profit from the short- or
          long-term holding of blockchain assets.<br /> The market value of any BNB, NFT and
          Collectible may fall below the price for which a User acquires that asset via the
          BreedingNFT Platform or any other platform, although BreedingNFT uses the
          P.I.<br /> system, that is, the constant growth of prices.<br /> User acknowledges and
          agrees that the costs and speeds of transacting with cryptographic and
          blockchain-based systems such as Binance Smart Chain are variable and may
          increase or decrease dramatically at any time, resulting in prolonged inability to
          access or use any BNB, NFTs, Collectibles or other digital assets associated
          with the BreedingNFT Platform.<br /> (e) Regulatory Uncertainty.<br /> Blockchain
          technologies and digital assets are subject to many legal and regulatory
          uncertainties, and the BreedingNFT Platform, NFTs and Collectibles could be
          adversely impacted by one or more regulatory or legal inquiries, actions, suits,
          investigations, claims, fines or judgments, which could impede or limit the ability
          of User to continue the use and enjoyment of such assets and technologies.<br /> (f)
          Cryptography Risks.<br /> Cryptography is a progressing field.<br /> Advances in code
          cracking or technical advances such as the development of quantum computers
          may present risks to Binance Smart Chain, the BreedingNFT Platform, NFTs and
          Collectibles, including the theft, loss or inaccessibility thereof.<br /> (g) Fork Handling.
          Binance Smart Chain, the BreedingNFT DEX System, the NFTs and the
          Collectibles may be subject to “forks.” Forks occur when some or all persons
          running the software clients for a particular blockchain system adopt a new client
          or a new version of an existing client that: (i) changes the protocol rules in

          backwards-compatible or backwards-incompatible manner that affects which
          transactions can be added into later blocks, how later blocks are added to the
          blockchain, or other matters relating to the future operation of the protocol; or (ii)
          reorganizes or changes past blocks to alter the history of the blockchain.<br /> Some
          forks are “contentious” and thus may result in two or more persistent alternative
          versions of the protocol or blockchain, either of which may be viewed as or
          claimed to be the legitimate or genuine continuation of the original.<br /> BreedingNFT
          may not be able to anticipate, control or influence the occurrence or outcome of
          forks, and does not assume any risk, liability or obligation in connection
          therewith.<br /> Without limiting the generality of the foregoing, BreedingNFT does not
          assume any responsibility to notify a User of pending, threatened or completed
          forks.<br /> BreedingNFT will respond to any forks as BreedingNFT determines in its
          sole and absolute discretion, and BreedingNFT shall not have any duty or
          obligation or liability to a User if such response (or lack of such response) acts to
          a User detriment.<br /> Without limiting the generality of the foregoing, BreedingNFT’s
          possible and permissible responses to a fork may include: (i) honoring the
          BreedingNFT DEX System, Collectibles and NFTs on both chains; (ii) honoring
          the BreedingNFT DEX System, Collectibles and NFTs on only one of the chains;
          (iii) honoring the BreedingNFT DEX System, Collectibles and NFTs in different
          respects or to a different extent on both chains; or (iv) any other response or
          policy or procedure, as determined by BreedingNFT in its sole and absolute
          discretion.<br /> BreedingNFT reserves the right to only allow one NFT to be
          associated with the relevant metadata forming the Collectible, notwithstanding
          that copies of such NFT may exist on both chains following a fork.<br /> A User
          assume full responsibility to independently remain apprised of and informed
          about possible forks, and to manage a User own interests in connection
          therewith.<br /> (h) Essential Third-Party Software Dependencies.<br /> The BreedingNFT
          DEX System and other smart contracts deployed to Binance Smart Chain are
          public software utilities which are accessible directly through any Binance Smart
          Chain node (such as Infura) or indirectly through any compatible Binance Smart
          Chain “wallet” application (such as the web browser plugin Metamask) which
          interacts with such a node.<br /> Interacting with the BreedingNFT DEX System does
          not require use of the BreedingNFT Apps, but the BreedingNFT Apps provide a
          convenient and userfriendly mBNBod of reading and displaying data (including
          Collectible Metadata) from the BreedingNFT DEX System and generating
          standard transaction messages compatible with the BreedingNFT DEX System
          because the BreedingNFT Platform does not provide Binance Smart Chain
          wallet software or Binance Smart Chain nodes, such software constitutes an
          essential third-party or user dependency without which the BreedingNFT
          Platform cannot be utilized and NFTs, Collectibles and other relevant digital
          assets cannot be traded or used.<br /> Furthermore, Collectible Descriptors defining

          the art and text associated with a Collectible must be stored off of Binance
          Smart Chain.<br /> Collectibles created on BreedingNFT have their Collectible
          Descriptors stored on the IPFS system through an IPFS node operated by
          BreedingNFT, but BreedingNFT cannot guarantee continued operation of such
          IPFS node or the integrity and persistence of data on IPFS.
          6.9 Legal Limitations on Disclaimers.<br /> Some jurisdictions do not allow the
          exclusion of certain warranties or the limitation or exclusion of certain liabilities
          and damages.<br /> Accordingly, some of the disclaimers and limitations set forth in
          these Terms may not apply in full to specific Users.<br /> The disclaimers and
          limitations of liability provided in these terms shall apply to the fullest extent
          permitted by applicable law.
          6.10 Officers, Directors, Etc.<br /> All provisions of these Terms which disclaim or limit
          obligations or liabilities of BreedingNFT shall also apply, mutatis mutandis, to the
          officers, directors, members, employees, independent contractors, agents,
          stockholders, debtholders and affiliates of BreedingNFT.
          6.11 Indemnification.<br /> Each User shall defend, indemnify, compensate, reimburse
          and hold harmless BreedingNFT (and each of its officers, directors, members,
          employees, agents and affiliates) from any claim, demand, action, damage, loss,
          cost or expense, including without limitation reasonable attorneys’ fees, arising
          out or relating to (a) User’s use of, or conduct in connection with, the Offerings;
          (b) User’s violation of these Terms or any other applicable policy or contract of
          BreedingNFT; or (c) your violation of any rights of any other person or entity.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px' }}>7. GOVERNING LAW; DISPUTE RESOLUTION.</span>
          <br />
          <br />
          7.1 Governing law.<br /> These Terms shall be governed by and construed and
          interpreted in accordance with the laws of the state of Italy, irrespective of the
          choice of laws principles of Italy, as to all matters, including matters of validity,
          construction, effect, enforceability, performance and remedies.<br /> Although the
          Offerings may be available in other jurisdictions, each User hereby
          acknowledges and agrees that such availability shall not be deemed to give rise
          to general or specific personal jurisdiction over BreedingNFT in any forum
          outside the Italy.
          7.2 Settlement Negotiations.<br /> If a User has a potential legal dispute, claim or
          cause of action against BreedingNFT Company, the User shall first (prior to
          initiating any litigation proceedings) contact BreedingNFT by sending an email to
          breedingnft@gmail.com describing the nature of the potential dispute, claim or
          cause of action and providing all relevant documentation and evidence thereof.<br /> If
          so elected by BreedingNFT, User shall use commercially reasonable efforts to
          negotiate a settlement of any such legal dispute, claim or cause of action within

          60 days of the delivery of such email.<br /> Any such dispute, claim or cause of action
          that is not finally resolved by a binding, written settlement agreement within such
          60 days shall be brought and resolved exclusively in accordance with the
          following provisions of this Section 7.
          7.3 Agreement to Binding, Exclusive Arbitration.<br /> (a) Mandatory Binding
          Arbitration.<br /> Except as set forth in Section 7.2, all claims, disputes and
          controversies directly or indirectly arising out of or in connection with or directly
          or indirectly relating to these Terms or any of the matters or transactions
          contemplated by these Terms (for the avoidance of doubt, including any claim
          seeking to invalidate, or alleging that, all or any part of these Terms is
          unenforceable, void or voidable) (such claims, disputes and controversies,
          collectively, “Disputes”) shall be finally settled by binding arbitration, rather than
          in court.<br /> The arbitrator, and not any federal, state or local court, agency or other
          governmental authority, shall have exclusive authority to resolve all Disputes.<br /> (b)
          Waiver of Jury Trial.<br /> The parties hereby acknowledge, represent and warrant
          that they understand that: (i) there is no judge or jury in arbitration, and, absent
          this mandatory provision, the parties would have the right to sue in court and
          have a jury trial concerning Disputes; (ii) in some instances, the costs of
          arbitration could exceed the costs of litigation; (iii) the right to discovery may be
          more limited in arbitration than in court; and (iv) court review of an arbitration
          award is limited.<br /> The Federal Arbitration Act and federal arbitration law apply to
          these Terms.<br /> Each of the parties hereto hereby irrevocably waives any and all
          right to trial by jury in any action, suit or other legal proceeding arising out of or
          related to these Terms or the transactions contemplated hereby.
          7.4 Arbitration Procedures.<br /> BreedingNFT or any User may initiate an arbitration
          proceeding by delivering written notice to the other, whereupon the parties shall
          reasonably cooperate to select an arbitrator and submit the relevant Dispute to
          such arbitrator.<br /> BreedingNFT will not seek attorneys’ fees and costs in arbitration
          unless the arbitrator determines the claims are frivolous.<br /> The arbitrator shall be
          empowered to grant whatever relief would be available in a court under law or in
          equity.<br /> The arbitrator’s award shall be written and reasoned, and binding on the
          parties, and may be entered by any party as a judgment in any court of
          competent jurisdiction.
          When pursuant to the arbitration agreement, the arbitrators are to be appointed
          by the Parties, each of them shall make known to the other the arbitrator or
          arbitrators whom it appoints by means of an invitation to appoint its own
          arbitrators by means of a document notified in writing.<br /> The party to whom the
          invitation is addressed shall, within twenty days thereafter, notify the identity of
          the arbitrator or arbitrators appointed by it.<br /> Failing that, the party who made the

          invitation may request, by appeal, that the appointment be made by the
          President of the tribunal in whose district the seat of arbitration is located.<br /> If the
          parties have not yet determined that seat, the appeal shall be lodged with the
          President of the court of the place where the arbitration agreement was
          concluded or, if that place is abroad, with the President of the court of Rome.
          The President of the competent court shall make the appointment requested of
          him if the arbitration agreement is not manifestly non-existent or clearly does not
          provide for foreign arbitration.<br /> The same provisions shall apply if the
          appointment of one or more arbitrators is referred by the arbitration agreement
          to the court or if, being referred to a third party, the latter has not done so
          7.5 Seat of Arbitration.<br /> The seat of arbitration shall be Brescia, Italia.<br /> The
          arbitrator may choose to have the arbitration of any Dispute conducted by
          telephone, based on written submissions, or at a mutually agreed location;
          provided, however, that BreedingNFT may opt to transfer the venue of any
          arbitration hearing to Brescia,Italia, in the event that it agrees to pay any
          additional fees or costs a User may reasonably incur as a result of the change in
          venue, as determined by the arbitrator, and, subject to the foregoing, a User
          hereby agree to submit to the personal jurisdiction of any federal or state court in
          Brescia,Italia, in order to compel arbitration, to stay proceedings pending
          arbitration, or to confirm, modify, vacate or enter judgment on the award entered
          by the arbitrator.
          7.6 Confidentiality of Arbitration.<br /> Except to the extent necessary to enforce their
          respective rights under these Terms or as otherwise required by applicable law,
          the parties undertake to maintain confidentiality as to the existence and events
          of the arbitration proceedings and as to all submissions, correspondence and
          evidence relating to the arbitration proceedings.<br /> This provision shall survive the
          termination of the arbitral proceedings.
          7.7 Class Action Waiver.<br /> (a) No Class Actions Permitted.<br /> All Users hereby agree
          that any arbitration or other permitted action with respect to any Dispute shall be
          conducted in their individual capacities only and not as a class action or other
          representative action, and the Users expressly waive their right to file a class
          action or seek relief on a class basis.<br /> USERS SHALL BRING CLAIMS AGAINST
          BreedingNFT COMPANY OTHER ONLY IN THEIR INDIVIDUAL CAPACITY,
          AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED
          CLASS OR REPRESENTATIVE PROCEEDING.<br /> (b) Agreements if Class Action
          Waiver Unenforceable.<br /> If any court or arbitrator makes a final, binding and
          non-appealable determination that the class action waiver set forth in this
          Section 7.7 is void or unenforceable for any reason or that an arbitration can
          proceed on a class basis, then the arbitration provision set forth above shall be

          deemed null and void with respect to any Dispute that would thus be required to
          be resolved by arbitration on a class basis, and the parties shall be deemed to
          have not agreed to arbitrate such Dispute.<br /> In the event that, as a result of the
          application of the immediately preceding sentence or otherwise, any Dispute is
          not subject to arbitration, the parties hereby agree to submit to the personal and
          exclusive jurisdiction of and venue in the federal and state courts located in
          Brescia, Italy and to accept service of process by mail with respect to such
          Dispute, and hereby waive any and all jurisdictional and venue defenses
          otherwise available with respect to such Dispute.<br />
          <br />
          <span style={{ fontWeight: 'bold', fontSize: '16px' }}>8. MISCELLANEOUS</span>
          <br />
          <br />
          8.1 Headings.<br /> The headings and captions contained in these Terms are for
          convenience of reference only, shall not be deemed to be a part of these Terms
          and shall not be referred to in connection with the construction or interpretation
          of these Terms.
          8.2 Successors and Assigns.<br /> These Terms shall inure to the benefit of
          BreedingNFT, the Users, and their respective permitted successors, permitted
          assigns, permitted transferees and permitted delegates and shall be binding
          upon all of the foregoing persons and any person who may otherwise succeed to
          any right, obligation or liability under these Terms by operation of law or
          otherwise.<br /> A User shall not share or provide a copy of, or transfer to, any person
          any BUSD or the private key associated with any BUSD without notifying such
          person that such person shall be bound by and become a party to these Terms
          by virtue of thereof (or if the transferor has a reasonable belief that the
          transferee is aware of these Terms).<br /> A User shall not assign any of a User rights
          or delegate any of a User liabilities or obligations under these Terms to any other
          person without BreedingNFT’s advance written consent.<br /> BreedingNFT may
          freely assign, transfer or delegate its rights, obligations and liabilities under
          these Terms to the maximum extent permitted by applicable law.
          8.3 Severability.<br /> In the event that any provision of these Terms, or the application
          of any such provision to any person or set of circumstances, shall be determined
          by an arbitrator or court of competent jurisdiction to be invalid, unlawful, void or
          unenforceable to any extent: (a) the remainder of these Terms, and the
          application of such provision to persons or circumstances other than those as to
          which it is determined to be invalid, unlawful, void or unenforceable, shall not be
          impaired or otherwise affected and shall continue to be valid and enforceable to
          the fullest extent permitted by law; and (b) BreedingNFT shall have the right to
          modify these Terms so as to effect the original intent of the parties as closely as
          possible in an acceptable manner in order that the transactions contemplated
          hereby be consumed as originally contemplated to the fullest extent possible.

          8.4 Force majeure.<br /> BreedingNFT does not incur any liability or penalty for failing
          to perform any act or perform any duty or obligation under this or in connection
          with the questions contemplated herein due to any event beyond its control
          (including any provision of any present or future law or regulation or any act of
          any governmental authority, divine act or war or, any epidemic or pandemic, or
          the unavailability, interruption or malfunction of the Internet, the World Wide Web
          or any other electronic network, of the Binance Smart Chain network or any
          blockchain or BreedingNFT DEX System or its aspect, or any consensual attack,
          or hacking, or denial-of-service or other attack on the foregoing or its aspect, or
          on other software, networks and infrastructures that allow BreedingNFT provide
          the Offerings, it being understood that BreedingFT will use commercially efforts,
          consistent with accepted practices in the sectors in which BreedingNFT will
          work, where applicable, to resume performance as soon as reasonably
          practicable in the circumstances.
          8.5 Amendments and Modifications.<br /> These Terms may only be amended,
          modified, altered or supplemented by or with the written consent of
          BreedingNFT.<br /> BreedingNFT reserves, the right, in its sole and absolute
          discretion, to amend, modify, alter or supplement these Terms from time to time.
          The most current version of these Terms will be posted on BreedingNFT’s
          website.<br /> Any changes or modifications will be effective immediately upon the
          modified Agreement being posted to BreedingNFT’s website.<br /> A User shall be
          responsible for reviewing and becoming familiar with any such modifications.<br /> A
          User hereby waive any right a User may have to receive specific notice of such
          changes or modifications.<br /> Use of the Offerings by a User after any modification
          of these Terms constitutes a User acceptance of the modified terms and
          conditions.<br /> If a User do not agree to any such modifications, a User must
          immediately stop using the Offerings.
          8.6 No Implied Waivers.<br /> No failure or delay on the part of BreedingNFT in the
          exercise of any power, right, privilege or remedy under these Terms shall
          operate as a waiver of such power, right, privilege or remedy; and no single or
          partial exercise of any such power, right, privilege or remedy shall preclude any
          other or further exercise thereof or of any other power, right, privilege or remedy.
          BreedingNFT shall not be deemed to have waived any claim arising out of these
          Terms, or any power, right, privilege or remedy under these Terms, unless the
          waiver of such claim, power, right, privilege or remedy is expressly set forth in a
          written instrument duly executed and delivered on behalf of BreedingNFT, and
          any such waiver shall not be applicable or have any effect except in the specific
          instance in which it is given.

          8.7 Entire Agreement.<br /> These Terms constitutes the entire agreement between
          the parties relating to the subject matter hereof and supersede all prior or
          contemporaneous agreements and understandings, both written and oral,
          between the parties with respect to the subject matter hereof.
          8.8 Rules of Interpretation.<br /> (a) “hereof,” “herein,” “hereunder,” “hereby” and
          words of similar import will, unless otherwise stated, be construed to refer to
          these Terms as a whole and not to any particular provision of these Terms; (b)
          “include(s)” and “including” shall be construed to be followed by the words
          “without limitation”; 19 (c) “or” shall be construed to be the “inclusive or” rather
          than “exclusive or” unless the context requires otherwise; (d) any rule of
          construction to the effect that ambiguities are to be resolved against the drafting
          party shall not be applied in the construction or interpretation of these Terms; (e)
          section titles, captions and headings are for convenience of reference only and
          have no legal or contractual effect.; (f) whenever the context requires: the
          singular number shall include the plural, and vice versa; the masculine gender
          shall include the feminine and neuter genders; the feminine gender shall include
          the masculine and neuter genders; and the neuter gender shall include the
          masculine and feminine genders; and (g) except as otherwise indicated, all
          references in these Terms to “Sections,” “clauses,” etc., are intended to refer to
          Sections of Sections, clauses, etc.<br /> of these Terms.<br /> User Agrees to Cooperate
          with BreedingNFT expressly agree to refund to the Collector and/or
          BreedingNFT the entire portion of Fees received from the sale of a Digital
          Artwork that was subsequently removed from the Site pursuant to an effective
          DMCA request to which the Creator failed to timely submit an effective DMCA
          Counternotification.<br /> BreedingNFT will not be held liable to any User for removing
          allegedly infringing works from the Platform or otherwise fulfilling its legal
          obligations under the DMCA.
          8.9 Wallet Registration and Account Information.
          You must either connect your Wallet in order to use BreedingNFT.<br /> You will be
          fully responsible for any and all activities that occur under your account.You
          agree to immediately notify us of any unauthorized image uploads, or any other
          breach of security or uploading all intellectual property rights owned by someone
          else.<br /> We will not be liable for any loss or damage arising from your failure to
          comply with this paragraph.<br /> When you connect your wallet to platform, you are
          strongly advised to take precautions in order to avoid loss of access to and/or
          control over your Wallet.<br /> Suggested measures include, but are not limited to, the
          following: (a) creating a strong password that you do not use for any other
          website or online service; (b) using the backup functionality provided by the
          Wallet or safeguard your private key and mnemonic (backup) phrase on an

          external hard drive which, all users, especially users who have more than
          $100,000 USD in assets, are encouraged to do even if they are utilizing the
          Services’ backup functionality; (c) maintaining the security of your Wallet by
          protecting the private key and mnemonic (backup) phrase associated with your
          Wallet by, for example, limiting access to your computer and your Wallet; and (d)
          promptly notifying us if you discover or otherwise suspect any security breaches
          related to your Wallet.
          Payment and Fees.<br /> BreedingNFT does currently charge 3% for each NFT sale.
          You also agree that you will have no way of deciding the price and BreedingNFT
          will set the price automatically based on the P.I.<br /> system.<br /> Any NFT on
          BreedingNFT is owned by BreedingNFT and no User can mint and publish NFTs
          on BreedingNFT Platform.<br /> You can only buy and resell NFTs minted by Breeding
          NFT.
          Transactions.<br /> Once transaction details have been submitted via the Services,
          we cannot assist you to cancel or otherwise modify your transaction.
          BreedingNFT has no control over any Binance-based blockchain and does not
          have the ability to facilitate any cancellation or modification requests.<br /> You must
          ensure that you have an adequate balance in your Wallet and/or gas to
          complete transactions before initiating a transaction.<br /> You acknowledge and
          agree that we will not be liable for any failed transactions due to insufficient
          funds or gas associated.
          Taxes.<br /> It is your responsibility to determine what, if any, taxes apply to the
          transactions that you have submitted transaction details for via the Services, and
          it is your responsibility to report and remit the correct tax to the appropriate tax
          authority.<br /> You agree that we are not responsible for determining whether taxes
          apply to your Binance-based transactions or for collecting, reporting,
          withholding, or remitting any taxes arising from any Virtual Currency-related
          transactions.
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
