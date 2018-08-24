import classNames from 'classnames';
import * as React from 'react';
import { animated, Spring} from 'react-spring';
import Breadcrumb, { IBreadcrumbItem } from './Breadcrumb';
import MenuItem, {IMenuItem} from './MenuItem';

class Menu extends React.Component<IMenuProp, IMenuState> {
    constructor(props:IMenuProp) {
        super(props);
        this.state = {
            isMenuAnimated: true,
            isMenuOpened: false,
            openedItems: {},
        }
    }

    public render() {
        const menuOpenHandler = () => {
            this.setState(state => ({
                ...state,
                isMenuOpened: !this.state.isMenuOpened,
            }));
        }

        const subMenuOpenHandler = (key: string) => {
            const openedItems = {
                ...this.state.openedItems,
                [key]: !this.state.openedItems[key],
                isMenuAnimted: true
            };

            this.setState(state => ({
                ...state,
                isMenuAnimted: false,
                openedItems
            }));
        }

        return (
            <div className="menu has-breadcrumb">
                <div className="menu-container">
                    <div className="menu-row">
                        <div className="col-auto">
                            <a href="/" className="menu-logo-link"><img className="menu-logo" src="img/logo.svg" alt="Fivetran"/></a>
                        </div>
                        <div className="col-auto d-flex align-items-center d-md-none">
                            <a href="#" className="menu-link">Log-In</a>
                            <div className={classNames('hamburger', {'is-active': this.state.isMenuOpened})} onClick={menuOpenHandler}>
                                <div className="hamburger-box">
                                    <div className="hamburger-inner" />
                                </div>
                            </div>
                        </div>
                        <div className="col-auto d-none align-items-center d-md-flex">
                            <ul className="menu-items">
                                {this.props.items.map(item => <MenuItem
                                    key={item.title}
                                    {...item}
                                    isOpened={this.state.openedItems[item.title]}
                                    toggleMenuHandler={subMenuOpenHandler}
                                    // tslint:disable-next-line
                                    onMouseEnter={() => this.setState(state => ({
                                        ...state,
                                        openedItems: {
                                            ...state.openedItems,
                                            [item.title]: true
                                        }
                                    }))}
                                    // tslint:disable-next-line
                                    onMouseLeave={() => this.setState(state => ({
                                        ...state,
                                        openedItems: {
                                            ...state.openedItems,
                                            [item.title]: false
                                        }
                                    }))}
                                />)}
                                <MenuItem key="separator">
                                    <div className="menu-item-separator" />
                                </MenuItem>
                                <MenuItem
                                    title="Log-In"
                                    link="#"
                                />
                                <MenuItem key="free-demo">
                                    <a href="#" className="btn">Free Demo</a>
                                </MenuItem>
                            </ul>
                        </div>
                    </div>
                </div>
                <Breadcrumb items={this.props.breadcrumbs} />
                <Spring native={true} immediate={!this.state.isMenuAnimated} from={{ height: 0 }} to={{ height: this.state.isMenuOpened ? 'auto' : 0 }}>
                    {props => (
                    <animated.div className="menu-mobile-container" style={props}>
                        <ul className="menu-mobile">
                            {this.props.items.map(item => <MenuItem
                                key={item.title}
                                {...item}
                                isMobile={true}
                                isOpened={this.state.openedItems[item.title]}
                                toggleMenuHandler={subMenuOpenHandler}
                            />)}
                            <MenuItem
                                key={'login'}
                                isMobile={true}
                            >
                                <div className="menu-mobile-button-container">
                                    <a href="/login" className="btn menu-mobile-button">Start your free trial</a>
                                </div>
                            </MenuItem>
                        </ul>
                    </animated.div>
                    )}
                </Spring>
            </div>
        );
    }
}

export default Menu;

export { IBreadcrumbItem, IMenuItem };

export interface IMenuProp {
    items: IMenuItem[],
    breadcrumbs?: IBreadcrumbItem[]
}

export interface IMenuState {
    isMenuOpened: boolean,
    openedItems: {
        [key: string] : boolean;
    };
    isMenuAnimated: boolean;
}
