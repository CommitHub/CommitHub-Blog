---
    path: '/web-accessibility-tutorial'
    title: Web Accessibility Tutorial
    author: Luis Alvarez
    authorImage: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/author/luis.jpg'
    date: '2020-01-10'
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

They are ranked from the highest (`<h1>`) to the lowest (`<h6>`). Headings that have an equal rank are like a new section and headings with a lower rank are a new subsection. Best way to think about headings is like your website it's a book or an outline for an essay. Skipping headings rank can create confusion on the content structure making screen readers have a hard time with it. For example adding an `<h4>`after an `<h2>`. It is ok to skip ranks when closing a subsection for example an `<h2>` after an `<h4>` because it closes that `<h4>` subsection.

### Forms

The two most common elements on a form are:
* Fields
* Labels

Often labels are not pointing correctly to the field or a field is not being labeled properly. When `<label>` element exists without being pointed to the field it represents classifies nothing. When the screen reader navigates to that form it just knows is a text field making the label and field being disconnected. Wrapping `<label>` around the text and field is a method commonly used for radio buttons and checkboxes but can also be used for other inputs. For example:

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
  value="value>
  <label for="checkbox-id">Text</label>
```

Form fields are descriped as inputs and there are many types of inputs like:

* Radio buttons
* Checkboxes
* Text
* Email
* Number
* Date
* Etc

Inputs need context for a screen reader to be able to tell what the user needs to provide to the input. If a screen reader goes to a `<textarea>` that does not have a label the user won't be able to know what to add to that input. We need to connect that information.

### Images

Images provide information and general aesthetic to a website. When an image lacks text to describe what it is the screen reader won't be able to tell users what it is either. It even affects users that the image is unavailable for. Having an `alt` attribute makes are images user friendly because if the image fails for visual users it will show the text of what it was and for screen readers will read that description back to the user. For example:

```
<img src="smiley.gif" alt="Smiley Face">
```
### Links

### Colors

## Tools to Identify Accessibility Errors

## What doesn't get test

## Resources

* [w3: Accessibility Intro](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
* [Number of lawsuits over accessibility](https://www.adatitleiii.com/2019/01/number-of-federal-website-accessibility-lawsuits-nearly-triple-exceeding-2250-in-2018/)
