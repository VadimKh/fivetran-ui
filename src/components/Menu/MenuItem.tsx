import classNames from 'classnames';
import * as React from 'react';
import { animated, Spring} from 'react-spring';
import { isRegExp } from 'util';

const MenuItem = (props: IMenuItemExtendProps) => {
    const linkClickHandler = (e) => {
        if(props.link) {
            return;
        }
        e.preventDefault();
        props.toggleMenuHandler(props.title);
    }

    return (
        <li
            className={classNames({
                'has-children': props.subItems && props.subItems.length,
                'is-active': props.isActive,
                'is-opened': props.isOpened,
                'menu-item': !props.isMobile && !props.isSubItem,
                'menu-mobile-item': props.isMobile && !props.isSubItem,
                'menu-mobile-sub-item': props.isMobile && props.isSubItem,
                'menu-sub-item': !props.isMobile && props.isSubItem
            })}
            style={props.style}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
        >
            {renderChildrenOrMenuItemLink({...props, onClick: linkClickHandler})}

            <Spring native={true} force={true} from={{ height: 0 }} to={{ height: props.isOpened ? 'auto' : 0 }}>
                {style =>
                <animated.div className={classNames({
                    'menu-mobile-submenu-container': props.isMobile,
                    'menu-submenu-container': !props.isMobile
                })} style={style}>
                    <MenuItemChildren {...props}/>
                </animated.div>
                }
            </Spring>
        </li>
    );
}

const renderChildrenOrMenuItemLink = (props: IMenutItemLinkProps) => (
    props.children
        ? props.children
        : <MenuItemLink {...props} />
)

const MenuItemLink = (props: IMenutItemLinkProps) => (
    <a
        className={classNames({
            'has-children': props.subItems && props.subItems.length,
            'is-active': props.isActive,
            'menu-item-link': !props.isMobile && !props.isSubItem,
            'menu-mobile-item-link': props.isMobile && !props.isSubItem,
            'menu-mobile-sub-item-link': props.isMobile && props.isSubItem,
            'menu-sub-item-link': !props.isMobile && props.isSubItem
        })}
        href={props.link}
        onClick={props.onClick}
    >
        {props.title}
        <Chevron {...props} />
    </a>
)

const MenuItemChildren = (props: IMenuItemExtendProps) => {
    if (!props.subItems || !props.subItems.length || !props.isOpened) {
        return null;
    }
    return (
        <ul
            className={classNames({
                'menu-mobile-submenu': props.isMobile,
                'menu-submenu': !props.isMobile
            })}
        >
            {props.subItems.map(c => <MenuItem key={c.title} {...c} isMobile={props.isMobile} isSubItem={true} />)}
        </ul>

    )
}

const Chevron = (props: IMenuItemExtendProps) => {
    if(!(props.subItems && props.subItems.length)) {
        return null;
    }

    return <i className={classNames('fas fa-chevron-down', {
        'is-opened': props.isOpened,
        'menu-item-chevron': !props.isMobile,
        'menu-mobile-item-chevron': props.isMobile
    })}/>
}

export default MenuItem;

export interface IMenuItem {
    title?: string;
    link?: string;
    isActive?: boolean;
    isNew?: boolean;
    subItems?: IMenuItem[],
    style?: {},
    children?: React.ReactNode
}

export interface IMenuItemExtendProps extends IMenuItem {
    isSubItem?: boolean;
    isMobile?: boolean;
    isOpened?: boolean;
    toggleMenuHandler?: (key:string) => void;
    onMouseEnter?: (e?: any) => void;
    onMouseLeave?: (e?: any) => void;
}

interface IMenutItemLinkProps extends IMenuItemExtendProps {
    onClick: (e: any) => void
}
