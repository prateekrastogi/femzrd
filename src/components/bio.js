/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div>
      <h3>
        <a name="BACKGROUND"></a>BACKGROUND
      </h3>

      <p>
        In order to facilitate discussions, meetings and the conduct of business
        between the Parties with respect to the Purpose (as hereinafter defined)
        it may be necessary for the Discloser to disclose Confidential
        Information (as hereinafter defined) to the Recipient. The Parties have
        entered into this Agreement to ensure that the Confidential Information
        remains strictly confidential so long as this Agreement survives in
        accordance with its terms. Any Party receiving Confidential Information
        shall receive it on a confidential basis and for a limited purpose. In
        consideration of the disclosure and receipt of such information, and the
        covenants contained herein, the Parties hereby agree as follows:
      </p>

      <h3>
        <a name="AGREEMENT"></a>AGREEMENT
      </h3>
      <ol>
        <li>
          <p>DEFINITIONS</p>
          <p>
            “<strong>Affiliate</strong>” means an affiliate of, or person
            affiliated with, a specified person, is a person that directly, or
            indirectly through one or more intermediaries, controls or is
            controlled by, or is under common control with, that person
            specified.
          </p>
          <p>
            “<strong>Agreement</strong>” means this agreement, as amended.
          </p>
          <p>
            “<strong>Confidential Information</strong>” means any and all
            information, including Technology or Intellectual Property Rights,
            whether printed, in machine readable form or otherwise, that is
            proprietary or confidential to the Discloser and disclosed to the
            Recipient, including, without limitation, specifications, design
            plans, drawings, software, hardware, data, research, prototypes,
            customer information, marketing plans, or other business or
            technical information, and which is disclosed by the Discloser and
            is identified as confidential at the time of disclosure. Without
            limiting the foregoing, the Confidential Information does not
            include information that:
          </p>
          <p>
            (a) is generally known or in the public domain at the time of
            disclosure;
          </p>
          <p>
            (b) was in the Recipient’s possession or was previously known to the
            Recipient without obligation of confidentiality;
          </p>
          <p>
            (c) becomes lawfully and generally available to the public other than
            as a result of a breach hereof by the Recipient;
          </p>
          <p>
            (d) is rightfully received by the Recipient without obligations of
            confidence from a third party who is free to disclose the
            information;
          </p>
          <p>
            (e) is disclosed by the Disclosing Party to a third party without a
            duty of confidentiality on the third party;
          </p>
          <p>
            (f) is independently developed by the Recipient without use of, or
            reference to, the Confidential Information;
          </p>
          <p>
            (g) is required to be disclosed by law or administrative or judicial
            action; and
          </p>
          <p>
            (h) is approved for release by written authorization of Disclosing
            Party.
          </p>
          <p>
            <strong>“Intellectual Property Rights”</strong> means all
            intellectual and industrial property rights including all rights to
            copyrights, trademarks, patents, inventions, discoveries, industrial
            designs, design rights, trade secrets and information of a
            confidential nature.
          </p>
          <p>
            “<strong>Purpose</strong>” means the consideration and evaluation of
            the possibility of the Recipient entering into a business
            relationship with the Discloser.
          </p>
          <p>
            “<strong>Representatives</strong>” means each Parties’ directors,
            officers, employees, contractors, legal representatives and
            financial advisors that (A) have a need to know the Confidential
            Information for the Purpose, (B) have been informed of Recipient’s
            obligations hereunder, and (C) have entered into a confidentiality
            agreement, or are bound by confidentiality obligations, with the
            Recipient that contain confidentiality and restricted use
            obligations that are consistent with the terms of this Agreement and
            which are reasonably calculated to protect the confidential or
            proprietary nature of the Confidential Information and prohibit its
            unauthorized use and disclosure.
          </p>
          <p>
            <strong>“Technology”</strong> means any technology, discovery,
            invention, design, process, practice, procedure, know-how, trade
            secret, work or other intellectual property including any computer
            program, computer hardware, mask work, or integrated circuit
            topography.
          </p>
        </li>

        <li>
          <p>DISCLOSURE OF CONFIDENTIAL INFORMATION</p>
          <p>
            The Discloser will, at its discretion, disclose to the Recipient
            Confidential Information as is reasonably required for the Purpose.
            Nothing in this Agreement obligates the Discloser to disclose any
            particular Confidential Information.
          </p>
        </li>

        <li>
          <p>USE OF CONFIDENTIAL INFORMATION</p>
          <p>
            (a) The Recipient shall: (i) use the Confidential Information only
            in connection with the Purpose; (ii) hold all Confidential
            Information in confidence and only provide access to its
            Representatives; and (iii) not disclose Confidential Information to
            any other third party without prior written approval of the
            Discloser;
          </p>
          <p>
            (b) The Recipient shall not record, make notes of, copy or reproduce
            the Confidential Information by any means, except to the extent
            required for the Purpose. All copies, records, notes or
            reproductions, in whole or in part, shall contain notices
            identifying them as containing the Confidential Information of the
            Discloser and shall be protected from unauthorized disclosure and
            access. The Recipient agrees to segregate all Confidential
            Information from the Recipient’s confidential materials in order to
            prevent commingling; and
          </p>
          <p>
            (c) Recipient shall not alter, modify, breakdown or disassemble any
            materials or compositions containing or constituting Confidential
            Information of the Discloser.
          </p>
        </li>

        <li>
          <p>STANDARD OF CARE</p>
          <p>
            The Recipient shall protect the disclosed Confidential Information
            by using the same degree of care, but no less than a reasonable
            degree of care, to prevent the unauthorized use, dissemination or
            publication of the Confidential Information as the Recipient uses to
            protect its own confidential information of a like nature. The
            Parties agree to notify the other immediately upon the discovery of
            any unauthorized use or disclosure of Confidential Information of
            the other, and to reasonably cooperate with the Discloser to regain
            possession of the Confidential Information and prevent its further
            unauthorized use.
          </p>
        </li>
        <li>
          <p>TERM AND TERMINATION</p>
          <p>
            The term for the disclosure of Confidential Information hereunder
            shall be from the Effective Date and five years thereafter. Either
            party may terminate this Agreement for any reason whatsoever by
            giving thirty (30) days advance written notice to the other party.
            The obligations contained in Sections 2, 3, 4, 6, 9 and 16 hereof
            with respect to Confidential Information received prior to the date
            of termination or expiration of this Agreement shall survive the
            expiration or termination of this Agreement.
          </p>
        </li>
        <li>
          <p>INJUNCTIVE RELIEF</p>
          <p>
            Recipient acknowledges and agrees that its compliance with its
            obligations under this Agreement is necessary to protect the
            business, goodwill and proprietary interests of the Discloser, and
            that the Recipient’s breach of any of these obligations may give
            rise to irreparable injury to the Discloser that cannot be
            adequately compensated with monetary damages. Accordingly, the
            Recipient agrees that the Discloser will be entitled to seek
            injunctive relief against the breach, or threatened breach of this
            Agreement, and specific performance of its obligations hereunder,
            without being required to post a bond. The injunctive relief
            contemplated hereunder is in addition to any other legal or
            equitable remedies available.
          </p>
        </li>
        <li>
          <p>RETURN OF CONFIDENTIAL INFORMATION</p>
          <p>
            On receipt of a written demand from the Discloser, or in any event
            upon the termination of this Agreement, Recipient shall return all
            Confidential Information, including any copies thereof, and any
            memoranda, notes or other documents relating to the Confidential
            information, or at the Discloser’s option, shall certify in writing
            its return or destruction and, in the case of Confidential
            Information stored electronically, its deletion and removal from all
            computer systems. Any Confidential Information incapable of being
            returned or destroyed as required by this Agreement will remain
            subject to the confidentiality restrictions contained in this
            Agreement in perpetuity.
          </p>
        </li>
        <li>
          <p>LIST OF INDIVIDUALS WITH ACCESS</p>
          <p>
            When requested by the Discloser, the Recipient shall as promptly
            deliver a list containing the full name, title, location and
            function of each person having access to, or copies of, the
            Confidential Information.
          </p>
        </li>
        <li>
          <p>RIGHTS IN THE CONFIDENTIAL INFORMATION</p>
          <p>
            a. All right, title and interest in and to the Confidential
            Information and all media upon which Confidential Information is
            stored or recorded shall remain the property of the Discloser and
            the Confidential Information shall be held in trust by the Recipient
            for the Discloser. No license of any patent right, copyright or
            other rights in the Confidential Information, other than the
            licenses necessary to enable the recipient to use the Confidential
            Information for the Purpose, is granted hereby. Nothing contained in
            this Agreement shall limit or restrict the rights of the Discloser
            to assert claims for patent or copyright infringement against the
            Recipient.
          </p>
          <p>
            b. This Agreement does not constitute any warranty, representation
            or guarantee with respect to the completeness or accuracy of any
            Confidential Information or whether the Confidential Information
            infringes any rights of third parties. The Discloser will not be
            held liable for any errors or omissions in the Confidential
            Information or for the use, or the results of the use of, the
            Confidential Information.
          </p>
        </li>
        <li>
          <p>LEGALLY REQUIRED DISCLOSURE</p>
          <p>
            a. If the Recipient or any of its Representatives is required by a
            court order, applicable law or legal process to disclose any
            Confidential Information (“Compelled Disclosure”), the Recipient may
            make such disclosure pursuant to Section 10(b) below.
          </p>
          <p>
            b. If the Recipient or any of its Representatives is required to
            make a disclosure pursuant to Section 10(a), it shall provide the
            Discloser with prompt written notice of such request of the
            Compelled Disclosure and cooperate with the Discloser, at the
            Discloser’s expense, in seeking a protective order or any other
            remedies available to limit the disclosure of the Confidential
            Information.
          </p>
          <p>
            c. The Recipient shall not oppose any action by the Discloser to
            seek a protective order or other remedy. If the Disclosure is unable
            to obtain a protective order or other protective remedy, the
            Recipient shall use reasonable efforts to ensure that disclosure of
            the Confidential Information is limited to only what is required by
            law.
          </p>
        </li>
        <li>
          <p>CONFIDENTIALITY PERIOD</p>
          <p>
            The duty of the Recipient and the Recipient’s Representatives to
            protect Confidential Information disclosed under this Agreement and
            the restrictions contained in Section 4 hereof shall continue for a
            period of <strong>five (5) years</strong> from the date of this
            Agreement.
          </p>
        </li>
        <li>
          <p>SOLICITATION OF DISCLOSER EMPLOYEES</p>
          <p>
            Without the Discloser’s prior written consent, the Recipient agrees
            to not solicit or hire any of the Discloser’s employees prior to the
            expiration of two years from the date of this Agreement.
          </p>
        </li>
        <li>
          <p>NO IMPAIRMENT</p>
          <p>
            This Agreement shall not be construed to limit either Party’s right
            to independently use, develop, or market products without the use of
            the other Party’s Confidential Information, so long as such use,
            development, or marketing does not infringe or violate any of the
            Intellectual Property Rights of the other.
          </p>
        </li>
        <li>
          <p>NO OBLIGATION</p>
          <p>
            Neither Party has an obligation under this Agreement to purchase any
            service or item from the other Party or to enter into any further
            agreement with the other with respect to the subject matter hereof
            or otherwise. Neither party has an obligation under this Agreement
            to offer for sale products using or incorporating the Confidential
            Information. The Discloser may, at its sole discretion, offer such
            products for sale and may modify them or discontinue sale at any
            time.
          </p>
        </li>
        <li>
          <p>PUBLIC ANNOUNCEMENTS</p>
          <p>
            Other than pursuant to the requirements of an administrative or
            judicial action, the Recipient shall not, without Discloser’s prior
            written consent, disclose to any person, or make a public
            announcement of, the existence of discussions or negotiations or any
            of the terms relating to the matter of mutual interest described
            above or any Confidential Information.
          </p>
        </li>
      </ol>
    </div>
  )
}

export default Bio
