import React from 'react';

const Link = ({ href, children }) => {
  const handleLinkClick = (ev) => {
    if (ev.metaKey || ev.ctrlKey) return;

    ev.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <div className="nav-link">
      <a href={href} onClick={handleLinkClick}>
        {children}
      </a>
    </div>
  );
};

export default Link;
