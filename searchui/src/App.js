import React from "react";
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
  BooleanFacet,
  Layout,
  SingleSelectFacet,
  SingleLinksFacet
} from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

const connector = new AppSearchAPIConnector({
  searchKey: "search-676i5ayst4wsczgd7ig1o4y4",
  engineName: "elephant",
  endpointBase: "http://enterprise:3002",
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
  apiConnector: connector
};


export default function App() {
  return (
    <SearchProvider config={config}>
      <WithSearch mapContextToProps={({ wasSearched }) => ({ wasSearched })}>
        {({ wasSearched }) => {
          return (
            <div className="App">
              <ErrorBoundary>
                <Layout
                  header={
                    <SearchBox
                      autocompleteMinimumCharacters={3}
                      //searchAsYouType={true}
                      autocompleteResults={{
                        linkTarget: "_blank",
                        sectionTitle: "Results",
                        titleField: "title",
                        urlField: "report_url",
                        shouldTrackClickThrough: true,
                        clickThroughTags: ["test"]
                      }}
                      autocompleteSuggestions={true}
                      debounceLength={0}
                    />
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
                        isFilterable={true}
                      />
                    </div>
                  }
                  bodyContent={
                  <Results
                      titleField="title"
                      urlField="report_url"
                      shouldTrackClickThrough={true}
                    />
                  }
                  bodyHeader={
                    <React.Fragment>
                      {wasSearched && <PagingInfo />}
                      {wasSearched && <ResultsPerPage />}
                    </React.Fragment>
                  }
                  bodyFooter={<Paging />}
                />
              </ErrorBoundary>
            </div>
          );
        }}
      </WithSearch>
    </SearchProvider>
  );
}