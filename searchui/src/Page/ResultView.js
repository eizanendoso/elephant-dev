import * as _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

function getFieldType(result, field, type) {
    if (result[field]) {
        return result[field][type];
    }
}

function getRaw(result, field) {
    return getFieldType(result, field, 'raw');
}

function getSnippet(result, field) {
    return getFieldType(result, field, 'snippet');
}

function htmlEscape(str) {
    if (!_.isEmpty(str)) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    return '';
}

function getEscapedField(result, field) {
    // Fallback to raw values here, because non-string fields
    // will not have a snippet fallback. Raw values MUST be html escaped.
    const safeField =
        getSnippet(result, field) || htmlEscape(getRaw(result, field));
    return Array.isArray(safeField) ? safeField.join(', ') : safeField;
}

function getEscapedFields(result) {
    return Object.keys(result).reduce((acc, field) => {
        return { ...acc, [field]: getEscapedField(result, field) };
    }, {});
}

// Inner date component
const DateComponent = ({ result }) => {
    const lastModifiedBy = getEscapedField(result, 'lastModifiedBy');
    const lastModifiedDate = getEscapedField(result, 'lastModified');
    const createdBy = getEscapedField(result, 'createdBy');
    const createdDate = getEscapedField(result, 'created');

    if (lastModifiedBy && lastModifiedDate) {
        return (
            <li>
                <h5 style={{ color: '#8b9bad' }}>Modified by <i>{lastModifiedBy}</i> on <i>{moment(lastModifiedDate).format('LLL')}</i> </h5>
            </li>
        );
    }

    if (createdBy && createdDate) {
        return (
            <li>
                <h5 style={{ color: '#8b9bad' }}>Modified by <i>{createdBy}</i> on <i>{moment(createdDate).format('LLL')}</i> </h5>
            </li>
        );
    }

    return null;
};

DateComponent.propTypes = {
    result: PropTypes.object
};

const ResultView = (props) => {
    const { key, titleField, urlField, result } = props;
    console.log(props)
    const fields = getEscapedFields(result);
    const title = getEscapedField(result, titleField);
    const url = getRaw(result, urlField);
    const sitting_date = getRaw(result, "sitting_date");
    const sitting_no = getRaw(result, "sitting_no");
    const type = getRaw(result, "type");

    return (
        <div key={key}
            className="sui-result"
        >
            <ul className="sui-result__details">
                <li>
                    <div className="sui-result__header">
                        {title && !url && (
                            <span
                                dangerouslySetInnerHTML={{ __html: title }}
                                className="sui-result__title"
                            />
                        )}
                        {title && url && (
                            <a dangerouslySetInnerHTML={{ __html: title }}
                                className="sui-result__title sui-result__title-link"
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                            />
                        )}
                    </div>
                </li>
                <li>
                    <div className="sui-result__body">
                        <ul className="sui-result__details">

                            <li>
                                <span className="sui-result__key">Date</span>{" "}
                                <span
                                    dangerouslySetInnerHTML={{ __html: (sitting_date || "") }}
                                    className="sui-result__value" />
                            </li>
                            <li>
                                <span className="sui-result__key">Sitting No</span>{" "}
                                <span
                                    dangerouslySetInnerHTML={{ __html: (sitting_no || "") }}
                                    className="sui-result__value" />
                            </li>
                            <li>
                                <span className="sui-result__key">Doc type</span>{" "}
                                <span
                                    dangerouslySetInnerHTML={{ __html: (type || "") }}
                                    className="sui-result__value" />
                            </li>
                            {/* <li>
                                <span className="sui-result__key">Score</span>{" "}
                                <span
                                    dangerouslySetInnerHTML={{ __html: _meta['score'] }}
                                    className="sui-result__value" />
                            </li> */}
                            <li>
                                <span
                                    dangerouslySetInnerHTML={{ __html: fields.body }}
                                    className="sui-result__value" />
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
};

ResultView.propTypes = {
    key: PropTypes.string,
    titleField: PropTypes.string,
    urlField: PropTypes.string,
    result: PropTypes.object
};

export default ResultView;