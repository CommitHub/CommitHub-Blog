---
    path: '/web-accessibility-tutorial'
    title: Web Accessibility Tutorial
    author: Luis Alvarez
    authorImage: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/author/luis.jpg'
    date: '2020-01-21'
    description: A tutorial explaining the basics of accessibility to make your users smile
    category: Web Development
    backgroundImg: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/web-accessibility-tutorial/accessibility-background.jpg'
    published: true
---

## What is Web Accessibility?

Web Development is a relatively new field and it has made major advancements over the years. Something that seems to be rather overlooked is web accessibility but what is it? Web accessibility is designing your website or web application in such a way that people with disabilities can use it.

Many websites are near impossible to use due to not taking this into account. There is also the problem that this is currently not being covered in college, boot camps or beginner tutorials leading to bad practices on developers. This can also lead to loss of business or possible lawsuit because of the Americans Disabilities Act (ADA). This is a good resource for the [number of lawsuits over accessibility](https://www.adatitleiii.com/2019/01/number-of-federal-website-accessibility-lawsuits-nearly-triple-exceeding-2250-in-2018/)

By not making your app accessible you are creating barriers for users to use your application where everybody should be able to. Also just think the last time you were on a slow or dysfunctional website that made you scream with frustration. This is what people feel when your app is not accessible. Be a good developer and don't create barriers but build bridges to connect everybody.

## Common Accessibility Errors

### Headings

They are ranked from the highest (`<h1>`) to the lowest (`<h6>`). Headings that have an equal rank are like a new section and headings with a lower rank are a new subsection. The best way to think about headings is like your website it's a book or an outline for an essay. Skipping headings rank can create confusion on the content structure making screen readers have a hard time with it. For example adding an `<h4>`after an `<h2>`. It is ok to skip ranks when closing a subsection for example an `<h2>` after an `<h4>` because it closes that `<h4>` subsection.

### Forms

The two most common elements on a form are:
* Fields
* Labels

Often labels are not pointing correctly to the field or a field is not being labeled properly. When `<label>` element exists without being pointed to the field it represents classifies nothing. When the screen reader navigates to that form it just knows it is a text field making the label and field being disconnected. Wrapping `<label>` around the text and field is a method commonly used for radio buttons and checkboxes but can also be used for other inputs. For example:

```
<label>
  <input type="checkbox"
    name="checkbox
    value="value"> Text
</label>
```

You can also add the `for` attribute to the `<label>`.This method requires the associated inputs `id`. For example:

```
<input type="checkbox"
  name="checkbox"
  id="checkbox-id"
  value="value
>
<label for="checkbox-id">Text</label>
```

Form fields are described as inputs and there are many types of inputs like:

* Radio buttons
* Checkboxes
* Text
* Email
* Number
* Date
* Etc

Inputs need context for a screen reader to be able to tell what the user needs to provide to the input. If a screen reader goes to a `<textarea>` that does not have a label the user won't be able to know what to add to that input. We need to connect that information.

### Images

Images provide information and general aesthetic to a website. When an image lacks text to describe what it is the screen reader won't be able to tell users what it is either. It even affects users that the image is unavailable for. Having an `alt` attribute makes are images user-friendly because if the image fails for visual users it will show the text of what it was and for screen readers will read that description back to the user. For example:

```
<img src="smiley.gif" alt="Smiley Face">
```
### Links

Links are one of the most basic elements in HTML. Often links do not have a href value due to being used dynamically with Javascript and can produce a bad user experience for those who cannot use a mouse. Links must have a non-empty href for it to be accessible to keyboard users. This error could also when working with images or icons like Font Awesome. Each error could be resolved in different ways but let's look as to how to resolve it on Font awesome.

`aria-label` attribute

```
<a href="https://twitter.com/" aria-label="Twitter">
  <i class="fab fa-twitter"></i>
</a>
```

Using a non-empty `aria-label` attribute in the `<a>` tag itself we resolve the accessibility error just like in the inputs

Hidden block of text in link

```
<a href="https://twitter.com/">
  <i class="fab fa-twitter">
    <span class="sr-only">Twitter</span>
  </i>
</a>
```

Font Awesome provides a screen-reader only class

### Colors

Colors provide a lot for a website ranging from design and utility but what if the user is color-blind? Telling how the contrast between the text and background is high enough to see the information on the website is key for an accessible app. Web Content Accessibility Guidelines (WCAG) has two levels of contrast ratios to help assist web designers and developers.

#### WCAG AA

Normal Text: 4.5:1
Large Text/Graphics/UI: 3:1

* Base standard to follow and the minimum to pass accessibility
* UI components include things such as form input border
* Large Text is defined as 14 point (typically 18.66px) and bold or larger, or 18 points (typically 24px) or larger.

#### WCAG AA

Normal Text: 7:1
Large Text/Graphics/UI: 4:5:1

## Tools to Identify Accessibility Errors

### WAVE by Web Accessibility in Mind

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/web-accessibility-tutorial/wave.jpg" />

WAVE provides a detection summary of the current page the tab has loaded like errors, alerts, elements, etc. It provides as well helpful information of each detection like what does it mean, what it does and how to fix it if there is a problem.

### Lighthouse by Google

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/web-accessibility-tutorial/google-lighthouse.jpg" />


Lighthouse is an open-source, automated tool for improving the quality of web pages. It can test up to five different categories:

* Performance
* Accessibility
* Best Practices
* SEO
* Progressive Web App

It provides a grade for each category, reason for each grade, and how to improve the category's grade if a 100 was not received.

### Contrast Checker by WebAIM

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/web-accessibility-tutorial/webaim.png" />


WebAIM has a straightforward website that checks for color contrast ratios. You plug in the hex codes for the foreground and the background colors, and it will provide a clear indicator on what passes or fails based on those parameters. You can also adjust the lightness or darkness for each of the colors to see what color must be in order to pass the contrast ratios.

### Tanaguru Contrast Finder

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/web-accessibility-tutorial/tanaguru.jpg" />


It checks color contrast ratios and provides a list of valid colors relating to the original that was provided with the minimum ratio provided.

## What doesn't get test

### Links that open a new tab or window

Having a link that opens a new tab or window can be disorienting for people, especially people who have difficulty perceiving visual content. Providing advance warnings is a good rule of thumb to follow.

The two most common ways are:

* Adding an external link icon with visually hidden text saying that the links open a new tab

```
<a href="https://example.com" target="_blank" rel="noopener">
    example link
    <i class="fas fa-external-link-alt"></i>
</a>
```

* A warning within the text of the link

```
<a href="https://example.com" target="_blank" rel="noopener">
    example link (opens in a new tab)
</a>
```

or if you don't want to display the text to non screen reader users you can do the example below.

```
<a href="https://example.com" target="_blank">
    example link
    <span class="screen-reader-only">(opens in a new tab)</span>
</a>

.screen-reader-only {
    position: absolute;
    width: 1px;
    clip: rect(0 0 0 0);
    overflow: hidden;
    white-space: nowrap;
}
```
### Descriptive Errors

Form fields can be required or need to be filled out a certain way before submitting. When a user receives an error, the questions you want to answer for them are:

* Can they see there is an error?
* Is the error properly tied to the input?
* Why are they receiving the error?
* How can it be fixed?

The important things we need to focus on are `aria-describeby` and `role="alert"` attributes. For example:

```
<input type="email" name="email" aria-describeby="email-input-alert" required>
<small role="alert" id="email-input-aler">
  Please enter a valid email address
</small>
```

### Line Length

In a body of text, line-length can have an impact on reading comprehension for anyone, especially to those with learning or mental disorders such as dyslexia or ADHD. The longer the line-length, the more likely the user's reading comprehension is at risk.

To help improve this, the recommended line length is between 50-60 words per line. Others say no more than 80 per line.

To test line length, you can use this website called [wordcounter.io](https://wordcounter.io/).

### Color contrasts on images

Steps to follow:

* Add a background to the text block with a high enough contrast ratio.
* Add a dark enough drop shadow
* If the background is minimal, such as a gradient, manually check the color contrast of the text and each corresponding color within the spectrum.

### Keyboard Navigation

Many disabled individuals rely on keyboard navigation. If you are building something on your website that is meant to be interacted with a mouse, make sure you can accomplish the same via a keyboard. You can accomplish this using the [focusable elements](https://html.spec.whatwg.org/multipage/interaction.html#the-tabindex-attribute) to help accomplish this.

## Resources

* [w3: Accessibility Intro](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
* [Number of lawsuits over accessibility](https://www.adatitleiii.com/2019/01/number-of-federal-website-accessibility-lawsuits-nearly-triple-exceeding-2250-in-2018/)
* [WAVE](https://wave.webaim.org/)
* [Lighthouse](https://developers.google.com/web/tools/lighthouse)
* [Contrast Checker by WebAIM](https://webaim.org/resources/contrastchecker/)
* [Tanaguru](https://contrast-finder.tanaguru.com/)
* [wordcounter.io](https://wordcounter.io/)
