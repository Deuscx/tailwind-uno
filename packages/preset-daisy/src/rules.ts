export default [[/^alert/,function anonymous(
) {
return `.alert {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem
}
.alert > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse))
}
@media (min-width: 768px) {
    .alert {
        flex-direction: row
    }
    .alert > :not([hidden]) ~ :not([hidden]) {
        --tw-space-y-reverse: 0;
        margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
        margin-bottom: calc(0px * var(--tw-space-y-reverse))
    }
}
  .alert > :where(*) {
    display: flex;
    align-items: center;
    gap: 0.5rem
}

.alert {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
    padding: 1rem;
    border-radius: var(--rounded-box, 1rem)
}
  .alert-info {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--in) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--inc, var(--nc)) / var(--tw-text-opacity))
}
  .alert-success {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--su) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--suc, var(--nc)) / var(--tw-text-opacity))
}
  .alert-warning {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--wa) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--wac, var(--nc)) / var(--tw-text-opacity))
}
  .alert-error {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--er) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--erc, var(--nc)) / var(--tw-text-opacity))
}

`
}],[/^avatar/,function anonymous(
) {
return `.avatar {
    position: relative;
    display: inline-flex
}
  .avatar > div {
    display: block;
    aspect-ratio: 1 / 1;
    overflow: hidden
}
  .avatar img {
    height: 100%;
    width: 100%;
    object-fit: cover
}
  .avatar.placeholder > div {
    display: flex;
    align-items: center;
    justify-content: center
}

.avatar-group {
    display: flex;
    overflow: hidden
}
  .avatar-group :where(.avatar) {
    overflow: hidden;
    border-radius: 9999px;
    border-width: 4px;
    --tw-border-opacity: 1;
    border-color: hsl(var(--b1) / var(--tw-border-opacity))
}

`
}],[/^badge/,function anonymous(
) {
return `.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  height: 1.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: fit-content;
  padding-left: 0.563rem;
  padding-right: 0.563rem
}

.badge {
    border-width: 1px;
    --tw-border-opacity: 1;
    border-color: hsl(var(--n) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--n) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--nc) / var(--tw-text-opacity));
    border-radius: var(--rounded-badge, 1.9rem)
}
  .badge-primary {
    --tw-border-opacity: 1;
    border-color: hsl(var(--p) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--p) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--pc) / var(--tw-text-opacity))
}
  .badge-secondary {
    --tw-border-opacity: 1;
    border-color: hsl(var(--s) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--s) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--sc) / var(--tw-text-opacity))
}
  .badge-accent {
    --tw-border-opacity: 1;
    border-color: hsl(var(--a) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--a) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--ac) / var(--tw-text-opacity))
}
  .badge-info {
    border-color: transparent;
    --tw-bg-opacity: 1;
    background-color: hsl(var(--in) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--inc, var(--nc)) / var(--tw-text-opacity))
}
  .badge-success {
    border-color: transparent;
    --tw-bg-opacity: 1;
    background-color: hsl(var(--su) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--suc, var(--nc)) / var(--tw-text-opacity))
}
  .badge-warning {
    border-color: transparent;
    --tw-bg-opacity: 1;
    background-color: hsl(var(--wa) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--wac, var(--nc)) / var(--tw-text-opacity))
}
  .badge-error {
    border-color: transparent;
    --tw-bg-opacity: 1;
    background-color: hsl(var(--er) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--erc, var(--nc)) / var(--tw-text-opacity))
}
  .badge-ghost {
    --tw-border-opacity: 1;
    border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--bc) / var(--tw-text-opacity))
}
  .badge-outline {
    border-color: currentColor;
    --tw-border-opacity: 0.5;
    background-color: transparent;
    color: currentColor
}
  .badge-outline.badge-primary {
    --tw-text-opacity: 1;
    color: hsl(var(--p) / var(--tw-text-opacity))
}
  .badge-outline.badge-secondary {
    --tw-text-opacity: 1;
    color: hsl(var(--s) / var(--tw-text-opacity))
}
  .badge-outline.badge-accent {
    --tw-text-opacity: 1;
    color: hsl(var(--a) / var(--tw-text-opacity))
}
  .badge-outline.badge-info {
    --tw-text-opacity: 1;
    color: hsl(var(--in) / var(--tw-text-opacity))
}
  .badge-outline.badge-success {
    --tw-text-opacity: 1;
    color: hsl(var(--su) / var(--tw-text-opacity))
}
  .badge-outline.badge-warning {
    --tw-text-opacity: 1;
    color: hsl(var(--wa) / var(--tw-text-opacity))
}
  .badge-outline.badge-error {
    --tw-text-opacity: 1;
    color: hsl(var(--er) / var(--tw-text-opacity))
}

.btn-outline .badge {
    --tw-border-opacity: 1;
    border-color: hsl(var(--nf, var(--n)) / var(--tw-border-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--nc) / var(--tw-text-opacity))
}

.btn-outline.btn-primary .badge {
    --tw-border-opacity: 1;
    border-color: hsl(var(--p) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--p) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--pc) / var(--tw-text-opacity))
}

.btn-outline.btn-secondary .badge {
    --tw-border-opacity: 1;
    border-color: hsl(var(--s) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--s) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--sc) / var(--tw-text-opacity))
}

.btn-outline.btn-accent .badge {
    --tw-border-opacity: 1;
    border-color: hsl(var(--a) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--a) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--ac) / var(--tw-text-opacity))
}

.btn-outline .badge.outline {
    --tw-border-opacity: 1;
    border-color: hsl(var(--nf, var(--n)) / var(--tw-border-opacity));
    background-color: transparent
}

.btn-outline.btn-primary .badge-outline {
    --tw-border-opacity: 1;
    border-color: hsl(var(--p) / var(--tw-border-opacity));
    background-color: transparent;
    --tw-text-opacity: 1;
    color: hsl(var(--p) / var(--tw-text-opacity))
}

.btn-outline.btn-secondary .badge-outline {
    --tw-border-opacity: 1;
    border-color: hsl(var(--s) / var(--tw-border-opacity));
    background-color: transparent;
    --tw-text-opacity: 1;
    color: hsl(var(--s) / var(--tw-text-opacity))
}

.btn-outline.btn-accent .badge-outline {
    --tw-border-opacity: 1;
    border-color: hsl(var(--a) / var(--tw-border-opacity));
    background-color: transparent;
    --tw-text-opacity: 1;
    color: hsl(var(--a) / var(--tw-text-opacity))
}

.btn-outline.btn-info .badge-outline {
    --tw-border-opacity: 1;
    border-color: hsl(var(--in) / var(--tw-border-opacity));
    background-color: transparent;
    --tw-text-opacity: 1;
    color: hsl(var(--in) / var(--tw-text-opacity))
}

.btn-outline.btn-success .badge-outline {
    --tw-border-opacity: 1;
    border-color: hsl(var(--su) / var(--tw-border-opacity));
    background-color: transparent;
    --tw-text-opacity: 1;
    color: hsl(var(--su) / var(--tw-text-opacity))
}

.btn-outline.btn-warning .badge-outline {
    --tw-border-opacity: 1;
    border-color: hsl(var(--wa) / var(--tw-border-opacity));
    background-color: transparent;
    --tw-text-opacity: 1;
    color: hsl(var(--wa) / var(--tw-text-opacity))
}

.btn-outline.btn-error .badge-outline {
    --tw-border-opacity: 1;
    border-color: hsl(var(--er) / var(--tw-border-opacity));
    background-color: transparent;
    --tw-text-opacity: 1;
    color: hsl(var(--er) / var(--tw-text-opacity))
}

.btn-outline:hover .badge {
    --tw-border-opacity: 1;
    border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--bc) / var(--tw-text-opacity))
}

.btn-outline:hover .badge.outline {
    --tw-border-opacity: 1;
    border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--nc) / var(--tw-text-opacity))
}

.btn-outline.btn-primary:hover .badge {
    --tw-border-opacity: 1;
    border-color: hsl(var(--pc) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--pc) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--p) / var(--tw-text-opacity))
}

.btn-outline.btn-primary:hover .badge.outline {
    --tw-border-opacity: 1;
    border-color: hsl(var(--pc) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--pf, var(--p)) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--pc) / var(--tw-text-opacity))
}

.btn-outline.btn-secondary:hover .badge {
    --tw-border-opacity: 1;
    border-color: hsl(var(--sc) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--sc) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--s) / var(--tw-text-opacity))
}

.btn-outline.btn-secondary:hover .badge.outline {
    --tw-border-opacity: 1;
    border-color: hsl(var(--sc) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--sf, var(--s)) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--sc) / var(--tw-text-opacity))
}

.btn-outline.btn-accent:hover .badge {
    --tw-border-opacity: 1;
    border-color: hsl(var(--ac) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--ac) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--a) / var(--tw-text-opacity))
}

.btn-outline.btn-accent:hover .badge.outline {
    --tw-border-opacity: 1;
    border-color: hsl(var(--ac) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--af, var(--a)) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--ac) / var(--tw-text-opacity))
}

`
}],[/^btm-nav/,function anonymous(
) {
return `.btm-nav {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-bottom: env(safe-area-inset-bottom)
}
  .btm-nav>* {
  position: relative;
  display: flex;
  height: 100%;
  flex-basis: 100%;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem
}

.btm-nav {
    height: 4rem;
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b1) / var(--tw-bg-opacity));
    color: currentColor
}
  .btm-nav>* {
    border-color: currentColor
}
  .btm-nav>*:not(.active) {
    padding-top: 0.125rem
}
  /* active */
  .btm-nav>*:where(.active) {
    border-top-width: 2px;
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b1) / var(--tw-bg-opacity))
}
  /* disabled */
  .btm-nav>*.disabled,
    .btm-nav>*.disabled:hover,
    .btm-nav>*[disabled],
    .btm-nav>*[disabled]:hover {
    pointer-events: none;
    --tw-border-opacity: 0;
    background-color: hsl(var(--n) / var(--tw-bg-opacity));
    --tw-bg-opacity: 0.1;
    color: hsl(var(--bc) / var(--tw-text-opacity));
    --tw-text-opacity: 0.2
}
  .btm-nav>* .label {
    font-size: 1rem;
    line-height: 1.5rem
}



`
}],[/^breadcrumbs/,function anonymous(
) {
return `.breadcrumbs {
    max-width: 100%;
    overflow-x: auto
}
  .breadcrumbs > ul {
    display: flex;
    align-items: center;
    white-space: nowrap;
    min-height: min-content
}
  .breadcrumbs > ul > li {
    display: flex;
    align-items: center
}
  .breadcrumbs > ul > li > a {
    display: flex;
    cursor: pointer;
    align-items: center
}
  .breadcrumbs > ul > li > a:hover {
    text-decoration-line: underline
}

.breadcrumbs {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
}
  .breadcrumbs > ul > li > a:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
}
  .breadcrumbs > ul > li > a:focus-visible {
          outline: 2px solid currentColor;
          outline-offset: 2px;
        }
  .breadcrumbs > ul > li + *:before {
        content: "";
        margin-left: 0.5rem;
        margin-right: 0.75rem;
        display: block;
        height: 0.375rem;
        width: 0.375rem;
        --tw-rotate: 45deg;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        opacity: 0.4;
        border-top: 1px solid;
        border-right: 1px solid;
        background-color: transparent;
      }

[dir="rtl"] .breadcrumbs>ul>li+*:before {
  --tw-rotate: -45deg;
}
`
}],[/^btn/,function anonymous(
) {
return `.btn {
  display: inline-flex;
  flex-shrink: 0;
  cursor: pointer;
  user-select: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  text-align: center;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: var(--rounded-btn, 0.5rem);
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  min-height: 3rem;
  line-height: 1em;
}

  /* disabled */

  .btn-disabled,
  .btn[disabled] {
  pointer-events: none;
}

  /* shapes */

  .btn-square {
  height: 3rem;
  width: 3rem;
  padding: 0px;
}

  .btn-circle {
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  padding: 0px;
}

  /* loading */

  .btn.loading,
    .btn.loading:hover {
  pointer-events: none;
}

  .btn.loading:before {
  margin-right: 0.5rem;
  height: 1rem;
  width: 1rem;
  border-radius: 9999px;
  border-width: 2px;
      animation: spin 2s linear infinite;
      content: "";
      border-top-color: transparent;
      border-left-color: transparent;
      border-bottom-color: currentColor;
      border-right-color: currentColor;
}
@media (prefers-reduced-motion: reduce) {
  .btn.loading:before {
    animation: spin 10s linear infinite;
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
/* group */
.btn-group {
  display: inline-flex;
}
.btn-group > input[type="radio"].btn {
  appearance: none;
}
.btn-group > input[type="radio"].btn:before {
    content: attr(data-title);
  }
.btn {
  font-weight: 600;
  text-transform: uppercase;
  text-decoration-line: none;
  border-width: var(--border-btn, 1px);
  animation: button-pop var(--animation-btn, 0.25s) ease-out;
  text-transform: var(--btn-text-case, uppercase);
}
  .btn:active:hover,
  .btn:active:focus {
    animation: none;
    transform: scale(var(--btn-focus-scale, 0.95));
  }
  /* default btn */
  .btn {
  --tw-border-opacity: 1;
  border-color: hsl(var(--n) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--nc) / var(--tw-text-opacity));
  text-decoration-line: none;
}
  .btn:hover,
    .btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nf, var(--n)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nf, var(--n)) / var(--tw-bg-opacity));
}
  .btn:focus-visible {
      outline: 2px solid hsl(var(--nf));
      outline-offset: 2px;
    }
  /* brand colors */
  .btn-primary {
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}
  .btn-primary:hover,
    .btn-primary.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--pf, var(--p)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--pf, var(--p)) / var(--tw-bg-opacity));
}
  .btn-primary:focus-visible {
      outline: 2px solid hsl(var(--p));
    }
  .btn-secondary {
  --tw-border-opacity: 1;
  border-color: hsl(var(--s) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--s) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--sc) / var(--tw-text-opacity));
}
  .btn-secondary:hover,
    .btn-secondary.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--sf, var(--s)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--sf, var(--s)) / var(--tw-bg-opacity));
}
  .btn-secondary:focus-visible {
      outline: 2px solid hsl(var(--s));
    }
  .btn-accent {
  --tw-border-opacity: 1;
  border-color: hsl(var(--a) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--a) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--ac) / var(--tw-text-opacity));
}
  .btn-accent:hover,
    .btn-accent.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--af, var(--a)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--af, var(--a)) / var(--tw-bg-opacity));
}
  .btn-accent:focus-visible {
      outline: 2px solid hsl(var(--a));
    }
  /* btn with state colors */
  .btn-info {
  --tw-border-opacity: 1;
  border-color: hsl(var(--in) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--in) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--inc, var(--nc)) / var(--tw-text-opacity));
}
  .btn-info:hover,
    .btn-info.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--in) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--in) / var(--tw-bg-opacity));
}
  .btn-info:focus-visible {
      outline: 2px solid hsl(var(--in));
    }
  .btn-success {
  --tw-border-opacity: 1;
  border-color: hsl(var(--su) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--su) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--suc, var(--nc)) / var(--tw-text-opacity));
}
  .btn-success:hover,
    .btn-success.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--su) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--su) / var(--tw-bg-opacity));
}
  .btn-success:focus-visible {
      outline: 2px solid hsl(var(--su));
    }
  .btn-warning {
  --tw-border-opacity: 1;
  border-color: hsl(var(--wa) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--wa) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--wac, var(--nc)) / var(--tw-text-opacity));
}
  .btn-warning:hover,
    .btn-warning.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--wa) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--wa) / var(--tw-bg-opacity));
}
  .btn-warning:focus-visible {
      outline: 2px solid hsl(var(--wa));
    }
  .btn-error {
  --tw-border-opacity: 1;
  border-color: hsl(var(--er) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--er) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--erc, var(--nc)) / var(--tw-text-opacity));
}
  .btn-error:hover,
    .btn-error.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--er) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--er) / var(--tw-bg-opacity));
}
  .btn-error:focus-visible {
      outline: 2px solid hsl(var(--er));
    }
  /* glass */
  .btn.glass:hover,
    .btn.glass.btn-active {
      --glass-opacity: 25%;
      --glass-border-opacity: 15%;
    }
  .btn.glass:focus-visible {
      outline: 2px solid currentColor;
    }
  /* btn variants */
  .btn-ghost {
  border-width: 1px;
  border-color: transparent;
  background-color: transparent;
  color: currentColor;
}
  .btn-ghost:hover,
    .btn-ghost.btn-active {
  --tw-border-opacity: 0;
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.2;
}
  .btn-ghost:focus-visible {
      outline: 2px solid currentColor;
    }
  .btn-link {
  border-color: transparent;
  background-color: transparent;
  --tw-text-opacity: 1;
  color: hsl(var(--p) / var(--tw-text-opacity));
  text-decoration-line: underline;
}
  .btn-link:hover,
    .btn-link.btn-active {
  border-color: transparent;
  background-color: transparent;
  text-decoration-line: underline;
}
  .btn-link:focus-visible {
      outline: 2px solid currentColor;
    }
  /* outline */
  .btn-outline {
  border-color: currentColor;
  background-color: transparent;
  --tw-text-opacity: 1;
  color: hsl(var(--bc) / var(--tw-text-opacity));
}
  .btn-outline:hover,
    .btn-outline.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--b1) / var(--tw-text-opacity));
}
  .btn-outline.btn-primary {
  --tw-text-opacity: 1;
  color: hsl(var(--p) / var(--tw-text-opacity));
}
  .btn-outline.btn-primary:hover,
      .btn-outline.btn-primary.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--pf, var(--p)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--pf, var(--p)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}
  .btn-outline.btn-secondary {
  --tw-text-opacity: 1;
  color: hsl(var(--s) / var(--tw-text-opacity));
}
  .btn-outline.btn-secondary:hover,
      .btn-outline.btn-secondary.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--sf, var(--s)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--sf, var(--s)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--sc) / var(--tw-text-opacity));
}
  .btn-outline.btn-accent {
  --tw-text-opacity: 1;
  color: hsl(var(--a) / var(--tw-text-opacity));
}
  .btn-outline.btn-accent:hover,
      .btn-outline.btn-accent.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--af, var(--a)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--af, var(--a)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--ac) / var(--tw-text-opacity));
}
  .btn-outline.btn-success {
  --tw-text-opacity: 1;
  color: hsl(var(--su) / var(--tw-text-opacity));
}
  .btn-outline.btn-success:hover,
      .btn-outline.btn-success.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--su) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--su) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--suc, var(--nc)) / var(--tw-text-opacity));
}
  .btn-outline.btn-info {
  --tw-text-opacity: 1;
  color: hsl(var(--in) / var(--tw-text-opacity));
}
  .btn-outline.btn-info:hover,
      .btn-outline.btn-info.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--in) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--in) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--inc, var(--nc)) / var(--tw-text-opacity));
}
  .btn-outline.btn-warning {
  --tw-text-opacity: 1;
  color: hsl(var(--wa) / var(--tw-text-opacity));
}
  .btn-outline.btn-warning:hover,
      .btn-outline.btn-warning.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--wa) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--wa) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--wac, var(--nc)) / var(--tw-text-opacity));
}
  .btn-outline.btn-error {
  --tw-text-opacity: 1;
  color: hsl(var(--er) / var(--tw-text-opacity));
}
  .btn-outline.btn-error:hover,
      .btn-outline.btn-error.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--er) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--er) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--erc, var(--nc)) / var(--tw-text-opacity));
}
  /* disabled */
  .btn-disabled,
  .btn-disabled:hover,
  .btn[disabled],
  .btn[disabled]:hover {
  --tw-border-opacity: 0;
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.2;
  color: hsl(var(--bc) / var(--tw-text-opacity));
  --tw-text-opacity: 0.2;
}
  /* loading */
  .btn.loading.btn-square:before,
    .btn.loading.btn-circle:before {
  margin-right: 0px;
}
  .btn.loading.btn-xl:before,
    .btn.loading.btn-lg:before {
  height: 1.25rem;
  width: 1.25rem;
}
  .btn.loading.btn-sm:before,
    .btn.loading.btn-xs:before {
  height: 0.75rem;
  width: 0.75rem;
}
/* group */
.btn-group > input[type="radio"]:checked.btn,
  .btn-group > .btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}
.btn-group > input[type="radio"]:checked.btn:focus-visible, .btn-group > .btn-active:focus-visible {
      outline: 2px solid hsl(var(--p));
    }
@keyframes button-pop {
  0% {
    transform: scale(var(--btn-focus-scale, 0.95));
  }
  40% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}

`
}],[/^card/,function anonymous(
) {
return `.card {
      position: relative;
      display: flex;
      flex-direction: column
}
  .card:focus {
      outline: 2px solid transparent;
      outline-offset: 2px
}
  .card-body {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column
}
  .card-body :where(p) {
      flex-grow: 1
}
  .card-actions {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      gap: 0.5rem
}
  .card figure {
      display: flex;
      align-items: center;
      justify-content: center
}
  .card.image-full {
      display: grid
}
  .card.image-full:before {
      position: relative;
      content: ""
}
  .card.image-full:before,
    .card.image-full > * {
      grid-column-start: 1;
      grid-row-start: 1
}
  .card.image-full > figure img {
      height: 100%;
      object-fit: cover
}
  .card.image-full > .card-body {
      position: relative
}

.card {
    border-radius: var(--rounded-box, 1rem);
}
  .card :where(figure:first-child) {
    overflow: hidden;
    border-start-start-radius: inherit;
    border-start-end-radius: inherit;
    border-end-start-radius: unset;
    border-end-end-radius: unset;
}
  .card :where(figure:last-child) {
    overflow: hidden;
    border-start-start-radius: unset;
    border-start-end-radius: unset;
    border-end-start-radius: inherit;
    border-end-end-radius: inherit;
}
  .card:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
  .card.bordered {
    border-width: 1px;
    --tw-border-opacity: 1;
    border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));
}
  .card-bordered {
    border-width: 1px;
    --tw-border-opacity: 1;
    border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));
}
  .card.compact .card-body {
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
}
  .card-body {
    padding: var(--padding-card, 2rem);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .card-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
}
  .card.image-full:before {
    z-index: 10;
    --tw-bg-opacity: 1;
    background-color: hsl(var(--n) / var(--tw-bg-opacity));
    opacity: 0.75;
    border-radius: var(--rounded-box, 1rem);
}
  .card.image-full > .card-body {
    z-index: 20;
    --tw-text-opacity: 1;
    color: hsl(var(--nc) / var(--tw-text-opacity));
}
  .card.image-full :where(figure) {
    overflow: hidden;
      border-radius: inherit;
}

`
}],[/^carousel/,function anonymous(
) {
return `.carousel {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}
  .carousel-vertical {
  flex-direction: column;
  overflow-y: scroll;
    scroll-snap-type: y mandatory;
}
  .carousel-item {
  box-sizing: content-box;
  display: flex;
  flex: none;
    scroll-snap-align: start;
}
  .carousel-center .carousel-item {
    scroll-snap-align: center;
  }
  .carousel-end .carousel-item {
    scroll-snap-align: end;
  }

.carousel {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
  .carousel::-webkit-scrollbar {
  display: none;
}

`
}],[/^chat/,function anonymous(
) {
return `.chat {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 0.75rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
}
  .chat-image {
    grid-row: span 2 / span 2;
    align-self: flex-end;
}
  .chat-header {
    grid-row-start: 1;
    font-size: 0.875rem;
    line-height: 1.25rem;
}
  .chat-footer {
    grid-row-start: 3;
    font-size: 0.875rem;
    line-height: 1.25rem;
}
  .chat-bubble {
    position: relative;
    display: block;
    width: fit-content;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    max-width: 90%;
}
  .chat-bubble:before {
    position: absolute;
    bottom: 0px;
    height: 0.75rem;
    width: 0.75rem;
      background-color: inherit;
      content: "";
      -webkit-mask-size: contain;
              mask-size: contain;
      -webkit-mask-repeat: no-repeat;
              mask-repeat: no-repeat;
      -webkit-mask-position: center;
              mask-position: center;
}
  .chat-start {
    place-items: start;
    grid-template-columns: auto 1fr;
}
  .chat-start .chat-header {
    grid-column-start: 2;
}
  .chat-start .chat-footer {
    grid-column-start: 2;
}
  .chat-start .chat-image {
    grid-column-start: 1;
}
  .chat-start .chat-bubble {
    grid-column-start: 2;
}
  .chat-start .chat-bubble:before {
        -webkit-mask-image: url("data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e");
                mask-image: url("data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e");
      }
  [dir="rtl"] .chat-start .chat-bubble:before {
          -webkit-mask-image: url("data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 1 3 L 3 3 C 2 3 0 1 0 0'/%3e%3c/svg%3e");
                  mask-image: url("data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 1 3 L 3 3 C 2 3 0 1 0 0'/%3e%3c/svg%3e");
        }
  .chat-end {
    place-items: end;
    grid-template-columns: 1fr auto;
}
  .chat-end .chat-header {
    grid-column-start: 1;
}
  .chat-end .chat-footer {
    grid-column-start: 1;
}
  .chat-end .chat-image {
    grid-column-start: 2;
}
  .chat-end .chat-bubble {
    grid-column-start: 1;
}
  .chat-end .chat-bubble:before {
        -webkit-mask-image: url("data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 1 3 L 3 3 C 2 3 0 1 0 0'/%3e%3c/svg%3e");
                mask-image: url("data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 1 3 L 3 3 C 2 3 0 1 0 0'/%3e%3c/svg%3e");
      }
  [dir="rtl"] .chat-end .chat-bubble:before {
          -webkit-mask-image: url("data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e");
                  mask-image: url("data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e");
        }

.chat-bubble {
    border-radius: var(--rounded-box, 1rem);
    min-height: 2.75rem;
    min-width: 2.75rem;
}

    /* default */

    .chat-bubble {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--n) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--nc) / var(--tw-text-opacity));
}

    /* brand colors */

    .chat-bubble-primary {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--p) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--pc) / var(--tw-text-opacity));
}

    .chat-bubble-secondary {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--s) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--sc) / var(--tw-text-opacity));
}

    .chat-bubble-accent {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--a) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--ac) / var(--tw-text-opacity));
}

    /* state colors */

    .chat-bubble-info {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--in) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--inc, var(--nc)) / var(--tw-text-opacity));
}

    .chat-bubble-success {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--su) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--suc, var(--nc)) / var(--tw-text-opacity));
}

    .chat-bubble-warning {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--wa) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--wac, var(--nc)) / var(--tw-text-opacity));
}

    .chat-bubble-error {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--er) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--erc, var(--nc)) / var(--tw-text-opacity));
}
  .chat-start .chat-bubble {
    border-bottom-left-radius: 0px;
}
  .chat-start .chat-bubble:before {
      left: -0.75rem;
    }
  .chat-end .chat-bubble {
    border-bottom-right-radius: 0px;
}
  .chat-end .chat-bubble:before {
      left: 100%;
    }

`
}],[/^checkbox/,function anonymous(
) {
return `.checkbox {
    flex-shrink: 0
}

.checkbox {
  --chkbg: var(--bc);
  --chkfg: var(--b1);
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  appearance: none;
  border-width: 1px;
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  --tw-border-opacity: 0.2;
  border-radius: var(--rounded-btn, 0.5rem);
}
  .checkbox:focus-visible {
    outline: 2px solid hsl(var(--bc));
    outline-offset: 2px;
  }
  .checkbox:checked,
  .checkbox[checked="true"],
  .checkbox[aria-checked="true"] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  background-repeat: no-repeat;
    animation: checkmark var(--animation-input, 0.2s) ease-in-out;
    background-image: linear-gradient(-45deg, transparent 65%, hsl(var(--chkbg)) 65.99%), linear-gradient(45deg, transparent 75%, hsl(var(--chkbg)) 75.99%), linear-gradient(-45deg, hsl(var(--chkbg)) 40%, transparent 40.99%), linear-gradient(45deg, hsl(var(--chkbg)) 30%, hsl(var(--chkfg)) 30.99%, hsl(var(--chkfg)) 40%, transparent 40.99%), linear-gradient(-45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);
}
  .checkbox:indeterminate {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  background-repeat: no-repeat;
    animation: checkmark var(--animation-input, 0.2s) ease-in-out;
    background-image: linear-gradient(90deg, transparent 80%, hsl(var(--chkbg)) 80%), linear-gradient(-90deg, transparent 80%, hsl(var(--chkbg)) 80%), linear-gradient(0deg, hsl(var(--chkbg)) 43%, hsl(var(--chkfg)) 43%, hsl(var(--chkfg)) 57%, hsl(var(--chkbg)) 57%);
}
  .checkbox-primary {
    --chkbg: var(--p);
    --chkfg: var(--pc);
    --tw-border-opacity: 1;
    border-color: hsl(var(--p) / var(--tw-border-opacity));
  }
  .checkbox-primary:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
}
  .checkbox-primary:focus-visible {
      outline: 2px solid hsl(var(--p));
    }
  .checkbox-primary:checked,
    .checkbox-primary[checked="true"],
    .checkbox-primary[aria-checked="true"] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}
  .checkbox-secondary {
    --chkbg: var(--s);
    --chkfg: var(--sc);
    --tw-border-opacity: 1;
    border-color: hsl(var(--s) / var(--tw-border-opacity));
  }
  .checkbox-secondary:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--s) / var(--tw-border-opacity));
}
  .checkbox-secondary:focus-visible {
      outline: 2px solid hsl(var(--s));
    }
  .checkbox-secondary:checked,
    .checkbox-secondary[checked="true"],
    .checkbox-secondary[aria-checked="true"] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--s) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--s) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--sc) / var(--tw-text-opacity));
}
  .checkbox-accent {
    --chkbg: var(--a);
    --chkfg: var(--ac);
    --tw-border-opacity: 1;
    border-color: hsl(var(--a) / var(--tw-border-opacity));
  }
  .checkbox-accent:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--a) / var(--tw-border-opacity));
}
  .checkbox-accent:focus-visible {
      outline: 2px solid hsl(var(--a));
    }
  .checkbox-accent:checked,
    .checkbox-accent[checked="true"],
    .checkbox-accent[aria-checked="true"] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--a) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--a) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--ac) / var(--tw-text-opacity));
}
  .checkbox-success {
    --chkbg: var(--su);
    --chkfg: var(--suc);
    --tw-border-opacity: 1;
    border-color: hsl(var(--su) / var(--tw-border-opacity));
  }
  .checkbox-success:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--su) / var(--tw-border-opacity));
}
  .checkbox-success:focus-visible {
      outline: 2px solid hsl(var(--su));
    }
  .checkbox-success:checked,
    .checkbox-success[checked="true"],
    .checkbox-success[aria-checked=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--su) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--su) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--suc, var(--nc)) / var(--tw-text-opacity));
}
  .checkbox-warning {
    --chkbg: var(--wa);
    --chkfg: var(--wac);
    --tw-border-opacity: 1;
    border-color: hsl(var(--wa) / var(--tw-border-opacity));
  }
  .checkbox-warning:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--wa) / var(--tw-border-opacity));
}
  .checkbox-warning:focus-visible {
      outline: 2px solid hsl(var(--wa));
    }
  .checkbox-warning:checked,
    .checkbox-warning[checked="true"],
    .checkbox-warning[aria-checked=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--wa) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--wa) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--wac, var(--nc)) / var(--tw-text-opacity));
}
  .checkbox-info {
    --chkbg: var(--in);
    --chkfg: var(--inc);
    --tw-border-opacity: 1;
    border-color: hsl(var(--in) / var(--tw-border-opacity));
  }
  .checkbox-info:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--in) / var(--tw-border-opacity));
}
  .checkbox-info:focus-visible {
      outline: 2px solid hsl(var(--in));
    }
  .checkbox-info:checked,
    .checkbox-info[checked="true"],
    .checkbox-info[aria-checked=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--in) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--in) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--inc, var(--nc)) / var(--tw-text-opacity));
}
  .checkbox-error {
    --chkbg: var(--er);
    --chkfg: var(--erc);
    --tw-border-opacity: 1;
    border-color: hsl(var(--er) / var(--tw-border-opacity));
  }
  .checkbox-error:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--er) / var(--tw-border-opacity));
}
  .checkbox-error:focus-visible {
      outline: 2px solid hsl(var(--er));
    }
  .checkbox-error:checked,
    .checkbox-error[checked="true"],
    .checkbox-error[aria-checked=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--er) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--er) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--erc, var(--nc)) / var(--tw-text-opacity));
}
  .checkbox:disabled {
  cursor: not-allowed;
  border-color: transparent;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  opacity: 0.2;
}

@keyframes checkmark {
  0% {
    background-position-y: 5px;
  }
  50% {
    background-position-y: -2px;
  }
  100% {
    background-position-y: 0;
  }
}

/* backward comptability */

.checkbox-mark {
  display: none;
}

[dir="rtl"] .checkbox:checked,
    [dir="rtl"] .checkbox[checked="true"],
    [dir="rtl"] .checkbox[aria-checked="true"] {
      background-image: linear-gradient(45deg, transparent 65%, hsl(var(--chkbg)) 65.99%), linear-gradient(-45deg, transparent 75%, hsl(var(--chkbg)) 75.99%), linear-gradient(45deg, hsl(var(--chkbg)) 40%, transparent 40.99%), linear-gradient(-45deg, hsl(var(--chkbg)) 30%, hsl(var(--chkfg)) 30.99%, hsl(var(--chkfg)) 40%, transparent 40.99%), linear-gradient(45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);
    }

`
}],[/^collapse/,function anonymous(
) {
return `.collapse.collapse {
  visibility: visible;
}
.collapse {
  position: relative;
  display: grid;
  overflow: hidden;
}
.collapse-title,
.collapse > input[type="checkbox"],
.collapse-content {
  grid-column-start: 1;
  grid-row-start: 1;
}
.collapse > input[type="checkbox"] {
  appearance: none;
  opacity: 0;
}
.collapse-content {
  grid-row-start: 2;
  overflow: hidden;
  max-height: 0px;
}
.collapse-open .collapse-content,
.collapse:focus:not(.collapse-close) .collapse-content,
.collapse:not(.collapse-close)
  input[type="checkbox"]:checked
  ~ .collapse-content {
  max-height: none;
}

.collapse:focus-visible {
  outline: 2px solid hsl(var(--nf));
  outline-offset: 2px;
}
.collapse-arrow .collapse-title:after {
  position: absolute;
  display: block;
  height: 0.5rem;
  width: 0.5rem;
  --tw-translate-y: -100%;
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: all;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;
  top: 50%;
  right: 1.4rem;
  content: "";
  transform-origin: 75% 75%;
  box-shadow: 2px 2px;
  pointer-events: none;
}
.collapse-plus .collapse-title:after {
  position: absolute;
  display: block;
  height: 0.5rem;
  width: 0.5rem;
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  top: 0.9rem;
  right: 1.4rem;
  content: "+";
  pointer-events: none;
}
.collapse:not(.collapse-open):not(.collapse-close) input[type="checkbox"],
.collapse:not(.collapse-open):not(.collapse-close) .collapse-title {
  cursor: pointer;
}
.collapse:focus:not(.collapse-open):not(.collapse-close) .collapse-title {
  cursor: unset;
}
.collapse-title {
  position: relative;
}
:where(.collapse > input[type="checkbox"]) {
  z-index: 1;
}
.collapse-title,
:where(.collapse > input[type="checkbox"]) {
  width: 100%;
  padding: 1rem;
  padding-right: 3rem;
  min-height: 3.75rem;
  transition: background-color 0.2s ease-in-out;
}
/* 
.collapse-open :where(.collapse-title),
.collapse:focus:not(.collapse-close) :where(.collapse-title),
.collapse:not(.collapse-close) :where(input[type="checkbox"]:checked ~ .collapse-title) {
  @apply bg-base-content bg-opacity-10;
} */
.collapse-content {
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: unset;
  transition: padding 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
.collapse-open :where(.collapse-content),
.collapse:focus:not(.collapse-close) :where(.collapse-content),
.collapse:not(.collapse-close) :where(input[type="checkbox"]:checked ~ .collapse-content) {
  padding-bottom: 1rem;
  transition: padding 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
.collapse-open.collapse-arrow .collapse-title:after,
.collapse-arrow:focus:not(.collapse-close) .collapse-title:after,
.collapse-arrow:not(.collapse-close) input[type="checkbox"]:checked ~ .collapse-title:after {
  --tw-translate-y: -50%;
  --tw-rotate: 225deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.collapse-open.collapse-plus .collapse-title:after,
.collapse-plus:focus:not(.collapse-close) .collapse-title:after,
.collapse-plus:not(.collapse-close) input[type="checkbox"]:checked ~ .collapse-title:after {
  content: "−";
}

`
}],[/^countdown/,function anonymous(
) {
return `:root .countdown {
  line-height: 1em;
}
.countdown {
  display: inline-flex;
}
.countdown > * {
    height: 1em;
    display: inline-block;
    overflow-y: hidden;
  }
.countdown > *:before {
      position: relative;
      content: "00\A 01\A 02\A 03\A 04\A 05\A 06\A 07\A 08\A 09\A 10\A 11\A 12\A 13\A 14\A 15\A 16\A 17\A 18\A 19\A 20\A 21\A 22\A 23\A 24\A 25\A 26\A 27\A 28\A 29\A 30\A 31\A 32\A 33\A 34\A 35\A 36\A 37\A 38\A 39\A 40\A 41\A 42\A 43\A 44\A 45\A 46\A 47\A 48\A 49\A 50\A 51\A 52\A 53\A 54\A 55\A 56\A 57\A 58\A 59\A 60\A 61\A 62\A 63\A 64\A 65\A 66\A 67\A 68\A 69\A 70\A 71\A 72\A 73\A 74\A 75\A 76\A 77\A 78\A 79\A 80\A 81\A 82\A 83\A 84\A 85\A 86\A 87\A 88\A 89\A 90\A 91\A 92\A 93\A 94\A 95\A 96\A 97\A 98\A 99\A";
      white-space: pre;
      top: calc(var(--value) * -1em);
    }

.countdown > *:before {
      text-align: center;
      transition: all 1s cubic-bezier(1, 0, 0, 1);
    }

`
}],[/^divider/,function anonymous(
) {
return `.divider {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: stretch;
}
  .divider:before,
  .divider:after {
    content: "";
    flex-grow: 1;
    height: 0.125rem;
    width: 100%;
  }

.divider {
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 1rem;
    white-space: nowrap
}
  .divider:before {
    background-color: hsl(var(--bc) / var(--tw-bg-opacity));
    --tw-bg-opacity: 0.1
}
  .divider:after {
    background-color: hsl(var(--bc) / var(--tw-bg-opacity));
    --tw-bg-opacity: 0.1
}
  .divider:not(:empty) {
    gap: 1rem
}

`
}],[/^drawer/,function anonymous(
) {
return `.drawer {

  display: grid;

  width: 100%;

  overflow: hidden;

  height: 100vh;
  height: 100dvh;
}

  .drawer.drawer-end {
    direction: rtl;
  }

  .drawer.drawer-end > * {
    direction: ltr;
  }

  .drawer.drawer-end > .drawer-toggle ~ .drawer-side > .drawer-overlay + * {

  --tw-translate-x: 100%;

  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  justify-self: end;
}

  .drawer.drawer-end > .drawer-toggle:checked ~ .drawer-side > .drawer-overlay + * {

  --tw-translate-x: 0px;

  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
:where(.drawer-toggle ~ .drawer-content) {
  height: inherit;
}
.drawer-toggle {

  position: absolute;

  height: 0px;

  width: 0px;

  appearance: none;

  opacity: 0;
}
.drawer-toggle ~ .drawer-content {

  z-index: 0;

  grid-column-start: 1;

  grid-row-start: 1;

  overflow-y: auto;
}
.drawer-toggle ~ .drawer-side {

  grid-column-start: 1;

  grid-row-start: 1;

  display: grid;

  max-height: 100vh;

  overflow-x: hidden;
}
.drawer-toggle ~ .drawer-side > .drawer-overlay {

  visibility: hidden;

  grid-column-start: 1;

  grid-row-start: 1;

  opacity: 0;
}
.drawer-toggle ~ .drawer-side > .drawer-overlay + * {

  z-index: 10;

  grid-column-start: 1;

  grid-row-start: 1;

  --tw-translate-x: -100%;

  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.drawer-toggle:checked ~ .drawer-side {

  isolation: isolate;

  overflow-y: auto;

  overflow-x: hidden;
}
.drawer-toggle:checked ~ .drawer-side > .drawer-overlay {

  visibility: visible;
}
.drawer-toggle:checked ~ .drawer-side > .drawer-overlay + * {

  --tw-translate-x: 0px;

  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
[dir="rtl"] .drawer-toggle ~ .drawer-side > .drawer-overlay + * {

  --tw-translate-x: 100%;

  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
[dir="rtl"] .drawer-toggle:checked ~ .drawer-side > .drawer-overlay + * {

  --tw-translate-x: 0px;

  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
[dir="rtl"] .drawer.drawer-end > .drawer-toggle ~ .drawer-side > .drawer-overlay + * {
  --tw-translate-x: -100%;
}
[dir="rtl"] .drawer.drawer-end > .drawer-toggle:checked ~ .drawer-side > .drawer-overlay + * {
  --tw-translate-x: 0px;
}
[dir="rtl"] .drawer.drawer-end > .drawer-toggle:checked ~ .drawer-content {
  --tw-translate-x: 0.5rem;
}
@media (min-width: 1024px) {
  .drawer-mobile {
    grid-auto-columns: max-content auto;
  }
      .drawer-mobile > .drawer-toggle ~ .drawer-content {

    height: auto;
  }
      @media (min-width: 1024px) {

    .drawer-mobile > .drawer-toggle ~ .drawer-content {

      grid-column-start: 2;
    }
  }
      .drawer-mobile > .drawer-toggle ~ .drawer-side {

    overflow-y: auto;
  }
        @media (min-width: 1024px) {

    .drawer-mobile > .drawer-toggle ~ .drawer-side > .drawer-overlay {

      visibility: visible;
    }

    .drawer-mobile > .drawer-toggle ~ .drawer-side > .drawer-overlay + * {

      --tw-translate-x: 0px;

      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
  .drawer-mobile.drawer-end {
    grid-auto-columns: auto max-content;
    direction: ltr;
  }
      .drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-content {

    height: auto;
  }
      @media (min-width: 1024px) {

    .drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-content {

      grid-column-start: 1;
    }
  }
      .drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-side {

    overflow-y: auto;
  }
      @media (min-width: 1024px) {

    .drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-side {

      grid-column-start: 2;
    }

    .drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-side > .drawer-overlay {

      visibility: visible;
    }

    .drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-side > .drawer-overlay + * {

      --tw-translate-x: 0px;

      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}

.drawer.drawer-end > .drawer-toggle:checked ~ .drawer-content {
        --tw-translate-x: -0.5rem;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.drawer-toggle ~ .drawer-content {
        transition-property: all;
        transition-duration: 300ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.drawer-toggle ~ .drawer-side > .drawer-overlay {
        cursor: pointer;
        --tw-bg-opacity: 1;
        background-color: hsl(var(--nf, var(--n)) / var(--tw-bg-opacity));
        transition-property: all;
        transition-duration: 300ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.drawer-toggle ~ .drawer-side > .drawer-overlay + * {
        transition-property: all;
        transition-duration: 300ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.drawer-toggle:checked ~ .drawer-content {
        --tw-translate-x: 0.5rem;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.drawer-toggle:checked ~ .drawer-side > .drawer-overlay {
        opacity: 0.999999; /* 1 causes a bug on chrome 🤷‍♂️ */ --tw-bg-opacity: 0.4;
      }
.drawer-toggle:focus-visible ~ .drawer-content .drawer-button {
      outline: 2px solid hsl(var(--nf));
      outline-offset: 2px;
    }
.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-primary {
        outline: 2px solid hsl(var(--p));
      }
.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-secondary {
        outline: 2px solid hsl(var(--s));
      }
.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-accent {
        outline: 2px solid hsl(var(--a));
      }
.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-info {
        outline: 2px solid hsl(var(--in));
      }
.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-success {
        outline: 2px solid hsl(var(--su));
      }
.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-warning {
        outline: 2px solid hsl(var(--wa));
      }
.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-error {
        outline: 2px solid hsl(var(--er));
      }
.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.glass {
        outline: 2px solid currentColor;
      }
.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-ghost {
        outline: 2px solid currentColor;
      }
.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-link {
        outline: 2px solid currentColor;
      }
@media (min-width: 1024px) {
        .drawer-mobile > .drawer-toggle:checked ~ .drawer-content {
                --tw-translate-x: 0px;
                transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        }
}

`
}],[/^dropdown/,function anonymous(
) {
return `.dropdown {
    position: relative;
    display: inline-block
}
.dropdown > *:focus {
    outline: 2px solid transparent;
    outline-offset: 2px
}
.dropdown .dropdown-content {
    visibility: hidden;
    position: absolute;
    z-index: 50;
    opacity: 0
}
.dropdown-end .dropdown-content {
    right: 0px
}
.dropdown-left .dropdown-content {
    top: 0px;
    right: 100%;
    bottom: auto
}
.dropdown-right .dropdown-content {
    left: 100%;
    top: 0px;
    bottom: auto
}
.dropdown-bottom .dropdown-content {
    bottom: auto;
    top: 100%
}
.dropdown-top .dropdown-content {
    bottom: 100%;
    top: auto
}
.dropdown-end.dropdown-right .dropdown-content {
    bottom: 0px;
    top: auto
}
.dropdown-end.dropdown-left .dropdown-content {
    bottom: 0px;
    top: auto
}
.dropdown.dropdown-open .dropdown-content,
.dropdown.dropdown-hover:hover .dropdown-content,
.dropdown:not(.dropdown-hover):focus .dropdown-content,
.dropdown:not(.dropdown-hover):focus-within .dropdown-content {
    visibility: visible;
    opacity: 1
}

.dropdown .dropdown-content {
    transform-origin: top;
    --tw-scale-x: .95;
    --tw-scale-y: .95;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
}
.dropdown-bottom .dropdown-content {
    transform-origin: top
}
.dropdown-top .dropdown-content {
    transform-origin: bottom
}
.dropdown-left .dropdown-content {
    transform-origin: right
}
.dropdown-right .dropdown-content {
    transform-origin: left
}
.dropdown.dropdown-open .dropdown-content,
.dropdown.dropdown-hover:hover .dropdown-content,
.dropdown:focus .dropdown-content,
.dropdown:focus-within .dropdown-content {
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

`
}],[/^file-input/,function anonymous(
) {
return `.file-input {
    height: 3rem;
    flex-shrink: 1;
    padding-right: 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    line-height: 2;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
}
  .file-input::file-selector-button {
    margin-right: 1rem;
    display: inline-flex;
    height: 2.875rem;
    min-height: 2.875rem;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border-color: transparent;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    line-height: 1em
}

.file-input {
    overflow: hidden;
    border-width: 1px;
    border-color: hsl(var(--bc) / var(--tw-border-opacity));
    --tw-border-opacity: 0;
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b1) / var(--tw-bg-opacity));
    font-size: 1rem;
    line-height: 1.5rem;
    border-radius: var(--rounded-btn, 0.5rem);
}
  .file-input::file-selector-button {
    --tw-border-opacity: 1;
    border-color: hsl(var(--n) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--n) / var(--tw-bg-opacity));
    font-weight: 600;
    text-transform: uppercase;
    --tw-text-opacity: 1;
    color: hsl(var(--nc) / var(--tw-text-opacity));
    text-decoration-line: none;
    border-width: var(--border-btn, 1px);
    animation: button-pop var(--animation-btn, 0.25s) ease-out;
    text-transform: var(--btn-text-case, uppercase);
}
  .file-input-bordered {
    --tw-border-opacity: 0.2;
}
  .file-input:focus {
    outline: 2px solid hsla(var(--bc) / 0.2);
    outline-offset: 2px;
  }
  .file-input-ghost {
    --tw-bg-opacity: 0.05;
}
  .file-input-ghost:focus {
    --tw-bg-opacity: 1;
    --tw-text-opacity: 1;
    color: hsl(var(--bc) / var(--tw-text-opacity));
      box-shadow: none;
}
  .file-input-ghost::file-selector-button {
    border-width: 1px;
    border-color: transparent;
    background-color: transparent;
    color: currentColor;
}
  .file-input-primary {
    --tw-border-opacity: 1;
    border-color: hsl(var(--p) / var(--tw-border-opacity));
}
  .file-input-primary:focus {
      outline: 2px solid hsl(var(--p));
    }
  .file-input-primary::file-selector-button {
    --tw-border-opacity: 1;
    border-color: hsl(var(--p) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--p) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--pc) / var(--tw-text-opacity));
}
  .file-input-secondary {
    --tw-border-opacity: 1;
    border-color: hsl(var(--s) / var(--tw-border-opacity));
}
  .file-input-secondary:focus {
      outline: 2px solid hsl(var(--s));
    }
  .file-input-secondary::file-selector-button {
    --tw-border-opacity: 1;
    border-color: hsl(var(--s) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--s) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--sc) / var(--tw-text-opacity));
}
  .file-input-accent {
    --tw-border-opacity: 1;
    border-color: hsl(var(--a) / var(--tw-border-opacity));
}
  .file-input-accent:focus {
      outline: 2px solid hsl(var(--a));
    }
  .file-input-accent::file-selector-button {
    --tw-border-opacity: 1;
    border-color: hsl(var(--a) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--a) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--ac) / var(--tw-text-opacity));
}
  .file-input-info {
    --tw-border-opacity: 1;
    border-color: hsl(var(--in) / var(--tw-border-opacity));
}
  .file-input-info:focus {
      outline: 2px solid hsl(var(--in));
    }
  .file-input-info::file-selector-button {
    --tw-border-opacity: 1;
    border-color: hsl(var(--in) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--in) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--inc, var(--nc)) / var(--tw-text-opacity));
}
  .file-input-success {
    --tw-border-opacity: 1;
    border-color: hsl(var(--su) / var(--tw-border-opacity));
}
  .file-input-success:focus {
      outline: 2px solid hsl(var(--su));
    }
  .file-input-success::file-selector-button {
    --tw-border-opacity: 1;
    border-color: hsl(var(--su) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--su) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--suc, var(--nc)) / var(--tw-text-opacity));
}
  .file-input-warning {
    --tw-border-opacity: 1;
    border-color: hsl(var(--wa) / var(--tw-border-opacity));
}
  .file-input-warning:focus {
      outline: 2px solid hsl(var(--wa));
    }
  .file-input-warning::file-selector-button {
    --tw-border-opacity: 1;
    border-color: hsl(var(--wa) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--wa) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--wac, var(--nc)) / var(--tw-text-opacity));
}
  .file-input-error {
    --tw-border-opacity: 1;
    border-color: hsl(var(--er) / var(--tw-border-opacity));
}
  .file-input-error:focus {
      outline: 2px solid hsl(var(--er));
    }
  .file-input-error::file-selector-button {
    --tw-border-opacity: 1;
    border-color: hsl(var(--er) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--er) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--erc, var(--nc)) / var(--tw-text-opacity));
}
  .file-input-disabled,
  .file-input[disabled] {
    cursor: not-allowed;
    --tw-border-opacity: 1;
    border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
    --tw-text-opacity: 0.2;
}
  .file-input-disabled::placeholder,
  .file-input[disabled]::placeholder {
    color: hsl(var(--bc) / var(--tw-placeholder-opacity));
    --tw-placeholder-opacity: 0.2;
}
  .file-input-disabled::file-selector-button, .file-input[disabled]::file-selector-button {
    --tw-border-opacity: 0;
    background-color: hsl(var(--n) / var(--tw-bg-opacity));
    --tw-bg-opacity: 0.2;
    color: hsl(var(--bc) / var(--tw-text-opacity));
    --tw-text-opacity: 0.2;
}

`
}],[/^footer/,function anonymous(
) {
return `.footer {
  display: grid;
  width: 100%;
  grid-auto-flow: row;
  place-items: start;
}
  .footer > * {
  display: grid;
  place-items: start;
}
  .footer-center {
  place-items: center;
  text-align: center;
}
  .footer-center > * {
  place-items: center;
}
@media (min-width: 48rem) {
  .footer {
    grid-auto-flow: column;
  }
  .footer-center {
    grid-auto-flow: row dense;
  }
}

.footer {
    row-gap: 2.5rem;
    column-gap: 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem
}
  .footer > * {
    gap: 0.5rem
}
  .footer-title {
    margin-bottom: 0.5rem;
    font-weight: 700;
    text-transform: uppercase;
    opacity: 0.5
}

`
}],[/^form-control/,function anonymous(
) {
return `.form-control {
    display: flex;
    flex-direction: column
}
.label {
    display: flex;
    user-select: none;
    align-items: center;
    justify-content: space-between
}

.label {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem
}
  .label-text {
    font-size: 0.875rem;
    line-height: 1.25rem;
    --tw-text-opacity: 1;
    color: hsl(var(--bc) / var(--tw-text-opacity))
}
  .label-text-alt {
    font-size: 0.75rem;
    line-height: 1rem;
    --tw-text-opacity: 1;
    color: hsl(var(--bc) / var(--tw-text-opacity))
}
  .label a:hover {
    --tw-text-opacity: 1;
    color: hsl(var(--bc) / var(--tw-text-opacity))
}

`
}],[/^hero/,function anonymous(
) {
return `.hero {
    display: grid;
    width: 100%;
    place-items: center;
    background-size: cover;
    background-position: center
}
  .hero > * {
    grid-column-start: 1;
    grid-row-start: 1
}
  .hero-overlay {
    grid-column-start: 1;
    grid-row-start: 1;
    height: 100%;
    width: 100%
}
  .hero-content {
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center
}

.hero-overlay {
    background-color: hsl(var(--n) / var(--tw-bg-opacity));
    --tw-bg-opacity: 0.5
}
  .hero-content {
    max-width: 80rem;
    gap: 1rem;
    padding: 1rem
}

`
}],[/^input/,function anonymous(
) {
return `.input {
    flex-shrink: 1;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    height: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    line-height: 2;
}
.input-group {
    display: flex;
    width: 100%;
    align-items: stretch;
}
.input-group > .input {
    isolation: isolate;
}
.input-group > *,
  .input-group > .input,
  .input-group > .select {
    border-radius: 0px;
}
.input-group-md {
    font-size: 0.875rem;
    line-height: 1.25rem;
    line-height: 2;
}
.input-group-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
    line-height: 2;
}
.input-group-sm {
    font-size: 0.875rem;
    line-height: 2rem;
}
.input-group-xs {
    font-size: 0.75rem;
    line-height: 1rem;
    line-height: 1.625;
}
.input-group :where(span) {
    display: flex;
    align-items: center;
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));
    padding-left: 1rem;
    padding-right: 1rem;
}
.input-group > :first-child {
    border-top-left-radius: var(--rounded-btn, 0.5rem);
    border-top-right-radius: 0;
    border-bottom-left-radius: var(--rounded-btn, 0.5rem);
    border-bottom-right-radius: 0;
  }
.input-group > :last-child {
    border-top-left-radius: 0;
    border-top-right-radius: var(--rounded-btn, 0.5rem);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: var(--rounded-btn, 0.5rem);
  }
.input-group-vertical {
    flex-direction: column;
}
.input-group-vertical :first-child {
      border-top-left-radius: var(--rounded-btn, 0.5rem);
      border-top-right-radius: var(--rounded-btn, 0.5rem);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
.input-group-vertical :last-child {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-left-radius: var(--rounded-btn, 0.5rem);
      border-bottom-right-radius: var(--rounded-btn, 0.5rem);
    }

.input {
  border-width: 1px;
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  --tw-border-opacity: 0;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b1) / var(--tw-bg-opacity));
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: var(--rounded-btn, 0.5rem);
  /* &::-webkit-calendar-picker-indicator {
    display: none;
  } */
}
  .input[list]::-webkit-calendar-picker-indicator {
    line-height: 1em;
  }
  .input-bordered {
  --tw-border-opacity: 0.2;
}
  .input:focus {
    outline: 2px solid hsla(var(--bc) / 0.2);
    outline-offset: 2px;
  }
  .input-ghost {
  --tw-bg-opacity: 0.05;
}
  .input-ghost:focus {
  --tw-bg-opacity: 1;
  --tw-text-opacity: 1;
  color: hsl(var(--bc) / var(--tw-text-opacity));
      box-shadow: none;
}
  .input-primary {
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
}
  .input-primary:focus {
      outline: 2px solid hsl(var(--p));
    }
  .input-secondary {
  --tw-border-opacity: 1;
  border-color: hsl(var(--s) / var(--tw-border-opacity));
}
  .input-secondary:focus {
      outline: 2px solid hsl(var(--s));
    }
  .input-accent {
  --tw-border-opacity: 1;
  border-color: hsl(var(--a) / var(--tw-border-opacity));
}
  .input-accent:focus {
      outline: 2px solid hsl(var(--a));
    }
  .input-info {
  --tw-border-opacity: 1;
  border-color: hsl(var(--in) / var(--tw-border-opacity));
}
  .input-info:focus {
      outline: 2px solid hsl(var(--in));
    }
  .input-success {
  --tw-border-opacity: 1;
  border-color: hsl(var(--su) / var(--tw-border-opacity));
}
  .input-success:focus {
      outline: 2px solid hsl(var(--su));
    }
  .input-warning {
  --tw-border-opacity: 1;
  border-color: hsl(var(--wa) / var(--tw-border-opacity));
}
  .input-warning:focus {
      outline: 2px solid hsl(var(--wa));
    }
  .input-error {
  --tw-border-opacity: 1;
  border-color: hsl(var(--er) / var(--tw-border-opacity));
}
  .input-error:focus {
      outline: 2px solid hsl(var(--er));
    }
  .input-disabled,
  .input[disabled] {
  cursor: not-allowed;
  --tw-border-opacity: 1;
  border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
  --tw-text-opacity: 0.2;
}
  .input-disabled::placeholder,
  .input[disabled]::placeholder {
  color: hsl(var(--bc) / var(--tw-placeholder-opacity));
  --tw-placeholder-opacity: 0.2;
}

`
}],[/^kbd/,function anonymous(
) {
return `.kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center
}

.kbd {
  border-width: 1px;
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  --tw-border-opacity: 0.2;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: var(--rounded-btn, 0.5rem);
  border-bottom-width: 2px;
  min-height: 2.2em;
  min-width: 2.2em
}

`
}],[/^link/,function anonymous(
) {
return `.link {
    cursor: pointer;
    text-decoration-line: underline
}
  .link-hover {
    text-decoration-line: none
}
  .link-hover:hover {
    text-decoration-line: underline
}

.link-primary {
    --tw-text-opacity: 1;
    color: hsl(var(--p) / var(--tw-text-opacity));
}
.link-primary:hover {
    --tw-text-opacity: 1;
    color: hsl(var(--pf, var(--p)) / var(--tw-text-opacity));
}
  .link-secondary {
    --tw-text-opacity: 1;
    color: hsl(var(--s) / var(--tw-text-opacity));
}
  .link-secondary:hover {
    --tw-text-opacity: 1;
    color: hsl(var(--sf, var(--s)) / var(--tw-text-opacity));
}
  .link-accent {
    --tw-text-opacity: 1;
    color: hsl(var(--a) / var(--tw-text-opacity));
}
  .link-accent:hover {
    --tw-text-opacity: 1;
    color: hsl(var(--af, var(--a)) / var(--tw-text-opacity));
}
  .link-neutral {
    --tw-text-opacity: 1;
    color: hsl(var(--n) / var(--tw-text-opacity));
}
  .link-neutral:hover {
    --tw-text-opacity: 1;
    color: hsl(var(--nf, var(--n)) / var(--tw-text-opacity));
}
  .link-success {
    --tw-text-opacity: 1;
    color: hsl(var(--su) / var(--tw-text-opacity));
}
  .link-success:hover {
    --tw-text-opacity: 1;
    color: hsl(var(--su) / var(--tw-text-opacity));
}
  .link-info {
    --tw-text-opacity: 1;
    color: hsl(var(--in) / var(--tw-text-opacity));
}
  .link-info:hover {
    --tw-text-opacity: 1;
    color: hsl(var(--in) / var(--tw-text-opacity));
}
  .link-warning {
    --tw-text-opacity: 1;
    color: hsl(var(--wa) / var(--tw-text-opacity));
}
  .link-warning:hover {
    --tw-text-opacity: 1;
    color: hsl(var(--wa) / var(--tw-text-opacity));
}
  .link-error {
    --tw-text-opacity: 1;
    color: hsl(var(--er) / var(--tw-text-opacity));
}
  .link-error:hover {
    --tw-text-opacity: 1;
    color: hsl(var(--er) / var(--tw-text-opacity));
}
  .link:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
}
  .link:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

`
}],[/^mask/,function anonymous(
) {
return `.mask {
  -webkit-mask-size: contain;
          mask-size: contain;
  -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
  -webkit-mask-position: center;
          mask-position: center;
}
.mask-half-1 {
  -webkit-mask-size: 200%;
          mask-size: 200%;
  -webkit-mask-position: left;
          mask-position: left;
}
.mask-half-2 {
  -webkit-mask-size: 200%;
          mask-size: 200%;
  -webkit-mask-position: right;
          mask-position: right;
}

.mask-squircle {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 0C20 0 0 20 0 100s20 100 100 100 100-20 100-100S180 0 100 0Z'/%3e%3c/svg%3e");
            mask-image: url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 0C20 0 0 20 0 100s20 100 100 100 100-20 100-100S180 0 100 0Z'/%3e%3c/svg%3e");
  }
  .mask-decagon {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='192' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 0 58.779 19.098 36.327 50v61.804l-36.327 50L96 200l-58.779-19.098-36.327-50V69.098l36.327-50z' fill-rule='evenodd'/%3e%3c/svg%3e");
            mask-image: url("data:image/svg+xml,%3csvg width='192' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 0 58.779 19.098 36.327 50v61.804l-36.327 50L96 200l-58.779-19.098-36.327-50V69.098l36.327-50z' fill-rule='evenodd'/%3e%3c/svg%3e");
  }
  .mask-diamond {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m100 0 100 100-100 100L0 100z' fill-rule='evenodd'/%3e%3c/svg%3e");
            mask-image: url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m100 0 100 100-100 100L0 100z' fill-rule='evenodd'/%3e%3c/svg%3e");
  }
  .mask-heart {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='200' height='185' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 184.606a15.384 15.384 0 0 1-8.653-2.678C53.565 156.28 37.205 138.695 28.182 127.7 8.952 104.264-.254 80.202.005 54.146.308 24.287 24.264 0 53.406 0c21.192 0 35.869 11.937 44.416 21.879a2.884 2.884 0 0 0 4.356 0C110.725 11.927 125.402 0 146.594 0c29.142 0 53.098 24.287 53.4 54.151.26 26.061-8.956 50.122-28.176 73.554-9.023 10.994-25.383 28.58-63.165 54.228a15.384 15.384 0 0 1-8.653 2.673Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e");
            mask-image: url("data:image/svg+xml,%3csvg width='200' height='185' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 184.606a15.384 15.384 0 0 1-8.653-2.678C53.565 156.28 37.205 138.695 28.182 127.7 8.952 104.264-.254 80.202.005 54.146.308 24.287 24.264 0 53.406 0c21.192 0 35.869 11.937 44.416 21.879a2.884 2.884 0 0 0 4.356 0C110.725 11.927 125.402 0 146.594 0c29.142 0 53.098 24.287 53.4 54.151.26 26.061-8.956 50.122-28.176 73.554-9.023 10.994-25.383 28.58-63.165 54.228a15.384 15.384 0 0 1-8.653 2.673Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e");
  }
  .mask-hexagon {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='182' height='201' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M.3 65.486c0-9.196 6.687-20.063 14.211-25.078l61.86-35.946c8.36-5.016 20.899-5.016 29.258 0l61.86 35.946c8.36 5.015 14.211 15.882 14.211 25.078v71.055c0 9.196-6.687 20.063-14.211 25.079l-61.86 35.945c-8.36 4.18-20.899 4.18-29.258 0L14.51 161.62C6.151 157.44.3 145.737.3 136.54V65.486Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e");
            mask-image: url("data:image/svg+xml,%3csvg width='182' height='201' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M.3 65.486c0-9.196 6.687-20.063 14.211-25.078l61.86-35.946c8.36-5.016 20.899-5.016 29.258 0l61.86 35.946c8.36 5.015 14.211 15.882 14.211 25.078v71.055c0 9.196-6.687 20.063-14.211 25.079l-61.86 35.945c-8.36 4.18-20.899 4.18-29.258 0L14.51 161.62C6.151 157.44.3 145.737.3 136.54V65.486Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e");
  }
  .mask-hexagon-2 {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='200' height='182' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M64.786 181.4c-9.196 0-20.063-6.687-25.079-14.21L3.762 105.33c-5.016-8.36-5.016-20.9 0-29.259l35.945-61.86C44.723 5.851 55.59 0 64.786 0h71.055c9.196 0 20.063 6.688 25.079 14.211l35.945 61.86c4.18 8.36 4.18 20.899 0 29.258l-35.945 61.86c-4.18 8.36-15.883 14.211-25.079 14.211H64.786Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e");
            mask-image: url("data:image/svg+xml,%3csvg width='200' height='182' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M64.786 181.4c-9.196 0-20.063-6.687-25.079-14.21L3.762 105.33c-5.016-8.36-5.016-20.9 0-29.259l35.945-61.86C44.723 5.851 55.59 0 64.786 0h71.055c9.196 0 20.063 6.688 25.079 14.211l35.945 61.86c4.18 8.36 4.18 20.899 0 29.258l-35.945 61.86c-4.18 8.36-15.883 14.211-25.079 14.211H64.786Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e");
  }
  .mask-circle {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle fill='black' cx='100' cy='100' r='100' fill-rule='evenodd'/%3e%3c/svg%3e");
            mask-image: url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle fill='black' cx='100' cy='100' r='100' fill-rule='evenodd'/%3e%3c/svg%3e");
  }
  .mask-parallelogram {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='200' height='154' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M46.154 0H200l-46.154 153.846H0z' fill-rule='evenodd'/%3e%3c/svg%3e");
            mask-image: url("data:image/svg+xml,%3csvg width='200' height='154' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M46.154 0H200l-46.154 153.846H0z' fill-rule='evenodd'/%3e%3c/svg%3e");
  }
  .mask-parallelogram-2 {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='200' height='154' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M153.846 0H0l46.154 153.846H200z' fill-rule='evenodd'/%3e%3c/svg%3e");
            mask-image: url("data:image/svg+xml,%3csvg width='200' height='154' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M153.846 0H0l46.154 153.846H200z' fill-rule='evenodd'/%3e%3c/svg%3e");
  }
  .mask-parallelogram-3 {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='154' height='201' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M.077 47.077v153.846l153.846-46.154V.923z' fill-rule='evenodd'/%3e%3c/svg%3e");
            mask-image: url("data:image/svg+xml,%3csvg width='154' height='201' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M.077 47.077v153.846l153.846-46.154V.923z' fill-rule='evenodd'/%3e%3c/svg%3e");
  }
  .mask-parallelogram-4 {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='154' height='201' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M153.923 47.077v153.846L.077 154.77V.923z' fill-rule='evenodd'/%3e%3c/svg%3e");
            mask-image: url("data:image/svg+xml,%3csvg width='154' height='201' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M153.923 47.077v153.846L.077 154.77V.923z' fill-rule='evenodd'/%3e%3c/svg%3e");
  }
  .mask-pentagon {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='192' height='181' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 0 95.106 69.098-36.327 111.804H37.22L.894 69.098z' fill-rule='evenodd'/%3e%3c/svg%3e");
            mask-image: url("data:image/svg+xml,%3csvg width='192' height='181' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 0 95.106 69.098-36.327 111.804H37.22L.894 69.098z' fill-rule='evenodd'/%3e%3c/svg%3e");
  }
  .mask-square {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M0 0h200v200H0z' fill-rule='evenodd'/%3e%3c/svg%3e");
            mask-image: url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M0 0h200v200H0z' fill-rule='evenodd'/%3e%3c/svg%3e");
  }
  .mask-star {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='192' height='180' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 137.263-58.779 42.024 22.163-68.389L.894 68.481l72.476-.243L96 0l22.63 68.238 72.476.243-58.49 42.417 22.163 68.389z' fill-rule='evenodd'/%3e%3c/svg%3e");
            mask-image: url("data:image/svg+xml,%3csvg width='192' height='180' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 137.263-58.779 42.024 22.163-68.389L.894 68.481l72.476-.243L96 0l22.63 68.238 72.476.243-58.49 42.417 22.163 68.389z' fill-rule='evenodd'/%3e%3c/svg%3e");
  }
  .mask-star-2 {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='192' height='180' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 153.044-58.779 26.243 7.02-63.513L.894 68.481l63.117-13.01L96 0l31.989 55.472 63.117 13.01-43.347 47.292 7.02 63.513z' fill-rule='evenodd'/%3e%3c/svg%3e");
            mask-image: url("data:image/svg+xml,%3csvg width='192' height='180' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 153.044-58.779 26.243 7.02-63.513L.894 68.481l63.117-13.01L96 0l31.989 55.472 63.117 13.01-43.347 47.292 7.02 63.513z' fill-rule='evenodd'/%3e%3c/svg%3e");
  }
  .mask-triangle {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='174' height='149' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m87 148.476-86.603.185L43.86 74.423 87 0l43.14 74.423 43.463 74.238z' fill-rule='evenodd'/%3e%3c/svg%3e");
            mask-image: url("data:image/svg+xml,%3csvg width='174' height='149' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m87 148.476-86.603.185L43.86 74.423 87 0l43.14 74.423 43.463 74.238z' fill-rule='evenodd'/%3e%3c/svg%3e");
  }
  .mask-triangle-2 {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='174' height='150' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m87 .738 86.603-.184-43.463 74.238L87 149.214 43.86 74.792.397.554z' fill-rule='evenodd'/%3e%3c/svg%3e");
            mask-image: url("data:image/svg+xml,%3csvg width='174' height='150' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m87 .738 86.603-.184-43.463 74.238L87 149.214 43.86 74.792.397.554z' fill-rule='evenodd'/%3e%3c/svg%3e");
  }
  .mask-triangle-3 {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='150' height='174' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m149.369 87.107.185 86.603-74.239-43.463L.893 87.107l74.422-43.14L149.554.505z' fill-rule='evenodd'/%3e%3c/svg%3e");
            mask-image: url("data:image/svg+xml,%3csvg width='150' height='174' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m149.369 87.107.185 86.603-74.239-43.463L.893 87.107l74.422-43.14L149.554.505z' fill-rule='evenodd'/%3e%3c/svg%3e");
  }
  .mask-triangle-4 {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='150' height='174' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M.631 87.107.446.505l74.239 43.462 74.422 43.14-74.422 43.14L.446 173.71z' fill-rule='evenodd'/%3e%3c/svg%3e");
            mask-image: url("data:image/svg+xml,%3csvg width='150' height='174' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M.631 87.107.446.505l74.239 43.462 74.422 43.14-74.422 43.14L.446 173.71z' fill-rule='evenodd'/%3e%3c/svg%3e");
  }

`
}],[/^menu/,function anonymous(
) {
return `.menu {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap
}
  .menu.horizontal {
  display: inline-flex;
  flex-direction: row
}
  .menu.horizontal :where(li) {
  flex-direction: row
}
:where(.menu li) {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch
}
.menu :where(li:not(.menu-title)) > :where(*:not(ul)) {
  display: flex
}
.menu :where(li:not(.disabled):not(.menu-title)) > :where(*:not(ul)) {
  cursor: pointer;
  user-select: none;
  align-items: center;
  outline: 2px solid transparent;
  outline-offset: 2px
}
.menu > :where(li > *:not(ul):focus) {
  outline: 2px solid transparent;
  outline-offset: 2px
}
.menu > :where(li.disabled > *:not(ul):focus) {
  cursor: auto
}
.menu > :where(li) :where(ul) {
  display: flex;
  flex-direction: column;
  align-items: stretch
}
.menu > :where(li) > :where(ul) {
  position: absolute;
  display: none;
  top: initial;
  left: 100%
}
.menu > :where(li:hover) > :where(ul) {
  display: flex
}
.menu > :where(li:focus) > :where(ul) {
  display: flex
}

.menu.horizontal li.bordered > a,
        .menu.horizontal li.bordered > button,
        .menu.horizontal li.bordered > span {
  border-left-width: 0px;
  border-bottom-width: 4px;
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
}
  .menu[class*=" px-"]:not(.menu[class*=" px-0"]) li > *,
  .menu[class^="px-"]:not(.menu[class^="px-0"]) li > *,
  .menu[class*=" p-"]:not(.menu[class*=" p-0"]) li > *,
  .menu[class^="p-"]:not(.menu[class^="p-0"]) li > * {
  border-radius: var(--rounded-btn, 0.5rem);
}
  .menu :where(li.bordered > *) {
  border-left-width: 4px;
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
}
  .menu :where(li) > :where(*:not(ul)) {
  gap: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: currentColor;
}
  .menu :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):focus),
  .menu :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):hover) {
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.1;
}
  .menu :where(li:not(.menu-title):not(:empty)) > :where(:not(ul).active),
  .menu :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):active) {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}
  .menu :where(li:empty) {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  height: 1px;
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.1;
}
  .menu li.disabled > * {
  user-select: none;
  color: hsl(var(--bc) / var(--tw-text-opacity));
  --tw-text-opacity: 0.2;
}
  .menu li.disabled > *:hover {
  background-color: transparent;
}
  .menu li.hover-bordered a {
  border-left-width: 4px;
  border-color: transparent;
}
  .menu li.hover-bordered a:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
}
  .menu.compact li > a,
      .menu.compact li > span {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
  .menu .menu-title > * {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
  color: hsl(var(--bc) / var(--tw-text-opacity));
  --tw-text-opacity: 0.4;
}

.menu :where(li:not(.disabled)) > :where(*:not(ul)) {
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.menu > :where(li:first-child) {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom-right-radius: unset;
  border-bottom-left-radius: unset;
}

.menu > :where(li:first-child) > :where(:not(ul)) {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom-right-radius: unset;
  border-bottom-left-radius: unset;
}

.menu > :where(li:last-child) {
  border-top-left-radius: unset;
  border-top-right-radius: unset;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}

.menu > :where(li:last-child) > :where(:not(ul)) {
  border-top-left-radius: unset;
  border-top-right-radius: unset;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}

.menu > :where(li) > :where(ul) {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}

.menu > :where(li) > :where(ul) :where(li) {
  width: 100%;
  white-space: nowrap;
}

.menu > :where(li) > :where(ul) :where(li) :where(ul) {
  padding-left: 1rem;
}

.menu > :where(li) > :where(ul) :where(li) > :where(:not(ul)) {
  width: 100%;
  white-space: nowrap;
}

.menu > :where(li) > :where(ul) > :where(li:first-child) {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom-right-radius: unset;
  border-bottom-left-radius: unset;
}

.menu > :where(li) > :where(ul) > :where(li:first-child) > :where(:not(ul)) {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom-right-radius: unset;
  border-bottom-left-radius: unset;
}

.menu > :where(li) > :where(ul) > :where(li:last-child) {
  border-top-left-radius: unset;
  border-top-right-radius: unset;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}

.menu > :where(li) > :where(ul) > :where(li:last-child) > :where(:not(ul)) {
  border-top-left-radius: unset;
  border-top-right-radius: unset;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}

`
}],[/^mockup/,function anonymous(
) {
return `.mockup-code {
        position: relative;
        overflow: hidden;
        overflow-x: auto;
}
    .mockup-code pre[data-prefix]:before {
        content: attr(data-prefix);
        display: inline-block;
        text-align: right;
      }
  .mockup-window {
        position: relative;
        overflow: hidden;
        overflow-x: auto;
}
  .mockup-window pre[data-prefix]:before {
        content: attr(data-prefix);
        display: inline-block;
        text-align: right;
      }

.mockup-code {
      min-width: 18rem;
      --tw-bg-opacity: 1;
      background-color: hsl(var(--n) / var(--tw-bg-opacity));
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
      --tw-text-opacity: 1;
      color: hsl(var(--nc) / var(--tw-text-opacity));
      border-radius: var(--rounded-box, 1rem);
}
    .mockup-code:before {
      content: "";
      margin-bottom: 1rem;
      display: block;
      height: 0.75rem;
      width: 0.75rem;
      border-radius: 9999px;
      opacity: 0.3;
      box-shadow: 1.4em 0, 2.8em 0, 4.2em 0;
    }
    .mockup-code pre {
      padding-right: 1.25rem;
}
    .mockup-code pre:before {
        content: "";
        margin-right: 2ch;
      }
    .mockup-code pre[data-prefix]:before {
        content: attr(data-prefix);
        width: 2rem;
        opacity: 0.5;
      }
  .mockup-window {
      padding-top: 1.25rem;
      border-radius: var(--rounded-box, 1rem);
}
  .mockup-window:before {
      content: "";
      margin-bottom: 1rem;
      display: block;
      height: 0.75rem;
      width: 0.75rem;
      border-radius: 9999px;
      opacity: 0.3;
      box-shadow: 1.4em 0, 2.8em 0, 4.2em 0;
    }
  .mockup-phone {
    display: inline-block;
    border: 4px solid #444;
    border-radius: 50px;
    background-color: #000;
    padding: 10px;
    margin: 0 auto;
    overflow: hidden;
  }
  .mockup-phone .camera {
      position: relative;
      top: 0px;
      left: 0px;
      background: #000;
      height: 25px;
      width: 150px;
      margin: 0 auto;
      border-bottom-left-radius: 17px;
      border-bottom-right-radius: 17px;
      z-index: 11;
    }
  .mockup-phone .camera:before {
        content: "";
        position: absolute;
        top: 35%;
        left: 50%;
        width: 50px;
        height: 4px;
        border-radius: 5px;
        background-color: #0c0b0e;
        transform: translate(-50%, -50%);
      }
  .mockup-phone .camera:after {
        content: "";
        position: absolute;
        top: 20%;
        left: 70%;
        width: 8px;
        height: 8px;
        border-radius: 5px;
        background-color: #0f0b25;
      }
  .mockup-phone .display {
      overflow: hidden;
      border-radius: 40px;
      margin-top: -25px;
    }

`
}],[/^modal/,function anonymous(
) {
return `.modal {
  pointer-events: none;
  visibility: hidden;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  opacity: 0;
  z-index: 999;
}
:where(.modal) {
  align-items: center;
}
.modal-box {
  max-height: calc(100vh - 5em);
}
.modal-open,
.modal:target,
.modal-toggle:checked + .modal {
  pointer-events: auto;
  visibility: visible;
  opacity: 1;
}
.modal-action {
  display: flex;
}
.modal-toggle {
  position: fixed;
  height: 0px;
  width: 0px;
  appearance: none;
  opacity: 0;
}

.modal {
  background-color: hsl(var(--nf, var(--n)) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.4;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: transform, opacity, visibility;
  overflow-y: hidden;
  overscroll-behavior: contain
}
.modal-box {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b1) / var(--tw-bg-opacity));
  padding: 1.5rem;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: 91.666667%;
  max-width: 32rem;
  --tw-scale-x: .9;
  --tw-scale-y: .9;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  border-top-left-radius: var(--rounded-box, 1rem);
  border-top-right-radius: var(--rounded-box, 1rem);
  border-bottom-left-radius: var(--rounded-box, 1rem);
  border-bottom-right-radius: var(--rounded-box, 1rem);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  overscroll-behavior: contain
}
.modal-open .modal-box,
.modal-toggle:checked + .modal .modal-box,
.modal:target .modal-box {
  --tw-translate-y: 0px;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
.modal-action {
  margin-top: 1.5rem;
  justify-content: flex-end
}
.modal-action > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))
}

`
}],[/^navbar/,function anonymous(
) {
return `.navbar {
  display: flex;
  align-items: center;
}
:where(.navbar > *) {
  display: inline-flex;
  align-items: center;
}
.navbar-start {
  width: 50%;
  justify-content: flex-start;
}
.navbar-center {
  flex-shrink: 0;
}
.navbar-end {
  width: 50%;
  justify-content: flex-end;
}

.navbar {
  padding: var(--navbar-padding, 0.5rem);
  min-height: 4rem;
  width: 100%;
}

`
}],[/^progress/,function anonymous(
) {
return `.progress {
    position: relative;
    width: 100%;
    appearance: none;
    overflow: hidden
}

.progress {
  height: 0.5rem;
  border-radius: var(--rounded-box, 1rem);
}
  .progress::-moz-progress-bar {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
}
  .progress-primary::-moz-progress-bar {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
}
  .progress-secondary::-moz-progress-bar {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--s) / var(--tw-bg-opacity));
}
  .progress-accent::-moz-progress-bar {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--a) / var(--tw-bg-opacity));
}
  .progress-info::-moz-progress-bar {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--in) / var(--tw-bg-opacity));
}
  .progress-success::-moz-progress-bar {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--su) / var(--tw-bg-opacity));
}
  .progress-warning::-moz-progress-bar {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--wa) / var(--tw-bg-opacity));
}
  .progress-error::-moz-progress-bar {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--er) / var(--tw-bg-opacity));
}
  .progress:indeterminate::after {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
}
  .progress-primary:indeterminate::after {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
}
  .progress-secondary:indeterminate::after {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--s) / var(--tw-bg-opacity));
}
  .progress-accent:indeterminate::after {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--a) / var(--tw-bg-opacity));
}
  .progress-info:indeterminate::after {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--in) / var(--tw-bg-opacity));
}
  .progress-success:indeterminate::after {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--su) / var(--tw-bg-opacity));
}
  .progress-warning:indeterminate::after {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--wa) / var(--tw-bg-opacity));
}
  .progress-error:indeterminate::after {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--er) / var(--tw-bg-opacity));
}
  .progress::-webkit-progress-bar {
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.2;
  border-radius: var(--rounded-box, 1rem);
}
  .progress::-webkit-progress-value {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nf, var(--n)) / var(--tw-bg-opacity));
  border-radius: var(--rounded-box, 1rem);
}
  .progress-primary::-webkit-progress-value {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
}
  .progress-secondary::-webkit-progress-value {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--s) / var(--tw-bg-opacity));
}
  .progress-accent::-webkit-progress-value {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--a) / var(--tw-bg-opacity));
}
  .progress-info::-webkit-progress-value {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--in) / var(--tw-bg-opacity));
}
  .progress-success::-webkit-progress-value {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--su) / var(--tw-bg-opacity));
}
  .progress-warning::-webkit-progress-value {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--wa) / var(--tw-bg-opacity));
}
  .progress-error::-webkit-progress-value {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--er) / var(--tw-bg-opacity));
}

.progress:indeterminate::after {
  content: "";
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: -40%;
  width: 33.333333%;
  border-radius: var(--rounded-box, 1rem);
  animation: progress-loading 5s infinite ease-in-out;
}

@keyframes progress-loading {
  50% {
    left: 107%;
  }
}
`
}],[/^radial-progress/,function anonymous(
) {
return `.radial-progress {
  position: relative;
  display: inline-grid;
  height: var(--size);
  width: var(--size);
  place-content: center;
  border-radius: 9999px;
  background-color: transparent;
  vertical-align: middle;
  box-sizing: content-box;
}
.radial-progress::-moz-progress-bar {
  appearance: none;
  background-color: transparent;
}
.radial-progress::-webkit-progress-value {
  appearance: none;
  background-color: transparent;
}
.radial-progress::-webkit-progress-bar {
  appearance: none;
  background-color: transparent;
}
.radial-progress:before,
.radial-progress:after {
  position: absolute;
  border-radius: 9999px;
  content: "";
}
.radial-progress:before {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: radial-gradient(farthest-side, currentColor 98%, #0000) top/var(--thickness) var(--thickness) no-repeat, conic-gradient(currentColor calc(var(--value) * 1%), #0000 0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(99% - var(--thickness)), #000 calc(100% - var(--thickness)));
  mask: radial-gradient(farthest-side, #0000 calc(99% - var(--thickness)), #000 calc(100% - var(--thickness)));
}
.radial-progress:after {
  inset: calc(50% - var(--thickness) / 2);
  transform: rotate(calc(var(--value) * 3.6deg - 90deg)) translate(calc(var(--size) / 2 - 50%));
}

.radial-progress {
  --value: 0;
  --size: 5rem;
  --thickness: calc(var(--size) / 10);
}
.radial-progress:after {
  background-color: currentColor;
}

`
}],[/^radio/,function anonymous(
) {
return `.radio {
    flex-shrink: 0
}

.radio {
  --chkbg: var(--bc);
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  appearance: none;
  border-radius: 9999px;
  border-width: 1px;
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  --tw-border-opacity: 0.2;
  transition: background, box-shadow var(--animation-input, 0.2s) ease-in-out;
}
  .radio:focus-visible {
    outline: 2px solid hsl(var(--bc));
    outline-offset: 2px;
  }
  .radio:checked,
  .radio[aria-checked=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
    animation: radiomark var(--animation-input, 0.2s) ease-in-out;
    box-shadow: 0 0 0 4px hsl(var(--b1)) inset, 0 0 0 4px hsl(var(--b1)) inset;
}
  .radio-primary {
    --chkbg: var(--p);
    --tw-border-opacity: 1;
    border-color: hsl(var(--p) / var(--tw-border-opacity));
  }
  .radio-primary:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
}
  .radio-primary:focus-visible {
      outline: 2px solid hsl(var(--p));
    }
  .radio-primary:checked,
    .radio-primary[aria-checked=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}
  .radio-secondary {
    --chkbg: var(--s);
    --tw-border-opacity: 1;
    border-color: hsl(var(--s) / var(--tw-border-opacity));
  }
  .radio-secondary:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--s) / var(--tw-border-opacity));
}
  .radio-secondary:focus-visible {
      outline: 2px solid hsl(var(--s));
    }
  .radio-secondary:checked,
    .radio-secondary[aria-checked=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--s) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--s) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--sc) / var(--tw-text-opacity));
}
  .radio-accent {
    --chkbg: var(--a);
    --tw-border-opacity: 1;
    border-color: hsl(var(--a) / var(--tw-border-opacity));
  }
  .radio-accent:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--a) / var(--tw-border-opacity));
}
  .radio-accent:focus-visible {
      outline: 2px solid hsl(var(--a));
    }
  .radio-accent:checked,
    .radio-accent[aria-checked=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--a) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--a) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--ac) / var(--tw-text-opacity));
}
  .radio-success {
    --chkbg: var(--su);
    --tw-border-opacity: 1;
    border-color: hsl(var(--su) / var(--tw-border-opacity));
  }
  .radio-success:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--su) / var(--tw-border-opacity));
}
  .radio-success:focus-visible {
      outline: 2px solid hsl(var(--su));
    }
  .radio-success:checked,
    .radio-success[aria-checked=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--su) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--su) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--suc, var(--nc)) / var(--tw-text-opacity));
}
  .radio-warning {
    --chkbg: var(--wa);
    --tw-border-opacity: 1;
    border-color: hsl(var(--wa) / var(--tw-border-opacity));
  }
  .radio-warning:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--wa) / var(--tw-border-opacity));
}
  .radio-warning:focus-visible {
      outline: 2px solid hsl(var(--wa));
    }
  .radio-warning:checked,
    .radio-warning[aria-checked=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--wa) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--wa) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--wac, var(--nc)) / var(--tw-text-opacity));
}
  .radio-info {
    --chkbg: var(--in);
    --tw-border-opacity: 1;
    border-color: hsl(var(--in) / var(--tw-border-opacity));
  }
  .radio-info:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--in) / var(--tw-border-opacity));
}
  .radio-info:focus-visible {
      outline: 2px solid hsl(var(--in));
    }
  .radio-info:checked,
    .radio-info[aria-checked=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--in) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--in) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--inc, var(--nc)) / var(--tw-text-opacity));
}
  .radio-error {
    --chkbg: var(--er);
    --tw-border-opacity: 1;
    border-color: hsl(var(--er) / var(--tw-border-opacity));
  }
  .radio-error:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--er) / var(--tw-border-opacity));
}
  .radio-error:focus-visible {
      outline: 2px solid hsl(var(--er));
    }
  .radio-error:checked,
    .radio-error[aria-checked=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--er) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--er) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--erc, var(--nc)) / var(--tw-text-opacity));
}
  .radio:disabled {
  cursor: not-allowed;
  opacity: 0.2;
}

@keyframes radiomark {
  0% {
    box-shadow: 0 0 0 12px hsl(var(--b1)) inset, 0 0 0 12px hsl(var(--b1)) inset;
  }
  50% {
    box-shadow: 0 0 0 3px hsl(var(--b1)) inset, 0 0 0 3px hsl(var(--b1)) inset;
  }
  100% {
    box-shadow: 0 0 0 4px hsl(var(--b1)) inset, 0 0 0 4px hsl(var(--b1)) inset;
  }
}

/* backward comptability */

.radio-mark {
  display: none;
}

`
}],[/^range/,function anonymous(
) {
return `.range {
    height: 1.5rem;
    width: 100%;
    cursor: pointer;
}
  .range:focus {
    outline: none;
  }

.range {
  appearance: none;
  -webkit-appearance: none;
  --range-shdw: var(--bc);
  overflow: hidden;
  background-color: transparent;
  border-radius: var(--rounded-box, 1rem);
}
  .range:focus-visible::-webkit-slider-thumb {
    --focus-shadow: 0 0 0 6px hsl(var(--b1)) inset, 0 0 0 2rem hsl(var(--range-shdw)) inset;
  }
  .range:focus-visible::-moz-range-thumb {
    --focus-shadow: 0 0 0 6px hsl(var(--b1)) inset, 0 0 0 2rem hsl(var(--range-shdw)) inset;
  }
  .range::-webkit-slider-runnable-track {
  height: 0.5rem;
  width: 100%;
  border-radius: var(--rounded-box, 1rem);
    background-color: hsla(var(--bc) / 0.1);
}
  .range::-moz-range-track {
  height: 0.5rem;
  width: 100%;
  border-radius: var(--rounded-box, 1rem);
    background-color: hsla(var(--bc) / 0.1);
}
  .range::-webkit-slider-thumb {
    background-color: hsl(var(--b1));
    position: relative;
    height: 1.5rem;
    width: 1.5rem;
    border-style: none;
    border-radius: var(--rounded-box, 1rem);
    appearance: none;
    -webkit-appearance: none;
    top: 50%;
    color: hsl(var(--range-shdw));
    transform: translateY(-50%);
    --filler-size: 100rem;
    --filler-offset: 0.6rem;
    box-shadow: 0 0 0 3px hsl(var(--range-shdw)) inset, var(--focus-shadow, 0 0), calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size);
  }
  .range::-moz-range-thumb {
    background-color: hsl(var(--b1));
    position: relative;
    height: 1.5rem;
    width: 1.5rem;
    border-style: none;
    border-radius: var(--rounded-box, 1rem);
    top: 50%;
    color: hsl(var(--range-shdw));
    --filler-size: 100rem;
    --filler-offset: 0.5rem;
    box-shadow: 0 0 0 3px hsl(var(--range-shdw)) inset, var(--focus-shadow, 0 0), calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size);
  }
  .range-primary {
    --range-shdw: var(--p);
  }
  .range-secondary {
    --range-shdw: var(--s);
  }
  .range-accent {
    --range-shdw: var(--a);
  }
  .range-success {
    --range-shdw: var(--su);
  }
  .range-warning {
    --range-shdw: var(--wa);
  }
  .range-info {
    --range-shdw: var(--in);
  }
  .range-error {
    --range-shdw: var(--er);
  }

`
}],[/^rating/,function anonymous(
) {
return `.rating {
    position: relative;
    display: inline-flex
}
  .rating :where(input) {
    cursor: pointer
}

.rating input {
    appearance: none;
    -webkit-appearance: none;
}
  .rating :where(input) {
    animation: rating-pop var(--animation-input, 0.25s) ease-out;
    height: 1.5rem;
    width: 1.5rem;
    background-color: hsl(var(--bc) / var(--tw-bg-opacity));
    --tw-bg-opacity: 1;
  }
  .rating .rating-hidden {
    width: 0.5rem;
    background-color: transparent;
}
  .rating input:checked ~ input,
  .rating input[aria-checked=true] ~ input {
    --tw-bg-opacity: 0.2;
}
  .rating input:focus-visible {
    transition-property: transform;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(-0.125em);
}
  .rating input:active:focus {
    animation: none;
    transform: translateY(-0.125em);
  }
.rating-half :where(input:not(.rating-hidden)) {
    width: 0.75rem;
}
@keyframes rating-pop {
  0% {
    transform: translateY(-0.125em);
  }
  40% {
    transform: translateY(-0.125em);
  }
  100% {
    transform: translateY(0);
  }
}

`
}],[/^select/,function anonymous(
) {
return `.select {
  display: inline-flex;
  flex-shrink: 0;
  cursor: pointer;
  user-select: none;
  appearance: none;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 2.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  line-height: 2;
  min-height: 3rem

  /* disabled */
  /* &-disabled,
  &[disabled] {
    @apply pointer-events-none;
  } */
}
  /* multiple */
  .select[multiple] {
  height: auto
}

.select {
  border-width: 1px;
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  --tw-border-opacity: 0;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b1) / var(--tw-bg-opacity));
  padding-right: 2.5rem;
  font-weight: 600;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: var(--rounded-btn, 0.5rem);
}
  .select-bordered {
  --tw-border-opacity: 0.2;
}
  .select {
  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(1px + 50%), calc(100% - 16px) calc(1px + 50%);
  background-size: 4px 4px, 4px 4px;
  background-repeat: no-repeat;
}
  .select:focus {
    outline: 2px solid hsla(var(--bc) / 0.2);
    outline-offset: 2px;
  }
  .select-ghost {
  --tw-bg-opacity: 0.05;
}
  .select-ghost:focus {
  --tw-bg-opacity: 1;
  --tw-text-opacity: 1;
  color: hsl(var(--bc) / var(--tw-text-opacity));
}
  .select-primary {
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
}
  .select-primary:focus {
      outline: 2px solid hsl(var(--p));
    }
  .select-secondary {
  --tw-border-opacity: 1;
  border-color: hsl(var(--s) / var(--tw-border-opacity));
}
  .select-secondary:focus {
      outline: 2px solid hsl(var(--s));
    }
  .select-accent {
  --tw-border-opacity: 1;
  border-color: hsl(var(--a) / var(--tw-border-opacity));
}
  .select-accent:focus {
      outline: 2px solid hsl(var(--a));
    }
  .select-info {
  --tw-border-opacity: 1;
  border-color: hsl(var(--in) / var(--tw-border-opacity));
}
  .select-info:focus {
      outline: 2px solid hsl(var(--in));
    }
  .select-success {
  --tw-border-opacity: 1;
  border-color: hsl(var(--su) / var(--tw-border-opacity));
}
  .select-success:focus {
      outline: 2px solid hsl(var(--su));
    }
  .select-warning {
  --tw-border-opacity: 1;
  border-color: hsl(var(--wa) / var(--tw-border-opacity));
}
  .select-warning:focus {
      outline: 2px solid hsl(var(--wa));
    }
  .select-error {
  --tw-border-opacity: 1;
  border-color: hsl(var(--er) / var(--tw-border-opacity));
}
  .select-error:focus {
      outline: 2px solid hsl(var(--er));
    }
  .select-disabled,
  .select[disabled] {
  cursor: not-allowed;
  --tw-border-opacity: 1;
  border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
  --tw-text-opacity: 0.2;
}
  .select-disabled::placeholder,
  .select[disabled]::placeholder {
  color: hsl(var(--bc) / var(--tw-placeholder-opacity));
  --tw-placeholder-opacity: 0.2;
}
  .select-multiple,
  .select[multiple],
  .select[size].select:not([size="1"]) {
  background-image: none;
  padding-right: 1rem;
}

`
}],[/^stack/,function anonymous(
) {
return `.stack {
    display: inline-grid;
}
  .stack > * {
    grid-column-start: 1;
    grid-row-start: 1;
    transform: translateY(10%) scale(0.9);
    z-index: 1;
}
  .stack > *:nth-child(2) {
    transform: translateY(5%) scale(0.95);
    z-index: 2;
  }
  .stack > *:nth-child(1) {
    transform: translateY(0) scale(1);
    z-index: 3;
  }

.stack {
    place-items: center;
    align-items: flex-end
}
  .stack > * {
    width: 100%;
    opacity: 0.6
}
  .stack > *:nth-child(2) {
    opacity: 0.8
}
  .stack > *:nth-child(1) {
    opacity: 1
}

`
}],[/^stat/,function anonymous(
) {
return `.stats {
  display: inline-grid
}
:where(.stats) {
  grid-auto-flow: column
}
.stat {
  display: inline-grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr)
}
.stat-figure {
  grid-column-start: 2;
  grid-row: span 3 / span 3;
  grid-row-start: 1;
  place-self: center;
  justify-self: end
}
.stat-title {
  grid-column-start: 1;
  white-space: nowrap
}
.stat-value {
  grid-column-start: 1;
  white-space: nowrap
}
.stat-desc {
  grid-column-start: 1;
  white-space: nowrap
}
.stat-actions {
  grid-column-start: 1;
  white-space: nowrap
}
/* .stats.grid-flow-row {
  @apply auto-rows-fr;
} */

.stats {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b1) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--bc) / var(--tw-text-opacity));
    border-radius: var(--rounded-box, 1rem)
}
:where(.stats) > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-x-reverse: 0;
    border-right-width: calc(1px * var(--tw-divide-x-reverse));
    border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
    --tw-divide-y-reverse: 0;
    border-top-width: calc(0px * calc(1 - var(--tw-divide-y-reverse)));
    border-bottom-width: calc(0px * var(--tw-divide-y-reverse))
}
:where(.stats) {
    overflow-x: auto
}
.stat {
    column-gap: 1rem;
    border-color: hsl(var(--bc) / var(--tw-border-opacity));
    --tw-border-opacity: 0.1;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem
}
.stat-title {
    opacity: 0.6
}
.stat-value {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 800
}
.stat-desc {
    font-size: 0.75rem;
    line-height: 1rem;
    opacity: 0.6
}
.stat-actions {
    margin-top: 1rem
}
/* .stat + .stat {
  @apply border-l border-base-content border-opacity-10;
}
.stats.grid-flow-row {
  .stat + .stat {
    @apply border-l-0 border-t;
  }
} */

`
}],[/^steps/,function anonymous(
) {
return `.steps {
  display: inline-grid;
  grid-auto-flow: column;
  overflow: hidden;
  overflow-x: auto;
  counter-reset: step;
  grid-auto-columns: 1fr
}
  .steps .step {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  place-items: center;
  text-align: center
}

.steps {
  /* &-vertical{
    .step {
      gap: .5rem;
      grid-template-columns: 40px 1fr;
      grid-template-rows: auto;
      min-height: 4rem;
      justify-items: start;
      &:before {
        @apply w-2 h-full top-0 transform -translate-y-1/2 -translate-x-1/2;
        margin-left: 50%;
      }
    }
  } */
}
  /* &,
  &-horizontal{ */
  .steps .step {
    grid-template-rows: 40px 1fr;
    grid-template-columns: auto;
    min-width: 4rem;
  }
  .steps .step:before {
  top: 0px;
  grid-column-start: 1;
  grid-row-start: 1;
  height: 0.5rem;
  width: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--bc) / var(--tw-text-opacity));
      content: "";
      margin-left: -100%;
}
  /* } */
  .steps .step:after {
      content: counter(step);
      counter-increment: step;
      z-index: 1;
      position: relative;
      grid-column-start: 1;
      grid-row-start: 1;
      display: grid;
      height: 2rem;
      width: 2rem;
      place-items: center;
      place-self: center;
      border-radius: 9999px;
      --tw-bg-opacity: 1;
      background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));
      --tw-text-opacity: 1;
      color: hsl(var(--bc) / var(--tw-text-opacity));
    }
  .steps .step:first-child:before {
      content: none;
    }
  .steps .step[data-content]:after {
      content: attr(data-content);
    }
  .steps .step-neutral + .step-neutral:before,
  .steps .step-neutral:after {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--nc) / var(--tw-text-opacity));
}
  .steps .step-primary + .step-primary:before,
  .steps .step-primary:after {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}
  .steps .step-secondary + .step-secondary:before,
  .steps .step-secondary:after {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--s) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--sc) / var(--tw-text-opacity));
}
  .steps .step-accent + .step-accent:before,
  .steps .step-accent:after {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--a) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--ac) / var(--tw-text-opacity));
}
  .steps .step-info + .step-info:before {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--in) / var(--tw-bg-opacity));
}
  .steps .step-info:after {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--in) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--inc, var(--nc)) / var(--tw-text-opacity));
}
  .steps .step-success + .step-success:before {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--su) / var(--tw-bg-opacity));
}
  .steps .step-success:after {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--su) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--suc, var(--nc)) / var(--tw-text-opacity));
}
  .steps .step-warning + .step-warning:before {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--wa) / var(--tw-bg-opacity));
}
  .steps .step-warning:after {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--wa) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--wac, var(--nc)) / var(--tw-text-opacity));
}
  .steps .step-error + .step-error:before {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--er) / var(--tw-bg-opacity));
}
  .steps .step-error:after {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--er) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--erc, var(--nc)) / var(--tw-text-opacity));
}

`
}],[/^swap/,function anonymous(
) {
return `.swap {

    position: relative;

    display: inline-grid;

    user-select: none;

    place-content: center
}

.swap > * {

    grid-column-start: 1;

    grid-row-start: 1
}

.swap input {

    appearance: none
}

.swap .swap-on,
.swap .swap-indeterminate,
.swap input:indeterminate ~ .swap-on {

    opacity: 0
}

.swap input:checked ~ .swap-off,
.swap.swap-active .swap-off,
.swap input:indeterminate ~ .swap-off {

    opacity: 0
}

.swap input:checked ~ .swap-on,
.swap-active .swap-on,
.swap input:indeterminate ~ .swap-indeterminate {

    opacity: 1
}

.swap {
  cursor: pointer;
}

.swap > * {
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: transform, opacity;
}

.swap-rotate .swap-on,
.swap-rotate .swap-indeterminate,
.swap-rotate input:indeterminate ~ .swap-on {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.swap-rotate input:checked ~ .swap-off,
.swap-rotate.swap-active .swap-off,
.swap-rotate input:indeterminate ~ .swap-off {
  --tw-rotate: -45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.swap-rotate input:checked ~ .swap-on,
.swap-rotate.swap-active .swap-on,
.swap-rotate input:indeterminate ~ .swap-indeterminate {
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.swap-flip {
  transform-style: preserve-3d;
  perspective: 16em;
}

.swap-flip .swap-on,
.swap-flip .swap-indeterminate,
.swap-flip input:indeterminate ~ .swap-on {
  transform: rotateY(180deg);
  backface-visibility: hidden;
  opacity: 1;
}

.swap-flip input:checked ~ .swap-off,
.swap-flip.swap-active .swap-off,
.swap-flip input:indeterminate ~ .swap-off {
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  opacity: 1;
}

.swap-flip input:checked ~ .swap-on,
.swap-flip.swap-active .swap-on,
.swap-flip input:indeterminate ~ .swap-indeterminate {
  transform: rotateY(0deg);
}

`
}],[/^tab/,function anonymous(
) {
return `.tabs {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end
}
.tab {
  position: relative;
  display: inline-flex;
  cursor: pointer;
  user-select: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 2rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  line-height: 2;
  --tab-padding: 1rem
}

.tab {
  --tw-text-opacity: 0.5;
}.tab:hover {
  --tw-text-opacity: 1;
}.tab {
  --tab-color: hsla(var(--bc) / var(--tw-text-opacity, 1));
  --tab-bg: hsla(var(--b1) / var(--tw-bg-opacity, 1));
  --tab-border-color: hsla(var(--b3) / var(--tw-bg-opacity, 1));
  color: var(--tab-color);
  padding-left: var(--tab-padding, 1rem);
  padding-right: var(--tab-padding, 1rem);
}
  .tab.tab-active {
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  --tw-border-opacity: 1;
  --tw-text-opacity: 1;
}
  .tab:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
  .tab:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: -3px;
  }
  .tab:focus-visible.tab-lifted {
      border-bottom-right-radius: var(--tab-radius, 0.5rem);
      border-bottom-left-radius: var(--tab-radius, 0.5rem);
    }
.tab-bordered {
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  --tw-border-opacity: 0.2;
  border-style: solid;
  border-bottom-width: calc(var(--tab-border, 1px) + 1px);
}
.tab-lifted {
  border: var(--tab-border, 1px) solid transparent;
  border-width: 0 0 var(--tab-border, 1px) 0;
  border-top-left-radius: var(--tab-radius, 0.5rem);
  border-top-right-radius: var(--tab-radius, 0.5rem);
  border-bottom-color: var(--tab-border-color);
  padding-left: var(--tab-padding, 1rem);
  padding-right: var(--tab-padding, 1rem);
  padding-top: var(--tab-border, 1px);
}
.tab-lifted.tab-active {
    background-color: var(--tab-bg);
    border-width: var(--tab-border, 1px) var(--tab-border, 1px) 0 var(--tab-border, 1px);
    border-left-color: var(--tab-border-color);
    border-right-color: var(--tab-border-color);
    border-top-color: var(--tab-border-color);
    padding-left: calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));
    padding-right: calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));
    padding-bottom: var(--tab-border, 1px);
    padding-top: 0;
  }
.tab-lifted.tab-active:before,
    .tab-lifted.tab-active:after {
      z-index: 1;
      content: "";
      display: block;
      position: absolute;
      width: var(--tab-radius, 0.5rem);
      height: var(--tab-radius, 0.5rem);
      bottom: 0;
      --tab-grad: calc(68% - var(--tab-border, 1px));
      --tab-corner-bg: radial-gradient(circle at var(--circle-pos), transparent var(--tab-grad), var(--tab-border-color) calc(var(--tab-grad) + 0.3px), var(--tab-border-color) calc(var(--tab-grad) + var(--tab-border, 1px)), var(--tab-bg) calc(var(--tab-grad) + var(--tab-border, 1px) + 0.3px));
    }
.tab-lifted.tab-active:before {
      left: calc(var(--tab-radius, 0.5rem) * -1);
      --circle-pos: top left;
      background-image: var(--tab-corner-bg);
    }
/* RTL quick fix */
[dir="rtl"] .tab-lifted.tab-active:before {
        --circle-pos: top right;
      }
.tab-lifted.tab-active:after {
      right: calc(var(--tab-radius, 0.5rem) * -1);
      --circle-pos: top right;
      background-image: var(--tab-corner-bg);
    }
/* RTL quick fix */
[dir="rtl"] .tab-lifted.tab-active:after {
        --circle-pos: top left;
      }
.tab-lifted.tab-active:first-child:before {
      background: none;
    }
.tab-lifted.tab-active:last-child:after {
      background: none;
    }
.tab-lifted.tab-active + .tab-lifted.tab-active:before {
    background: none;
  }
.tabs-boxed {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
  padding: 0.25rem;
  border-radius: var(--rounded-btn, 0.5rem);
}
.tabs-boxed .tab-active {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
  border-radius: var(--rounded-btn, 0.5rem);
}
.tabs-boxed .tab-active:hover {
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}

`
}],[/^table/,function anonymous(
) {
return `.table {
    position: relative
}
  .table th:first-child {
    position: sticky;
    left: 0px;
    z-index: 11;
    /* because safari */
    position: -webkit-sticky
}

.table {
    text-align: left
}
  .table :where(th, td) {
    white-space: nowrap;
    padding: 1rem;
    vertical-align: middle
}
  .table tr.active th,
    .table tr.active td,
    .table tr.active:nth-child(even) th,
    .table tr.active:nth-child(even) td {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity))
}
  .table tr.hover:hover th,
    .table tr.hover:hover td,
    .table tr.hover:nth-child(even):hover th,
    .table tr.hover:nth-child(even):hover td {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity))
}
  .table:where(:not(.table-zebra)) :where(thead, tbody, tfoot) :where(tr:not(:last-child) :where(th, td)) {
    border-bottom-width: 1px;
    --tw-border-opacity: 1;
    border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity))
}
  .table :where(thead, tfoot) :where(th, td) {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 700;
    text-transform: uppercase
}
  .table :where(tbody th, tbody td) {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b1) / var(--tw-bg-opacity))
}
  .table-zebra tbody tr:nth-child(even) th,
      .table-zebra tbody tr:nth-child(even) td {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity))
}

:where(.table *:first-child) :where(*:first-child) :where(th, td):first-child {
    border-top-left-radius: 0.5rem
}

:where(.table *:first-child) :where(*:first-child) :where(th, td):last-child {
    border-top-right-radius: 0.5rem
}

:where(.table *:last-child) :where(*:last-child) :where(th, td):first-child {
    border-bottom-left-radius: 0.5rem
}

:where(.table *:last-child) :where(*:last-child) :where(th, td):last-child {
    border-bottom-right-radius: 0.5rem
}
`
}],[/^textarea/,function anonymous(
) {
return `.textarea {
    flex-shrink: 1;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    line-height: 2;
    min-height: 3rem
}

.textarea {
    border-width: 1px;
    border-color: hsl(var(--bc) / var(--tw-border-opacity));
    --tw-border-opacity: 0;
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b1) / var(--tw-bg-opacity));
    border-radius: var(--rounded-btn, 0.5rem);
}
  .textarea-bordered {
    --tw-border-opacity: 0.2;
}
  .textarea:focus {
    outline: 2px solid hsla(var(--bc) / 0.2);
    outline-offset: 2px;
  }
  .textarea-ghost {
    --tw-bg-opacity: 0.05;
}
  .textarea-ghost:focus {
    --tw-bg-opacity: 1;
    --tw-text-opacity: 1;
    color: hsl(var(--bc) / var(--tw-text-opacity));
      box-shadow: none;
}
  .textarea-primary {
    --tw-border-opacity: 1;
    border-color: hsl(var(--p) / var(--tw-border-opacity));
}
  .textarea-primary:focus {
      outline: 2px solid hsl(var(--p));
    }
  .textarea-secondary {
    --tw-border-opacity: 1;
    border-color: hsl(var(--s) / var(--tw-border-opacity));
}
  .textarea-secondary:focus {
      outline: 2px solid hsl(var(--s));
    }
  .textarea-accent {
    --tw-border-opacity: 1;
    border-color: hsl(var(--a) / var(--tw-border-opacity));
}
  .textarea-accent:focus {
      outline: 2px solid hsl(var(--a));
    }
  .textarea-info {
    --tw-border-opacity: 1;
    border-color: hsl(var(--in) / var(--tw-border-opacity));
}
  .textarea-info:focus {
      outline: 2px solid hsl(var(--in));
    }
  .textarea-success {
    --tw-border-opacity: 1;
    border-color: hsl(var(--su) / var(--tw-border-opacity));
}
  .textarea-success:focus {
      outline: 2px solid hsl(var(--su));
    }
  .textarea-warning {
    --tw-border-opacity: 1;
    border-color: hsl(var(--wa) / var(--tw-border-opacity));
}
  .textarea-warning:focus {
      outline: 2px solid hsl(var(--wa));
    }
  .textarea-error {
    --tw-border-opacity: 1;
    border-color: hsl(var(--er) / var(--tw-border-opacity));
}
  .textarea-error:focus {
      outline: 2px solid hsl(var(--er));
    }
  .textarea-disabled,
  .textarea[disabled] {
    cursor: not-allowed;
    --tw-border-opacity: 1;
    border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
    --tw-text-opacity: 0.2;
}
  .textarea-disabled::placeholder,
  .textarea[disabled]::placeholder {
    color: hsl(var(--bc) / var(--tw-placeholder-opacity));
    --tw-placeholder-opacity: 0.2;
}

`
}],[/^toast/,function anonymous(
) {
return `.toast {
    position: fixed;
    display: flex;
    min-width: fit-content;
    flex-direction: column
}

.toast{
    gap: 0.5rem;
    padding: 1rem;
}
  .toast>*{
    animation: toast-pop 0.25s ease-out;
  }

@keyframes toast-pop {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

`
}],[/^toggle/,function anonymous(
) {
return `.toggle {
    flex-shrink: 0
}

.toggle {
  --tglbg: hsl(var(--b1));
  --handleoffset: 1.5rem;
  --handleoffsetcalculator: calc(var(--handleoffset) * -1);
  --togglehandleborder: 0 0;
  height: 1.5rem;
  width: 3rem;
  cursor: pointer;
  appearance: none;
  border-width: 1px;
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  --tw-border-opacity: 0.2;
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.5;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: var(--rounded-badge, 1.9rem);
  transition: background, box-shadow var(--animation-input, 0.2s) ease-in-out;
  box-shadow: var(--handleoffsetcalculator) 0 0 2px var(--tglbg) inset, 0 0 0 2px var(--tglbg) inset, var(--togglehandleborder);
}
  [dir="rtl"] .toggle {
    --handleoffsetcalculator: calc(var(--handleoffset) * 1);
  }
  .toggle:focus-visible {
    outline: 2px solid hsl(var(--bc));
    outline-offset: 2px;
  }
  .toggle:checked,
  .toggle[checked="true"],
  .toggle[aria-checked=true] {
    --handleoffsetcalculator: var(--handleoffset);
    --tw-border-opacity: 1;
    --tw-bg-opacity: 1;
  }
  [dir="rtl"] .toggle:checked, [dir="rtl"] .toggle[checked="true"], [dir="rtl"] .toggle[aria-checked=true] {
      --handleoffsetcalculator: calc(var(--handleoffset) * -1);
    }
  .toggle:indeterminate {
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
    box-shadow: calc(var(--handleoffset) / 2) 0 0 2px var(--tglbg) inset, calc(var(--handleoffset) / -2) 0 0 2px var(--tglbg) inset, 0 0 0 2px var(--tglbg) inset;
}
  [dir="rtl"] .toggle:indeterminate {
      box-shadow: calc(var(--handleoffset) / 2) 0 0 2px var(--tglbg) inset, calc(var(--handleoffset) / -2) 0 0 2px var(--tglbg) inset, 0 0 0 2px var(--tglbg) inset;
    }
  .toggle-primary:focus-visible {
      outline: 2px solid hsl(var(--p));
    }
  .toggle-primary:checked,
    .toggle-primary[checked="true"],
    .toggle-primary[aria-checked=true] {
  border-color: hsl(var(--p) / var(--tw-border-opacity));
  --tw-border-opacity: 0.1;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}
  .toggle-secondary:focus-visible {
      outline: 2px solid hsl(var(--s));
    }
  .toggle-secondary:checked,
    .toggle-secondary[checked="true"],
    .toggle-secondary[aria-checked=true] {
  border-color: hsl(var(--s) / var(--tw-border-opacity));
  --tw-border-opacity: 0.1;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--s) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--sc) / var(--tw-text-opacity));
}
  .toggle-accent:focus-visible {
      outline: 2px solid hsl(var(--a));
    }
  .toggle-accent:checked,
    .toggle-accent[checked="true"],
    .toggle-accent[aria-checked=true] {
  border-color: hsl(var(--a) / var(--tw-border-opacity));
  --tw-border-opacity: 0.1;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--a) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--ac) / var(--tw-text-opacity));
}
  .toggle-success:focus-visible {
      outline: 2px solid hsl(var(--su));
    }
  .toggle-success:checked,
    .toggle-success[checked="true"],
    .toggle-success[aria-checked=true] {
  border-color: hsl(var(--su) / var(--tw-border-opacity));
  --tw-border-opacity: 0.1;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--su) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--suc, var(--nc)) / var(--tw-text-opacity));
}
  .toggle-warning:focus-visible {
      outline: 2px solid hsl(var(--wa));
    }
  .toggle-warning:checked,
    .toggle-warning[checked="true"],
    .toggle-warning[aria-checked=true] {
  border-color: hsl(var(--wa) / var(--tw-border-opacity));
  --tw-border-opacity: 0.1;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--wa) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--wac, var(--nc)) / var(--tw-text-opacity));
}
  .toggle-info:focus-visible {
      outline: 2px solid hsl(var(--in));
    }
  .toggle-info:checked,
    .toggle-info[checked="true"],
    .toggle-info[aria-checked=true] {
  border-color: hsl(var(--in) / var(--tw-border-opacity));
  --tw-border-opacity: 0.1;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--in) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--inc, var(--nc)) / var(--tw-text-opacity));
}
  .toggle-error:focus-visible {
      outline: 2px solid hsl(var(--er));
    }
  .toggle-error:checked,
    .toggle-error[checked="true"],
    .toggle-error[aria-checked=true] {
  border-color: hsl(var(--er) / var(--tw-border-opacity));
  --tw-border-opacity: 0.1;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--er) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--erc, var(--nc)) / var(--tw-text-opacity));
}
  .toggle:disabled {
  cursor: not-allowed;
  --tw-border-opacity: 1;
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  background-color: transparent;
  opacity: 0.3;
    --togglehandleborder: 0 0 0 3px hsl(var(--bc)) inset, var(--handleoffsetcalculator) 0 0 3px hsl(var(--bc)) inset;
}

/* backward comptability */

.toggle-mark {
  display: none;
}

`
}],[/^tooltip/,function anonymous(
) {
return `.tooltip {
  position: relative;
  display: inline-block;
  --tooltip-offset: calc(100% + 1px + var(--tooltip-tail, 0px));
}
.tooltip:before {
  position: absolute;
  pointer-events: none;
  z-index: 1;
  content: attr(data-tip);
}
.tooltip:before, .tooltip-top:before {
    transform: translateX(-50%);
    top: auto;
    left: 50%;
    right: auto;
    bottom: var(--tooltip-offset);
  }
.tooltip-bottom:before {
    transform: translateX(-50%);
    top: var(--tooltip-offset);
    left: 50%;
    right: auto;
    bottom: auto;
  }
.tooltip-left:before {
    transform: translateY(-50%);
    top: 50%;
    left: auto;
    right: var(--tooltip-offset);
    bottom: auto;
  }
.tooltip-right:before {
    transform: translateY(-50%);
    top: 50%;
    left: var(--tooltip-offset);
    right: auto;
    bottom: auto;
  }

.tooltip {
  position: relative;
  display: inline-block;
  text-align: center;
  --tooltip-tail: 3px;
  --tooltip-color: hsl(var(--n));
  --tooltip-text-color: hsl(var(--nc));
  --tooltip-tail-offset: calc(100% + 1px - var(--tooltip-tail));
}
.tooltip:before,
.tooltip:after {
  opacity: 0;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-delay: 100ms;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.tooltip:after {
  position: absolute;
}
.tooltip:before {
  max-width: 20rem;
  border-radius: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: var(--tooltip-color);
  color: var(--tooltip-text-color);
  width: max-content;
}
.tooltip.tooltip-open:before,
.tooltip.tooltip-open:after,
.tooltip:hover:before,
.tooltip:hover:after {
  opacity: 1;
  transition-delay: 75ms;
}
.tooltip:after {
  content: "";
  border-style: solid;
  border-width: var(--tooltip-tail, 0);
  width: 0;
  height: 0;
  display: block;
  position: absolute;
}
.tooltip:after, .tooltip-top:after {
    transform: translateX(-50%);
    border-color: var(--tooltip-color) transparent transparent transparent;
    top: auto;
    left: 50%;
    right: auto;
    bottom: var(--tooltip-tail-offset);
  }
.tooltip-bottom:after {
    transform: translateX(-50%);
    border-color: transparent transparent var(--tooltip-color) transparent;
    top: var(--tooltip-tail-offset);
    left: 50%;
    right: auto;
    bottom: auto;
  }
.tooltip-left:after {
    transform: translateY(-50%);
    border-color: transparent transparent transparent var(--tooltip-color);
    top: 50%;
    left: auto;
    right: calc(var(--tooltip-tail-offset) + 1px);
    bottom: auto;
  }
.tooltip-right:after {
    transform: translateY(-50%);
    border-color: transparent var(--tooltip-color) transparent transparent;
    top: 50%;
    left: calc(var(--tooltip-tail-offset) + 1px);
    right: auto;
    bottom: auto;
  }
.tooltip-primary {
    --tooltip-color: hsl(var(--p));
    --tooltip-text-color: hsl(var(--pc));
  }
.tooltip-secondary {
    --tooltip-color: hsl(var(--s));
    --tooltip-text-color: hsl(var(--sc));
  }
.tooltip-accent {
    --tooltip-color: hsl(var(--a));
    --tooltip-text-color: hsl(var(--ac));
  }
.tooltip-info {
    --tooltip-color: hsla(var(--in));
    --tooltip-text-color: hsl(var(--inc));
  }
.tooltip-success {
    --tooltip-color: hsla(var(--su));
    --tooltip-text-color: hsl(var(--suc));
  }
.tooltip-warning {
    --tooltip-color: hsla(var(--wa));
    --tooltip-text-color: hsl(var(--wac));
  }
.tooltip-error {
    --tooltip-color: hsla(var(--er));
    --tooltip-text-color: hsl(var(--erc));
  }

`
}],[/^prose/,function anonymous(
) {
return `:root .prose{
  --tw-prose-body: hsla(var(--bc)/.8);
  --tw-prose-headings: hsl(var(--bc));
  --tw-prose-lead: hsl(var(--bc));
  --tw-prose-links: hsl(var(--bc));
  --tw-prose-bold: hsl(var(--bc));
  --tw-prose-counters: hsl(var(--bc));
  --tw-prose-bullets: hsla(var(--bc)/.5);
  --tw-prose-hr: hsla(var(--bc)/.2);
  --tw-prose-quotes: hsl(var(--bc));
  --tw-prose-quote-borders: hsla(var(--bc)/.2);
  --tw-prose-captions: hsla(var(--bc)/.5);
  --tw-prose-code: hsl(var(--bc));
  --tw-prose-pre-code: hsl(var(--nc));
  --tw-prose-pre-bg: hsl(var(--n));
  --tw-prose-th-borders: hsla(var(--bc)/.5);
  --tw-prose-td-borders: hsla(var(--bc)/.2);
}
.prose :where(code):not(:where([class~="not-prose"] *)){
    padding: 2px 8px;
    border-radius: var(--rounded-badge);
  }
.prose code:after, 
  .prose code:before{
    content: none;
  }
.prose pre code{
      border-radius: 0;
      padding: 0;
    }
.prose :where(tbody tr, thead):not(:where([class~="not-prose"] *)){
    border-bottom-color: hsl(var(--bc) / 20%);
  }

`
}],[/^artboard/,function anonymous(
) {
return `.artboard {
    width: 100%
}

`
}],[/^indicator/,function anonymous(
) {
return `.indicator {
  position: relative;
  display: inline-flex;
  width: max-content;
}
  .indicator :where(.indicator-item) {
    z-index: 1;
    position: absolute;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

`
}]]