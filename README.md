# Astro + Decap CMS Starter

A lightweight, static site starter template with client-friendly content editing. Replaces WordPress for brochure sites, small business sites, and portfolios.

## Stack

- **Astro** — static site generator (outputs pure HTML)
- **Tailwind CSS** — utility-first styling
- **Decap CMS** — git-based content editing (free, no external service)
- **Netlify** — hosting with Identity auth for the CMS

## Quick Start

### For a new client site

1. Clone this template:
   ```bash
   git clone <this-repo> client-name-site
   cd client-name-site
   rm -rf .git && git init
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:4321` to see the site.

5. Customise the design by editing components in `src/components/` and pages in `src/pages/`.

6. Edit content in `src/content/pages/` (or through the CMS once deployed).

### Deploy to Netlify

1. Push to a new GitHub repository.
2. In Netlify, create a new site from the repo.
3. Netlify will auto-detect the build settings from `netlify.toml`.
4. Enable **Identity** in the Netlify dashboard (Integrations > Identity).
5. Enable **Git Gateway** (Identity > Services > Git Gateway).
6. Invite the client as an Identity user (Identity > Invite users).
7. The client can now edit content at `theirsite.com/admin`.

## Project Structure

```
├── public/admin/          # Decap CMS admin panel
├── src/content/pages/     # Editable page content (markdown)
├── src/components/        # Astro + React components
├── src/layouts/           # Shared page layout
├── src/pages/             # Page routes
└── netlify.toml           # Netlify build config
```

## Adding a New Page

1. Create `src/content/pages/newpage.md` with frontmatter fields.
2. Create `src/pages/newpage.astro` that reads from the content collection.
3. Add the page to the nav links in `src/components/Nav.astro`.
4. The page will automatically appear in the CMS admin panel.

## Customising CMS Fields

Edit `public/admin/config.yml` to add, remove, or change editable fields. See [Decap CMS widgets docs](https://decapcms.org/docs/widgets/) for available field types.

## Local Development

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build static site to dist/
npm run preview  # Preview the built site locally
```
