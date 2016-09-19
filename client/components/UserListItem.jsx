import React from 'react';

class UserListItem extends React.Component {
  render() {
    const user = this.props.data;
    const style = this.props.style;

    return (
      <a href="" className="w-inline-block directory-contact-link" style={style} >
        <div className="w-clearfix field border">
          <img className="user-photo-list"
            src={'/images/UserFace-60x60.png'}
          />
          <div className="directory-info">
            <p className="weight-regular">
            {`${user.firstName} ${user.lastName}`}
            </p>
            <p className="directory-company-name">
              {user.phone}
            </p>
            <div className="org-type">YPO</div>
          </div>
        </div>
      </a>
      );
  }
}

export default UserListItem;
