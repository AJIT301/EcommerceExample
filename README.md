# E-commerce Shop Application

A modern, feature-rich e-commerce product listing application built with React, TypeScript, and Vite.

## 🚀 Features

### 🌐 **Multi-Language Support**
- **4 Languages Supported**: English, Lithuanian, Ukrainian, and Dutch
- **Dynamic Switching**: Change language instantly with persistent storage
- **Complete Translation**: All UI elements, labels, and messages translated
- **Cultural Adaptation**: Localized currency and formatting where applicable

### 🎨 **Theme Support**
- **Light/Dark Themes**: Beautiful, modern light and dark color schemes
- **Automatic Persistence**: Theme preference saved across sessions
- **Smooth Transitions**: Animated theme switching with consistent styling
- **Centralized Design System**: All colors managed through CSS custom properties

### 🔍 **Advanced Search & Filtering**
- **Intelligent Search**: Search products by name with real-time suggestions
- **Autocomplete Dropdown**: Up to 5 probable matches show as you type
- **Click to Search**: Select from suggestions for instant filtering
- **No Results Handling**: Clear message when no items match search criteria

### 📊 **Product Display & Sorting**
- **Multiple Sort Options**:
  - Name: A-Z, Z-A
  - Category: A-Z, Z-A
  - Price: Highest-Lowest, Lowest-Highest
- **Flexible Display**: Show 5, 10, 20, 50 items per page or view all
- **Responsive Grid**: Products display in an adaptive grid layout
- **Stock Status**: Clear visual indicators for in-stock/out-of-stock items

### 🎯 **User Experience**
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Accessibility**: Proper focus management, ARIA labels, and keyboard navigation
- **Performance Optimized**: Efficient rendering with React.memo and useMemo
- **Loading States**: Professional loading indicators during data operations

### 🛠️ **Technical Features**
- **TypeScript**: Full type safety for reliable, maintainable code
- **Context API**: Global state management for themes and language
- **CSS Modules**: Scoped, modular styling with custom properties
- **Component Architecture**: Reusable, scalable React components
- **React Hooks**: Modern state and lifecycle management

## 🛠️ Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Typescript/EshopTS
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with theme/language controls
│   └── ItemList.tsx        # Product listing with filters and search
├── context/
│   ├── language/           # Language provider and context
│   └── theme/              # Theme provider and context
├── data/
│   └── itemS.ts           # Sample product data
├── Hooks/
│   └── useTranslation.ts  # Custom hook for translations
├── styles/
│   ├── Header.module.css  # Header component styles
│   └── ItemList.module.css # Product listing styles
├── translations/          # Translation files for all languages
│   ├── EN.ts
│   ├── LT.ts
│   ├── UA.ts
│   └── NL.ts
└── types/
    └── TypeItem.ts        # TypeScript interfaces
```

## 🎨 Design System

### CSS Custom Properties
All colors and design tokens are centralized in `index.css`:

- **Light Theme Variables**: `--light-bg`, `--light-text`, `--light-border`, etc.
- **Dark Theme Variables**: `--dark-bg`, `--dark-text`, `--dark-border`, etc.
- **Common Variables**: `--border-radius`, `--gap-small`, `--transition`, etc.

### Color Palette
- **Primary**: Blue accents (#007bff, #00d4ff)
- **Success**: Green for in-stock items (#28a745, #40c057)
- **Danger**: Red for out-of-stock items (#dc3545, #ff6b6b)
- **Neutral**: Professional grays and adaptive backgrounds

## 🌍 Internationalization

The app supports full internationalization with translations for:
- UI labels and buttons
- Error and status messages
- Product categories
- Search placeholders
- Form controls

## 📱 Responsive Features

- **Flexible Grids**: Product cards adapt to screen size
- **Optimized Filters**: Filter controls stack vertically on mobile
- **Touch Navigation**: Improved tap targets for mobile users

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📈 Performance

- **Lazy Loading**: Components load efficiently
- **Memoized Operations**: Expensive computations cached
- **Optimized Filters**: Real-time filtering without performance lag
- **Minimal Bundle**: Tree-shaken dependencies for fast loading

## 🚀 Future Enhancements

- Product detail pages
- Shopping cart functionality
- User authentication
- Payment integration
- Advanced search filters (price range, category selection)
- Favorite/wishlist functionality

---

Built with ❤️ using React, TypeScript, and modern web technologies.
