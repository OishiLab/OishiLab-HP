# Oishi Lab Website

This is the source code for the Oishi Lab website.

## For Administrators (How to Update Content)

You can update the website content by editing the JSON files in the `src/data/` folder.
You do not need to touch the code in `src/pages/` unless you want to change the design.

### Files to Edit

- **News**: `src/data/news.json`
  - Add new items to the top of the list.
- **Members**: `src/data/members.json`
  - Organize members by category (Faculty, PhD, Master, Undergraduate).
- **Publications**: `src/data/publications.json`
  - Group papers by year.
- **Projects**: `src/data/projects.json`

### Example: Adding a New News Item

Open `src/data/news.json` and add a new block at the top:

```json
[
  {
    "date": "2025.03.01",
    "title": "New paper accepted!",
    "category": "Publication"
  },
  ...
]
```

## Development

### Prerequisites

- Node.js (v18 or higher)

### Setup

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```
