import * as React from 'react';

const Breadcrumb = (props: IBreadcrumb) => {
    if(!props.items || !props.items.length) {
        return null;
    }

    return (
        <div className="breadcrumb">
            <div className="breadcrumb-container">
                <div className="breadcrumb-row">
                    <ul className="breadcrumb-col">
                        <li className="breadcrumb-item breadcrumb-icon"><i className="fas fa-home"/></li>
                        {props.items.map((b: IBreadcrumbItem) => (
                            <BreadcrumbItem key={b.title} {...b} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const BreadcrumbItem = (props: IBreadcrumbItem) => (
    <li className="breadcrumb-item">
        {props.link
            ? <a className="breadcrumb-link" href={props.link}>{props.title}</a>
            : <div className="breadcrumb-text">{props.title}</div>
        }
    </li>
)

export default Breadcrumb;

export interface IBreadcrumb {
    items?: IBreadcrumbItem[];
}

export interface IBreadcrumbItem {
    title: string;
    link?: string;
}
