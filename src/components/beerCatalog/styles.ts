export default {
  mainContainer: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listStyle: {
    display: 'flex',
    flexDirection: 'raw',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItemStyle: {
    width: '300px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '5px',
    transition: 'transform 0.3s',
    '&:hover': { transform: 'scale(1.1)' },
  },
  sortSelectBox: { marginBottom: '20px' },
  formControl: { width: '100px' },
};
