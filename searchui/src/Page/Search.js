import React, { useState } from "react";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import {
    ErrorBoundary,
    Facet,
    SearchProvider,
    SearchBox,
    Results,
    PagingInfo,
    ResultsPerPage,
    Paging,
    Sorting,
    WithSearch
} from "@elastic/react-search-ui";
import {
    Layout,
} from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";
import './Search.css'
import ResultView from "./ResultView";
import loading from '../Assets/images/loading.gif';

const SEARCH_KEY = process.env.REACT_APP_SEARCH_KEY;
const ENGINE_NAME = process.env.REACT_APP_ENGINE_NAME;
const END_POINT = process.env.REACT_APP_END_POINT;

const connector = new AppSearchAPIConnector({
    searchKey: SEARCH_KEY,
    engineName: ENGINE_NAME,
    endpointBase: END_POINT,
    cacheResponses: false
});

const SORT_OPTIONS = [
    {
        name: "Relevance",
        value: "",
        direction: ""
    },
    {
        name: "Year",
        value: "year",
        direction: ""
    },
    {
        name: "Doc Type",
        value: "type",
        direction: ""
    },
];

const config = {
    alwaysSearchOnInitialLoad: true,
    searchQuery: {
        result_fields: {
            title: {
                snippet: {
                    size: 100,
                    fallback: true
                }
            },
            report_url: {
                raw: {}
            },
            body: {
                snippet: {
                    size: 500,
                    fallback: true
                }
            }
        },
        disjunctiveFacets: ["parliament_no", "vol_no", "sitting_date", "sitting_no", "year"],
        facets: {
            type: { type: "value" },
            year: { type: "value" },
            main_speaker: { type: "value", size: 75 }
        }
    },
    autocompleteQuery: {
        results: {
            resultsPerPage: 5,
            result_fields: {
                title: {
                    snippet: {
                        size: 100,
                        fallback: true
                    }
                },
                report_url: {
                    raw: {}
                }
            }
        },
        suggestions: {
            types: {
                documents: {
                    fields: ["title", "subtitle", "body", "main_speaker"]
                }
            },
            size: 4
        }
    },
    apiConnector: connector,
    initialState: { searchTerm: "", resultsPerPage: 20 },
    alwaysSearchOnInitialLoad: false
};

export default function Search() {
    return (
        <>
            <div className='search_input'>
                <SearchProvider config={config}>
                    <WithSearch mapContextToProps={({ wasSearched, isLoading }) => ({ wasSearched, isLoading })}>
                        {({ wasSearched, isLoading }) => {
                            return (
                                <>
                                    <ErrorBoundary>
                                        <Layout
                                            header={
                                                <>
                                                    <SearchBox
                                                        inputView={({ getAutocomplete, getInputProps, getButtonProps }) => (
                                                            <>
                                                                <div className="sui-search-box__wrapper">
                                                                    <input
                                                                        {...getInputProps({
                                                                            placeholder: "Search"
                                                                        })}
                                                                    />
                                                                    {getAutocomplete()}
                                                                </div>
                                                                <img
                                                                    className="image-search"
                                                                    src="assets/images/SearchIcon.png"
                                                                    alt="SearchIcon"
                                                                >
                                                                </img>
                                                                <input
                                                                    {...getButtonProps({
                                                                        "value": "Go",
                                                                        'disabled': isLoading
                                                                    })}
                                                                />
                                                            </>
                                                        )}
                                                    />
                                                </>
                                            }
                                            sideContent={
                                                <div>
                                                    {wasSearched && (
                                                        <Sorting label={"Sort by"} sortOptions={SORT_OPTIONS} />
                                                    )}
                                                    <Facet
                                                        field="year"
                                                        label="Year"
                                                        filterType="any"
                                                    />
                                                    <Facet
                                                        field="main_speaker"
                                                        label="Main Speaker"
                                                        filterType="any"
                                                    // isFilterable={true}
                                                    />
                                                </div>
                                            }
                                            bodyContent={
                                                <>
                                                    {!isLoading && (
                                                        <Results
                                                            mapContextToProps={context => {
                                                                console.log(context)
                                                                return context;
                                                            }}
                                                            titleField="title"
                                                            urlField="report_url"
                                                            bodyField="body"
                                                            shouldTrackClickThrough={true}
                                                            resultView={ResultView}
                                                        />
                                                    )}
                                                    {isLoading && wasSearched && (
                                                        <>
                                                            <div className="row mt-5">
                                                                <div className="col-12 text-center">
                                                                    <img
                                                                        width='3%'
                                                                        height="auto"
                                                                        src={loading}
                                                                        alt="loading..."
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="row mt-2">
                                                                <div className="col-12 text-center">
                                                                    Loading...
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                </>
                                            }
                                            bodyHeader={
                                                <>
                                                    {!isLoading && wasSearched && (
                                                        <>
                                                            <PagingInfo />
                                                            <ResultsPerPage options={[5, 10, 20, 50, 100]} />
                                                        </>
                                                    )}
                                                </>
                                            }
                                            bodyFooter={
                                                !isLoading && (
                                                    <Paging />
                                                )
                                            }
                                        />
                                    </ErrorBoundary>
                                </>
                            );
                        }}
                    </WithSearch>
                </SearchProvider>
            </div>
        </>
    );
}
