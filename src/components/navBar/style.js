export default {
  navLink: {
    color: '#676767',
    display: 'block',
    lineHeight: '80px',
    padding: '0',
    textDecoration: 'none',
  },
  appBar: { background: '#e57145', boxShadow: 'none' },
  appBarBox: { width: '100%', margin: '0 auto', padding: '0 48px' },
  navLinkBoxContainer: {
    flexGrow: 1,
    display: 'flex',
  },
  navLinkBox: { padding: '0 20px' },
  isActiveTab: ({ isActive }) => ({
    borderBottom: isActive ? '4px solid #c63c22' : '',
  }),
};
