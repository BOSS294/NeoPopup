# NeoPopup - The Modern 3D Popup Module 🚀  

[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/MayankChawdhari/NeoPopup)  
[![License](https://img.shields.io/badge/license-MIT-brightgreen)](LICENSE)  
[![Developer](https://img.shields.io/badge/author-Mayank%20Chawdhari-orange)](https://github.com/MayankChawdhari)  

NeoPopup is a modern, customizable, and responsive 3D popup module designed for sleek and professional web interfaces. With options for themes, animations, and customization, this module makes adding a stunning popup to your website effortless.

---

## Features 🌟  
- **3D Popup Design**: Eye-catching 3D animations for modern UI.  
- **Customizable**: Easily adjust text, colors, size, theme, and more.  
- **Auto-Close**: Optional auto-close functionality with customizable duration.  
- **Persistent Mode**: Remember user preferences using local storage.  
- **Responsive**: Works seamlessly across devices and screen sizes.  
- **Light/Dark Themes**: Built-in support for theme selection.  
- **Positioning**: Display popups at any corner of the screen.  

---

## Preview 🎥  
![image](https://github.com/user-attachments/assets/368cba4e-e624-48d4-8c29-4772baa06751)

---

## Installation 🔧  

Clone the repository or download the module files:  
```bash
git clone https://github.com/BOSS294/NeoPopup.git
```

Include the JavaScript file in your project:  
```html
<script src="path/to/developmentPopup.js"></script>
```

---

## Usage 💡  

### Basic Example  
```javascript
developmentPopup.init({
    title: "Welcome to NeoPopup!",
    body: "Thank you for exploring the modern 3D popup module.",
    buttonText: "Learn More",
    buttonCallback: () => window.open('https://github.com/BOSS294/NeoPopup', '_blank'),
});
```

---

### Available Options  

| Option          | Type          | Default              | Description                                                                 |
|------------------|---------------|----------------------|-----------------------------------------------------------------------------|
| `title`         | `string`      | `"Under Development"`| Title of the popup.                                                        |
| `body`          | `string`      | `"<strong>Oops!</strong>"`| Body content (HTML supported).                                             |
| `buttonText`    | `string`      | `"Check Latest Updates"`| Text for the main button.                                                  |
| `buttonCallback`| `function`    | `null`               | Callback function for the main button click.                               |
| `position`      | `string`      | `"bottom-right"`     | Popup position: `top-right`, `top-left`, `bottom-right`, or `bottom-left`. |
| `theme`         | `string`      | `"dark"`            | Theme for the popup: `dark` or `light`.                                    |
| `colors`        | `object`      | `{}`                 | Custom colors: `{ background, text, button }`.                             |
| `size`          | `object`      | `{}`                 | Size options: `{ width, height }`.                                         |
| `animation`     | `string`      | `"slide"`           | Animation type.                                                            |
| `autoClose`     | `boolean`     | `false`              | Automatically close the popup.                                             |
| `closeDuration` | `number`      | `5000`               | Auto-close duration in milliseconds.                                       |
| `persistent`    | `boolean`     | `false`              | Prevent popup from showing repeatedly using local storage.                 |

---

## Styling 🎨  

To include NeoPopup's built-in styling, ensure the following:  

- The `DP-popup-wrapper` div is included in your HTML.
- NeoPopup comes with **3D animations**, **shadow effects**, and customizable themes.  

To customize the design further, modify the included CSS:  
```css
.DP-popup-content {
    background: linear-gradient(135deg, #4a90e2, #2a3b4c);
}
```

---

## Example with Persistent Mode  
```javascript
developmentPopup.init({
    title: "We Value Your Feedback",
    body: "Click below to share your thoughts!",
    buttonText: "Give Feedback",
    buttonCallback: () => alert('Thank you!'),
    persistent: true,
});
```

---

## Contributing 🤝  

Contributions are always welcome! Here's how you can help:  
1. Fork the repository.  
2. Create your feature branch: `git checkout -b feature/AmazingFeature`.  
3. Commit your changes: `git commit -m "Add some AmazingFeature"`.  
4. Push to the branch: `git push origin feature/AmazingFeature`.  
5. Open a pull request.  

---

## Support 💬  

For any queries or feature requests:  
- **Email**: [mayankchawdhari@gmail.com](mailto:mayankchawdhari@gmail.com)  
- **GitHub Issues**: [NeoPopup Issues](https://github.com/BOSS294/NeoPopup/issues)  

---

## License 📄  

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Developed with ❤️ by [Mayank Chawdhari](https://github.com/BOSS294)**. 🚀  
