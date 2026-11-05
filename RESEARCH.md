# Café Vista Hoboken: research and asset record

Research for the website refresh concept, gathered November 5, 2026. Items marked **confirm** need the owner's sign-off before anything goes live.

## The business

- **Café Vista**, 527 Monroe St, Hoboken, NJ 07030. Phone (201) 970-7040 (Google, Yelp, Apple Maps, Grubhub). Email info@cafevista.management (current site). Instagram [@cafevistahoboken](https://www.instagram.com/cafevistahoboken/) (about 5,800 followers).
- Women-owned and operated. Founder **Balsayat Jorayeva**, originally from Istanbul, a local mom. Opened summer 2020, during the pandemic ([Hoboken Girl, June 2020](https://www.hobokengirl.com/cafe-vista-hoboken)).
- Sister cafés: **Dream Vista**, 177 York St, Jersey City (2021, garden courtyard, private events, [cafedreamvista.com](https://cafedreamvista.com)) and **Café Vista All-Day Dining & Café**, 192 Main St, Ridgefield Park (July 2025, (201) 853-9444, [cafevistarp.com](https://cafevistarp.com)).
- Identity: antique and vintage serveware hunted from vintage shops and kept in an armoire by the door; green transferware cups; fresh flowers in teacups; a hand-painted mural; vinyl playing; MacKenzie-Childs tea kettles. Owner quote: “I’ve always enjoyed curating spaces, hosting guests, and creating an experience for them that ties in something for all the senses to be left refreshed and awakened.” Favorite Sufi saying: “Do not rest until you turn your dreams into moments.”
- Signatures: pistachio latte, rose latte, Turkish coffee (and a Turkish coffee flight in Yelp photos, **confirm** still offered), matcha (iced strawberry matcha per Hoboken Girl), pistachio baklava, menemen, avocado toast, croissants and scones.
- Amenities: free Wi-Fi, laptop-friendly, dog-friendly, outdoor tables, vegan options, decaf espresso drinks, takeout and delivery, punch card (10 drinks, 11th free).
- Private events (Hoboken flyer on current site): Rent the Space $400 (3–4 hrs, up to 25, weekdays after 4 pm and weekends after 5 pm, BYO food, +$50/extra hour, vintage tableware +$75); High Tea for Adults $55 pp (up to 20, 18% service fee); High Tea for Kids $45 per child (up to 20).

## What customers say

Google: about 4.6★ from 260–277 reviews depending on the source date (**confirm** current count). Yelp: 4.3★ from 59 reviews. Grubhub: 5.0 from 14 ratings.

Praise, recurring: the antique china (“served on different, pretty pieces of antique china from the owner’s collection”, Valerie B.; “my double espresso is served in fine china, which makes me feel valued”, Alexandra C.), warm staff who remember regulars, a good place to work remotely (Zach B.), lattes made with care (“they put a lot of effort into their lattes”, Ami P., Yelp), the pistachio baklava, the interior.

Criticism, occasional: limited seating, price of specialty lattes, a rose latte that tasted more of rose than espresso, an unfriendly-service mention.

## Problems found with the current online presence

1. **Order Online points to Ridgefield Park.** On cafevistahoboken.com/takeaway, DoorDash links to `doordash.com/store/cafe-vista-ridgefield-park-34821873`, Grubhub links to `grubhub.com/restaurant/cafe-vista-192-main-st-ridgefield-park/12083592`, “Call Us” shows (201) 853-9444 (Ridgefield Park’s number), and the Uber Eats logo links to `/`. The Grubhub logo image is broken. Hoboken’s own listings: [Grubhub 10294472](https://www.grubhub.com/restaurant/cafe-vista-527-monroe-st-hoboken/10294472), [DoorDash 23242707](https://www.doordash.com/store/cafe-vista-hoboken-23242707/).
2. **Lapsed old domain on Yelp.** Yelp’s website and menu links and MapQuest’s website link use `cafevista-hoboken.com`, which now 301-redirects through `qqpediaaceh.com` and others to `qqpedia.biz`, an Indonesian gambling site (checked with curl, November 5, 2026).
3. **Hours disagree everywhere.** Google (via Wanderlog and Crema): Mon–Thu 7:30–4, Fri–Sun 7:30–5. Yelp and Apple Maps: 8–5 daily. Instagram bio: 7:30–5:30. Grubhub: 8–4. Hoboken Girl (June 2025): 7:30–5:30 Tue–Sun, 7:30–4:30 Mon. The current site lists no hours. The concept uses Google’s hours (**confirm**).
4. **Menus and event packages are images** (`foodmenu.jpeg`, `drinkmenu.jpeg`, `events.PNG`), so search engines can’t read them. Prices differ from Grubhub (for example Turkish coffee $7.5 vs $7, turkey bacon egg & cheddar bagel $10.5 vs $9).
5. **Client-rendered React app with no metadata.** The HTML contains only a title and an empty root div: no description, address, hours or structured data. The Locations page describes Ridgefield Park and Jersey City but not Hoboken; Gift Cards and Catering say “Coming soon”; the footer Gift Cards link goes to `/gifcards`. The site appears to be a copy of the Ridgefield Park site (same images, “All-Day Dining & Café” logo and punch card).

## Creative direction: “Everyone gets the good china”

The good china is what a family saves for guests. At Café Vista everyone gets it, and that is the thing reviewers mention most. The design treats the page like a set table: linen background, transferware green, blush rose from the flowers and the rose latte, and the sage of the original brand. Arches echo the café’s mural; round “plate” frames and a leaf-vine rim echo the china; the menu is typeset like a printed café card with dotted leaders. Type is Cormorant (display, with an italic for warmth) and Jost (text and labels).

Business goals, in order: one-tap ordering from the right location, a correct live open/closed sign, a readable menu, selling the after-hours event packages, and local search (structured data, real text).

The concept is a static site with no framework or component library: a single page didn’t need React, so nothing from `@mwilliams/ui` is used.

## Asset record

| Asset | Source | License / status | Use |
| --- | --- | --- | --- |
| Food, drink, interior and founder photos (`public/assets/img/*`, `public/assets/og.jpg`) | Café Vista’s own photography, as published on cafevistahoboken.com (imgur IDs in `scripts/images.sh`) | Owned by the client; used here for a pitch concept only. **Confirm** permission, photographer credit, and which photos were taken in Hoboken (the same set is used on the Ridgefield Park site). | Hero, signatures, gallery strip, events, story |
| Founder photo (`founder-*.webp`) | Same set, used on the client’s Our Story page | **Confirm** it is Balsayat and that she approves its use | Story section |
| Current order page screenshot (`public/assets/brief/current-order-page.webp`) | Screenshot of cafevistahoboken.com/takeaway, taken November 5, 2026 | Evidence for the brief | /notes |
| Line drawings (sprig, rose latte cup, cezve), leaf-vine rim, favicon | Drawn for this project as inline SVG | Original | Throughout |
| Review quotes | Public Google reviews (Valerie B., Alexandra C., Zach B.) | **Confirm** the owner is comfortable quoting them | Reviews strip |
| Map | Google Maps embed (not copied) | Embed only; production should use the keyed Maps Embed API | Visit section |
| Fonts | Cormorant and Jost via Google Fonts | SIL Open Font License | Throughout |

No AI-generated imagery is used.

## To confirm with the owner

- Hours for each day.
- Menu items and prices (the concept uses the menu on the current site, not Grubhub’s).
- Whether the Turkish coffee flight and baklava are regular menu items.
- Which photos are from Hoboken; photographer credit.
- Founder photo, story wording and quote.
- Permission to quote the three reviews.
- Event package details and the inbox for inquiries (the form emails info@cafevista.management).
- “Between 5th & 6th” and street parking wording.
- Whether there is a Hoboken Uber Eats listing.
