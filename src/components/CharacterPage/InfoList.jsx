import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { ReactComponent as ExpandMore } from 'Img/expand_more.svg';
import { ReactComponent as ExpandLess } from 'Img/expand_less.svg';
import { getData } from 'Api/api';
import LoadSpinner from 'Components/LoadSpinner/LoadSpinner';

const useStyles = createUseStyles((theme) => ({
  labelLine: {
    display: 'flex',
    alignItems: 'center',
  },
  expandButton: {
    cursor: 'pointer',
    '& svg': {
      fill: theme.color.facded,
    },
  },
  listItem: {
    fontSize: 16,
    color: theme.color.facded,
  },
  loaderContainer: {
    width: 200,
  },
}));

const InfoList = ({ urlList, dataName, label }) => {
  const classes = useStyles();
  const [dataList, setDatalist] = useState(null);
  const [isDataListVisible, setIsDataListVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async (list) => {
      try {
        setIsLoading(true);
        const promises = list.map((url) => getData(url));
        const result = await Promise.all(promises);
        setDatalist(result);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    if (isDataListVisible && !dataList) {
      loadData(urlList);
    }
  }, [isDataListVisible]);

  return (
    <div className={classes.infoListContainer}>
      <div className={classes.labelLine}>
        <span>{label}</span>
        <span
          className={classes.expandButton}
          onClick={() => setIsDataListVisible((prevState) => !prevState)}
          role="button"
          aria-hidden="true"
          tabIndex={0}
        >
          {
            isDataListVisible
              ? <ExpandLess />
              : <ExpandMore />
          }
        </span>
      </div>
      {
        isDataListVisible
        && (
          <div className={classes.dataList}>
            {
              dataList
              && dataList.map((listItem) => (
                <div className={classes.listItem} key={listItem.url}>
                  {listItem[dataName]}
                </div>
              ))
            }
          </div>
        )
      }
      {
        isLoading
        && (
          <div className={classes.loaderContainer}>
            <LoadSpinner />
          </div>
        )
      }
    </div>
  );
};

InfoList.propTypes = {
  urlList: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  dataName: PropTypes.string.isRequired,
};

export default InfoList;
