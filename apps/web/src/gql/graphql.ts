/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  citext: { input: any; output: any; }
  date: { input: any; output: any; }
  inet: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  oid: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** History of auditable actions on audited tables, from audit.if_modified_func() */
export type Audit_Logged_Actions = {
  __typename?: 'audit_logged_actions';
  /** Action type; I = insert, D = delete, U = update, T = truncate */
  action: Scalars['String']['output'];
  /** Wall clock time at which audited event's trigger call occurred */
  action_tstamp_clk: Scalars['timestamptz']['output'];
  /** Statement start timestamp for tx in which audited event occurred */
  action_tstamp_stm: Scalars['timestamptz']['output'];
  /** Transaction start timestamp for tx in which audited event occurred */
  action_tstamp_tx: Scalars['timestamptz']['output'];
  /** Application name set when this audit event occurred. Can be changed in-session by client. */
  application_name?: Maybe<Scalars['String']['output']>;
  /** New values of fields changed by UPDATE. Null except for row-level UPDATE events. */
  changed_fields?: Maybe<Scalars['jsonb']['output']>;
  /** IP address of client that issued query. Null for unix domain socket. */
  client_addr?: Maybe<Scalars['inet']['output']>;
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Int']['output']>;
  /** Top-level query that caused this auditable event. May be more than one statement. */
  client_query?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for each auditable event */
  event_id: Scalars['bigint']['output'];
  hasura_org?: Maybe<Scalars['String']['output']>;
  hasura_user?: Maybe<Scalars['String']['output']>;
  /** Table OID. Changes with drop/create. Get with 'tablename'::regclass */
  relid: Scalars['oid']['output'];
  /** Record value. Null for statement-level trigger. For INSERT this is the new tuple. For DELETE and UPDATE it is the old tuple. */
  row_data?: Maybe<Scalars['jsonb']['output']>;
  /** Database schema audited table for this event is in */
  schema_name: Scalars['String']['output'];
  /** Login / session user whose statement caused the audited event */
  session_user_name?: Maybe<Scalars['String']['output']>;
  /** 't' if audit event is from an FOR EACH STATEMENT trigger, 'f' for FOR EACH ROW */
  statement_only: Scalars['Boolean']['output'];
  /** Non-schema-qualified table name of table event occured in */
  table_name: Scalars['String']['output'];
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['bigint']['output']>;
};


/** History of auditable actions on audited tables, from audit.if_modified_func() */
export type Audit_Logged_ActionsChanged_FieldsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** History of auditable actions on audited tables, from audit.if_modified_func() */
export type Audit_Logged_ActionsRow_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "audit.logged_actions" */
export type Audit_Logged_Actions_Aggregate = {
  __typename?: 'audit_logged_actions_aggregate';
  aggregate?: Maybe<Audit_Logged_Actions_Aggregate_Fields>;
  nodes: Array<Audit_Logged_Actions>;
};

/** aggregate fields of "audit.logged_actions" */
export type Audit_Logged_Actions_Aggregate_Fields = {
  __typename?: 'audit_logged_actions_aggregate_fields';
  avg?: Maybe<Audit_Logged_Actions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Audit_Logged_Actions_Max_Fields>;
  min?: Maybe<Audit_Logged_Actions_Min_Fields>;
  stddev?: Maybe<Audit_Logged_Actions_Stddev_Fields>;
  stddev_pop?: Maybe<Audit_Logged_Actions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Audit_Logged_Actions_Stddev_Samp_Fields>;
  sum?: Maybe<Audit_Logged_Actions_Sum_Fields>;
  var_pop?: Maybe<Audit_Logged_Actions_Var_Pop_Fields>;
  var_samp?: Maybe<Audit_Logged_Actions_Var_Samp_Fields>;
  variance?: Maybe<Audit_Logged_Actions_Variance_Fields>;
};


/** aggregate fields of "audit.logged_actions" */
export type Audit_Logged_Actions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Audit_Logged_Actions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Audit_Logged_Actions_Append_Input = {
  /** New values of fields changed by UPDATE. Null except for row-level UPDATE events. */
  changed_fields?: InputMaybe<Scalars['jsonb']['input']>;
  /** Record value. Null for statement-level trigger. For INSERT this is the new tuple. For DELETE and UPDATE it is the old tuple. */
  row_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Audit_Logged_Actions_Avg_Fields = {
  __typename?: 'audit_logged_actions_avg_fields';
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['Float']['output']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "audit.logged_actions". All fields are combined with a logical 'AND'. */
export type Audit_Logged_Actions_Bool_Exp = {
  _and?: InputMaybe<Array<Audit_Logged_Actions_Bool_Exp>>;
  _not?: InputMaybe<Audit_Logged_Actions_Bool_Exp>;
  _or?: InputMaybe<Array<Audit_Logged_Actions_Bool_Exp>>;
  action?: InputMaybe<String_Comparison_Exp>;
  action_tstamp_clk?: InputMaybe<Timestamptz_Comparison_Exp>;
  action_tstamp_stm?: InputMaybe<Timestamptz_Comparison_Exp>;
  action_tstamp_tx?: InputMaybe<Timestamptz_Comparison_Exp>;
  application_name?: InputMaybe<String_Comparison_Exp>;
  changed_fields?: InputMaybe<Jsonb_Comparison_Exp>;
  client_addr?: InputMaybe<Inet_Comparison_Exp>;
  client_port?: InputMaybe<Int_Comparison_Exp>;
  client_query?: InputMaybe<String_Comparison_Exp>;
  event_id?: InputMaybe<Bigint_Comparison_Exp>;
  hasura_org?: InputMaybe<String_Comparison_Exp>;
  hasura_user?: InputMaybe<String_Comparison_Exp>;
  relid?: InputMaybe<Oid_Comparison_Exp>;
  row_data?: InputMaybe<Jsonb_Comparison_Exp>;
  schema_name?: InputMaybe<String_Comparison_Exp>;
  session_user_name?: InputMaybe<String_Comparison_Exp>;
  statement_only?: InputMaybe<Boolean_Comparison_Exp>;
  table_name?: InputMaybe<String_Comparison_Exp>;
  transaction_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "audit.logged_actions" */
export enum Audit_Logged_Actions_Constraint {
  /** unique or primary key constraint on columns "event_id" */
  LoggedActionsPkey = 'logged_actions_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Audit_Logged_Actions_Delete_At_Path_Input = {
  /** New values of fields changed by UPDATE. Null except for row-level UPDATE events. */
  changed_fields?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Record value. Null for statement-level trigger. For INSERT this is the new tuple. For DELETE and UPDATE it is the old tuple. */
  row_data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Audit_Logged_Actions_Delete_Elem_Input = {
  /** New values of fields changed by UPDATE. Null except for row-level UPDATE events. */
  changed_fields?: InputMaybe<Scalars['Int']['input']>;
  /** Record value. Null for statement-level trigger. For INSERT this is the new tuple. For DELETE and UPDATE it is the old tuple. */
  row_data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Audit_Logged_Actions_Delete_Key_Input = {
  /** New values of fields changed by UPDATE. Null except for row-level UPDATE events. */
  changed_fields?: InputMaybe<Scalars['String']['input']>;
  /** Record value. Null for statement-level trigger. For INSERT this is the new tuple. For DELETE and UPDATE it is the old tuple. */
  row_data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "audit.logged_actions" */
export type Audit_Logged_Actions_Inc_Input = {
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: InputMaybe<Scalars['Int']['input']>;
  /** Unique identifier for each auditable event */
  event_id?: InputMaybe<Scalars['bigint']['input']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "audit.logged_actions" */
export type Audit_Logged_Actions_Insert_Input = {
  /** Action type; I = insert, D = delete, U = update, T = truncate */
  action?: InputMaybe<Scalars['String']['input']>;
  /** Wall clock time at which audited event's trigger call occurred */
  action_tstamp_clk?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Statement start timestamp for tx in which audited event occurred */
  action_tstamp_stm?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Transaction start timestamp for tx in which audited event occurred */
  action_tstamp_tx?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Application name set when this audit event occurred. Can be changed in-session by client. */
  application_name?: InputMaybe<Scalars['String']['input']>;
  /** New values of fields changed by UPDATE. Null except for row-level UPDATE events. */
  changed_fields?: InputMaybe<Scalars['jsonb']['input']>;
  /** IP address of client that issued query. Null for unix domain socket. */
  client_addr?: InputMaybe<Scalars['inet']['input']>;
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: InputMaybe<Scalars['Int']['input']>;
  /** Top-level query that caused this auditable event. May be more than one statement. */
  client_query?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for each auditable event */
  event_id?: InputMaybe<Scalars['bigint']['input']>;
  hasura_org?: InputMaybe<Scalars['String']['input']>;
  hasura_user?: InputMaybe<Scalars['String']['input']>;
  /** Table OID. Changes with drop/create. Get with 'tablename'::regclass */
  relid?: InputMaybe<Scalars['oid']['input']>;
  /** Record value. Null for statement-level trigger. For INSERT this is the new tuple. For DELETE and UPDATE it is the old tuple. */
  row_data?: InputMaybe<Scalars['jsonb']['input']>;
  /** Database schema audited table for this event is in */
  schema_name?: InputMaybe<Scalars['String']['input']>;
  /** Login / session user whose statement caused the audited event */
  session_user_name?: InputMaybe<Scalars['String']['input']>;
  /** 't' if audit event is from an FOR EACH STATEMENT trigger, 'f' for FOR EACH ROW */
  statement_only?: InputMaybe<Scalars['Boolean']['input']>;
  /** Non-schema-qualified table name of table event occured in */
  table_name?: InputMaybe<Scalars['String']['input']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Audit_Logged_Actions_Max_Fields = {
  __typename?: 'audit_logged_actions_max_fields';
  /** Action type; I = insert, D = delete, U = update, T = truncate */
  action?: Maybe<Scalars['String']['output']>;
  /** Wall clock time at which audited event's trigger call occurred */
  action_tstamp_clk?: Maybe<Scalars['timestamptz']['output']>;
  /** Statement start timestamp for tx in which audited event occurred */
  action_tstamp_stm?: Maybe<Scalars['timestamptz']['output']>;
  /** Transaction start timestamp for tx in which audited event occurred */
  action_tstamp_tx?: Maybe<Scalars['timestamptz']['output']>;
  /** Application name set when this audit event occurred. Can be changed in-session by client. */
  application_name?: Maybe<Scalars['String']['output']>;
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Int']['output']>;
  /** Top-level query that caused this auditable event. May be more than one statement. */
  client_query?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['bigint']['output']>;
  hasura_org?: Maybe<Scalars['String']['output']>;
  hasura_user?: Maybe<Scalars['String']['output']>;
  /** Database schema audited table for this event is in */
  schema_name?: Maybe<Scalars['String']['output']>;
  /** Login / session user whose statement caused the audited event */
  session_user_name?: Maybe<Scalars['String']['output']>;
  /** Non-schema-qualified table name of table event occured in */
  table_name?: Maybe<Scalars['String']['output']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Audit_Logged_Actions_Min_Fields = {
  __typename?: 'audit_logged_actions_min_fields';
  /** Action type; I = insert, D = delete, U = update, T = truncate */
  action?: Maybe<Scalars['String']['output']>;
  /** Wall clock time at which audited event's trigger call occurred */
  action_tstamp_clk?: Maybe<Scalars['timestamptz']['output']>;
  /** Statement start timestamp for tx in which audited event occurred */
  action_tstamp_stm?: Maybe<Scalars['timestamptz']['output']>;
  /** Transaction start timestamp for tx in which audited event occurred */
  action_tstamp_tx?: Maybe<Scalars['timestamptz']['output']>;
  /** Application name set when this audit event occurred. Can be changed in-session by client. */
  application_name?: Maybe<Scalars['String']['output']>;
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Int']['output']>;
  /** Top-level query that caused this auditable event. May be more than one statement. */
  client_query?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['bigint']['output']>;
  hasura_org?: Maybe<Scalars['String']['output']>;
  hasura_user?: Maybe<Scalars['String']['output']>;
  /** Database schema audited table for this event is in */
  schema_name?: Maybe<Scalars['String']['output']>;
  /** Login / session user whose statement caused the audited event */
  session_user_name?: Maybe<Scalars['String']['output']>;
  /** Non-schema-qualified table name of table event occured in */
  table_name?: Maybe<Scalars['String']['output']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "audit.logged_actions" */
export type Audit_Logged_Actions_Mutation_Response = {
  __typename?: 'audit_logged_actions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Audit_Logged_Actions>;
};

/** on_conflict condition type for table "audit.logged_actions" */
export type Audit_Logged_Actions_On_Conflict = {
  constraint: Audit_Logged_Actions_Constraint;
  update_columns?: Array<Audit_Logged_Actions_Update_Column>;
  where?: InputMaybe<Audit_Logged_Actions_Bool_Exp>;
};

/** Ordering options when selecting data from "audit.logged_actions". */
export type Audit_Logged_Actions_Order_By = {
  action?: InputMaybe<Order_By>;
  action_tstamp_clk?: InputMaybe<Order_By>;
  action_tstamp_stm?: InputMaybe<Order_By>;
  action_tstamp_tx?: InputMaybe<Order_By>;
  application_name?: InputMaybe<Order_By>;
  changed_fields?: InputMaybe<Order_By>;
  client_addr?: InputMaybe<Order_By>;
  client_port?: InputMaybe<Order_By>;
  client_query?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  hasura_org?: InputMaybe<Order_By>;
  hasura_user?: InputMaybe<Order_By>;
  relid?: InputMaybe<Order_By>;
  row_data?: InputMaybe<Order_By>;
  schema_name?: InputMaybe<Order_By>;
  session_user_name?: InputMaybe<Order_By>;
  statement_only?: InputMaybe<Order_By>;
  table_name?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: audit.logged_actions */
export type Audit_Logged_Actions_Pk_Columns_Input = {
  /** Unique identifier for each auditable event */
  event_id: Scalars['bigint']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Audit_Logged_Actions_Prepend_Input = {
  /** New values of fields changed by UPDATE. Null except for row-level UPDATE events. */
  changed_fields?: InputMaybe<Scalars['jsonb']['input']>;
  /** Record value. Null for statement-level trigger. For INSERT this is the new tuple. For DELETE and UPDATE it is the old tuple. */
  row_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "audit.logged_actions" */
export enum Audit_Logged_Actions_Select_Column {
  /** column name */
  Action = 'action',
  /** column name */
  ActionTstampClk = 'action_tstamp_clk',
  /** column name */
  ActionTstampStm = 'action_tstamp_stm',
  /** column name */
  ActionTstampTx = 'action_tstamp_tx',
  /** column name */
  ApplicationName = 'application_name',
  /** column name */
  ChangedFields = 'changed_fields',
  /** column name */
  ClientAddr = 'client_addr',
  /** column name */
  ClientPort = 'client_port',
  /** column name */
  ClientQuery = 'client_query',
  /** column name */
  EventId = 'event_id',
  /** column name */
  HasuraOrg = 'hasura_org',
  /** column name */
  HasuraUser = 'hasura_user',
  /** column name */
  Relid = 'relid',
  /** column name */
  RowData = 'row_data',
  /** column name */
  SchemaName = 'schema_name',
  /** column name */
  SessionUserName = 'session_user_name',
  /** column name */
  StatementOnly = 'statement_only',
  /** column name */
  TableName = 'table_name',
  /** column name */
  TransactionId = 'transaction_id'
}

/** input type for updating data in table "audit.logged_actions" */
export type Audit_Logged_Actions_Set_Input = {
  /** Action type; I = insert, D = delete, U = update, T = truncate */
  action?: InputMaybe<Scalars['String']['input']>;
  /** Wall clock time at which audited event's trigger call occurred */
  action_tstamp_clk?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Statement start timestamp for tx in which audited event occurred */
  action_tstamp_stm?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Transaction start timestamp for tx in which audited event occurred */
  action_tstamp_tx?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Application name set when this audit event occurred. Can be changed in-session by client. */
  application_name?: InputMaybe<Scalars['String']['input']>;
  /** New values of fields changed by UPDATE. Null except for row-level UPDATE events. */
  changed_fields?: InputMaybe<Scalars['jsonb']['input']>;
  /** IP address of client that issued query. Null for unix domain socket. */
  client_addr?: InputMaybe<Scalars['inet']['input']>;
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: InputMaybe<Scalars['Int']['input']>;
  /** Top-level query that caused this auditable event. May be more than one statement. */
  client_query?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for each auditable event */
  event_id?: InputMaybe<Scalars['bigint']['input']>;
  hasura_org?: InputMaybe<Scalars['String']['input']>;
  hasura_user?: InputMaybe<Scalars['String']['input']>;
  /** Table OID. Changes with drop/create. Get with 'tablename'::regclass */
  relid?: InputMaybe<Scalars['oid']['input']>;
  /** Record value. Null for statement-level trigger. For INSERT this is the new tuple. For DELETE and UPDATE it is the old tuple. */
  row_data?: InputMaybe<Scalars['jsonb']['input']>;
  /** Database schema audited table for this event is in */
  schema_name?: InputMaybe<Scalars['String']['input']>;
  /** Login / session user whose statement caused the audited event */
  session_user_name?: InputMaybe<Scalars['String']['input']>;
  /** 't' if audit event is from an FOR EACH STATEMENT trigger, 'f' for FOR EACH ROW */
  statement_only?: InputMaybe<Scalars['Boolean']['input']>;
  /** Non-schema-qualified table name of table event occured in */
  table_name?: InputMaybe<Scalars['String']['input']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Audit_Logged_Actions_Stddev_Fields = {
  __typename?: 'audit_logged_actions_stddev_fields';
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['Float']['output']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Audit_Logged_Actions_Stddev_Pop_Fields = {
  __typename?: 'audit_logged_actions_stddev_pop_fields';
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['Float']['output']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Audit_Logged_Actions_Stddev_Samp_Fields = {
  __typename?: 'audit_logged_actions_stddev_samp_fields';
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['Float']['output']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "audit_logged_actions" */
export type Audit_Logged_Actions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Audit_Logged_Actions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Audit_Logged_Actions_Stream_Cursor_Value_Input = {
  /** Action type; I = insert, D = delete, U = update, T = truncate */
  action?: InputMaybe<Scalars['String']['input']>;
  /** Wall clock time at which audited event's trigger call occurred */
  action_tstamp_clk?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Statement start timestamp for tx in which audited event occurred */
  action_tstamp_stm?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Transaction start timestamp for tx in which audited event occurred */
  action_tstamp_tx?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Application name set when this audit event occurred. Can be changed in-session by client. */
  application_name?: InputMaybe<Scalars['String']['input']>;
  /** New values of fields changed by UPDATE. Null except for row-level UPDATE events. */
  changed_fields?: InputMaybe<Scalars['jsonb']['input']>;
  /** IP address of client that issued query. Null for unix domain socket. */
  client_addr?: InputMaybe<Scalars['inet']['input']>;
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: InputMaybe<Scalars['Int']['input']>;
  /** Top-level query that caused this auditable event. May be more than one statement. */
  client_query?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for each auditable event */
  event_id?: InputMaybe<Scalars['bigint']['input']>;
  hasura_org?: InputMaybe<Scalars['String']['input']>;
  hasura_user?: InputMaybe<Scalars['String']['input']>;
  /** Table OID. Changes with drop/create. Get with 'tablename'::regclass */
  relid?: InputMaybe<Scalars['oid']['input']>;
  /** Record value. Null for statement-level trigger. For INSERT this is the new tuple. For DELETE and UPDATE it is the old tuple. */
  row_data?: InputMaybe<Scalars['jsonb']['input']>;
  /** Database schema audited table for this event is in */
  schema_name?: InputMaybe<Scalars['String']['input']>;
  /** Login / session user whose statement caused the audited event */
  session_user_name?: InputMaybe<Scalars['String']['input']>;
  /** 't' if audit event is from an FOR EACH STATEMENT trigger, 'f' for FOR EACH ROW */
  statement_only?: InputMaybe<Scalars['Boolean']['input']>;
  /** Non-schema-qualified table name of table event occured in */
  table_name?: InputMaybe<Scalars['String']['input']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Audit_Logged_Actions_Sum_Fields = {
  __typename?: 'audit_logged_actions_sum_fields';
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Int']['output']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['bigint']['output']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "audit.logged_actions" */
export enum Audit_Logged_Actions_Update_Column {
  /** column name */
  Action = 'action',
  /** column name */
  ActionTstampClk = 'action_tstamp_clk',
  /** column name */
  ActionTstampStm = 'action_tstamp_stm',
  /** column name */
  ActionTstampTx = 'action_tstamp_tx',
  /** column name */
  ApplicationName = 'application_name',
  /** column name */
  ChangedFields = 'changed_fields',
  /** column name */
  ClientAddr = 'client_addr',
  /** column name */
  ClientPort = 'client_port',
  /** column name */
  ClientQuery = 'client_query',
  /** column name */
  EventId = 'event_id',
  /** column name */
  HasuraOrg = 'hasura_org',
  /** column name */
  HasuraUser = 'hasura_user',
  /** column name */
  Relid = 'relid',
  /** column name */
  RowData = 'row_data',
  /** column name */
  SchemaName = 'schema_name',
  /** column name */
  SessionUserName = 'session_user_name',
  /** column name */
  StatementOnly = 'statement_only',
  /** column name */
  TableName = 'table_name',
  /** column name */
  TransactionId = 'transaction_id'
}

export type Audit_Logged_Actions_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Audit_Logged_Actions_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Audit_Logged_Actions_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Audit_Logged_Actions_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Audit_Logged_Actions_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Audit_Logged_Actions_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Audit_Logged_Actions_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Audit_Logged_Actions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Audit_Logged_Actions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Audit_Logged_Actions_Var_Pop_Fields = {
  __typename?: 'audit_logged_actions_var_pop_fields';
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['Float']['output']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Audit_Logged_Actions_Var_Samp_Fields = {
  __typename?: 'audit_logged_actions_var_samp_fields';
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['Float']['output']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Audit_Logged_Actions_Variance_Fields = {
  __typename?: 'audit_logged_actions_variance_fields';
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['Float']['output']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** https://app.shortcut.com/artis-works/story/3391/ability-to-see-an-audit-history-in-umi-and-rollback-changes */
export type Audit_Umi_Actions = {
  __typename?: 'audit_umi_actions';
  action_name: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  event_data: Scalars['jsonb']['output'];
  id: Scalars['Int']['output'];
  umi_user_id: Scalars['String']['output'];
};


/** https://app.shortcut.com/artis-works/story/3391/ability-to-see-an-audit-history-in-umi-and-rollback-changes */
export type Audit_Umi_ActionsEvent_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "audit.umi_actions" */
export type Audit_Umi_Actions_Aggregate = {
  __typename?: 'audit_umi_actions_aggregate';
  aggregate?: Maybe<Audit_Umi_Actions_Aggregate_Fields>;
  nodes: Array<Audit_Umi_Actions>;
};

/** aggregate fields of "audit.umi_actions" */
export type Audit_Umi_Actions_Aggregate_Fields = {
  __typename?: 'audit_umi_actions_aggregate_fields';
  avg?: Maybe<Audit_Umi_Actions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Audit_Umi_Actions_Max_Fields>;
  min?: Maybe<Audit_Umi_Actions_Min_Fields>;
  stddev?: Maybe<Audit_Umi_Actions_Stddev_Fields>;
  stddev_pop?: Maybe<Audit_Umi_Actions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Audit_Umi_Actions_Stddev_Samp_Fields>;
  sum?: Maybe<Audit_Umi_Actions_Sum_Fields>;
  var_pop?: Maybe<Audit_Umi_Actions_Var_Pop_Fields>;
  var_samp?: Maybe<Audit_Umi_Actions_Var_Samp_Fields>;
  variance?: Maybe<Audit_Umi_Actions_Variance_Fields>;
};


/** aggregate fields of "audit.umi_actions" */
export type Audit_Umi_Actions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Audit_Umi_Actions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Audit_Umi_Actions_Append_Input = {
  event_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Audit_Umi_Actions_Avg_Fields = {
  __typename?: 'audit_umi_actions_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "audit.umi_actions". All fields are combined with a logical 'AND'. */
export type Audit_Umi_Actions_Bool_Exp = {
  _and?: InputMaybe<Array<Audit_Umi_Actions_Bool_Exp>>;
  _not?: InputMaybe<Audit_Umi_Actions_Bool_Exp>;
  _or?: InputMaybe<Array<Audit_Umi_Actions_Bool_Exp>>;
  action_name?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  event_data?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  umi_user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "audit.umi_actions" */
export enum Audit_Umi_Actions_Constraint {
  /** unique or primary key constraint on columns "id" */
  UmiActionsPkey = 'umi_actions_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Audit_Umi_Actions_Delete_At_Path_Input = {
  event_data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Audit_Umi_Actions_Delete_Elem_Input = {
  event_data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Audit_Umi_Actions_Delete_Key_Input = {
  event_data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "audit.umi_actions" */
export type Audit_Umi_Actions_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "audit.umi_actions" */
export type Audit_Umi_Actions_Insert_Input = {
  action_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  event_data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  umi_user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Audit_Umi_Actions_Max_Fields = {
  __typename?: 'audit_umi_actions_max_fields';
  action_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  umi_user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Audit_Umi_Actions_Min_Fields = {
  __typename?: 'audit_umi_actions_min_fields';
  action_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  umi_user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "audit.umi_actions" */
export type Audit_Umi_Actions_Mutation_Response = {
  __typename?: 'audit_umi_actions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Audit_Umi_Actions>;
};

/** on_conflict condition type for table "audit.umi_actions" */
export type Audit_Umi_Actions_On_Conflict = {
  constraint: Audit_Umi_Actions_Constraint;
  update_columns?: Array<Audit_Umi_Actions_Update_Column>;
  where?: InputMaybe<Audit_Umi_Actions_Bool_Exp>;
};

/** Ordering options when selecting data from "audit.umi_actions". */
export type Audit_Umi_Actions_Order_By = {
  action_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  event_data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  umi_user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: audit.umi_actions */
export type Audit_Umi_Actions_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Audit_Umi_Actions_Prepend_Input = {
  event_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "audit.umi_actions" */
export enum Audit_Umi_Actions_Select_Column {
  /** column name */
  ActionName = 'action_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventData = 'event_data',
  /** column name */
  Id = 'id',
  /** column name */
  UmiUserId = 'umi_user_id'
}

/** input type for updating data in table "audit.umi_actions" */
export type Audit_Umi_Actions_Set_Input = {
  action_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  event_data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  umi_user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Audit_Umi_Actions_Stddev_Fields = {
  __typename?: 'audit_umi_actions_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Audit_Umi_Actions_Stddev_Pop_Fields = {
  __typename?: 'audit_umi_actions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Audit_Umi_Actions_Stddev_Samp_Fields = {
  __typename?: 'audit_umi_actions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "audit_umi_actions" */
export type Audit_Umi_Actions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Audit_Umi_Actions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Audit_Umi_Actions_Stream_Cursor_Value_Input = {
  action_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  event_data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  umi_user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Audit_Umi_Actions_Sum_Fields = {
  __typename?: 'audit_umi_actions_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "audit.umi_actions" */
export enum Audit_Umi_Actions_Update_Column {
  /** column name */
  ActionName = 'action_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventData = 'event_data',
  /** column name */
  Id = 'id',
  /** column name */
  UmiUserId = 'umi_user_id'
}

export type Audit_Umi_Actions_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Audit_Umi_Actions_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Audit_Umi_Actions_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Audit_Umi_Actions_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Audit_Umi_Actions_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Audit_Umi_Actions_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Audit_Umi_Actions_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Audit_Umi_Actions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Audit_Umi_Actions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Audit_Umi_Actions_Var_Pop_Fields = {
  __typename?: 'audit_umi_actions_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Audit_Umi_Actions_Var_Samp_Fields = {
  __typename?: 'audit_umi_actions_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Audit_Umi_Actions_Variance_Fields = {
  __typename?: 'audit_umi_actions_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']['input']>;
  _gt?: InputMaybe<Scalars['citext']['input']>;
  _gte?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']['input']>;
  _in?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']['input']>;
  _lt?: InputMaybe<Scalars['citext']['input']>;
  _lte?: InputMaybe<Scalars['citext']['input']>;
  _neq?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']['input']>;
  _nin?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']['input']>;
};

/** columns and relationships of "commodity_group" */
export type Commodity_Group = {
  __typename?: 'commodity_group';
  /** An object relationship */
  commodity_parent_group: Commodity_Parent_Group;
  id: Scalars['Int']['output'];
  parent: Scalars['Int']['output'];
  /** An array relationship */
  product_overrides: Array<Product_Overrides>;
  /** An aggregate relationship */
  product_overrides_aggregate: Product_Overrides_Aggregate;
  /** An array relationship */
  products: Array<Product>;
  /** An aggregate relationship */
  products_aggregate: Product_Aggregate;
  value?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "commodity_group" */
export type Commodity_GroupProduct_OverridesArgs = {
  distinct_on?: InputMaybe<Array<Product_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Overrides_Order_By>>;
  where?: InputMaybe<Product_Overrides_Bool_Exp>;
};


/** columns and relationships of "commodity_group" */
export type Commodity_GroupProduct_Overrides_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Overrides_Order_By>>;
  where?: InputMaybe<Product_Overrides_Bool_Exp>;
};


/** columns and relationships of "commodity_group" */
export type Commodity_GroupProductsArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


/** columns and relationships of "commodity_group" */
export type Commodity_GroupProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** aggregated selection of "commodity_group" */
export type Commodity_Group_Aggregate = {
  __typename?: 'commodity_group_aggregate';
  aggregate?: Maybe<Commodity_Group_Aggregate_Fields>;
  nodes: Array<Commodity_Group>;
};

export type Commodity_Group_Aggregate_Bool_Exp = {
  count?: InputMaybe<Commodity_Group_Aggregate_Bool_Exp_Count>;
};

export type Commodity_Group_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Commodity_Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Commodity_Group_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "commodity_group" */
export type Commodity_Group_Aggregate_Fields = {
  __typename?: 'commodity_group_aggregate_fields';
  avg?: Maybe<Commodity_Group_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Commodity_Group_Max_Fields>;
  min?: Maybe<Commodity_Group_Min_Fields>;
  stddev?: Maybe<Commodity_Group_Stddev_Fields>;
  stddev_pop?: Maybe<Commodity_Group_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Commodity_Group_Stddev_Samp_Fields>;
  sum?: Maybe<Commodity_Group_Sum_Fields>;
  var_pop?: Maybe<Commodity_Group_Var_Pop_Fields>;
  var_samp?: Maybe<Commodity_Group_Var_Samp_Fields>;
  variance?: Maybe<Commodity_Group_Variance_Fields>;
};


/** aggregate fields of "commodity_group" */
export type Commodity_Group_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Commodity_Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "commodity_group" */
export type Commodity_Group_Aggregate_Order_By = {
  avg?: InputMaybe<Commodity_Group_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Commodity_Group_Max_Order_By>;
  min?: InputMaybe<Commodity_Group_Min_Order_By>;
  stddev?: InputMaybe<Commodity_Group_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Commodity_Group_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Commodity_Group_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Commodity_Group_Sum_Order_By>;
  var_pop?: InputMaybe<Commodity_Group_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Commodity_Group_Var_Samp_Order_By>;
  variance?: InputMaybe<Commodity_Group_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "commodity_group" */
export type Commodity_Group_Arr_Rel_Insert_Input = {
  data: Array<Commodity_Group_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Commodity_Group_On_Conflict>;
};

/** aggregate avg on columns */
export type Commodity_Group_Avg_Fields = {
  __typename?: 'commodity_group_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parent?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "commodity_group" */
export type Commodity_Group_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  parent?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "commodity_group". All fields are combined with a logical 'AND'. */
export type Commodity_Group_Bool_Exp = {
  _and?: InputMaybe<Array<Commodity_Group_Bool_Exp>>;
  _not?: InputMaybe<Commodity_Group_Bool_Exp>;
  _or?: InputMaybe<Array<Commodity_Group_Bool_Exp>>;
  commodity_parent_group?: InputMaybe<Commodity_Parent_Group_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  parent?: InputMaybe<Int_Comparison_Exp>;
  product_overrides?: InputMaybe<Product_Overrides_Bool_Exp>;
  product_overrides_aggregate?: InputMaybe<Product_Overrides_Aggregate_Bool_Exp>;
  products?: InputMaybe<Product_Bool_Exp>;
  products_aggregate?: InputMaybe<Product_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "commodity_group" */
export enum Commodity_Group_Constraint {
  /** unique or primary key constraint on columns "parent", "value" */
  CommodityGroupParentValueKey = 'commodity_group_parent_value_key',
  /** unique or primary key constraint on columns "id" */
  CommodityGroupPkey = 'commodity_group_pkey'
}

/** input type for incrementing numeric columns in table "commodity_group" */
export type Commodity_Group_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "commodity_group" */
export type Commodity_Group_Insert_Input = {
  commodity_parent_group?: InputMaybe<Commodity_Parent_Group_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  product_overrides?: InputMaybe<Product_Overrides_Arr_Rel_Insert_Input>;
  products?: InputMaybe<Product_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Commodity_Group_Max_Fields = {
  __typename?: 'commodity_group_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "commodity_group" */
export type Commodity_Group_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  parent?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Commodity_Group_Min_Fields = {
  __typename?: 'commodity_group_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "commodity_group" */
export type Commodity_Group_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  parent?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "commodity_group" */
export type Commodity_Group_Mutation_Response = {
  __typename?: 'commodity_group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Commodity_Group>;
};

/** input type for inserting object relation for remote table "commodity_group" */
export type Commodity_Group_Obj_Rel_Insert_Input = {
  data: Commodity_Group_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Commodity_Group_On_Conflict>;
};

/** on_conflict condition type for table "commodity_group" */
export type Commodity_Group_On_Conflict = {
  constraint: Commodity_Group_Constraint;
  update_columns?: Array<Commodity_Group_Update_Column>;
  where?: InputMaybe<Commodity_Group_Bool_Exp>;
};

/** Ordering options when selecting data from "commodity_group". */
export type Commodity_Group_Order_By = {
  commodity_parent_group?: InputMaybe<Commodity_Parent_Group_Order_By>;
  id?: InputMaybe<Order_By>;
  parent?: InputMaybe<Order_By>;
  product_overrides_aggregate?: InputMaybe<Product_Overrides_Aggregate_Order_By>;
  products_aggregate?: InputMaybe<Product_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: commodity_group */
export type Commodity_Group_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "commodity_group" */
export enum Commodity_Group_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Parent = 'parent',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "commodity_group" */
export type Commodity_Group_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Commodity_Group_Stddev_Fields = {
  __typename?: 'commodity_group_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parent?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "commodity_group" */
export type Commodity_Group_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  parent?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Commodity_Group_Stddev_Pop_Fields = {
  __typename?: 'commodity_group_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parent?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "commodity_group" */
export type Commodity_Group_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  parent?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Commodity_Group_Stddev_Samp_Fields = {
  __typename?: 'commodity_group_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parent?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "commodity_group" */
export type Commodity_Group_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  parent?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "commodity_group" */
export type Commodity_Group_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Commodity_Group_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Commodity_Group_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Commodity_Group_Sum_Fields = {
  __typename?: 'commodity_group_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "commodity_group" */
export type Commodity_Group_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  parent?: InputMaybe<Order_By>;
};

/** update columns of table "commodity_group" */
export enum Commodity_Group_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Parent = 'parent',
  /** column name */
  Value = 'value'
}

export type Commodity_Group_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Commodity_Group_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Commodity_Group_Set_Input>;
  /** filter the rows which have to be updated */
  where: Commodity_Group_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Commodity_Group_Var_Pop_Fields = {
  __typename?: 'commodity_group_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parent?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "commodity_group" */
export type Commodity_Group_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  parent?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Commodity_Group_Var_Samp_Fields = {
  __typename?: 'commodity_group_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parent?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "commodity_group" */
export type Commodity_Group_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  parent?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Commodity_Group_Variance_Fields = {
  __typename?: 'commodity_group_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parent?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "commodity_group" */
export type Commodity_Group_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  parent?: InputMaybe<Order_By>;
};

/** columns and relationships of "commodity_parent_group" */
export type Commodity_Parent_Group = {
  __typename?: 'commodity_parent_group';
  /** An array relationship */
  commodity_groups: Array<Commodity_Group>;
  /** An aggregate relationship */
  commodity_groups_aggregate: Commodity_Group_Aggregate;
  id: Scalars['Int']['output'];
  organisation?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  organisationByOrganisation?: Maybe<Organisation>;
  value?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "commodity_parent_group" */
export type Commodity_Parent_GroupCommodity_GroupsArgs = {
  distinct_on?: InputMaybe<Array<Commodity_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Commodity_Group_Order_By>>;
  where?: InputMaybe<Commodity_Group_Bool_Exp>;
};


/** columns and relationships of "commodity_parent_group" */
export type Commodity_Parent_GroupCommodity_Groups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Commodity_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Commodity_Group_Order_By>>;
  where?: InputMaybe<Commodity_Group_Bool_Exp>;
};

/** aggregated selection of "commodity_parent_group" */
export type Commodity_Parent_Group_Aggregate = {
  __typename?: 'commodity_parent_group_aggregate';
  aggregate?: Maybe<Commodity_Parent_Group_Aggregate_Fields>;
  nodes: Array<Commodity_Parent_Group>;
};

export type Commodity_Parent_Group_Aggregate_Bool_Exp = {
  count?: InputMaybe<Commodity_Parent_Group_Aggregate_Bool_Exp_Count>;
};

export type Commodity_Parent_Group_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Commodity_Parent_Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Commodity_Parent_Group_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "commodity_parent_group" */
export type Commodity_Parent_Group_Aggregate_Fields = {
  __typename?: 'commodity_parent_group_aggregate_fields';
  avg?: Maybe<Commodity_Parent_Group_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Commodity_Parent_Group_Max_Fields>;
  min?: Maybe<Commodity_Parent_Group_Min_Fields>;
  stddev?: Maybe<Commodity_Parent_Group_Stddev_Fields>;
  stddev_pop?: Maybe<Commodity_Parent_Group_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Commodity_Parent_Group_Stddev_Samp_Fields>;
  sum?: Maybe<Commodity_Parent_Group_Sum_Fields>;
  var_pop?: Maybe<Commodity_Parent_Group_Var_Pop_Fields>;
  var_samp?: Maybe<Commodity_Parent_Group_Var_Samp_Fields>;
  variance?: Maybe<Commodity_Parent_Group_Variance_Fields>;
};


/** aggregate fields of "commodity_parent_group" */
export type Commodity_Parent_Group_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Commodity_Parent_Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "commodity_parent_group" */
export type Commodity_Parent_Group_Aggregate_Order_By = {
  avg?: InputMaybe<Commodity_Parent_Group_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Commodity_Parent_Group_Max_Order_By>;
  min?: InputMaybe<Commodity_Parent_Group_Min_Order_By>;
  stddev?: InputMaybe<Commodity_Parent_Group_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Commodity_Parent_Group_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Commodity_Parent_Group_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Commodity_Parent_Group_Sum_Order_By>;
  var_pop?: InputMaybe<Commodity_Parent_Group_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Commodity_Parent_Group_Var_Samp_Order_By>;
  variance?: InputMaybe<Commodity_Parent_Group_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "commodity_parent_group" */
export type Commodity_Parent_Group_Arr_Rel_Insert_Input = {
  data: Array<Commodity_Parent_Group_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Commodity_Parent_Group_On_Conflict>;
};

/** aggregate avg on columns */
export type Commodity_Parent_Group_Avg_Fields = {
  __typename?: 'commodity_parent_group_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "commodity_parent_group" */
export type Commodity_Parent_Group_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "commodity_parent_group". All fields are combined with a logical 'AND'. */
export type Commodity_Parent_Group_Bool_Exp = {
  _and?: InputMaybe<Array<Commodity_Parent_Group_Bool_Exp>>;
  _not?: InputMaybe<Commodity_Parent_Group_Bool_Exp>;
  _or?: InputMaybe<Array<Commodity_Parent_Group_Bool_Exp>>;
  commodity_groups?: InputMaybe<Commodity_Group_Bool_Exp>;
  commodity_groups_aggregate?: InputMaybe<Commodity_Group_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  organisation?: InputMaybe<Int_Comparison_Exp>;
  organisationByOrganisation?: InputMaybe<Organisation_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "commodity_parent_group" */
export enum Commodity_Parent_Group_Constraint {
  /** unique or primary key constraint on columns "value", "organisation" */
  CommodityParentGroupOrganisationValueKey = 'commodity_parent_group_organisation_value_key',
  /** unique or primary key constraint on columns "id" */
  CommodityParentGroupPkey = 'commodity_parent_group_pkey'
}

/** input type for incrementing numeric columns in table "commodity_parent_group" */
export type Commodity_Parent_Group_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "commodity_parent_group" */
export type Commodity_Parent_Group_Insert_Input = {
  commodity_groups?: InputMaybe<Commodity_Group_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
  organisationByOrganisation?: InputMaybe<Organisation_Obj_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Commodity_Parent_Group_Max_Fields = {
  __typename?: 'commodity_parent_group_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "commodity_parent_group" */
export type Commodity_Parent_Group_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Commodity_Parent_Group_Min_Fields = {
  __typename?: 'commodity_parent_group_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "commodity_parent_group" */
export type Commodity_Parent_Group_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "commodity_parent_group" */
export type Commodity_Parent_Group_Mutation_Response = {
  __typename?: 'commodity_parent_group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Commodity_Parent_Group>;
};

/** input type for inserting object relation for remote table "commodity_parent_group" */
export type Commodity_Parent_Group_Obj_Rel_Insert_Input = {
  data: Commodity_Parent_Group_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Commodity_Parent_Group_On_Conflict>;
};

/** on_conflict condition type for table "commodity_parent_group" */
export type Commodity_Parent_Group_On_Conflict = {
  constraint: Commodity_Parent_Group_Constraint;
  update_columns?: Array<Commodity_Parent_Group_Update_Column>;
  where?: InputMaybe<Commodity_Parent_Group_Bool_Exp>;
};

/** Ordering options when selecting data from "commodity_parent_group". */
export type Commodity_Parent_Group_Order_By = {
  commodity_groups_aggregate?: InputMaybe<Commodity_Group_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  organisationByOrganisation?: InputMaybe<Organisation_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: commodity_parent_group */
export type Commodity_Parent_Group_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "commodity_parent_group" */
export enum Commodity_Parent_Group_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Organisation = 'organisation',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "commodity_parent_group" */
export type Commodity_Parent_Group_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Commodity_Parent_Group_Stddev_Fields = {
  __typename?: 'commodity_parent_group_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "commodity_parent_group" */
export type Commodity_Parent_Group_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Commodity_Parent_Group_Stddev_Pop_Fields = {
  __typename?: 'commodity_parent_group_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "commodity_parent_group" */
export type Commodity_Parent_Group_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Commodity_Parent_Group_Stddev_Samp_Fields = {
  __typename?: 'commodity_parent_group_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "commodity_parent_group" */
export type Commodity_Parent_Group_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "commodity_parent_group" */
export type Commodity_Parent_Group_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Commodity_Parent_Group_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Commodity_Parent_Group_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Commodity_Parent_Group_Sum_Fields = {
  __typename?: 'commodity_parent_group_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "commodity_parent_group" */
export type Commodity_Parent_Group_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** update columns of table "commodity_parent_group" */
export enum Commodity_Parent_Group_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Organisation = 'organisation',
  /** column name */
  Value = 'value'
}

export type Commodity_Parent_Group_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Commodity_Parent_Group_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Commodity_Parent_Group_Set_Input>;
  /** filter the rows which have to be updated */
  where: Commodity_Parent_Group_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Commodity_Parent_Group_Var_Pop_Fields = {
  __typename?: 'commodity_parent_group_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "commodity_parent_group" */
export type Commodity_Parent_Group_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Commodity_Parent_Group_Var_Samp_Fields = {
  __typename?: 'commodity_parent_group_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "commodity_parent_group" */
export type Commodity_Parent_Group_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Commodity_Parent_Group_Variance_Fields = {
  __typename?: 'commodity_parent_group_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "commodity_parent_group" */
export type Commodity_Parent_Group_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "eod" */
export type Eod = {
  __typename?: 'eod';
  id: Scalars['Int']['output'];
  source: Scalars['Int']['output'];
  /** An object relationship */
  sourceBySource: Source;
};

/** aggregated selection of "eod" */
export type Eod_Aggregate = {
  __typename?: 'eod_aggregate';
  aggregate?: Maybe<Eod_Aggregate_Fields>;
  nodes: Array<Eod>;
};

export type Eod_Aggregate_Bool_Exp = {
  count?: InputMaybe<Eod_Aggregate_Bool_Exp_Count>;
};

export type Eod_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Eod_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Eod_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "eod" */
export type Eod_Aggregate_Fields = {
  __typename?: 'eod_aggregate_fields';
  avg?: Maybe<Eod_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Eod_Max_Fields>;
  min?: Maybe<Eod_Min_Fields>;
  stddev?: Maybe<Eod_Stddev_Fields>;
  stddev_pop?: Maybe<Eod_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Eod_Stddev_Samp_Fields>;
  sum?: Maybe<Eod_Sum_Fields>;
  var_pop?: Maybe<Eod_Var_Pop_Fields>;
  var_samp?: Maybe<Eod_Var_Samp_Fields>;
  variance?: Maybe<Eod_Variance_Fields>;
};


/** aggregate fields of "eod" */
export type Eod_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Eod_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "eod" */
export type Eod_Aggregate_Order_By = {
  avg?: InputMaybe<Eod_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Eod_Max_Order_By>;
  min?: InputMaybe<Eod_Min_Order_By>;
  stddev?: InputMaybe<Eod_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Eod_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Eod_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Eod_Sum_Order_By>;
  var_pop?: InputMaybe<Eod_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Eod_Var_Samp_Order_By>;
  variance?: InputMaybe<Eod_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "eod" */
export type Eod_Arr_Rel_Insert_Input = {
  data: Array<Eod_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Eod_On_Conflict>;
};

/** aggregate avg on columns */
export type Eod_Avg_Fields = {
  __typename?: 'eod_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "eod" */
export type Eod_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "eod". All fields are combined with a logical 'AND'. */
export type Eod_Bool_Exp = {
  _and?: InputMaybe<Array<Eod_Bool_Exp>>;
  _not?: InputMaybe<Eod_Bool_Exp>;
  _or?: InputMaybe<Array<Eod_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  source?: InputMaybe<Int_Comparison_Exp>;
  sourceBySource?: InputMaybe<Source_Bool_Exp>;
};

/** unique or primary key constraints on table "eod" */
export enum Eod_Constraint {
  /** unique or primary key constraint on columns "id" */
  EodPkey = 'eod_pkey',
  /** unique or primary key constraint on columns "source" */
  EodSourceKey = 'eod_source_key'
}

/** columns and relationships of "eod_entry" */
export type Eod_Entry = {
  __typename?: 'eod_entry';
  evaluation_date: Scalars['date']['output'];
  id: Scalars['bigint']['output'];
  month: Scalars['date']['output'];
  ppend?: Maybe<Scalars['date']['output']>;
  ppstart?: Maybe<Scalars['date']['output']>;
  product: Scalars['uuid']['output'];
  /** An object relationship */
  productByProduct: Product;
  relative_period?: Maybe<Scalars['Int']['output']>;
  value: Scalars['numeric']['output'];
};

/** aggregated selection of "eod_entry" */
export type Eod_Entry_Aggregate = {
  __typename?: 'eod_entry_aggregate';
  aggregate?: Maybe<Eod_Entry_Aggregate_Fields>;
  nodes: Array<Eod_Entry>;
};

export type Eod_Entry_Aggregate_Bool_Exp = {
  count?: InputMaybe<Eod_Entry_Aggregate_Bool_Exp_Count>;
};

export type Eod_Entry_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Eod_Entry_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Eod_Entry_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "eod_entry" */
export type Eod_Entry_Aggregate_Fields = {
  __typename?: 'eod_entry_aggregate_fields';
  avg?: Maybe<Eod_Entry_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Eod_Entry_Max_Fields>;
  min?: Maybe<Eod_Entry_Min_Fields>;
  stddev?: Maybe<Eod_Entry_Stddev_Fields>;
  stddev_pop?: Maybe<Eod_Entry_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Eod_Entry_Stddev_Samp_Fields>;
  sum?: Maybe<Eod_Entry_Sum_Fields>;
  var_pop?: Maybe<Eod_Entry_Var_Pop_Fields>;
  var_samp?: Maybe<Eod_Entry_Var_Samp_Fields>;
  variance?: Maybe<Eod_Entry_Variance_Fields>;
};


/** aggregate fields of "eod_entry" */
export type Eod_Entry_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Eod_Entry_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "eod_entry" */
export type Eod_Entry_Aggregate_Order_By = {
  avg?: InputMaybe<Eod_Entry_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Eod_Entry_Max_Order_By>;
  min?: InputMaybe<Eod_Entry_Min_Order_By>;
  stddev?: InputMaybe<Eod_Entry_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Eod_Entry_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Eod_Entry_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Eod_Entry_Sum_Order_By>;
  var_pop?: InputMaybe<Eod_Entry_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Eod_Entry_Var_Samp_Order_By>;
  variance?: InputMaybe<Eod_Entry_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "eod_entry" */
export type Eod_Entry_Arr_Rel_Insert_Input = {
  data: Array<Eod_Entry_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Eod_Entry_On_Conflict>;
};

/** aggregate avg on columns */
export type Eod_Entry_Avg_Fields = {
  __typename?: 'eod_entry_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_period?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "eod_entry" */
export type Eod_Entry_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_period?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "eod_entry". All fields are combined with a logical 'AND'. */
export type Eod_Entry_Bool_Exp = {
  _and?: InputMaybe<Array<Eod_Entry_Bool_Exp>>;
  _not?: InputMaybe<Eod_Entry_Bool_Exp>;
  _or?: InputMaybe<Array<Eod_Entry_Bool_Exp>>;
  evaluation_date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  month?: InputMaybe<Date_Comparison_Exp>;
  ppend?: InputMaybe<Date_Comparison_Exp>;
  ppstart?: InputMaybe<Date_Comparison_Exp>;
  product?: InputMaybe<Uuid_Comparison_Exp>;
  productByProduct?: InputMaybe<Product_Bool_Exp>;
  relative_period?: InputMaybe<Int_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "eod_entry" */
export enum Eod_Entry_Constraint {
  /** unique or primary key constraint on columns "id" */
  EodEntryIdKey = 'eod_entry_id_key',
  /** unique or primary key constraint on columns "evaluation_date", "product", "month" */
  EodEntryPkey = 'eod_entry_pkey'
}

/** input type for incrementing numeric columns in table "eod_entry" */
export type Eod_Entry_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  relative_period?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "eod_entry" */
export type Eod_Entry_Insert_Input = {
  evaluation_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  month?: InputMaybe<Scalars['date']['input']>;
  ppend?: InputMaybe<Scalars['date']['input']>;
  ppstart?: InputMaybe<Scalars['date']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  productByProduct?: InputMaybe<Product_Obj_Rel_Insert_Input>;
  relative_period?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Eod_Entry_Max_Fields = {
  __typename?: 'eod_entry_max_fields';
  evaluation_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  month?: Maybe<Scalars['date']['output']>;
  ppend?: Maybe<Scalars['date']['output']>;
  ppstart?: Maybe<Scalars['date']['output']>;
  product?: Maybe<Scalars['uuid']['output']>;
  relative_period?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "eod_entry" */
export type Eod_Entry_Max_Order_By = {
  evaluation_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  ppend?: InputMaybe<Order_By>;
  ppstart?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  relative_period?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Eod_Entry_Min_Fields = {
  __typename?: 'eod_entry_min_fields';
  evaluation_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  month?: Maybe<Scalars['date']['output']>;
  ppend?: Maybe<Scalars['date']['output']>;
  ppstart?: Maybe<Scalars['date']['output']>;
  product?: Maybe<Scalars['uuid']['output']>;
  relative_period?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "eod_entry" */
export type Eod_Entry_Min_Order_By = {
  evaluation_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  ppend?: InputMaybe<Order_By>;
  ppstart?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  relative_period?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "eod_entry" */
export type Eod_Entry_Mutation_Response = {
  __typename?: 'eod_entry_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Eod_Entry>;
};

/** on_conflict condition type for table "eod_entry" */
export type Eod_Entry_On_Conflict = {
  constraint: Eod_Entry_Constraint;
  update_columns?: Array<Eod_Entry_Update_Column>;
  where?: InputMaybe<Eod_Entry_Bool_Exp>;
};

/** Ordering options when selecting data from "eod_entry". */
export type Eod_Entry_Order_By = {
  evaluation_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  ppend?: InputMaybe<Order_By>;
  ppstart?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  productByProduct?: InputMaybe<Product_Order_By>;
  relative_period?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** columns and relationships of "eod_entry_per_eval_date_mview" */
export type Eod_Entry_Per_Eval_Date_Mview = {
  __typename?: 'eod_entry_per_eval_date_mview';
  evaluation_date?: Maybe<Scalars['date']['output']>;
};

/** aggregated selection of "eod_entry_per_eval_date_mview" */
export type Eod_Entry_Per_Eval_Date_Mview_Aggregate = {
  __typename?: 'eod_entry_per_eval_date_mview_aggregate';
  aggregate?: Maybe<Eod_Entry_Per_Eval_Date_Mview_Aggregate_Fields>;
  nodes: Array<Eod_Entry_Per_Eval_Date_Mview>;
};

/** aggregate fields of "eod_entry_per_eval_date_mview" */
export type Eod_Entry_Per_Eval_Date_Mview_Aggregate_Fields = {
  __typename?: 'eod_entry_per_eval_date_mview_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Eod_Entry_Per_Eval_Date_Mview_Max_Fields>;
  min?: Maybe<Eod_Entry_Per_Eval_Date_Mview_Min_Fields>;
};


/** aggregate fields of "eod_entry_per_eval_date_mview" */
export type Eod_Entry_Per_Eval_Date_Mview_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Mview_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "eod_entry_per_eval_date_mview". All fields are combined with a logical 'AND'. */
export type Eod_Entry_Per_Eval_Date_Mview_Bool_Exp = {
  _and?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Mview_Bool_Exp>>;
  _not?: InputMaybe<Eod_Entry_Per_Eval_Date_Mview_Bool_Exp>;
  _or?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Mview_Bool_Exp>>;
  evaluation_date?: InputMaybe<Date_Comparison_Exp>;
};

/** aggregate max on columns */
export type Eod_Entry_Per_Eval_Date_Mview_Max_Fields = {
  __typename?: 'eod_entry_per_eval_date_mview_max_fields';
  evaluation_date?: Maybe<Scalars['date']['output']>;
};

/** aggregate min on columns */
export type Eod_Entry_Per_Eval_Date_Mview_Min_Fields = {
  __typename?: 'eod_entry_per_eval_date_mview_min_fields';
  evaluation_date?: Maybe<Scalars['date']['output']>;
};

/** Ordering options when selecting data from "eod_entry_per_eval_date_mview". */
export type Eod_Entry_Per_Eval_Date_Mview_Order_By = {
  evaluation_date?: InputMaybe<Order_By>;
};

/** select columns of table "eod_entry_per_eval_date_mview" */
export enum Eod_Entry_Per_Eval_Date_Mview_Select_Column {
  /** column name */
  EvaluationDate = 'evaluation_date'
}

/** Streaming cursor of the table "eod_entry_per_eval_date_mview" */
export type Eod_Entry_Per_Eval_Date_Mview_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Eod_Entry_Per_Eval_Date_Mview_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Eod_Entry_Per_Eval_Date_Mview_Stream_Cursor_Value_Input = {
  evaluation_date?: InputMaybe<Scalars['date']['input']>;
};

/** columns and relationships of "eod_entry_per_eval_date_package_mview" */
export type Eod_Entry_Per_Eval_Date_Package_Mview = {
  __typename?: 'eod_entry_per_eval_date_package_mview';
  evaluation_date?: Maybe<Scalars['date']['output']>;
  package?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "eod_entry_per_eval_date_package_mview" */
export type Eod_Entry_Per_Eval_Date_Package_Mview_Aggregate = {
  __typename?: 'eod_entry_per_eval_date_package_mview_aggregate';
  aggregate?: Maybe<Eod_Entry_Per_Eval_Date_Package_Mview_Aggregate_Fields>;
  nodes: Array<Eod_Entry_Per_Eval_Date_Package_Mview>;
};

/** aggregate fields of "eod_entry_per_eval_date_package_mview" */
export type Eod_Entry_Per_Eval_Date_Package_Mview_Aggregate_Fields = {
  __typename?: 'eod_entry_per_eval_date_package_mview_aggregate_fields';
  avg?: Maybe<Eod_Entry_Per_Eval_Date_Package_Mview_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Eod_Entry_Per_Eval_Date_Package_Mview_Max_Fields>;
  min?: Maybe<Eod_Entry_Per_Eval_Date_Package_Mview_Min_Fields>;
  stddev?: Maybe<Eod_Entry_Per_Eval_Date_Package_Mview_Stddev_Fields>;
  stddev_pop?: Maybe<Eod_Entry_Per_Eval_Date_Package_Mview_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Eod_Entry_Per_Eval_Date_Package_Mview_Stddev_Samp_Fields>;
  sum?: Maybe<Eod_Entry_Per_Eval_Date_Package_Mview_Sum_Fields>;
  var_pop?: Maybe<Eod_Entry_Per_Eval_Date_Package_Mview_Var_Pop_Fields>;
  var_samp?: Maybe<Eod_Entry_Per_Eval_Date_Package_Mview_Var_Samp_Fields>;
  variance?: Maybe<Eod_Entry_Per_Eval_Date_Package_Mview_Variance_Fields>;
};


/** aggregate fields of "eod_entry_per_eval_date_package_mview" */
export type Eod_Entry_Per_Eval_Date_Package_Mview_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Package_Mview_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Eod_Entry_Per_Eval_Date_Package_Mview_Avg_Fields = {
  __typename?: 'eod_entry_per_eval_date_package_mview_avg_fields';
  package?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "eod_entry_per_eval_date_package_mview". All fields are combined with a logical 'AND'. */
export type Eod_Entry_Per_Eval_Date_Package_Mview_Bool_Exp = {
  _and?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Package_Mview_Bool_Exp>>;
  _not?: InputMaybe<Eod_Entry_Per_Eval_Date_Package_Mview_Bool_Exp>;
  _or?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Package_Mview_Bool_Exp>>;
  evaluation_date?: InputMaybe<Date_Comparison_Exp>;
  package?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Eod_Entry_Per_Eval_Date_Package_Mview_Max_Fields = {
  __typename?: 'eod_entry_per_eval_date_package_mview_max_fields';
  evaluation_date?: Maybe<Scalars['date']['output']>;
  package?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Eod_Entry_Per_Eval_Date_Package_Mview_Min_Fields = {
  __typename?: 'eod_entry_per_eval_date_package_mview_min_fields';
  evaluation_date?: Maybe<Scalars['date']['output']>;
  package?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "eod_entry_per_eval_date_package_mview". */
export type Eod_Entry_Per_Eval_Date_Package_Mview_Order_By = {
  evaluation_date?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** select columns of table "eod_entry_per_eval_date_package_mview" */
export enum Eod_Entry_Per_Eval_Date_Package_Mview_Select_Column {
  /** column name */
  EvaluationDate = 'evaluation_date',
  /** column name */
  Package = 'package'
}

/** aggregate stddev on columns */
export type Eod_Entry_Per_Eval_Date_Package_Mview_Stddev_Fields = {
  __typename?: 'eod_entry_per_eval_date_package_mview_stddev_fields';
  package?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Eod_Entry_Per_Eval_Date_Package_Mview_Stddev_Pop_Fields = {
  __typename?: 'eod_entry_per_eval_date_package_mview_stddev_pop_fields';
  package?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Eod_Entry_Per_Eval_Date_Package_Mview_Stddev_Samp_Fields = {
  __typename?: 'eod_entry_per_eval_date_package_mview_stddev_samp_fields';
  package?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "eod_entry_per_eval_date_package_mview" */
export type Eod_Entry_Per_Eval_Date_Package_Mview_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Eod_Entry_Per_Eval_Date_Package_Mview_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Eod_Entry_Per_Eval_Date_Package_Mview_Stream_Cursor_Value_Input = {
  evaluation_date?: InputMaybe<Scalars['date']['input']>;
  package?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Eod_Entry_Per_Eval_Date_Package_Mview_Sum_Fields = {
  __typename?: 'eod_entry_per_eval_date_package_mview_sum_fields';
  package?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Eod_Entry_Per_Eval_Date_Package_Mview_Var_Pop_Fields = {
  __typename?: 'eod_entry_per_eval_date_package_mview_var_pop_fields';
  package?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Eod_Entry_Per_Eval_Date_Package_Mview_Var_Samp_Fields = {
  __typename?: 'eod_entry_per_eval_date_package_mview_var_samp_fields';
  package?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Eod_Entry_Per_Eval_Date_Package_Mview_Variance_Fields = {
  __typename?: 'eod_entry_per_eval_date_package_mview_variance_fields';
  package?: Maybe<Scalars['Float']['output']>;
};

/** primary key columns input for table: eod_entry */
export type Eod_Entry_Pk_Columns_Input = {
  evaluation_date: Scalars['date']['input'];
  month: Scalars['date']['input'];
  product: Scalars['uuid']['input'];
};

/** select columns of table "eod_entry" */
export enum Eod_Entry_Select_Column {
  /** column name */
  EvaluationDate = 'evaluation_date',
  /** column name */
  Id = 'id',
  /** column name */
  Month = 'month',
  /** column name */
  Ppend = 'ppend',
  /** column name */
  Ppstart = 'ppstart',
  /** column name */
  Product = 'product',
  /** column name */
  RelativePeriod = 'relative_period',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "eod_entry" */
export type Eod_Entry_Set_Input = {
  evaluation_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  month?: InputMaybe<Scalars['date']['input']>;
  ppend?: InputMaybe<Scalars['date']['input']>;
  ppstart?: InputMaybe<Scalars['date']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  relative_period?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Eod_Entry_Stddev_Fields = {
  __typename?: 'eod_entry_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_period?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "eod_entry" */
export type Eod_Entry_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_period?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Eod_Entry_Stddev_Pop_Fields = {
  __typename?: 'eod_entry_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_period?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "eod_entry" */
export type Eod_Entry_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_period?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Eod_Entry_Stddev_Samp_Fields = {
  __typename?: 'eod_entry_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_period?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "eod_entry" */
export type Eod_Entry_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_period?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "eod_entry" */
export type Eod_Entry_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Eod_Entry_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Eod_Entry_Stream_Cursor_Value_Input = {
  evaluation_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  month?: InputMaybe<Scalars['date']['input']>;
  ppend?: InputMaybe<Scalars['date']['input']>;
  ppstart?: InputMaybe<Scalars['date']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  relative_period?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Eod_Entry_Sum_Fields = {
  __typename?: 'eod_entry_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  relative_period?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "eod_entry" */
export type Eod_Entry_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_period?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** update columns of table "eod_entry" */
export enum Eod_Entry_Update_Column {
  /** column name */
  EvaluationDate = 'evaluation_date',
  /** column name */
  Id = 'id',
  /** column name */
  Month = 'month',
  /** column name */
  Ppend = 'ppend',
  /** column name */
  Ppstart = 'ppstart',
  /** column name */
  Product = 'product',
  /** column name */
  RelativePeriod = 'relative_period',
  /** column name */
  Value = 'value'
}

export type Eod_Entry_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Eod_Entry_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Eod_Entry_Set_Input>;
  /** filter the rows which have to be updated */
  where: Eod_Entry_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Eod_Entry_Var_Pop_Fields = {
  __typename?: 'eod_entry_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_period?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "eod_entry" */
export type Eod_Entry_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_period?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Eod_Entry_Var_Samp_Fields = {
  __typename?: 'eod_entry_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_period?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "eod_entry" */
export type Eod_Entry_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_period?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Eod_Entry_Variance_Fields = {
  __typename?: 'eod_entry_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_period?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "eod_entry" */
export type Eod_Entry_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_period?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "eod" */
export type Eod_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "eod" */
export type Eod_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
  sourceBySource?: InputMaybe<Source_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Eod_Max_Fields = {
  __typename?: 'eod_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "eod" */
export type Eod_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Eod_Min_Fields = {
  __typename?: 'eod_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "eod" */
export type Eod_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "eod" */
export type Eod_Mutation_Response = {
  __typename?: 'eod_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Eod>;
};

/** input type for inserting object relation for remote table "eod" */
export type Eod_Obj_Rel_Insert_Input = {
  data: Eod_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Eod_On_Conflict>;
};

/** on_conflict condition type for table "eod" */
export type Eod_On_Conflict = {
  constraint: Eod_Constraint;
  update_columns?: Array<Eod_Update_Column>;
  where?: InputMaybe<Eod_Bool_Exp>;
};

/** Ordering options when selecting data from "eod". */
export type Eod_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  sourceBySource?: InputMaybe<Source_Order_By>;
};

/** primary key columns input for table: eod */
export type Eod_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "eod" */
export enum Eod_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Source = 'source'
}

/** input type for updating data in table "eod" */
export type Eod_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Eod_Stddev_Fields = {
  __typename?: 'eod_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "eod" */
export type Eod_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Eod_Stddev_Pop_Fields = {
  __typename?: 'eod_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "eod" */
export type Eod_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Eod_Stddev_Samp_Fields = {
  __typename?: 'eod_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "eod" */
export type Eod_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "eod" */
export type Eod_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Eod_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Eod_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Eod_Sum_Fields = {
  __typename?: 'eod_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "eod" */
export type Eod_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** update columns of table "eod" */
export enum Eod_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Source = 'source'
}

export type Eod_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Eod_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Eod_Set_Input>;
  /** filter the rows which have to be updated */
  where: Eod_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Eod_Var_Pop_Fields = {
  __typename?: 'eod_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "eod" */
export type Eod_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Eod_Var_Samp_Fields = {
  __typename?: 'eod_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "eod" */
export type Eod_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Eod_Variance_Fields = {
  __typename?: 'eod_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "eod" */
export type Eod_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** columns and relationships of "exchange" */
export type Exchange = {
  __typename?: 'exchange';
  code: Scalars['Int']['output'];
  future_code_gen_template: Scalars['String']['output'];
  future_code_parse_template: Scalars['String']['output'];
  future_time_spread_gen_template: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  source: Scalars['Int']['output'];
  /** An object relationship */
  sourceBySource: Source;
};

/** aggregated selection of "exchange" */
export type Exchange_Aggregate = {
  __typename?: 'exchange_aggregate';
  aggregate?: Maybe<Exchange_Aggregate_Fields>;
  nodes: Array<Exchange>;
};

export type Exchange_Aggregate_Bool_Exp = {
  count?: InputMaybe<Exchange_Aggregate_Bool_Exp_Count>;
};

export type Exchange_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Exchange_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Exchange_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "exchange" */
export type Exchange_Aggregate_Fields = {
  __typename?: 'exchange_aggregate_fields';
  avg?: Maybe<Exchange_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Exchange_Max_Fields>;
  min?: Maybe<Exchange_Min_Fields>;
  stddev?: Maybe<Exchange_Stddev_Fields>;
  stddev_pop?: Maybe<Exchange_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Exchange_Stddev_Samp_Fields>;
  sum?: Maybe<Exchange_Sum_Fields>;
  var_pop?: Maybe<Exchange_Var_Pop_Fields>;
  var_samp?: Maybe<Exchange_Var_Samp_Fields>;
  variance?: Maybe<Exchange_Variance_Fields>;
};


/** aggregate fields of "exchange" */
export type Exchange_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exchange_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "exchange" */
export type Exchange_Aggregate_Order_By = {
  avg?: InputMaybe<Exchange_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Exchange_Max_Order_By>;
  min?: InputMaybe<Exchange_Min_Order_By>;
  stddev?: InputMaybe<Exchange_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Exchange_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Exchange_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Exchange_Sum_Order_By>;
  var_pop?: InputMaybe<Exchange_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Exchange_Var_Samp_Order_By>;
  variance?: InputMaybe<Exchange_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "exchange" */
export type Exchange_Arr_Rel_Insert_Input = {
  data: Array<Exchange_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Exchange_On_Conflict>;
};

/** aggregate avg on columns */
export type Exchange_Avg_Fields = {
  __typename?: 'exchange_avg_fields';
  code?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "exchange" */
export type Exchange_Avg_Order_By = {
  code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "exchange". All fields are combined with a logical 'AND'. */
export type Exchange_Bool_Exp = {
  _and?: InputMaybe<Array<Exchange_Bool_Exp>>;
  _not?: InputMaybe<Exchange_Bool_Exp>;
  _or?: InputMaybe<Array<Exchange_Bool_Exp>>;
  code?: InputMaybe<Int_Comparison_Exp>;
  future_code_gen_template?: InputMaybe<String_Comparison_Exp>;
  future_code_parse_template?: InputMaybe<String_Comparison_Exp>;
  future_time_spread_gen_template?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  source?: InputMaybe<Int_Comparison_Exp>;
  sourceBySource?: InputMaybe<Source_Bool_Exp>;
};

/** unique or primary key constraints on table "exchange" */
export enum Exchange_Constraint {
  /** unique or primary key constraint on columns "code" */
  ExchangeCodeKey = 'exchange_code_key',
  /** unique or primary key constraint on columns "id" */
  ExchangePkey = 'exchange_pkey',
  /** unique or primary key constraint on columns "source" */
  ExchangeSourceKey = 'exchange_source_key'
}

/** columns and relationships of "exchange_event_type" */
export type Exchange_Event_Type = {
  __typename?: 'exchange_event_type';
  value: Scalars['String']['output'];
};

/** aggregated selection of "exchange_event_type" */
export type Exchange_Event_Type_Aggregate = {
  __typename?: 'exchange_event_type_aggregate';
  aggregate?: Maybe<Exchange_Event_Type_Aggregate_Fields>;
  nodes: Array<Exchange_Event_Type>;
};

/** aggregate fields of "exchange_event_type" */
export type Exchange_Event_Type_Aggregate_Fields = {
  __typename?: 'exchange_event_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Exchange_Event_Type_Max_Fields>;
  min?: Maybe<Exchange_Event_Type_Min_Fields>;
};


/** aggregate fields of "exchange_event_type" */
export type Exchange_Event_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exchange_Event_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "exchange_event_type". All fields are combined with a logical 'AND'. */
export type Exchange_Event_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Exchange_Event_Type_Bool_Exp>>;
  _not?: InputMaybe<Exchange_Event_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Exchange_Event_Type_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "exchange_event_type" */
export enum Exchange_Event_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  ExchangeEventTypePkey = 'exchange_event_type_pkey'
}

/** input type for inserting data into table "exchange_event_type" */
export type Exchange_Event_Type_Insert_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Exchange_Event_Type_Max_Fields = {
  __typename?: 'exchange_event_type_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Exchange_Event_Type_Min_Fields = {
  __typename?: 'exchange_event_type_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "exchange_event_type" */
export type Exchange_Event_Type_Mutation_Response = {
  __typename?: 'exchange_event_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Exchange_Event_Type>;
};

/** on_conflict condition type for table "exchange_event_type" */
export type Exchange_Event_Type_On_Conflict = {
  constraint: Exchange_Event_Type_Constraint;
  update_columns?: Array<Exchange_Event_Type_Update_Column>;
  where?: InputMaybe<Exchange_Event_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "exchange_event_type". */
export type Exchange_Event_Type_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: exchange_event_type */
export type Exchange_Event_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "exchange_event_type" */
export enum Exchange_Event_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "exchange_event_type" */
export type Exchange_Event_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "exchange_event_type" */
export type Exchange_Event_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Exchange_Event_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Exchange_Event_Type_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "exchange_event_type" */
export enum Exchange_Event_Type_Update_Column {
  /** column name */
  Value = 'value'
}

export type Exchange_Event_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Exchange_Event_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Exchange_Event_Type_Bool_Exp;
};

/** input type for incrementing numeric columns in table "exchange" */
export type Exchange_Inc_Input = {
  code?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "exchange" */
export type Exchange_Insert_Input = {
  code?: InputMaybe<Scalars['Int']['input']>;
  future_code_gen_template?: InputMaybe<Scalars['String']['input']>;
  future_code_parse_template?: InputMaybe<Scalars['String']['input']>;
  future_time_spread_gen_template?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
  sourceBySource?: InputMaybe<Source_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Exchange_Max_Fields = {
  __typename?: 'exchange_max_fields';
  code?: Maybe<Scalars['Int']['output']>;
  future_code_gen_template?: Maybe<Scalars['String']['output']>;
  future_code_parse_template?: Maybe<Scalars['String']['output']>;
  future_time_spread_gen_template?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "exchange" */
export type Exchange_Max_Order_By = {
  code?: InputMaybe<Order_By>;
  future_code_gen_template?: InputMaybe<Order_By>;
  future_code_parse_template?: InputMaybe<Order_By>;
  future_time_spread_gen_template?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Exchange_Min_Fields = {
  __typename?: 'exchange_min_fields';
  code?: Maybe<Scalars['Int']['output']>;
  future_code_gen_template?: Maybe<Scalars['String']['output']>;
  future_code_parse_template?: Maybe<Scalars['String']['output']>;
  future_time_spread_gen_template?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "exchange" */
export type Exchange_Min_Order_By = {
  code?: InputMaybe<Order_By>;
  future_code_gen_template?: InputMaybe<Order_By>;
  future_code_parse_template?: InputMaybe<Order_By>;
  future_time_spread_gen_template?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "exchange" */
export type Exchange_Mutation_Response = {
  __typename?: 'exchange_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Exchange>;
};

/** input type for inserting object relation for remote table "exchange" */
export type Exchange_Obj_Rel_Insert_Input = {
  data: Exchange_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Exchange_On_Conflict>;
};

/** on_conflict condition type for table "exchange" */
export type Exchange_On_Conflict = {
  constraint: Exchange_Constraint;
  update_columns?: Array<Exchange_Update_Column>;
  where?: InputMaybe<Exchange_Bool_Exp>;
};

/** Ordering options when selecting data from "exchange". */
export type Exchange_Order_By = {
  code?: InputMaybe<Order_By>;
  future_code_gen_template?: InputMaybe<Order_By>;
  future_code_parse_template?: InputMaybe<Order_By>;
  future_time_spread_gen_template?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  sourceBySource?: InputMaybe<Source_Order_By>;
};

/** primary key columns input for table: exchange */
export type Exchange_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "exchange" */
export enum Exchange_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  FutureCodeGenTemplate = 'future_code_gen_template',
  /** column name */
  FutureCodeParseTemplate = 'future_code_parse_template',
  /** column name */
  FutureTimeSpreadGenTemplate = 'future_time_spread_gen_template',
  /** column name */
  Id = 'id',
  /** column name */
  Source = 'source'
}

/** input type for updating data in table "exchange" */
export type Exchange_Set_Input = {
  code?: InputMaybe<Scalars['Int']['input']>;
  future_code_gen_template?: InputMaybe<Scalars['String']['input']>;
  future_code_parse_template?: InputMaybe<Scalars['String']['input']>;
  future_time_spread_gen_template?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Exchange_Stddev_Fields = {
  __typename?: 'exchange_stddev_fields';
  code?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "exchange" */
export type Exchange_Stddev_Order_By = {
  code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Exchange_Stddev_Pop_Fields = {
  __typename?: 'exchange_stddev_pop_fields';
  code?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "exchange" */
export type Exchange_Stddev_Pop_Order_By = {
  code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Exchange_Stddev_Samp_Fields = {
  __typename?: 'exchange_stddev_samp_fields';
  code?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "exchange" */
export type Exchange_Stddev_Samp_Order_By = {
  code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "exchange" */
export type Exchange_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Exchange_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Exchange_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['Int']['input']>;
  future_code_gen_template?: InputMaybe<Scalars['String']['input']>;
  future_code_parse_template?: InputMaybe<Scalars['String']['input']>;
  future_time_spread_gen_template?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Exchange_Sum_Fields = {
  __typename?: 'exchange_sum_fields';
  code?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "exchange" */
export type Exchange_Sum_Order_By = {
  code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** update columns of table "exchange" */
export enum Exchange_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  FutureCodeGenTemplate = 'future_code_gen_template',
  /** column name */
  FutureCodeParseTemplate = 'future_code_parse_template',
  /** column name */
  FutureTimeSpreadGenTemplate = 'future_time_spread_gen_template',
  /** column name */
  Id = 'id',
  /** column name */
  Source = 'source'
}

export type Exchange_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Exchange_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Exchange_Set_Input>;
  /** filter the rows which have to be updated */
  where: Exchange_Bool_Exp;
};

/** columns and relationships of "exchange_usage" */
export type Exchange_Usage = {
  __typename?: 'exchange_usage';
  event: Scalars['String']['output'];
  event_date: Scalars['timestamptz']['output'];
  /** An object relationship */
  exchangeUsageByFolioUser?: Maybe<Folio_User>;
  folio_user: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  source: Scalars['Int']['output'];
};

/** aggregated selection of "exchange_usage" */
export type Exchange_Usage_Aggregate = {
  __typename?: 'exchange_usage_aggregate';
  aggregate?: Maybe<Exchange_Usage_Aggregate_Fields>;
  nodes: Array<Exchange_Usage>;
};

/** aggregate fields of "exchange_usage" */
export type Exchange_Usage_Aggregate_Fields = {
  __typename?: 'exchange_usage_aggregate_fields';
  avg?: Maybe<Exchange_Usage_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Exchange_Usage_Max_Fields>;
  min?: Maybe<Exchange_Usage_Min_Fields>;
  stddev?: Maybe<Exchange_Usage_Stddev_Fields>;
  stddev_pop?: Maybe<Exchange_Usage_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Exchange_Usage_Stddev_Samp_Fields>;
  sum?: Maybe<Exchange_Usage_Sum_Fields>;
  var_pop?: Maybe<Exchange_Usage_Var_Pop_Fields>;
  var_samp?: Maybe<Exchange_Usage_Var_Samp_Fields>;
  variance?: Maybe<Exchange_Usage_Variance_Fields>;
};


/** aggregate fields of "exchange_usage" */
export type Exchange_Usage_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exchange_Usage_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Exchange_Usage_Avg_Fields = {
  __typename?: 'exchange_usage_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "exchange_usage". All fields are combined with a logical 'AND'. */
export type Exchange_Usage_Bool_Exp = {
  _and?: InputMaybe<Array<Exchange_Usage_Bool_Exp>>;
  _not?: InputMaybe<Exchange_Usage_Bool_Exp>;
  _or?: InputMaybe<Array<Exchange_Usage_Bool_Exp>>;
  event?: InputMaybe<String_Comparison_Exp>;
  event_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  exchangeUsageByFolioUser?: InputMaybe<Folio_User_Bool_Exp>;
  folio_user?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  source?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "exchange_usage" */
export enum Exchange_Usage_Constraint {
  /** unique or primary key constraint on columns "id" */
  ExchangeUsagePkey = 'exchange_usage_pkey'
}

/** input type for incrementing numeric columns in table "exchange_usage" */
export type Exchange_Usage_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "exchange_usage" */
export type Exchange_Usage_Insert_Input = {
  event?: InputMaybe<Scalars['String']['input']>;
  event_date?: InputMaybe<Scalars['timestamptz']['input']>;
  exchangeUsageByFolioUser?: InputMaybe<Folio_User_Obj_Rel_Insert_Input>;
  folio_user?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "exchange_usage_last" */
export type Exchange_Usage_Last = {
  __typename?: 'exchange_usage_last';
  event?: Maybe<Scalars['String']['output']>;
  event_date?: Maybe<Scalars['timestamptz']['output']>;
  folio_user?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "exchange_usage_last" */
export type Exchange_Usage_Last_Aggregate = {
  __typename?: 'exchange_usage_last_aggregate';
  aggregate?: Maybe<Exchange_Usage_Last_Aggregate_Fields>;
  nodes: Array<Exchange_Usage_Last>;
};

/** aggregate fields of "exchange_usage_last" */
export type Exchange_Usage_Last_Aggregate_Fields = {
  __typename?: 'exchange_usage_last_aggregate_fields';
  avg?: Maybe<Exchange_Usage_Last_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Exchange_Usage_Last_Max_Fields>;
  min?: Maybe<Exchange_Usage_Last_Min_Fields>;
  stddev?: Maybe<Exchange_Usage_Last_Stddev_Fields>;
  stddev_pop?: Maybe<Exchange_Usage_Last_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Exchange_Usage_Last_Stddev_Samp_Fields>;
  sum?: Maybe<Exchange_Usage_Last_Sum_Fields>;
  var_pop?: Maybe<Exchange_Usage_Last_Var_Pop_Fields>;
  var_samp?: Maybe<Exchange_Usage_Last_Var_Samp_Fields>;
  variance?: Maybe<Exchange_Usage_Last_Variance_Fields>;
};


/** aggregate fields of "exchange_usage_last" */
export type Exchange_Usage_Last_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exchange_Usage_Last_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Exchange_Usage_Last_Avg_Fields = {
  __typename?: 'exchange_usage_last_avg_fields';
  source?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "exchange_usage_last". All fields are combined with a logical 'AND'. */
export type Exchange_Usage_Last_Bool_Exp = {
  _and?: InputMaybe<Array<Exchange_Usage_Last_Bool_Exp>>;
  _not?: InputMaybe<Exchange_Usage_Last_Bool_Exp>;
  _or?: InputMaybe<Array<Exchange_Usage_Last_Bool_Exp>>;
  event?: InputMaybe<String_Comparison_Exp>;
  event_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  folio_user?: InputMaybe<String_Comparison_Exp>;
  source?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Exchange_Usage_Last_Max_Fields = {
  __typename?: 'exchange_usage_last_max_fields';
  event?: Maybe<Scalars['String']['output']>;
  event_date?: Maybe<Scalars['timestamptz']['output']>;
  folio_user?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Exchange_Usage_Last_Min_Fields = {
  __typename?: 'exchange_usage_last_min_fields';
  event?: Maybe<Scalars['String']['output']>;
  event_date?: Maybe<Scalars['timestamptz']['output']>;
  folio_user?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "exchange_usage_last". */
export type Exchange_Usage_Last_Order_By = {
  event?: InputMaybe<Order_By>;
  event_date?: InputMaybe<Order_By>;
  folio_user?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** select columns of table "exchange_usage_last" */
export enum Exchange_Usage_Last_Select_Column {
  /** column name */
  Event = 'event',
  /** column name */
  EventDate = 'event_date',
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  Source = 'source'
}

/** aggregate stddev on columns */
export type Exchange_Usage_Last_Stddev_Fields = {
  __typename?: 'exchange_usage_last_stddev_fields';
  source?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Exchange_Usage_Last_Stddev_Pop_Fields = {
  __typename?: 'exchange_usage_last_stddev_pop_fields';
  source?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Exchange_Usage_Last_Stddev_Samp_Fields = {
  __typename?: 'exchange_usage_last_stddev_samp_fields';
  source?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "exchange_usage_last" */
export type Exchange_Usage_Last_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Exchange_Usage_Last_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Exchange_Usage_Last_Stream_Cursor_Value_Input = {
  event?: InputMaybe<Scalars['String']['input']>;
  event_date?: InputMaybe<Scalars['timestamptz']['input']>;
  folio_user?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Exchange_Usage_Last_Sum_Fields = {
  __typename?: 'exchange_usage_last_sum_fields';
  source?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Exchange_Usage_Last_Var_Pop_Fields = {
  __typename?: 'exchange_usage_last_var_pop_fields';
  source?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Exchange_Usage_Last_Var_Samp_Fields = {
  __typename?: 'exchange_usage_last_var_samp_fields';
  source?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Exchange_Usage_Last_Variance_Fields = {
  __typename?: 'exchange_usage_last_variance_fields';
  source?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Exchange_Usage_Max_Fields = {
  __typename?: 'exchange_usage_max_fields';
  event?: Maybe<Scalars['String']['output']>;
  event_date?: Maybe<Scalars['timestamptz']['output']>;
  folio_user?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Exchange_Usage_Min_Fields = {
  __typename?: 'exchange_usage_min_fields';
  event?: Maybe<Scalars['String']['output']>;
  event_date?: Maybe<Scalars['timestamptz']['output']>;
  folio_user?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "exchange_usage" */
export type Exchange_Usage_Mutation_Response = {
  __typename?: 'exchange_usage_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Exchange_Usage>;
};

/** on_conflict condition type for table "exchange_usage" */
export type Exchange_Usage_On_Conflict = {
  constraint: Exchange_Usage_Constraint;
  update_columns?: Array<Exchange_Usage_Update_Column>;
  where?: InputMaybe<Exchange_Usage_Bool_Exp>;
};

/** Ordering options when selecting data from "exchange_usage". */
export type Exchange_Usage_Order_By = {
  event?: InputMaybe<Order_By>;
  event_date?: InputMaybe<Order_By>;
  exchangeUsageByFolioUser?: InputMaybe<Folio_User_Order_By>;
  folio_user?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** primary key columns input for table: exchange_usage */
export type Exchange_Usage_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "exchange_usage" */
export enum Exchange_Usage_Select_Column {
  /** column name */
  Event = 'event',
  /** column name */
  EventDate = 'event_date',
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  Id = 'id',
  /** column name */
  Source = 'source'
}

/** input type for updating data in table "exchange_usage" */
export type Exchange_Usage_Set_Input = {
  event?: InputMaybe<Scalars['String']['input']>;
  event_date?: InputMaybe<Scalars['timestamptz']['input']>;
  folio_user?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "exchange_usage_start" */
export type Exchange_Usage_Start = {
  __typename?: 'exchange_usage_start';
  event?: Maybe<Scalars['String']['output']>;
  event_date?: Maybe<Scalars['timestamptz']['output']>;
  folio_user?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "exchange_usage_start" */
export type Exchange_Usage_Start_Aggregate = {
  __typename?: 'exchange_usage_start_aggregate';
  aggregate?: Maybe<Exchange_Usage_Start_Aggregate_Fields>;
  nodes: Array<Exchange_Usage_Start>;
};

/** aggregate fields of "exchange_usage_start" */
export type Exchange_Usage_Start_Aggregate_Fields = {
  __typename?: 'exchange_usage_start_aggregate_fields';
  avg?: Maybe<Exchange_Usage_Start_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Exchange_Usage_Start_Max_Fields>;
  min?: Maybe<Exchange_Usage_Start_Min_Fields>;
  stddev?: Maybe<Exchange_Usage_Start_Stddev_Fields>;
  stddev_pop?: Maybe<Exchange_Usage_Start_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Exchange_Usage_Start_Stddev_Samp_Fields>;
  sum?: Maybe<Exchange_Usage_Start_Sum_Fields>;
  var_pop?: Maybe<Exchange_Usage_Start_Var_Pop_Fields>;
  var_samp?: Maybe<Exchange_Usage_Start_Var_Samp_Fields>;
  variance?: Maybe<Exchange_Usage_Start_Variance_Fields>;
};


/** aggregate fields of "exchange_usage_start" */
export type Exchange_Usage_Start_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exchange_Usage_Start_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Exchange_Usage_Start_Avg_Fields = {
  __typename?: 'exchange_usage_start_avg_fields';
  source?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "exchange_usage_start". All fields are combined with a logical 'AND'. */
export type Exchange_Usage_Start_Bool_Exp = {
  _and?: InputMaybe<Array<Exchange_Usage_Start_Bool_Exp>>;
  _not?: InputMaybe<Exchange_Usage_Start_Bool_Exp>;
  _or?: InputMaybe<Array<Exchange_Usage_Start_Bool_Exp>>;
  event?: InputMaybe<String_Comparison_Exp>;
  event_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  folio_user?: InputMaybe<String_Comparison_Exp>;
  source?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Exchange_Usage_Start_Max_Fields = {
  __typename?: 'exchange_usage_start_max_fields';
  event?: Maybe<Scalars['String']['output']>;
  event_date?: Maybe<Scalars['timestamptz']['output']>;
  folio_user?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Exchange_Usage_Start_Min_Fields = {
  __typename?: 'exchange_usage_start_min_fields';
  event?: Maybe<Scalars['String']['output']>;
  event_date?: Maybe<Scalars['timestamptz']['output']>;
  folio_user?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "exchange_usage_start". */
export type Exchange_Usage_Start_Order_By = {
  event?: InputMaybe<Order_By>;
  event_date?: InputMaybe<Order_By>;
  folio_user?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** select columns of table "exchange_usage_start" */
export enum Exchange_Usage_Start_Select_Column {
  /** column name */
  Event = 'event',
  /** column name */
  EventDate = 'event_date',
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  Source = 'source'
}

/** aggregate stddev on columns */
export type Exchange_Usage_Start_Stddev_Fields = {
  __typename?: 'exchange_usage_start_stddev_fields';
  source?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Exchange_Usage_Start_Stddev_Pop_Fields = {
  __typename?: 'exchange_usage_start_stddev_pop_fields';
  source?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Exchange_Usage_Start_Stddev_Samp_Fields = {
  __typename?: 'exchange_usage_start_stddev_samp_fields';
  source?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "exchange_usage_start" */
export type Exchange_Usage_Start_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Exchange_Usage_Start_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Exchange_Usage_Start_Stream_Cursor_Value_Input = {
  event?: InputMaybe<Scalars['String']['input']>;
  event_date?: InputMaybe<Scalars['timestamptz']['input']>;
  folio_user?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Exchange_Usage_Start_Sum_Fields = {
  __typename?: 'exchange_usage_start_sum_fields';
  source?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Exchange_Usage_Start_Var_Pop_Fields = {
  __typename?: 'exchange_usage_start_var_pop_fields';
  source?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Exchange_Usage_Start_Var_Samp_Fields = {
  __typename?: 'exchange_usage_start_var_samp_fields';
  source?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Exchange_Usage_Start_Variance_Fields = {
  __typename?: 'exchange_usage_start_variance_fields';
  source?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev on columns */
export type Exchange_Usage_Stddev_Fields = {
  __typename?: 'exchange_usage_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Exchange_Usage_Stddev_Pop_Fields = {
  __typename?: 'exchange_usage_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Exchange_Usage_Stddev_Samp_Fields = {
  __typename?: 'exchange_usage_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "exchange_usage" */
export type Exchange_Usage_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Exchange_Usage_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Exchange_Usage_Stream_Cursor_Value_Input = {
  event?: InputMaybe<Scalars['String']['input']>;
  event_date?: InputMaybe<Scalars['timestamptz']['input']>;
  folio_user?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Exchange_Usage_Sum_Fields = {
  __typename?: 'exchange_usage_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "exchange_usage" */
export enum Exchange_Usage_Update_Column {
  /** column name */
  Event = 'event',
  /** column name */
  EventDate = 'event_date',
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  Id = 'id',
  /** column name */
  Source = 'source'
}

export type Exchange_Usage_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Exchange_Usage_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Exchange_Usage_Set_Input>;
  /** filter the rows which have to be updated */
  where: Exchange_Usage_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Exchange_Usage_Var_Pop_Fields = {
  __typename?: 'exchange_usage_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Exchange_Usage_Var_Samp_Fields = {
  __typename?: 'exchange_usage_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Exchange_Usage_Variance_Fields = {
  __typename?: 'exchange_usage_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_pop on columns */
export type Exchange_Var_Pop_Fields = {
  __typename?: 'exchange_var_pop_fields';
  code?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "exchange" */
export type Exchange_Var_Pop_Order_By = {
  code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Exchange_Var_Samp_Fields = {
  __typename?: 'exchange_var_samp_fields';
  code?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "exchange" */
export type Exchange_Var_Samp_Order_By = {
  code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Exchange_Variance_Fields = {
  __typename?: 'exchange_variance_fields';
  code?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "exchange" */
export type Exchange_Variance_Order_By = {
  code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** Users column-settings as JSON scoped by page-id. */
export type Folio_Column_Settings = {
  __typename?: 'folio_column_settings';
  folio_user: Scalars['String']['output'];
  state: Scalars['jsonb']['output'];
};


/** Users column-settings as JSON scoped by page-id. */
export type Folio_Column_SettingsStateArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "folio_column_settings" */
export type Folio_Column_Settings_Aggregate = {
  __typename?: 'folio_column_settings_aggregate';
  aggregate?: Maybe<Folio_Column_Settings_Aggregate_Fields>;
  nodes: Array<Folio_Column_Settings>;
};

/** aggregate fields of "folio_column_settings" */
export type Folio_Column_Settings_Aggregate_Fields = {
  __typename?: 'folio_column_settings_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Folio_Column_Settings_Max_Fields>;
  min?: Maybe<Folio_Column_Settings_Min_Fields>;
};


/** aggregate fields of "folio_column_settings" */
export type Folio_Column_Settings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Folio_Column_Settings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Folio_Column_Settings_Append_Input = {
  state?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "folio_column_settings". All fields are combined with a logical 'AND'. */
export type Folio_Column_Settings_Bool_Exp = {
  _and?: InputMaybe<Array<Folio_Column_Settings_Bool_Exp>>;
  _not?: InputMaybe<Folio_Column_Settings_Bool_Exp>;
  _or?: InputMaybe<Array<Folio_Column_Settings_Bool_Exp>>;
  folio_user?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "folio_column_settings" */
export enum Folio_Column_Settings_Constraint {
  /** unique or primary key constraint on columns "folio_user" */
  FolioColumnSettingsPkey = 'folio_column_settings_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Folio_Column_Settings_Delete_At_Path_Input = {
  state?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Folio_Column_Settings_Delete_Elem_Input = {
  state?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Folio_Column_Settings_Delete_Key_Input = {
  state?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "folio_column_settings" */
export type Folio_Column_Settings_Insert_Input = {
  folio_user?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type Folio_Column_Settings_Max_Fields = {
  __typename?: 'folio_column_settings_max_fields';
  folio_user?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Folio_Column_Settings_Min_Fields = {
  __typename?: 'folio_column_settings_min_fields';
  folio_user?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "folio_column_settings" */
export type Folio_Column_Settings_Mutation_Response = {
  __typename?: 'folio_column_settings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Folio_Column_Settings>;
};

/** on_conflict condition type for table "folio_column_settings" */
export type Folio_Column_Settings_On_Conflict = {
  constraint: Folio_Column_Settings_Constraint;
  update_columns?: Array<Folio_Column_Settings_Update_Column>;
  where?: InputMaybe<Folio_Column_Settings_Bool_Exp>;
};

/** Ordering options when selecting data from "folio_column_settings". */
export type Folio_Column_Settings_Order_By = {
  folio_user?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
};

/** primary key columns input for table: folio_column_settings */
export type Folio_Column_Settings_Pk_Columns_Input = {
  folio_user: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Folio_Column_Settings_Prepend_Input = {
  state?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "folio_column_settings" */
export enum Folio_Column_Settings_Select_Column {
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  State = 'state'
}

/** input type for updating data in table "folio_column_settings" */
export type Folio_Column_Settings_Set_Input = {
  folio_user?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Streaming cursor of the table "folio_column_settings" */
export type Folio_Column_Settings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Folio_Column_Settings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Folio_Column_Settings_Stream_Cursor_Value_Input = {
  folio_user?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['jsonb']['input']>;
};

/** update columns of table "folio_column_settings" */
export enum Folio_Column_Settings_Update_Column {
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  State = 'state'
}

export type Folio_Column_Settings_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Folio_Column_Settings_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Folio_Column_Settings_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Folio_Column_Settings_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Folio_Column_Settings_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Folio_Column_Settings_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Folio_Column_Settings_Set_Input>;
  /** filter the rows which have to be updated */
  where: Folio_Column_Settings_Bool_Exp;
};

/** Stores state of 'shadow' curves like extra months and divider columns. Separated from page settings so it doesn't interfere with the api or openfin */
export type Folio_Shadow_Curves = {
  __typename?: 'folio_shadow_curves';
  folio_user: Scalars['String']['output'];
  state: Scalars['jsonb']['output'];
};


/** Stores state of 'shadow' curves like extra months and divider columns. Separated from page settings so it doesn't interfere with the api or openfin */
export type Folio_Shadow_CurvesStateArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "folio_shadow_curves" */
export type Folio_Shadow_Curves_Aggregate = {
  __typename?: 'folio_shadow_curves_aggregate';
  aggregate?: Maybe<Folio_Shadow_Curves_Aggregate_Fields>;
  nodes: Array<Folio_Shadow_Curves>;
};

/** aggregate fields of "folio_shadow_curves" */
export type Folio_Shadow_Curves_Aggregate_Fields = {
  __typename?: 'folio_shadow_curves_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Folio_Shadow_Curves_Max_Fields>;
  min?: Maybe<Folio_Shadow_Curves_Min_Fields>;
};


/** aggregate fields of "folio_shadow_curves" */
export type Folio_Shadow_Curves_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Folio_Shadow_Curves_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Folio_Shadow_Curves_Append_Input = {
  state?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "folio_shadow_curves". All fields are combined with a logical 'AND'. */
export type Folio_Shadow_Curves_Bool_Exp = {
  _and?: InputMaybe<Array<Folio_Shadow_Curves_Bool_Exp>>;
  _not?: InputMaybe<Folio_Shadow_Curves_Bool_Exp>;
  _or?: InputMaybe<Array<Folio_Shadow_Curves_Bool_Exp>>;
  folio_user?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "folio_shadow_curves" */
export enum Folio_Shadow_Curves_Constraint {
  /** unique or primary key constraint on columns "folio_user" */
  FolioShadowCurvesPkey = 'folio_shadow_curves_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Folio_Shadow_Curves_Delete_At_Path_Input = {
  state?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Folio_Shadow_Curves_Delete_Elem_Input = {
  state?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Folio_Shadow_Curves_Delete_Key_Input = {
  state?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "folio_shadow_curves" */
export type Folio_Shadow_Curves_Insert_Input = {
  folio_user?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type Folio_Shadow_Curves_Max_Fields = {
  __typename?: 'folio_shadow_curves_max_fields';
  folio_user?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Folio_Shadow_Curves_Min_Fields = {
  __typename?: 'folio_shadow_curves_min_fields';
  folio_user?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "folio_shadow_curves" */
export type Folio_Shadow_Curves_Mutation_Response = {
  __typename?: 'folio_shadow_curves_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Folio_Shadow_Curves>;
};

/** on_conflict condition type for table "folio_shadow_curves" */
export type Folio_Shadow_Curves_On_Conflict = {
  constraint: Folio_Shadow_Curves_Constraint;
  update_columns?: Array<Folio_Shadow_Curves_Update_Column>;
  where?: InputMaybe<Folio_Shadow_Curves_Bool_Exp>;
};

/** Ordering options when selecting data from "folio_shadow_curves". */
export type Folio_Shadow_Curves_Order_By = {
  folio_user?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
};

/** primary key columns input for table: folio_shadow_curves */
export type Folio_Shadow_Curves_Pk_Columns_Input = {
  folio_user: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Folio_Shadow_Curves_Prepend_Input = {
  state?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "folio_shadow_curves" */
export enum Folio_Shadow_Curves_Select_Column {
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  State = 'state'
}

/** input type for updating data in table "folio_shadow_curves" */
export type Folio_Shadow_Curves_Set_Input = {
  folio_user?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Streaming cursor of the table "folio_shadow_curves" */
export type Folio_Shadow_Curves_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Folio_Shadow_Curves_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Folio_Shadow_Curves_Stream_Cursor_Value_Input = {
  folio_user?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['jsonb']['input']>;
};

/** update columns of table "folio_shadow_curves" */
export enum Folio_Shadow_Curves_Update_Column {
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  State = 'state'
}

export type Folio_Shadow_Curves_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Folio_Shadow_Curves_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Folio_Shadow_Curves_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Folio_Shadow_Curves_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Folio_Shadow_Curves_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Folio_Shadow_Curves_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Folio_Shadow_Curves_Set_Input>;
  /** filter the rows which have to be updated */
  where: Folio_Shadow_Curves_Bool_Exp;
};

/** columns and relationships of "folio_user" */
export type Folio_User = {
  __typename?: 'folio_user';
  blocked: Scalars['Boolean']['output'];
  created: Scalars['timestamptz']['output'];
  email: Scalars['citext']['output'];
  firstname: Scalars['String']['output'];
  /** An object relationship */
  hfc_card_setting?: Maybe<Hfc_Card_Settings>;
  /** An object relationship */
  hfc_user_setting?: Maybe<Hfc_User_Settings>;
  id: Scalars['String']['output'];
  last_login: Scalars['timestamptz']['output'];
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  lastname: Scalars['String']['output'];
  licence_agreements: Scalars['jsonb']['output'];
  /** An array relationship */
  local_instruments: Array<Local_Instrument>;
  /** An aggregate relationship */
  local_instruments_aggregate: Local_Instrument_Aggregate;
  login_count: Scalars['Int']['output'];
  logout_requested_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  logout_requests: Array<Logout_Request>;
  /** An aggregate relationship */
  logout_requests_aggregate: Logout_Request_Aggregate;
  organisation: Scalars['Int']['output'];
  /** An object relationship */
  organisationByOrganisation: Organisation;
  package?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  page_setting?: Maybe<Page_Settings>;
  /** An array relationship */
  page_settings: Array<Page_Settings>;
  /** An aggregate relationship */
  page_settings_aggregate: Page_Settings_Aggregate;
  /** An array relationship */
  permissions: Array<Permission>;
  /** An aggregate relationship */
  permissions_aggregate: Permission_Aggregate;
  roles: Scalars['jsonb']['output'];
  /** An array relationship */
  sessions: Array<Session>;
  /** An aggregate relationship */
  sessions_aggregate: Session_Aggregate;
  /** An array relationship */
  shared_instruments: Array<Shared_Instrument>;
  /** An aggregate relationship */
  shared_instruments_aggregate: Shared_Instrument_Aggregate;
  username: Scalars['citext']['output'];
  /** An object relationship */
  userpackageByUser?: Maybe<Package>;
};


/** columns and relationships of "folio_user" */
export type Folio_UserLicence_AgreementsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "folio_user" */
export type Folio_UserLocal_InstrumentsArgs = {
  distinct_on?: InputMaybe<Array<Local_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Local_Instrument_Order_By>>;
  where?: InputMaybe<Local_Instrument_Bool_Exp>;
};


/** columns and relationships of "folio_user" */
export type Folio_UserLocal_Instruments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Local_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Local_Instrument_Order_By>>;
  where?: InputMaybe<Local_Instrument_Bool_Exp>;
};


/** columns and relationships of "folio_user" */
export type Folio_UserLogout_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Logout_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Logout_Request_Order_By>>;
  where?: InputMaybe<Logout_Request_Bool_Exp>;
};


/** columns and relationships of "folio_user" */
export type Folio_UserLogout_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Logout_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Logout_Request_Order_By>>;
  where?: InputMaybe<Logout_Request_Bool_Exp>;
};


/** columns and relationships of "folio_user" */
export type Folio_UserPage_SettingsArgs = {
  distinct_on?: InputMaybe<Array<Page_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Page_Settings_Order_By>>;
  where?: InputMaybe<Page_Settings_Bool_Exp>;
};


/** columns and relationships of "folio_user" */
export type Folio_UserPage_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Page_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Page_Settings_Order_By>>;
  where?: InputMaybe<Page_Settings_Bool_Exp>;
};


/** columns and relationships of "folio_user" */
export type Folio_UserPermissionsArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};


/** columns and relationships of "folio_user" */
export type Folio_UserPermissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};


/** columns and relationships of "folio_user" */
export type Folio_UserRolesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "folio_user" */
export type Folio_UserSessionsArgs = {
  distinct_on?: InputMaybe<Array<Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Session_Order_By>>;
  where?: InputMaybe<Session_Bool_Exp>;
};


/** columns and relationships of "folio_user" */
export type Folio_UserSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Session_Order_By>>;
  where?: InputMaybe<Session_Bool_Exp>;
};


/** columns and relationships of "folio_user" */
export type Folio_UserShared_InstrumentsArgs = {
  distinct_on?: InputMaybe<Array<Shared_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shared_Instrument_Order_By>>;
  where?: InputMaybe<Shared_Instrument_Bool_Exp>;
};


/** columns and relationships of "folio_user" */
export type Folio_UserShared_Instruments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Shared_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shared_Instrument_Order_By>>;
  where?: InputMaybe<Shared_Instrument_Bool_Exp>;
};

/** aggregated selection of "folio_user" */
export type Folio_User_Aggregate = {
  __typename?: 'folio_user_aggregate';
  aggregate?: Maybe<Folio_User_Aggregate_Fields>;
  nodes: Array<Folio_User>;
};

export type Folio_User_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Folio_User_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Folio_User_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Folio_User_Aggregate_Bool_Exp_Count>;
};

export type Folio_User_Aggregate_Bool_Exp_Bool_And = {
  arguments: Folio_User_Select_Column_Folio_User_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Folio_User_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Folio_User_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Folio_User_Select_Column_Folio_User_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Folio_User_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Folio_User_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Folio_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Folio_User_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "folio_user" */
export type Folio_User_Aggregate_Fields = {
  __typename?: 'folio_user_aggregate_fields';
  avg?: Maybe<Folio_User_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Folio_User_Max_Fields>;
  min?: Maybe<Folio_User_Min_Fields>;
  stddev?: Maybe<Folio_User_Stddev_Fields>;
  stddev_pop?: Maybe<Folio_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Folio_User_Stddev_Samp_Fields>;
  sum?: Maybe<Folio_User_Sum_Fields>;
  var_pop?: Maybe<Folio_User_Var_Pop_Fields>;
  var_samp?: Maybe<Folio_User_Var_Samp_Fields>;
  variance?: Maybe<Folio_User_Variance_Fields>;
};


/** aggregate fields of "folio_user" */
export type Folio_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Folio_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "folio_user" */
export type Folio_User_Aggregate_Order_By = {
  avg?: InputMaybe<Folio_User_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Folio_User_Max_Order_By>;
  min?: InputMaybe<Folio_User_Min_Order_By>;
  stddev?: InputMaybe<Folio_User_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Folio_User_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Folio_User_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Folio_User_Sum_Order_By>;
  var_pop?: InputMaybe<Folio_User_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Folio_User_Var_Samp_Order_By>;
  variance?: InputMaybe<Folio_User_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Folio_User_Append_Input = {
  licence_agreements?: InputMaybe<Scalars['jsonb']['input']>;
  roles?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "folio_user" */
export type Folio_User_Arr_Rel_Insert_Input = {
  data: Array<Folio_User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Folio_User_On_Conflict>;
};

/** aggregate avg on columns */
export type Folio_User_Avg_Fields = {
  __typename?: 'folio_user_avg_fields';
  login_count?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "folio_user" */
export type Folio_User_Avg_Order_By = {
  login_count?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** columns and relationships of "folio_user_basic_profile" */
export type Folio_User_Basic_Profile = {
  __typename?: 'folio_user_basic_profile';
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['citext']['output']>;
};

/** aggregated selection of "folio_user_basic_profile" */
export type Folio_User_Basic_Profile_Aggregate = {
  __typename?: 'folio_user_basic_profile_aggregate';
  aggregate?: Maybe<Folio_User_Basic_Profile_Aggregate_Fields>;
  nodes: Array<Folio_User_Basic_Profile>;
};

/** aggregate fields of "folio_user_basic_profile" */
export type Folio_User_Basic_Profile_Aggregate_Fields = {
  __typename?: 'folio_user_basic_profile_aggregate_fields';
  avg?: Maybe<Folio_User_Basic_Profile_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Folio_User_Basic_Profile_Max_Fields>;
  min?: Maybe<Folio_User_Basic_Profile_Min_Fields>;
  stddev?: Maybe<Folio_User_Basic_Profile_Stddev_Fields>;
  stddev_pop?: Maybe<Folio_User_Basic_Profile_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Folio_User_Basic_Profile_Stddev_Samp_Fields>;
  sum?: Maybe<Folio_User_Basic_Profile_Sum_Fields>;
  var_pop?: Maybe<Folio_User_Basic_Profile_Var_Pop_Fields>;
  var_samp?: Maybe<Folio_User_Basic_Profile_Var_Samp_Fields>;
  variance?: Maybe<Folio_User_Basic_Profile_Variance_Fields>;
};


/** aggregate fields of "folio_user_basic_profile" */
export type Folio_User_Basic_Profile_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Folio_User_Basic_Profile_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Folio_User_Basic_Profile_Avg_Fields = {
  __typename?: 'folio_user_basic_profile_avg_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "folio_user_basic_profile". All fields are combined with a logical 'AND'. */
export type Folio_User_Basic_Profile_Bool_Exp = {
  _and?: InputMaybe<Array<Folio_User_Basic_Profile_Bool_Exp>>;
  _not?: InputMaybe<Folio_User_Basic_Profile_Bool_Exp>;
  _or?: InputMaybe<Array<Folio_User_Basic_Profile_Bool_Exp>>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
  organisation?: InputMaybe<Int_Comparison_Exp>;
  username?: InputMaybe<Citext_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "folio_user_basic_profile" */
export type Folio_User_Basic_Profile_Inc_Input = {
  organisation?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "folio_user_basic_profile" */
export type Folio_User_Basic_Profile_Insert_Input = {
  firstname?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['citext']['input']>;
};

/** aggregate max on columns */
export type Folio_User_Basic_Profile_Max_Fields = {
  __typename?: 'folio_user_basic_profile_max_fields';
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['citext']['output']>;
};

/** aggregate min on columns */
export type Folio_User_Basic_Profile_Min_Fields = {
  __typename?: 'folio_user_basic_profile_min_fields';
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['citext']['output']>;
};

/** response of any mutation on the table "folio_user_basic_profile" */
export type Folio_User_Basic_Profile_Mutation_Response = {
  __typename?: 'folio_user_basic_profile_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Folio_User_Basic_Profile>;
};

/** input type for inserting object relation for remote table "folio_user_basic_profile" */
export type Folio_User_Basic_Profile_Obj_Rel_Insert_Input = {
  data: Folio_User_Basic_Profile_Insert_Input;
};

/** Ordering options when selecting data from "folio_user_basic_profile". */
export type Folio_User_Basic_Profile_Order_By = {
  firstname?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** select columns of table "folio_user_basic_profile" */
export enum Folio_User_Basic_Profile_Select_Column {
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  Organisation = 'organisation',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "folio_user_basic_profile" */
export type Folio_User_Basic_Profile_Set_Input = {
  firstname?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['citext']['input']>;
};

/** aggregate stddev on columns */
export type Folio_User_Basic_Profile_Stddev_Fields = {
  __typename?: 'folio_user_basic_profile_stddev_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Folio_User_Basic_Profile_Stddev_Pop_Fields = {
  __typename?: 'folio_user_basic_profile_stddev_pop_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Folio_User_Basic_Profile_Stddev_Samp_Fields = {
  __typename?: 'folio_user_basic_profile_stddev_samp_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "folio_user_basic_profile" */
export type Folio_User_Basic_Profile_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Folio_User_Basic_Profile_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Folio_User_Basic_Profile_Stream_Cursor_Value_Input = {
  firstname?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['citext']['input']>;
};

/** aggregate sum on columns */
export type Folio_User_Basic_Profile_Sum_Fields = {
  __typename?: 'folio_user_basic_profile_sum_fields';
  organisation?: Maybe<Scalars['Int']['output']>;
};

export type Folio_User_Basic_Profile_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Folio_User_Basic_Profile_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Folio_User_Basic_Profile_Set_Input>;
  /** filter the rows which have to be updated */
  where: Folio_User_Basic_Profile_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Folio_User_Basic_Profile_Var_Pop_Fields = {
  __typename?: 'folio_user_basic_profile_var_pop_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Folio_User_Basic_Profile_Var_Samp_Fields = {
  __typename?: 'folio_user_basic_profile_var_samp_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Folio_User_Basic_Profile_Variance_Fields = {
  __typename?: 'folio_user_basic_profile_variance_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "folio_user". All fields are combined with a logical 'AND'. */
export type Folio_User_Bool_Exp = {
  _and?: InputMaybe<Array<Folio_User_Bool_Exp>>;
  _not?: InputMaybe<Folio_User_Bool_Exp>;
  _or?: InputMaybe<Array<Folio_User_Bool_Exp>>;
  blocked?: InputMaybe<Boolean_Comparison_Exp>;
  created?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  hfc_card_setting?: InputMaybe<Hfc_Card_Settings_Bool_Exp>;
  hfc_user_setting?: InputMaybe<Hfc_User_Settings_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_login?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
  licence_agreements?: InputMaybe<Jsonb_Comparison_Exp>;
  local_instruments?: InputMaybe<Local_Instrument_Bool_Exp>;
  local_instruments_aggregate?: InputMaybe<Local_Instrument_Aggregate_Bool_Exp>;
  login_count?: InputMaybe<Int_Comparison_Exp>;
  logout_requested_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  logout_requests?: InputMaybe<Logout_Request_Bool_Exp>;
  logout_requests_aggregate?: InputMaybe<Logout_Request_Aggregate_Bool_Exp>;
  organisation?: InputMaybe<Int_Comparison_Exp>;
  organisationByOrganisation?: InputMaybe<Organisation_Bool_Exp>;
  package?: InputMaybe<Int_Comparison_Exp>;
  page_setting?: InputMaybe<Page_Settings_Bool_Exp>;
  page_settings?: InputMaybe<Page_Settings_Bool_Exp>;
  page_settings_aggregate?: InputMaybe<Page_Settings_Aggregate_Bool_Exp>;
  permissions?: InputMaybe<Permission_Bool_Exp>;
  permissions_aggregate?: InputMaybe<Permission_Aggregate_Bool_Exp>;
  roles?: InputMaybe<Jsonb_Comparison_Exp>;
  sessions?: InputMaybe<Session_Bool_Exp>;
  sessions_aggregate?: InputMaybe<Session_Aggregate_Bool_Exp>;
  shared_instruments?: InputMaybe<Shared_Instrument_Bool_Exp>;
  shared_instruments_aggregate?: InputMaybe<Shared_Instrument_Aggregate_Bool_Exp>;
  username?: InputMaybe<Citext_Comparison_Exp>;
  userpackageByUser?: InputMaybe<Package_Bool_Exp>;
};

/** unique or primary key constraints on table "folio_user" */
export enum Folio_User_Constraint {
  /** unique or primary key constraint on columns "organisation", "email" */
  FolioUserEmailOrganisationKey = 'folio_user_email_organisation_key',
  /** unique or primary key constraint on columns "id" */
  FolioUserPkey = 'folio_user_pkey',
  /** unique or primary key constraint on columns "username", "organisation" */
  FolioUserUsernameOrganisationKey = 'folio_user_username_organisation_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Folio_User_Delete_At_Path_Input = {
  licence_agreements?: InputMaybe<Array<Scalars['String']['input']>>;
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Folio_User_Delete_Elem_Input = {
  licence_agreements?: InputMaybe<Scalars['Int']['input']>;
  roles?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Folio_User_Delete_Key_Input = {
  licence_agreements?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "folio_user" */
export type Folio_User_Inc_Input = {
  login_count?: InputMaybe<Scalars['Int']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
  package?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "folio_user" */
export type Folio_User_Insert_Input = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  hfc_card_setting?: InputMaybe<Hfc_Card_Settings_Obj_Rel_Insert_Input>;
  hfc_user_setting?: InputMaybe<Hfc_User_Settings_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_login?: InputMaybe<Scalars['timestamptz']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  licence_agreements?: InputMaybe<Scalars['jsonb']['input']>;
  local_instruments?: InputMaybe<Local_Instrument_Arr_Rel_Insert_Input>;
  login_count?: InputMaybe<Scalars['Int']['input']>;
  logout_requested_at?: InputMaybe<Scalars['timestamptz']['input']>;
  logout_requests?: InputMaybe<Logout_Request_Arr_Rel_Insert_Input>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
  organisationByOrganisation?: InputMaybe<Organisation_Obj_Rel_Insert_Input>;
  package?: InputMaybe<Scalars['Int']['input']>;
  page_setting?: InputMaybe<Page_Settings_Obj_Rel_Insert_Input>;
  page_settings?: InputMaybe<Page_Settings_Arr_Rel_Insert_Input>;
  permissions?: InputMaybe<Permission_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<Scalars['jsonb']['input']>;
  sessions?: InputMaybe<Session_Arr_Rel_Insert_Input>;
  shared_instruments?: InputMaybe<Shared_Instrument_Arr_Rel_Insert_Input>;
  username?: InputMaybe<Scalars['citext']['input']>;
  userpackageByUser?: InputMaybe<Package_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Folio_User_Max_Fields = {
  __typename?: 'folio_user_max_fields';
  created?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_login?: Maybe<Scalars['timestamptz']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  login_count?: Maybe<Scalars['Int']['output']>;
  logout_requested_at?: Maybe<Scalars['timestamptz']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
  package?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['citext']['output']>;
};

/** order by max() on columns of table "folio_user" */
export type Folio_User_Max_Order_By = {
  created?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_login?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  login_count?: InputMaybe<Order_By>;
  logout_requested_at?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Folio_User_Min_Fields = {
  __typename?: 'folio_user_min_fields';
  created?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_login?: Maybe<Scalars['timestamptz']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  login_count?: Maybe<Scalars['Int']['output']>;
  logout_requested_at?: Maybe<Scalars['timestamptz']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
  package?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['citext']['output']>;
};

/** order by min() on columns of table "folio_user" */
export type Folio_User_Min_Order_By = {
  created?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_login?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  login_count?: InputMaybe<Order_By>;
  logout_requested_at?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "folio_user" */
export type Folio_User_Mutation_Response = {
  __typename?: 'folio_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Folio_User>;
};

/** input type for inserting object relation for remote table "folio_user" */
export type Folio_User_Obj_Rel_Insert_Input = {
  data: Folio_User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Folio_User_On_Conflict>;
};

/** on_conflict condition type for table "folio_user" */
export type Folio_User_On_Conflict = {
  constraint: Folio_User_Constraint;
  update_columns?: Array<Folio_User_Update_Column>;
  where?: InputMaybe<Folio_User_Bool_Exp>;
};

/** Ordering options when selecting data from "folio_user". */
export type Folio_User_Order_By = {
  blocked?: InputMaybe<Order_By>;
  created?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  hfc_card_setting?: InputMaybe<Hfc_Card_Settings_Order_By>;
  hfc_user_setting?: InputMaybe<Hfc_User_Settings_Order_By>;
  id?: InputMaybe<Order_By>;
  last_login?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  licence_agreements?: InputMaybe<Order_By>;
  local_instruments_aggregate?: InputMaybe<Local_Instrument_Aggregate_Order_By>;
  login_count?: InputMaybe<Order_By>;
  logout_requested_at?: InputMaybe<Order_By>;
  logout_requests_aggregate?: InputMaybe<Logout_Request_Aggregate_Order_By>;
  organisation?: InputMaybe<Order_By>;
  organisationByOrganisation?: InputMaybe<Organisation_Order_By>;
  package?: InputMaybe<Order_By>;
  page_setting?: InputMaybe<Page_Settings_Order_By>;
  page_settings_aggregate?: InputMaybe<Page_Settings_Aggregate_Order_By>;
  permissions_aggregate?: InputMaybe<Permission_Aggregate_Order_By>;
  roles?: InputMaybe<Order_By>;
  sessions_aggregate?: InputMaybe<Session_Aggregate_Order_By>;
  shared_instruments_aggregate?: InputMaybe<Shared_Instrument_Aggregate_Order_By>;
  username?: InputMaybe<Order_By>;
  userpackageByUser?: InputMaybe<Package_Order_By>;
};

/** primary key columns input for table: folio_user */
export type Folio_User_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Folio_User_Prepend_Input = {
  licence_agreements?: InputMaybe<Scalars['jsonb']['input']>;
  roles?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "folio_user" */
export enum Folio_User_Select_Column {
  /** column name */
  Blocked = 'blocked',
  /** column name */
  Created = 'created',
  /** column name */
  Email = 'email',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  LastLogin = 'last_login',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  LicenceAgreements = 'licence_agreements',
  /** column name */
  LoginCount = 'login_count',
  /** column name */
  LogoutRequestedAt = 'logout_requested_at',
  /** column name */
  Organisation = 'organisation',
  /** column name */
  Package = 'package',
  /** column name */
  Roles = 'roles',
  /** column name */
  Username = 'username'
}

/** select "folio_user_aggregate_bool_exp_bool_and_arguments_columns" columns of table "folio_user" */
export enum Folio_User_Select_Column_Folio_User_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Blocked = 'blocked'
}

/** select "folio_user_aggregate_bool_exp_bool_or_arguments_columns" columns of table "folio_user" */
export enum Folio_User_Select_Column_Folio_User_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Blocked = 'blocked'
}

/** input type for updating data in table "folio_user" */
export type Folio_User_Set_Input = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_login?: InputMaybe<Scalars['timestamptz']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  licence_agreements?: InputMaybe<Scalars['jsonb']['input']>;
  login_count?: InputMaybe<Scalars['Int']['input']>;
  logout_requested_at?: InputMaybe<Scalars['timestamptz']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
  package?: InputMaybe<Scalars['Int']['input']>;
  roles?: InputMaybe<Scalars['jsonb']['input']>;
  username?: InputMaybe<Scalars['citext']['input']>;
};

/** aggregate stddev on columns */
export type Folio_User_Stddev_Fields = {
  __typename?: 'folio_user_stddev_fields';
  login_count?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "folio_user" */
export type Folio_User_Stddev_Order_By = {
  login_count?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Folio_User_Stddev_Pop_Fields = {
  __typename?: 'folio_user_stddev_pop_fields';
  login_count?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "folio_user" */
export type Folio_User_Stddev_Pop_Order_By = {
  login_count?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Folio_User_Stddev_Samp_Fields = {
  __typename?: 'folio_user_stddev_samp_fields';
  login_count?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "folio_user" */
export type Folio_User_Stddev_Samp_Order_By = {
  login_count?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "folio_user" */
export type Folio_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Folio_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Folio_User_Stream_Cursor_Value_Input = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_login?: InputMaybe<Scalars['timestamptz']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  licence_agreements?: InputMaybe<Scalars['jsonb']['input']>;
  login_count?: InputMaybe<Scalars['Int']['input']>;
  logout_requested_at?: InputMaybe<Scalars['timestamptz']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
  package?: InputMaybe<Scalars['Int']['input']>;
  roles?: InputMaybe<Scalars['jsonb']['input']>;
  username?: InputMaybe<Scalars['citext']['input']>;
};

/** aggregate sum on columns */
export type Folio_User_Sum_Fields = {
  __typename?: 'folio_user_sum_fields';
  login_count?: Maybe<Scalars['Int']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
  package?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "folio_user" */
export type Folio_User_Sum_Order_By = {
  login_count?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** update columns of table "folio_user" */
export enum Folio_User_Update_Column {
  /** column name */
  Blocked = 'blocked',
  /** column name */
  Created = 'created',
  /** column name */
  Email = 'email',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  LastLogin = 'last_login',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  LicenceAgreements = 'licence_agreements',
  /** column name */
  LoginCount = 'login_count',
  /** column name */
  LogoutRequestedAt = 'logout_requested_at',
  /** column name */
  Organisation = 'organisation',
  /** column name */
  Package = 'package',
  /** column name */
  Roles = 'roles',
  /** column name */
  Username = 'username'
}

export type Folio_User_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Folio_User_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Folio_User_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Folio_User_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Folio_User_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Folio_User_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Folio_User_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Folio_User_Set_Input>;
  /** filter the rows which have to be updated */
  where: Folio_User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Folio_User_Var_Pop_Fields = {
  __typename?: 'folio_user_var_pop_fields';
  login_count?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "folio_user" */
export type Folio_User_Var_Pop_Order_By = {
  login_count?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Folio_User_Var_Samp_Fields = {
  __typename?: 'folio_user_var_samp_fields';
  login_count?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "folio_user" */
export type Folio_User_Var_Samp_Order_By = {
  login_count?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Folio_User_Variance_Fields = {
  __typename?: 'folio_user_variance_fields';
  login_count?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "folio_user" */
export type Folio_User_Variance_Order_By = {
  login_count?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** columns and relationships of "geographical_region" */
export type Geographical_Region = {
  __typename?: 'geographical_region';
  id: Scalars['Int']['output'];
  organisation?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  organisationByOrganisation?: Maybe<Organisation>;
  /** An array relationship */
  product_overrides: Array<Product_Overrides>;
  /** An aggregate relationship */
  product_overrides_aggregate: Product_Overrides_Aggregate;
  /** An array relationship */
  products: Array<Product>;
  /** An aggregate relationship */
  products_aggregate: Product_Aggregate;
  value?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "geographical_region" */
export type Geographical_RegionProduct_OverridesArgs = {
  distinct_on?: InputMaybe<Array<Product_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Overrides_Order_By>>;
  where?: InputMaybe<Product_Overrides_Bool_Exp>;
};


/** columns and relationships of "geographical_region" */
export type Geographical_RegionProduct_Overrides_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Overrides_Order_By>>;
  where?: InputMaybe<Product_Overrides_Bool_Exp>;
};


/** columns and relationships of "geographical_region" */
export type Geographical_RegionProductsArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


/** columns and relationships of "geographical_region" */
export type Geographical_RegionProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** aggregated selection of "geographical_region" */
export type Geographical_Region_Aggregate = {
  __typename?: 'geographical_region_aggregate';
  aggregate?: Maybe<Geographical_Region_Aggregate_Fields>;
  nodes: Array<Geographical_Region>;
};

export type Geographical_Region_Aggregate_Bool_Exp = {
  count?: InputMaybe<Geographical_Region_Aggregate_Bool_Exp_Count>;
};

export type Geographical_Region_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Geographical_Region_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Geographical_Region_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "geographical_region" */
export type Geographical_Region_Aggregate_Fields = {
  __typename?: 'geographical_region_aggregate_fields';
  avg?: Maybe<Geographical_Region_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Geographical_Region_Max_Fields>;
  min?: Maybe<Geographical_Region_Min_Fields>;
  stddev?: Maybe<Geographical_Region_Stddev_Fields>;
  stddev_pop?: Maybe<Geographical_Region_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Geographical_Region_Stddev_Samp_Fields>;
  sum?: Maybe<Geographical_Region_Sum_Fields>;
  var_pop?: Maybe<Geographical_Region_Var_Pop_Fields>;
  var_samp?: Maybe<Geographical_Region_Var_Samp_Fields>;
  variance?: Maybe<Geographical_Region_Variance_Fields>;
};


/** aggregate fields of "geographical_region" */
export type Geographical_Region_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Geographical_Region_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "geographical_region" */
export type Geographical_Region_Aggregate_Order_By = {
  avg?: InputMaybe<Geographical_Region_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Geographical_Region_Max_Order_By>;
  min?: InputMaybe<Geographical_Region_Min_Order_By>;
  stddev?: InputMaybe<Geographical_Region_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Geographical_Region_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Geographical_Region_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Geographical_Region_Sum_Order_By>;
  var_pop?: InputMaybe<Geographical_Region_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Geographical_Region_Var_Samp_Order_By>;
  variance?: InputMaybe<Geographical_Region_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "geographical_region" */
export type Geographical_Region_Arr_Rel_Insert_Input = {
  data: Array<Geographical_Region_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Geographical_Region_On_Conflict>;
};

/** aggregate avg on columns */
export type Geographical_Region_Avg_Fields = {
  __typename?: 'geographical_region_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "geographical_region" */
export type Geographical_Region_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "geographical_region". All fields are combined with a logical 'AND'. */
export type Geographical_Region_Bool_Exp = {
  _and?: InputMaybe<Array<Geographical_Region_Bool_Exp>>;
  _not?: InputMaybe<Geographical_Region_Bool_Exp>;
  _or?: InputMaybe<Array<Geographical_Region_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  organisation?: InputMaybe<Int_Comparison_Exp>;
  organisationByOrganisation?: InputMaybe<Organisation_Bool_Exp>;
  product_overrides?: InputMaybe<Product_Overrides_Bool_Exp>;
  product_overrides_aggregate?: InputMaybe<Product_Overrides_Aggregate_Bool_Exp>;
  products?: InputMaybe<Product_Bool_Exp>;
  products_aggregate?: InputMaybe<Product_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "geographical_region" */
export enum Geographical_Region_Constraint {
  /** unique or primary key constraint on columns "value", "organisation" */
  GeographicalRegionOrganisationValueKey = 'geographical_region_organisation_value_key',
  /** unique or primary key constraint on columns "id" */
  GeographicalRegionPkey = 'geographical_region_pkey'
}

/** input type for incrementing numeric columns in table "geographical_region" */
export type Geographical_Region_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "geographical_region" */
export type Geographical_Region_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
  organisationByOrganisation?: InputMaybe<Organisation_Obj_Rel_Insert_Input>;
  product_overrides?: InputMaybe<Product_Overrides_Arr_Rel_Insert_Input>;
  products?: InputMaybe<Product_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Geographical_Region_Max_Fields = {
  __typename?: 'geographical_region_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "geographical_region" */
export type Geographical_Region_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Geographical_Region_Min_Fields = {
  __typename?: 'geographical_region_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "geographical_region" */
export type Geographical_Region_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "geographical_region" */
export type Geographical_Region_Mutation_Response = {
  __typename?: 'geographical_region_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Geographical_Region>;
};

/** input type for inserting object relation for remote table "geographical_region" */
export type Geographical_Region_Obj_Rel_Insert_Input = {
  data: Geographical_Region_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Geographical_Region_On_Conflict>;
};

/** on_conflict condition type for table "geographical_region" */
export type Geographical_Region_On_Conflict = {
  constraint: Geographical_Region_Constraint;
  update_columns?: Array<Geographical_Region_Update_Column>;
  where?: InputMaybe<Geographical_Region_Bool_Exp>;
};

/** Ordering options when selecting data from "geographical_region". */
export type Geographical_Region_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  organisationByOrganisation?: InputMaybe<Organisation_Order_By>;
  product_overrides_aggregate?: InputMaybe<Product_Overrides_Aggregate_Order_By>;
  products_aggregate?: InputMaybe<Product_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: geographical_region */
export type Geographical_Region_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "geographical_region" */
export enum Geographical_Region_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Organisation = 'organisation',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "geographical_region" */
export type Geographical_Region_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Geographical_Region_Stddev_Fields = {
  __typename?: 'geographical_region_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "geographical_region" */
export type Geographical_Region_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Geographical_Region_Stddev_Pop_Fields = {
  __typename?: 'geographical_region_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "geographical_region" */
export type Geographical_Region_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Geographical_Region_Stddev_Samp_Fields = {
  __typename?: 'geographical_region_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "geographical_region" */
export type Geographical_Region_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "geographical_region" */
export type Geographical_Region_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Geographical_Region_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Geographical_Region_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Geographical_Region_Sum_Fields = {
  __typename?: 'geographical_region_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "geographical_region" */
export type Geographical_Region_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** update columns of table "geographical_region" */
export enum Geographical_Region_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Organisation = 'organisation',
  /** column name */
  Value = 'value'
}

export type Geographical_Region_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Geographical_Region_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Geographical_Region_Set_Input>;
  /** filter the rows which have to be updated */
  where: Geographical_Region_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Geographical_Region_Var_Pop_Fields = {
  __typename?: 'geographical_region_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "geographical_region" */
export type Geographical_Region_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Geographical_Region_Var_Samp_Fields = {
  __typename?: 'geographical_region_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "geographical_region" */
export type Geographical_Region_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Geographical_Region_Variance_Fields = {
  __typename?: 'geographical_region_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "geographical_region" */
export type Geographical_Region_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** columns and relationships of "global_instrument" */
export type Global_Instrument = {
  __typename?: 'global_instrument';
  edited_at: Scalars['timestamptz']['output'];
  edited_by: Scalars['String']['output'];
  /** An object relationship */
  globalProductByGlobalProduct: Global_Product;
  global_product: Scalars['uuid']['output'];
  id: Scalars['Int']['output'];
  month: Scalars['date']['output'];
  shared_at: Scalars['timestamptz']['output'];
  value?: Maybe<Scalars['numeric']['output']>;
};

/** aggregated selection of "global_instrument" */
export type Global_Instrument_Aggregate = {
  __typename?: 'global_instrument_aggregate';
  aggregate?: Maybe<Global_Instrument_Aggregate_Fields>;
  nodes: Array<Global_Instrument>;
};

export type Global_Instrument_Aggregate_Bool_Exp = {
  count?: InputMaybe<Global_Instrument_Aggregate_Bool_Exp_Count>;
};

export type Global_Instrument_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Global_Instrument_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Global_Instrument_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "global_instrument" */
export type Global_Instrument_Aggregate_Fields = {
  __typename?: 'global_instrument_aggregate_fields';
  avg?: Maybe<Global_Instrument_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Global_Instrument_Max_Fields>;
  min?: Maybe<Global_Instrument_Min_Fields>;
  stddev?: Maybe<Global_Instrument_Stddev_Fields>;
  stddev_pop?: Maybe<Global_Instrument_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Global_Instrument_Stddev_Samp_Fields>;
  sum?: Maybe<Global_Instrument_Sum_Fields>;
  var_pop?: Maybe<Global_Instrument_Var_Pop_Fields>;
  var_samp?: Maybe<Global_Instrument_Var_Samp_Fields>;
  variance?: Maybe<Global_Instrument_Variance_Fields>;
};


/** aggregate fields of "global_instrument" */
export type Global_Instrument_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Global_Instrument_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "global_instrument" */
export type Global_Instrument_Aggregate_Order_By = {
  avg?: InputMaybe<Global_Instrument_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Global_Instrument_Max_Order_By>;
  min?: InputMaybe<Global_Instrument_Min_Order_By>;
  stddev?: InputMaybe<Global_Instrument_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Global_Instrument_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Global_Instrument_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Global_Instrument_Sum_Order_By>;
  var_pop?: InputMaybe<Global_Instrument_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Global_Instrument_Var_Samp_Order_By>;
  variance?: InputMaybe<Global_Instrument_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "global_instrument" */
export type Global_Instrument_Arr_Rel_Insert_Input = {
  data: Array<Global_Instrument_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Global_Instrument_On_Conflict>;
};

/** aggregate avg on columns */
export type Global_Instrument_Avg_Fields = {
  __typename?: 'global_instrument_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "global_instrument" */
export type Global_Instrument_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "global_instrument". All fields are combined with a logical 'AND'. */
export type Global_Instrument_Bool_Exp = {
  _and?: InputMaybe<Array<Global_Instrument_Bool_Exp>>;
  _not?: InputMaybe<Global_Instrument_Bool_Exp>;
  _or?: InputMaybe<Array<Global_Instrument_Bool_Exp>>;
  edited_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  edited_by?: InputMaybe<String_Comparison_Exp>;
  globalProductByGlobalProduct?: InputMaybe<Global_Product_Bool_Exp>;
  global_product?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  month?: InputMaybe<Date_Comparison_Exp>;
  shared_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "global_instrument" */
export enum Global_Instrument_Constraint {
  /** unique or primary key constraint on columns "id" */
  GlobalInstrumentIdKey = 'global_instrument_id_key',
  /** unique or primary key constraint on columns "global_product", "month" */
  GlobalInstrumentPkey = 'global_instrument_pkey'
}

/** input type for incrementing numeric columns in table "global_instrument" */
export type Global_Instrument_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "global_instrument" */
export type Global_Instrument_Insert_Input = {
  edited_at?: InputMaybe<Scalars['timestamptz']['input']>;
  edited_by?: InputMaybe<Scalars['String']['input']>;
  globalProductByGlobalProduct?: InputMaybe<Global_Product_Obj_Rel_Insert_Input>;
  global_product?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  month?: InputMaybe<Scalars['date']['input']>;
  shared_at?: InputMaybe<Scalars['timestamptz']['input']>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Global_Instrument_Max_Fields = {
  __typename?: 'global_instrument_max_fields';
  edited_at?: Maybe<Scalars['timestamptz']['output']>;
  edited_by?: Maybe<Scalars['String']['output']>;
  global_product?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['date']['output']>;
  shared_at?: Maybe<Scalars['timestamptz']['output']>;
  value?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "global_instrument" */
export type Global_Instrument_Max_Order_By = {
  edited_at?: InputMaybe<Order_By>;
  edited_by?: InputMaybe<Order_By>;
  global_product?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  shared_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Global_Instrument_Min_Fields = {
  __typename?: 'global_instrument_min_fields';
  edited_at?: Maybe<Scalars['timestamptz']['output']>;
  edited_by?: Maybe<Scalars['String']['output']>;
  global_product?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['date']['output']>;
  shared_at?: Maybe<Scalars['timestamptz']['output']>;
  value?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "global_instrument" */
export type Global_Instrument_Min_Order_By = {
  edited_at?: InputMaybe<Order_By>;
  edited_by?: InputMaybe<Order_By>;
  global_product?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  shared_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "global_instrument" */
export type Global_Instrument_Mutation_Response = {
  __typename?: 'global_instrument_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Global_Instrument>;
};

/** on_conflict condition type for table "global_instrument" */
export type Global_Instrument_On_Conflict = {
  constraint: Global_Instrument_Constraint;
  update_columns?: Array<Global_Instrument_Update_Column>;
  where?: InputMaybe<Global_Instrument_Bool_Exp>;
};

/** Ordering options when selecting data from "global_instrument". */
export type Global_Instrument_Order_By = {
  edited_at?: InputMaybe<Order_By>;
  edited_by?: InputMaybe<Order_By>;
  globalProductByGlobalProduct?: InputMaybe<Global_Product_Order_By>;
  global_product?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  shared_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: global_instrument */
export type Global_Instrument_Pk_Columns_Input = {
  global_product: Scalars['uuid']['input'];
  month: Scalars['date']['input'];
};

/** select columns of table "global_instrument" */
export enum Global_Instrument_Select_Column {
  /** column name */
  EditedAt = 'edited_at',
  /** column name */
  EditedBy = 'edited_by',
  /** column name */
  GlobalProduct = 'global_product',
  /** column name */
  Id = 'id',
  /** column name */
  Month = 'month',
  /** column name */
  SharedAt = 'shared_at',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "global_instrument" */
export type Global_Instrument_Set_Input = {
  edited_at?: InputMaybe<Scalars['timestamptz']['input']>;
  edited_by?: InputMaybe<Scalars['String']['input']>;
  global_product?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  month?: InputMaybe<Scalars['date']['input']>;
  shared_at?: InputMaybe<Scalars['timestamptz']['input']>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Global_Instrument_Stddev_Fields = {
  __typename?: 'global_instrument_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "global_instrument" */
export type Global_Instrument_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Global_Instrument_Stddev_Pop_Fields = {
  __typename?: 'global_instrument_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "global_instrument" */
export type Global_Instrument_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Global_Instrument_Stddev_Samp_Fields = {
  __typename?: 'global_instrument_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "global_instrument" */
export type Global_Instrument_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "global_instrument" */
export type Global_Instrument_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Global_Instrument_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Global_Instrument_Stream_Cursor_Value_Input = {
  edited_at?: InputMaybe<Scalars['timestamptz']['input']>;
  edited_by?: InputMaybe<Scalars['String']['input']>;
  global_product?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  month?: InputMaybe<Scalars['date']['input']>;
  shared_at?: InputMaybe<Scalars['timestamptz']['input']>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Global_Instrument_Sum_Fields = {
  __typename?: 'global_instrument_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "global_instrument" */
export type Global_Instrument_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** update columns of table "global_instrument" */
export enum Global_Instrument_Update_Column {
  /** column name */
  EditedAt = 'edited_at',
  /** column name */
  EditedBy = 'edited_by',
  /** column name */
  GlobalProduct = 'global_product',
  /** column name */
  Id = 'id',
  /** column name */
  Month = 'month',
  /** column name */
  SharedAt = 'shared_at',
  /** column name */
  Value = 'value'
}

export type Global_Instrument_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Global_Instrument_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Global_Instrument_Set_Input>;
  /** filter the rows which have to be updated */
  where: Global_Instrument_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Global_Instrument_Var_Pop_Fields = {
  __typename?: 'global_instrument_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "global_instrument" */
export type Global_Instrument_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Global_Instrument_Var_Samp_Fields = {
  __typename?: 'global_instrument_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "global_instrument" */
export type Global_Instrument_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Global_Instrument_Variance_Fields = {
  __typename?: 'global_instrument_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "global_instrument" */
export type Global_Instrument_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** columns and relationships of "global_package" */
export type Global_Package = {
  __typename?: 'global_package';
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  global_permissions: Array<Global_Permission>;
  /** An aggregate relationship */
  global_permissions_aggregate: Global_Permission_Aggregate;
  /** An array relationship */
  global_products: Array<Global_Product>;
  /** An aggregate relationship */
  global_products_aggregate: Global_Product_Aggregate;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  package_type?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  sourceBySource?: Maybe<Source>;
};


/** columns and relationships of "global_package" */
export type Global_PackageGlobal_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<Global_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Permission_Order_By>>;
  where?: InputMaybe<Global_Permission_Bool_Exp>;
};


/** columns and relationships of "global_package" */
export type Global_PackageGlobal_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Global_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Permission_Order_By>>;
  where?: InputMaybe<Global_Permission_Bool_Exp>;
};


/** columns and relationships of "global_package" */
export type Global_PackageGlobal_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Global_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Product_Order_By>>;
  where?: InputMaybe<Global_Product_Bool_Exp>;
};


/** columns and relationships of "global_package" */
export type Global_PackageGlobal_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Global_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Product_Order_By>>;
  where?: InputMaybe<Global_Product_Bool_Exp>;
};

/** aggregated selection of "global_package" */
export type Global_Package_Aggregate = {
  __typename?: 'global_package_aggregate';
  aggregate?: Maybe<Global_Package_Aggregate_Fields>;
  nodes: Array<Global_Package>;
};

/** aggregate fields of "global_package" */
export type Global_Package_Aggregate_Fields = {
  __typename?: 'global_package_aggregate_fields';
  avg?: Maybe<Global_Package_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Global_Package_Max_Fields>;
  min?: Maybe<Global_Package_Min_Fields>;
  stddev?: Maybe<Global_Package_Stddev_Fields>;
  stddev_pop?: Maybe<Global_Package_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Global_Package_Stddev_Samp_Fields>;
  sum?: Maybe<Global_Package_Sum_Fields>;
  var_pop?: Maybe<Global_Package_Var_Pop_Fields>;
  var_samp?: Maybe<Global_Package_Var_Samp_Fields>;
  variance?: Maybe<Global_Package_Variance_Fields>;
};


/** aggregate fields of "global_package" */
export type Global_Package_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Global_Package_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Global_Package_Avg_Fields = {
  __typename?: 'global_package_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "global_package". All fields are combined with a logical 'AND'. */
export type Global_Package_Bool_Exp = {
  _and?: InputMaybe<Array<Global_Package_Bool_Exp>>;
  _not?: InputMaybe<Global_Package_Bool_Exp>;
  _or?: InputMaybe<Array<Global_Package_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  global_permissions?: InputMaybe<Global_Permission_Bool_Exp>;
  global_permissions_aggregate?: InputMaybe<Global_Permission_Aggregate_Bool_Exp>;
  global_products?: InputMaybe<Global_Product_Bool_Exp>;
  global_products_aggregate?: InputMaybe<Global_Product_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  package_type?: InputMaybe<String_Comparison_Exp>;
  source?: InputMaybe<Int_Comparison_Exp>;
  sourceBySource?: InputMaybe<Source_Bool_Exp>;
};

/** unique or primary key constraints on table "global_package" */
export enum Global_Package_Constraint {
  /** unique or primary key constraint on columns "id" */
  GlobalPackagePkey = 'global_package_pkey'
}

/** input type for incrementing numeric columns in table "global_package" */
export type Global_Package_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "global_package" */
export type Global_Package_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  global_permissions?: InputMaybe<Global_Permission_Arr_Rel_Insert_Input>;
  global_products?: InputMaybe<Global_Product_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  package_type?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
  sourceBySource?: InputMaybe<Source_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Global_Package_Max_Fields = {
  __typename?: 'global_package_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  package_type?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Global_Package_Min_Fields = {
  __typename?: 'global_package_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  package_type?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "global_package" */
export type Global_Package_Mutation_Response = {
  __typename?: 'global_package_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Global_Package>;
};

/** input type for inserting object relation for remote table "global_package" */
export type Global_Package_Obj_Rel_Insert_Input = {
  data: Global_Package_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Global_Package_On_Conflict>;
};

/** on_conflict condition type for table "global_package" */
export type Global_Package_On_Conflict = {
  constraint: Global_Package_Constraint;
  update_columns?: Array<Global_Package_Update_Column>;
  where?: InputMaybe<Global_Package_Bool_Exp>;
};

/** Ordering options when selecting data from "global_package". */
export type Global_Package_Order_By = {
  description?: InputMaybe<Order_By>;
  global_permissions_aggregate?: InputMaybe<Global_Permission_Aggregate_Order_By>;
  global_products_aggregate?: InputMaybe<Global_Product_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  package_type?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  sourceBySource?: InputMaybe<Source_Order_By>;
};

/** primary key columns input for table: global_package */
export type Global_Package_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "global_package" */
export enum Global_Package_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PackageType = 'package_type',
  /** column name */
  Source = 'source'
}

/** input type for updating data in table "global_package" */
export type Global_Package_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  package_type?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Global_Package_Stddev_Fields = {
  __typename?: 'global_package_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Global_Package_Stddev_Pop_Fields = {
  __typename?: 'global_package_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Global_Package_Stddev_Samp_Fields = {
  __typename?: 'global_package_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "global_package" */
export type Global_Package_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Global_Package_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Global_Package_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  package_type?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Global_Package_Sum_Fields = {
  __typename?: 'global_package_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "global_package" */
export enum Global_Package_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PackageType = 'package_type',
  /** column name */
  Source = 'source'
}

export type Global_Package_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Global_Package_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Global_Package_Set_Input>;
  /** filter the rows which have to be updated */
  where: Global_Package_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Global_Package_Var_Pop_Fields = {
  __typename?: 'global_package_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Global_Package_Var_Samp_Fields = {
  __typename?: 'global_package_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Global_Package_Variance_Fields = {
  __typename?: 'global_package_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "global_permission" */
export type Global_Permission = {
  __typename?: 'global_permission';
  folio_user: Scalars['String']['output'];
  /** An object relationship */
  globalPackageByGlobalPackage: Global_Package;
  global_package: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  permission: User_Right_Enum;
  /** An object relationship */
  user_right: User_Right;
};

/** aggregated selection of "global_permission" */
export type Global_Permission_Aggregate = {
  __typename?: 'global_permission_aggregate';
  aggregate?: Maybe<Global_Permission_Aggregate_Fields>;
  nodes: Array<Global_Permission>;
};

export type Global_Permission_Aggregate_Bool_Exp = {
  count?: InputMaybe<Global_Permission_Aggregate_Bool_Exp_Count>;
};

export type Global_Permission_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Global_Permission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Global_Permission_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "global_permission" */
export type Global_Permission_Aggregate_Fields = {
  __typename?: 'global_permission_aggregate_fields';
  avg?: Maybe<Global_Permission_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Global_Permission_Max_Fields>;
  min?: Maybe<Global_Permission_Min_Fields>;
  stddev?: Maybe<Global_Permission_Stddev_Fields>;
  stddev_pop?: Maybe<Global_Permission_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Global_Permission_Stddev_Samp_Fields>;
  sum?: Maybe<Global_Permission_Sum_Fields>;
  var_pop?: Maybe<Global_Permission_Var_Pop_Fields>;
  var_samp?: Maybe<Global_Permission_Var_Samp_Fields>;
  variance?: Maybe<Global_Permission_Variance_Fields>;
};


/** aggregate fields of "global_permission" */
export type Global_Permission_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Global_Permission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "global_permission" */
export type Global_Permission_Aggregate_Order_By = {
  avg?: InputMaybe<Global_Permission_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Global_Permission_Max_Order_By>;
  min?: InputMaybe<Global_Permission_Min_Order_By>;
  stddev?: InputMaybe<Global_Permission_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Global_Permission_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Global_Permission_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Global_Permission_Sum_Order_By>;
  var_pop?: InputMaybe<Global_Permission_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Global_Permission_Var_Samp_Order_By>;
  variance?: InputMaybe<Global_Permission_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "global_permission" */
export type Global_Permission_Arr_Rel_Insert_Input = {
  data: Array<Global_Permission_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Global_Permission_On_Conflict>;
};

/** aggregate avg on columns */
export type Global_Permission_Avg_Fields = {
  __typename?: 'global_permission_avg_fields';
  global_package?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "global_permission" */
export type Global_Permission_Avg_Order_By = {
  global_package?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "global_permission". All fields are combined with a logical 'AND'. */
export type Global_Permission_Bool_Exp = {
  _and?: InputMaybe<Array<Global_Permission_Bool_Exp>>;
  _not?: InputMaybe<Global_Permission_Bool_Exp>;
  _or?: InputMaybe<Array<Global_Permission_Bool_Exp>>;
  folio_user?: InputMaybe<String_Comparison_Exp>;
  globalPackageByGlobalPackage?: InputMaybe<Global_Package_Bool_Exp>;
  global_package?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  permission?: InputMaybe<User_Right_Enum_Comparison_Exp>;
  user_right?: InputMaybe<User_Right_Bool_Exp>;
};

/** unique or primary key constraints on table "global_permission" */
export enum Global_Permission_Constraint {
  /** unique or primary key constraint on columns "id" */
  GlobalPermissionIdKey = 'global_permission_id_key',
  /** unique or primary key constraint on columns "folio_user", "global_package" */
  GlobalPermissionPkey = 'global_permission_pkey'
}

/** input type for incrementing numeric columns in table "global_permission" */
export type Global_Permission_Inc_Input = {
  global_package?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "global_permission" */
export type Global_Permission_Insert_Input = {
  folio_user?: InputMaybe<Scalars['String']['input']>;
  globalPackageByGlobalPackage?: InputMaybe<Global_Package_Obj_Rel_Insert_Input>;
  global_package?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  permission?: InputMaybe<User_Right_Enum>;
  user_right?: InputMaybe<User_Right_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Global_Permission_Max_Fields = {
  __typename?: 'global_permission_max_fields';
  folio_user?: Maybe<Scalars['String']['output']>;
  global_package?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "global_permission" */
export type Global_Permission_Max_Order_By = {
  folio_user?: InputMaybe<Order_By>;
  global_package?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Global_Permission_Min_Fields = {
  __typename?: 'global_permission_min_fields';
  folio_user?: Maybe<Scalars['String']['output']>;
  global_package?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "global_permission" */
export type Global_Permission_Min_Order_By = {
  folio_user?: InputMaybe<Order_By>;
  global_package?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "global_permission" */
export type Global_Permission_Mutation_Response = {
  __typename?: 'global_permission_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Global_Permission>;
};

/** on_conflict condition type for table "global_permission" */
export type Global_Permission_On_Conflict = {
  constraint: Global_Permission_Constraint;
  update_columns?: Array<Global_Permission_Update_Column>;
  where?: InputMaybe<Global_Permission_Bool_Exp>;
};

/** Ordering options when selecting data from "global_permission". */
export type Global_Permission_Order_By = {
  folio_user?: InputMaybe<Order_By>;
  globalPackageByGlobalPackage?: InputMaybe<Global_Package_Order_By>;
  global_package?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  permission?: InputMaybe<Order_By>;
  user_right?: InputMaybe<User_Right_Order_By>;
};

/** primary key columns input for table: global_permission */
export type Global_Permission_Pk_Columns_Input = {
  folio_user: Scalars['String']['input'];
  global_package: Scalars['Int']['input'];
};

/** select columns of table "global_permission" */
export enum Global_Permission_Select_Column {
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  GlobalPackage = 'global_package',
  /** column name */
  Id = 'id',
  /** column name */
  Permission = 'permission'
}

/** input type for updating data in table "global_permission" */
export type Global_Permission_Set_Input = {
  folio_user?: InputMaybe<Scalars['String']['input']>;
  global_package?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  permission?: InputMaybe<User_Right_Enum>;
};

/** aggregate stddev on columns */
export type Global_Permission_Stddev_Fields = {
  __typename?: 'global_permission_stddev_fields';
  global_package?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "global_permission" */
export type Global_Permission_Stddev_Order_By = {
  global_package?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Global_Permission_Stddev_Pop_Fields = {
  __typename?: 'global_permission_stddev_pop_fields';
  global_package?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "global_permission" */
export type Global_Permission_Stddev_Pop_Order_By = {
  global_package?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Global_Permission_Stddev_Samp_Fields = {
  __typename?: 'global_permission_stddev_samp_fields';
  global_package?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "global_permission" */
export type Global_Permission_Stddev_Samp_Order_By = {
  global_package?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "global_permission" */
export type Global_Permission_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Global_Permission_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Global_Permission_Stream_Cursor_Value_Input = {
  folio_user?: InputMaybe<Scalars['String']['input']>;
  global_package?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  permission?: InputMaybe<User_Right_Enum>;
};

/** aggregate sum on columns */
export type Global_Permission_Sum_Fields = {
  __typename?: 'global_permission_sum_fields';
  global_package?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "global_permission" */
export type Global_Permission_Sum_Order_By = {
  global_package?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "global_permission" */
export enum Global_Permission_Update_Column {
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  GlobalPackage = 'global_package',
  /** column name */
  Id = 'id',
  /** column name */
  Permission = 'permission'
}

export type Global_Permission_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Global_Permission_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Global_Permission_Set_Input>;
  /** filter the rows which have to be updated */
  where: Global_Permission_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Global_Permission_Var_Pop_Fields = {
  __typename?: 'global_permission_var_pop_fields';
  global_package?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "global_permission" */
export type Global_Permission_Var_Pop_Order_By = {
  global_package?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Global_Permission_Var_Samp_Fields = {
  __typename?: 'global_permission_var_samp_fields';
  global_package?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "global_permission" */
export type Global_Permission_Var_Samp_Order_By = {
  global_package?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Global_Permission_Variance_Fields = {
  __typename?: 'global_permission_variance_fields';
  global_package?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "global_permission" */
export type Global_Permission_Variance_Order_By = {
  global_package?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "global_product" */
export type Global_Product = {
  __typename?: 'global_product';
  /** An object relationship */
  commodityGroupByCommodityGroup?: Maybe<Commodity_Group>;
  commodity_group?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  geographicalRegionByGeographicalRegion?: Maybe<Geographical_Region>;
  geographical_region?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  globalPackageByGlobalPackage: Global_Package;
  /** An array relationship */
  global_instruments: Array<Global_Instrument>;
  /** An aggregate relationship */
  global_instruments_aggregate: Global_Instrument_Aggregate;
  global_package: Scalars['Int']['output'];
  /** An array relationship */
  global_product_configs: Array<Global_Product_Config>;
  /** An aggregate relationship */
  global_product_configs_aggregate: Global_Product_Config_Aggregate;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  product_uom: Product_Uom;
  uom: Product_Uom_Enum;
};


/** columns and relationships of "global_product" */
export type Global_ProductGlobal_InstrumentsArgs = {
  distinct_on?: InputMaybe<Array<Global_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Instrument_Order_By>>;
  where?: InputMaybe<Global_Instrument_Bool_Exp>;
};


/** columns and relationships of "global_product" */
export type Global_ProductGlobal_Instruments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Global_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Instrument_Order_By>>;
  where?: InputMaybe<Global_Instrument_Bool_Exp>;
};


/** columns and relationships of "global_product" */
export type Global_ProductGlobal_Product_ConfigsArgs = {
  distinct_on?: InputMaybe<Array<Global_Product_Config_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Product_Config_Order_By>>;
  where?: InputMaybe<Global_Product_Config_Bool_Exp>;
};


/** columns and relationships of "global_product" */
export type Global_ProductGlobal_Product_Configs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Global_Product_Config_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Product_Config_Order_By>>;
  where?: InputMaybe<Global_Product_Config_Bool_Exp>;
};

/** aggregated selection of "global_product" */
export type Global_Product_Aggregate = {
  __typename?: 'global_product_aggregate';
  aggregate?: Maybe<Global_Product_Aggregate_Fields>;
  nodes: Array<Global_Product>;
};

export type Global_Product_Aggregate_Bool_Exp = {
  count?: InputMaybe<Global_Product_Aggregate_Bool_Exp_Count>;
};

export type Global_Product_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Global_Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Global_Product_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "global_product" */
export type Global_Product_Aggregate_Fields = {
  __typename?: 'global_product_aggregate_fields';
  avg?: Maybe<Global_Product_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Global_Product_Max_Fields>;
  min?: Maybe<Global_Product_Min_Fields>;
  stddev?: Maybe<Global_Product_Stddev_Fields>;
  stddev_pop?: Maybe<Global_Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Global_Product_Stddev_Samp_Fields>;
  sum?: Maybe<Global_Product_Sum_Fields>;
  var_pop?: Maybe<Global_Product_Var_Pop_Fields>;
  var_samp?: Maybe<Global_Product_Var_Samp_Fields>;
  variance?: Maybe<Global_Product_Variance_Fields>;
};


/** aggregate fields of "global_product" */
export type Global_Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Global_Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "global_product" */
export type Global_Product_Aggregate_Order_By = {
  avg?: InputMaybe<Global_Product_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Global_Product_Max_Order_By>;
  min?: InputMaybe<Global_Product_Min_Order_By>;
  stddev?: InputMaybe<Global_Product_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Global_Product_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Global_Product_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Global_Product_Sum_Order_By>;
  var_pop?: InputMaybe<Global_Product_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Global_Product_Var_Samp_Order_By>;
  variance?: InputMaybe<Global_Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "global_product" */
export type Global_Product_Arr_Rel_Insert_Input = {
  data: Array<Global_Product_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Global_Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Global_Product_Avg_Fields = {
  __typename?: 'global_product_avg_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  global_package?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "global_product" */
export type Global_Product_Avg_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  global_package?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "global_product". All fields are combined with a logical 'AND'. */
export type Global_Product_Bool_Exp = {
  _and?: InputMaybe<Array<Global_Product_Bool_Exp>>;
  _not?: InputMaybe<Global_Product_Bool_Exp>;
  _or?: InputMaybe<Array<Global_Product_Bool_Exp>>;
  commodityGroupByCommodityGroup?: InputMaybe<Commodity_Group_Bool_Exp>;
  commodity_group?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  geographicalRegionByGeographicalRegion?: InputMaybe<Geographical_Region_Bool_Exp>;
  geographical_region?: InputMaybe<Int_Comparison_Exp>;
  globalPackageByGlobalPackage?: InputMaybe<Global_Package_Bool_Exp>;
  global_instruments?: InputMaybe<Global_Instrument_Bool_Exp>;
  global_instruments_aggregate?: InputMaybe<Global_Instrument_Aggregate_Bool_Exp>;
  global_package?: InputMaybe<Int_Comparison_Exp>;
  global_product_configs?: InputMaybe<Global_Product_Config_Bool_Exp>;
  global_product_configs_aggregate?: InputMaybe<Global_Product_Config_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  product_uom?: InputMaybe<Product_Uom_Bool_Exp>;
  uom?: InputMaybe<Product_Uom_Enum_Comparison_Exp>;
};

/** Product configs for global configs */
export type Global_Product_Config = {
  __typename?: 'global_product_config';
  created_at: Scalars['timestamptz']['output'];
  formula?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  global_product: Global_Product;
  id: Scalars['Int']['output'];
  product: Scalars['uuid']['output'];
  relative_month: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "global_product_config" */
export type Global_Product_Config_Aggregate = {
  __typename?: 'global_product_config_aggregate';
  aggregate?: Maybe<Global_Product_Config_Aggregate_Fields>;
  nodes: Array<Global_Product_Config>;
};

export type Global_Product_Config_Aggregate_Bool_Exp = {
  count?: InputMaybe<Global_Product_Config_Aggregate_Bool_Exp_Count>;
};

export type Global_Product_Config_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Global_Product_Config_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Global_Product_Config_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "global_product_config" */
export type Global_Product_Config_Aggregate_Fields = {
  __typename?: 'global_product_config_aggregate_fields';
  avg?: Maybe<Global_Product_Config_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Global_Product_Config_Max_Fields>;
  min?: Maybe<Global_Product_Config_Min_Fields>;
  stddev?: Maybe<Global_Product_Config_Stddev_Fields>;
  stddev_pop?: Maybe<Global_Product_Config_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Global_Product_Config_Stddev_Samp_Fields>;
  sum?: Maybe<Global_Product_Config_Sum_Fields>;
  var_pop?: Maybe<Global_Product_Config_Var_Pop_Fields>;
  var_samp?: Maybe<Global_Product_Config_Var_Samp_Fields>;
  variance?: Maybe<Global_Product_Config_Variance_Fields>;
};


/** aggregate fields of "global_product_config" */
export type Global_Product_Config_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Global_Product_Config_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "global_product_config" */
export type Global_Product_Config_Aggregate_Order_By = {
  avg?: InputMaybe<Global_Product_Config_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Global_Product_Config_Max_Order_By>;
  min?: InputMaybe<Global_Product_Config_Min_Order_By>;
  stddev?: InputMaybe<Global_Product_Config_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Global_Product_Config_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Global_Product_Config_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Global_Product_Config_Sum_Order_By>;
  var_pop?: InputMaybe<Global_Product_Config_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Global_Product_Config_Var_Samp_Order_By>;
  variance?: InputMaybe<Global_Product_Config_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "global_product_config" */
export type Global_Product_Config_Arr_Rel_Insert_Input = {
  data: Array<Global_Product_Config_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Global_Product_Config_On_Conflict>;
};

/** aggregate avg on columns */
export type Global_Product_Config_Avg_Fields = {
  __typename?: 'global_product_config_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_month?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "global_product_config" */
export type Global_Product_Config_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "global_product_config". All fields are combined with a logical 'AND'. */
export type Global_Product_Config_Bool_Exp = {
  _and?: InputMaybe<Array<Global_Product_Config_Bool_Exp>>;
  _not?: InputMaybe<Global_Product_Config_Bool_Exp>;
  _or?: InputMaybe<Array<Global_Product_Config_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  formula?: InputMaybe<String_Comparison_Exp>;
  global_product?: InputMaybe<Global_Product_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  product?: InputMaybe<Uuid_Comparison_Exp>;
  relative_month?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "global_product_config" */
export enum Global_Product_Config_Constraint {
  /** unique or primary key constraint on columns "id" */
  GlobalProductConfigIdKey = 'global_product_config_id_key',
  /** unique or primary key constraint on columns "product", "relative_month" */
  GlobalProductConfigPkey = 'global_product_config_pkey'
}

/** input type for incrementing numeric columns in table "global_product_config" */
export type Global_Product_Config_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  relative_month?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "global_product_config" */
export type Global_Product_Config_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  formula?: InputMaybe<Scalars['String']['input']>;
  global_product?: InputMaybe<Global_Product_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  relative_month?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Global_Product_Config_Max_Fields = {
  __typename?: 'global_product_config_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  formula?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Scalars['uuid']['output']>;
  relative_month?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "global_product_config" */
export type Global_Product_Config_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  formula?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Global_Product_Config_Min_Fields = {
  __typename?: 'global_product_config_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  formula?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Scalars['uuid']['output']>;
  relative_month?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "global_product_config" */
export type Global_Product_Config_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  formula?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "global_product_config" */
export type Global_Product_Config_Mutation_Response = {
  __typename?: 'global_product_config_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Global_Product_Config>;
};

/** on_conflict condition type for table "global_product_config" */
export type Global_Product_Config_On_Conflict = {
  constraint: Global_Product_Config_Constraint;
  update_columns?: Array<Global_Product_Config_Update_Column>;
  where?: InputMaybe<Global_Product_Config_Bool_Exp>;
};

/** Ordering options when selecting data from "global_product_config". */
export type Global_Product_Config_Order_By = {
  created_at?: InputMaybe<Order_By>;
  formula?: InputMaybe<Order_By>;
  global_product?: InputMaybe<Global_Product_Order_By>;
  id?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: global_product_config */
export type Global_Product_Config_Pk_Columns_Input = {
  product: Scalars['uuid']['input'];
  relative_month: Scalars['Int']['input'];
};

/** select columns of table "global_product_config" */
export enum Global_Product_Config_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Formula = 'formula',
  /** column name */
  Id = 'id',
  /** column name */
  Product = 'product',
  /** column name */
  RelativeMonth = 'relative_month',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "global_product_config" */
export type Global_Product_Config_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  formula?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  relative_month?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Global_Product_Config_Stddev_Fields = {
  __typename?: 'global_product_config_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_month?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "global_product_config" */
export type Global_Product_Config_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Global_Product_Config_Stddev_Pop_Fields = {
  __typename?: 'global_product_config_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_month?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "global_product_config" */
export type Global_Product_Config_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Global_Product_Config_Stddev_Samp_Fields = {
  __typename?: 'global_product_config_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_month?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "global_product_config" */
export type Global_Product_Config_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "global_product_config" */
export type Global_Product_Config_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Global_Product_Config_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Global_Product_Config_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  formula?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  relative_month?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Global_Product_Config_Sum_Fields = {
  __typename?: 'global_product_config_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  relative_month?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "global_product_config" */
export type Global_Product_Config_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
};

/** update columns of table "global_product_config" */
export enum Global_Product_Config_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Formula = 'formula',
  /** column name */
  Id = 'id',
  /** column name */
  Product = 'product',
  /** column name */
  RelativeMonth = 'relative_month',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Global_Product_Config_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Global_Product_Config_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Global_Product_Config_Set_Input>;
  /** filter the rows which have to be updated */
  where: Global_Product_Config_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Global_Product_Config_Var_Pop_Fields = {
  __typename?: 'global_product_config_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_month?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "global_product_config" */
export type Global_Product_Config_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Global_Product_Config_Var_Samp_Fields = {
  __typename?: 'global_product_config_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_month?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "global_product_config" */
export type Global_Product_Config_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Global_Product_Config_Variance_Fields = {
  __typename?: 'global_product_config_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_month?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "global_product_config" */
export type Global_Product_Config_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
};

/** unique or primary key constraints on table "global_product" */
export enum Global_Product_Constraint {
  /** unique or primary key constraint on columns "id" */
  GlobalProductPkey = 'global_product_pkey'
}

/** input type for incrementing numeric columns in table "global_product" */
export type Global_Product_Inc_Input = {
  commodity_group?: InputMaybe<Scalars['Int']['input']>;
  geographical_region?: InputMaybe<Scalars['Int']['input']>;
  global_package?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "global_product" */
export type Global_Product_Insert_Input = {
  commodityGroupByCommodityGroup?: InputMaybe<Commodity_Group_Obj_Rel_Insert_Input>;
  commodity_group?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  geographicalRegionByGeographicalRegion?: InputMaybe<Geographical_Region_Obj_Rel_Insert_Input>;
  geographical_region?: InputMaybe<Scalars['Int']['input']>;
  globalPackageByGlobalPackage?: InputMaybe<Global_Package_Obj_Rel_Insert_Input>;
  global_instruments?: InputMaybe<Global_Instrument_Arr_Rel_Insert_Input>;
  global_package?: InputMaybe<Scalars['Int']['input']>;
  global_product_configs?: InputMaybe<Global_Product_Config_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product_uom?: InputMaybe<Product_Uom_Obj_Rel_Insert_Input>;
  uom?: InputMaybe<Product_Uom_Enum>;
};

/** aggregate max on columns */
export type Global_Product_Max_Fields = {
  __typename?: 'global_product_max_fields';
  commodity_group?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  geographical_region?: Maybe<Scalars['Int']['output']>;
  global_package?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "global_product" */
export type Global_Product_Max_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  global_package?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Global_Product_Min_Fields = {
  __typename?: 'global_product_min_fields';
  commodity_group?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  geographical_region?: Maybe<Scalars['Int']['output']>;
  global_package?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "global_product" */
export type Global_Product_Min_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  global_package?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "global_product" */
export type Global_Product_Mutation_Response = {
  __typename?: 'global_product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Global_Product>;
};

/** input type for inserting object relation for remote table "global_product" */
export type Global_Product_Obj_Rel_Insert_Input = {
  data: Global_Product_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Global_Product_On_Conflict>;
};

/** on_conflict condition type for table "global_product" */
export type Global_Product_On_Conflict = {
  constraint: Global_Product_Constraint;
  update_columns?: Array<Global_Product_Update_Column>;
  where?: InputMaybe<Global_Product_Bool_Exp>;
};

/** Ordering options when selecting data from "global_product". */
export type Global_Product_Order_By = {
  commodityGroupByCommodityGroup?: InputMaybe<Commodity_Group_Order_By>;
  commodity_group?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  geographicalRegionByGeographicalRegion?: InputMaybe<Geographical_Region_Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  globalPackageByGlobalPackage?: InputMaybe<Global_Package_Order_By>;
  global_instruments_aggregate?: InputMaybe<Global_Instrument_Aggregate_Order_By>;
  global_package?: InputMaybe<Order_By>;
  global_product_configs_aggregate?: InputMaybe<Global_Product_Config_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  product_uom?: InputMaybe<Product_Uom_Order_By>;
  uom?: InputMaybe<Order_By>;
};

/** primary key columns input for table: global_product */
export type Global_Product_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "global_product" */
export enum Global_Product_Select_Column {
  /** column name */
  CommodityGroup = 'commodity_group',
  /** column name */
  Description = 'description',
  /** column name */
  GeographicalRegion = 'geographical_region',
  /** column name */
  GlobalPackage = 'global_package',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uom = 'uom'
}

/** input type for updating data in table "global_product" */
export type Global_Product_Set_Input = {
  commodity_group?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  geographical_region?: InputMaybe<Scalars['Int']['input']>;
  global_package?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  uom?: InputMaybe<Product_Uom_Enum>;
};

/** aggregate stddev on columns */
export type Global_Product_Stddev_Fields = {
  __typename?: 'global_product_stddev_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  global_package?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "global_product" */
export type Global_Product_Stddev_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  global_package?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Global_Product_Stddev_Pop_Fields = {
  __typename?: 'global_product_stddev_pop_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  global_package?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "global_product" */
export type Global_Product_Stddev_Pop_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  global_package?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Global_Product_Stddev_Samp_Fields = {
  __typename?: 'global_product_stddev_samp_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  global_package?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "global_product" */
export type Global_Product_Stddev_Samp_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  global_package?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "global_product" */
export type Global_Product_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Global_Product_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Global_Product_Stream_Cursor_Value_Input = {
  commodity_group?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  geographical_region?: InputMaybe<Scalars['Int']['input']>;
  global_package?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  uom?: InputMaybe<Product_Uom_Enum>;
};

/** aggregate sum on columns */
export type Global_Product_Sum_Fields = {
  __typename?: 'global_product_sum_fields';
  commodity_group?: Maybe<Scalars['Int']['output']>;
  geographical_region?: Maybe<Scalars['Int']['output']>;
  global_package?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "global_product" */
export type Global_Product_Sum_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  global_package?: InputMaybe<Order_By>;
};

/** update columns of table "global_product" */
export enum Global_Product_Update_Column {
  /** column name */
  CommodityGroup = 'commodity_group',
  /** column name */
  Description = 'description',
  /** column name */
  GeographicalRegion = 'geographical_region',
  /** column name */
  GlobalPackage = 'global_package',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uom = 'uom'
}

export type Global_Product_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Global_Product_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Global_Product_Set_Input>;
  /** filter the rows which have to be updated */
  where: Global_Product_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Global_Product_Var_Pop_Fields = {
  __typename?: 'global_product_var_pop_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  global_package?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "global_product" */
export type Global_Product_Var_Pop_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  global_package?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Global_Product_Var_Samp_Fields = {
  __typename?: 'global_product_var_samp_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  global_package?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "global_product" */
export type Global_Product_Var_Samp_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  global_package?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Global_Product_Variance_Fields = {
  __typename?: 'global_product_variance_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  global_package?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "global_product" */
export type Global_Product_Variance_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  global_package?: InputMaybe<Order_By>;
};

/** Saved card settings for each user */
export type Hfc_Card_Settings = {
  __typename?: 'hfc_card_settings';
  /** An object relationship */
  folio_user: Folio_User;
  settings_blob?: Maybe<Scalars['String']['output']>;
  user: Scalars['String']['output'];
};

/** aggregated selection of "hfc_card_settings" */
export type Hfc_Card_Settings_Aggregate = {
  __typename?: 'hfc_card_settings_aggregate';
  aggregate?: Maybe<Hfc_Card_Settings_Aggregate_Fields>;
  nodes: Array<Hfc_Card_Settings>;
};

/** aggregate fields of "hfc_card_settings" */
export type Hfc_Card_Settings_Aggregate_Fields = {
  __typename?: 'hfc_card_settings_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Hfc_Card_Settings_Max_Fields>;
  min?: Maybe<Hfc_Card_Settings_Min_Fields>;
};


/** aggregate fields of "hfc_card_settings" */
export type Hfc_Card_Settings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hfc_Card_Settings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "hfc_card_settings". All fields are combined with a logical 'AND'. */
export type Hfc_Card_Settings_Bool_Exp = {
  _and?: InputMaybe<Array<Hfc_Card_Settings_Bool_Exp>>;
  _not?: InputMaybe<Hfc_Card_Settings_Bool_Exp>;
  _or?: InputMaybe<Array<Hfc_Card_Settings_Bool_Exp>>;
  folio_user?: InputMaybe<Folio_User_Bool_Exp>;
  settings_blob?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "hfc_card_settings" */
export enum Hfc_Card_Settings_Constraint {
  /** unique or primary key constraint on columns "user" */
  HfcCardSettingsPkey = 'hfc_card_settings_pkey'
}

/** input type for inserting data into table "hfc_card_settings" */
export type Hfc_Card_Settings_Insert_Input = {
  folio_user?: InputMaybe<Folio_User_Obj_Rel_Insert_Input>;
  settings_blob?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Hfc_Card_Settings_Max_Fields = {
  __typename?: 'hfc_card_settings_max_fields';
  settings_blob?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Hfc_Card_Settings_Min_Fields = {
  __typename?: 'hfc_card_settings_min_fields';
  settings_blob?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "hfc_card_settings" */
export type Hfc_Card_Settings_Mutation_Response = {
  __typename?: 'hfc_card_settings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Hfc_Card_Settings>;
};

/** input type for inserting object relation for remote table "hfc_card_settings" */
export type Hfc_Card_Settings_Obj_Rel_Insert_Input = {
  data: Hfc_Card_Settings_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Hfc_Card_Settings_On_Conflict>;
};

/** on_conflict condition type for table "hfc_card_settings" */
export type Hfc_Card_Settings_On_Conflict = {
  constraint: Hfc_Card_Settings_Constraint;
  update_columns?: Array<Hfc_Card_Settings_Update_Column>;
  where?: InputMaybe<Hfc_Card_Settings_Bool_Exp>;
};

/** Ordering options when selecting data from "hfc_card_settings". */
export type Hfc_Card_Settings_Order_By = {
  folio_user?: InputMaybe<Folio_User_Order_By>;
  settings_blob?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** primary key columns input for table: hfc_card_settings */
export type Hfc_Card_Settings_Pk_Columns_Input = {
  user: Scalars['String']['input'];
};

/** select columns of table "hfc_card_settings" */
export enum Hfc_Card_Settings_Select_Column {
  /** column name */
  SettingsBlob = 'settings_blob',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "hfc_card_settings" */
export type Hfc_Card_Settings_Set_Input = {
  settings_blob?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "hfc_card_settings" */
export type Hfc_Card_Settings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Hfc_Card_Settings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Hfc_Card_Settings_Stream_Cursor_Value_Input = {
  settings_blob?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "hfc_card_settings" */
export enum Hfc_Card_Settings_Update_Column {
  /** column name */
  SettingsBlob = 'settings_blob',
  /** column name */
  User = 'user'
}

export type Hfc_Card_Settings_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Hfc_Card_Settings_Set_Input>;
  /** filter the rows which have to be updated */
  where: Hfc_Card_Settings_Bool_Exp;
};

/** Track user settings. (i.e. colour scheme for years) */
export type Hfc_User_Settings = {
  __typename?: 'hfc_user_settings';
  settings_blob?: Maybe<Scalars['String']['output']>;
  user: Scalars['String']['output'];
};

/** aggregated selection of "hfc_user_settings" */
export type Hfc_User_Settings_Aggregate = {
  __typename?: 'hfc_user_settings_aggregate';
  aggregate?: Maybe<Hfc_User_Settings_Aggregate_Fields>;
  nodes: Array<Hfc_User_Settings>;
};

/** aggregate fields of "hfc_user_settings" */
export type Hfc_User_Settings_Aggregate_Fields = {
  __typename?: 'hfc_user_settings_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Hfc_User_Settings_Max_Fields>;
  min?: Maybe<Hfc_User_Settings_Min_Fields>;
};


/** aggregate fields of "hfc_user_settings" */
export type Hfc_User_Settings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hfc_User_Settings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "hfc_user_settings". All fields are combined with a logical 'AND'. */
export type Hfc_User_Settings_Bool_Exp = {
  _and?: InputMaybe<Array<Hfc_User_Settings_Bool_Exp>>;
  _not?: InputMaybe<Hfc_User_Settings_Bool_Exp>;
  _or?: InputMaybe<Array<Hfc_User_Settings_Bool_Exp>>;
  settings_blob?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "hfc_user_settings" */
export enum Hfc_User_Settings_Constraint {
  /** unique or primary key constraint on columns "user" */
  HfcUserSettingsPkey = 'hfc_user_settings_pkey'
}

/** input type for inserting data into table "hfc_user_settings" */
export type Hfc_User_Settings_Insert_Input = {
  settings_blob?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Hfc_User_Settings_Max_Fields = {
  __typename?: 'hfc_user_settings_max_fields';
  settings_blob?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Hfc_User_Settings_Min_Fields = {
  __typename?: 'hfc_user_settings_min_fields';
  settings_blob?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "hfc_user_settings" */
export type Hfc_User_Settings_Mutation_Response = {
  __typename?: 'hfc_user_settings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Hfc_User_Settings>;
};

/** input type for inserting object relation for remote table "hfc_user_settings" */
export type Hfc_User_Settings_Obj_Rel_Insert_Input = {
  data: Hfc_User_Settings_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Hfc_User_Settings_On_Conflict>;
};

/** on_conflict condition type for table "hfc_user_settings" */
export type Hfc_User_Settings_On_Conflict = {
  constraint: Hfc_User_Settings_Constraint;
  update_columns?: Array<Hfc_User_Settings_Update_Column>;
  where?: InputMaybe<Hfc_User_Settings_Bool_Exp>;
};

/** Ordering options when selecting data from "hfc_user_settings". */
export type Hfc_User_Settings_Order_By = {
  settings_blob?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** primary key columns input for table: hfc_user_settings */
export type Hfc_User_Settings_Pk_Columns_Input = {
  user: Scalars['String']['input'];
};

/** select columns of table "hfc_user_settings" */
export enum Hfc_User_Settings_Select_Column {
  /** column name */
  SettingsBlob = 'settings_blob',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "hfc_user_settings" */
export type Hfc_User_Settings_Set_Input = {
  settings_blob?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "hfc_user_settings" */
export type Hfc_User_Settings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Hfc_User_Settings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Hfc_User_Settings_Stream_Cursor_Value_Input = {
  settings_blob?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "hfc_user_settings" */
export enum Hfc_User_Settings_Update_Column {
  /** column name */
  SettingsBlob = 'settings_blob',
  /** column name */
  User = 'user'
}

export type Hfc_User_Settings_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Hfc_User_Settings_Set_Input>;
  /** filter the rows which have to be updated */
  where: Hfc_User_Settings_Bool_Exp;
};

/** Boolean expression to compare columns of type "inet". All fields are combined with logical 'AND'. */
export type Inet_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['inet']['input']>;
  _gt?: InputMaybe<Scalars['inet']['input']>;
  _gte?: InputMaybe<Scalars['inet']['input']>;
  _in?: InputMaybe<Array<Scalars['inet']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['inet']['input']>;
  _lte?: InputMaybe<Scalars['inet']['input']>;
  _neq?: InputMaybe<Scalars['inet']['input']>;
  _nin?: InputMaybe<Array<Scalars['inet']['input']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "live_users_new" */
export type Live_Users_New = {
  __typename?: 'live_users_new';
  folio_user?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  is_mobile?: Maybe<Scalars['Boolean']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "live_users_new" */
export type Live_Users_New_Aggregate = {
  __typename?: 'live_users_new_aggregate';
  aggregate?: Maybe<Live_Users_New_Aggregate_Fields>;
  nodes: Array<Live_Users_New>;
};

/** aggregate fields of "live_users_new" */
export type Live_Users_New_Aggregate_Fields = {
  __typename?: 'live_users_new_aggregate_fields';
  avg?: Maybe<Live_Users_New_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Live_Users_New_Max_Fields>;
  min?: Maybe<Live_Users_New_Min_Fields>;
  stddev?: Maybe<Live_Users_New_Stddev_Fields>;
  stddev_pop?: Maybe<Live_Users_New_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Live_Users_New_Stddev_Samp_Fields>;
  sum?: Maybe<Live_Users_New_Sum_Fields>;
  var_pop?: Maybe<Live_Users_New_Var_Pop_Fields>;
  var_samp?: Maybe<Live_Users_New_Var_Samp_Fields>;
  variance?: Maybe<Live_Users_New_Variance_Fields>;
};


/** aggregate fields of "live_users_new" */
export type Live_Users_New_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Live_Users_New_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Live_Users_New_Avg_Fields = {
  __typename?: 'live_users_new_avg_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "live_users_new". All fields are combined with a logical 'AND'. */
export type Live_Users_New_Bool_Exp = {
  _and?: InputMaybe<Array<Live_Users_New_Bool_Exp>>;
  _not?: InputMaybe<Live_Users_New_Bool_Exp>;
  _or?: InputMaybe<Array<Live_Users_New_Bool_Exp>>;
  folio_user?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  is_mobile?: InputMaybe<Boolean_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  organisation?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Live_Users_New_Max_Fields = {
  __typename?: 'live_users_new_max_fields';
  folio_user?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Live_Users_New_Min_Fields = {
  __typename?: 'live_users_new_min_fields';
  folio_user?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "live_users_new". */
export type Live_Users_New_Order_By = {
  folio_user?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_mobile?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** select columns of table "live_users_new" */
export enum Live_Users_New_Select_Column {
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  Id = 'id',
  /** column name */
  IsMobile = 'is_mobile',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Organisation = 'organisation'
}

/** aggregate stddev on columns */
export type Live_Users_New_Stddev_Fields = {
  __typename?: 'live_users_new_stddev_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Live_Users_New_Stddev_Pop_Fields = {
  __typename?: 'live_users_new_stddev_pop_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Live_Users_New_Stddev_Samp_Fields = {
  __typename?: 'live_users_new_stddev_samp_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "live_users_new" */
export type Live_Users_New_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Live_Users_New_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Live_Users_New_Stream_Cursor_Value_Input = {
  folio_user?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  is_mobile?: InputMaybe<Scalars['Boolean']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Live_Users_New_Sum_Fields = {
  __typename?: 'live_users_new_sum_fields';
  organisation?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Live_Users_New_Var_Pop_Fields = {
  __typename?: 'live_users_new_var_pop_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Live_Users_New_Var_Samp_Fields = {
  __typename?: 'live_users_new_var_samp_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Live_Users_New_Variance_Fields = {
  __typename?: 'live_users_new_variance_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "local_instrument" */
export type Local_Instrument = {
  __typename?: 'local_instrument';
  edited_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  folioUserByFolioUser: Folio_User;
  folio_user: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  month: Scalars['date']['output'];
  product: Scalars['uuid']['output'];
  /** An object relationship */
  productByProduct: Product;
  storage_type: User_Storage_Enum;
  value?: Maybe<Scalars['numeric']['output']>;
};

/** aggregated selection of "local_instrument" */
export type Local_Instrument_Aggregate = {
  __typename?: 'local_instrument_aggregate';
  aggregate?: Maybe<Local_Instrument_Aggregate_Fields>;
  nodes: Array<Local_Instrument>;
};

export type Local_Instrument_Aggregate_Bool_Exp = {
  count?: InputMaybe<Local_Instrument_Aggregate_Bool_Exp_Count>;
};

export type Local_Instrument_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Local_Instrument_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Local_Instrument_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "local_instrument" */
export type Local_Instrument_Aggregate_Fields = {
  __typename?: 'local_instrument_aggregate_fields';
  avg?: Maybe<Local_Instrument_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Local_Instrument_Max_Fields>;
  min?: Maybe<Local_Instrument_Min_Fields>;
  stddev?: Maybe<Local_Instrument_Stddev_Fields>;
  stddev_pop?: Maybe<Local_Instrument_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Local_Instrument_Stddev_Samp_Fields>;
  sum?: Maybe<Local_Instrument_Sum_Fields>;
  var_pop?: Maybe<Local_Instrument_Var_Pop_Fields>;
  var_samp?: Maybe<Local_Instrument_Var_Samp_Fields>;
  variance?: Maybe<Local_Instrument_Variance_Fields>;
};


/** aggregate fields of "local_instrument" */
export type Local_Instrument_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Local_Instrument_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "local_instrument" */
export type Local_Instrument_Aggregate_Order_By = {
  avg?: InputMaybe<Local_Instrument_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Local_Instrument_Max_Order_By>;
  min?: InputMaybe<Local_Instrument_Min_Order_By>;
  stddev?: InputMaybe<Local_Instrument_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Local_Instrument_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Local_Instrument_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Local_Instrument_Sum_Order_By>;
  var_pop?: InputMaybe<Local_Instrument_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Local_Instrument_Var_Samp_Order_By>;
  variance?: InputMaybe<Local_Instrument_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "local_instrument" */
export type Local_Instrument_Arr_Rel_Insert_Input = {
  data: Array<Local_Instrument_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Local_Instrument_On_Conflict>;
};

/** aggregate avg on columns */
export type Local_Instrument_Avg_Fields = {
  __typename?: 'local_instrument_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "local_instrument" */
export type Local_Instrument_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "local_instrument". All fields are combined with a logical 'AND'. */
export type Local_Instrument_Bool_Exp = {
  _and?: InputMaybe<Array<Local_Instrument_Bool_Exp>>;
  _not?: InputMaybe<Local_Instrument_Bool_Exp>;
  _or?: InputMaybe<Array<Local_Instrument_Bool_Exp>>;
  edited_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  folioUserByFolioUser?: InputMaybe<Folio_User_Bool_Exp>;
  folio_user?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  month?: InputMaybe<Date_Comparison_Exp>;
  product?: InputMaybe<Uuid_Comparison_Exp>;
  productByProduct?: InputMaybe<Product_Bool_Exp>;
  storage_type?: InputMaybe<User_Storage_Enum_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "local_instrument" */
export enum Local_Instrument_Constraint {
  /** unique or primary key constraint on columns "id" */
  LocalInstrumentIdKey = 'local_instrument_id_key',
  /** unique or primary key constraint on columns "product", "folio_user", "storage_type", "month" */
  LocalInstrumentPkey = 'local_instrument_pkey'
}

/** input type for incrementing numeric columns in table "local_instrument" */
export type Local_Instrument_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "local_instrument" */
export type Local_Instrument_Insert_Input = {
  edited_at?: InputMaybe<Scalars['timestamptz']['input']>;
  folioUserByFolioUser?: InputMaybe<Folio_User_Obj_Rel_Insert_Input>;
  folio_user?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  month?: InputMaybe<Scalars['date']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  productByProduct?: InputMaybe<Product_Obj_Rel_Insert_Input>;
  storage_type?: InputMaybe<User_Storage_Enum>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Local_Instrument_Max_Fields = {
  __typename?: 'local_instrument_max_fields';
  edited_at?: Maybe<Scalars['timestamptz']['output']>;
  folio_user?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  month?: Maybe<Scalars['date']['output']>;
  product?: Maybe<Scalars['uuid']['output']>;
  value?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "local_instrument" */
export type Local_Instrument_Max_Order_By = {
  edited_at?: InputMaybe<Order_By>;
  folio_user?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Local_Instrument_Min_Fields = {
  __typename?: 'local_instrument_min_fields';
  edited_at?: Maybe<Scalars['timestamptz']['output']>;
  folio_user?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  month?: Maybe<Scalars['date']['output']>;
  product?: Maybe<Scalars['uuid']['output']>;
  value?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "local_instrument" */
export type Local_Instrument_Min_Order_By = {
  edited_at?: InputMaybe<Order_By>;
  folio_user?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "local_instrument" */
export type Local_Instrument_Mutation_Response = {
  __typename?: 'local_instrument_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Local_Instrument>;
};

/** on_conflict condition type for table "local_instrument" */
export type Local_Instrument_On_Conflict = {
  constraint: Local_Instrument_Constraint;
  update_columns?: Array<Local_Instrument_Update_Column>;
  where?: InputMaybe<Local_Instrument_Bool_Exp>;
};

/** Ordering options when selecting data from "local_instrument". */
export type Local_Instrument_Order_By = {
  edited_at?: InputMaybe<Order_By>;
  folioUserByFolioUser?: InputMaybe<Folio_User_Order_By>;
  folio_user?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  productByProduct?: InputMaybe<Product_Order_By>;
  storage_type?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: local_instrument */
export type Local_Instrument_Pk_Columns_Input = {
  folio_user: Scalars['String']['input'];
  month: Scalars['date']['input'];
  product: Scalars['uuid']['input'];
  storage_type: User_Storage_Enum;
};

/** select columns of table "local_instrument" */
export enum Local_Instrument_Select_Column {
  /** column name */
  EditedAt = 'edited_at',
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  Id = 'id',
  /** column name */
  Month = 'month',
  /** column name */
  Product = 'product',
  /** column name */
  StorageType = 'storage_type',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "local_instrument" */
export type Local_Instrument_Set_Input = {
  edited_at?: InputMaybe<Scalars['timestamptz']['input']>;
  folio_user?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  month?: InputMaybe<Scalars['date']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  storage_type?: InputMaybe<User_Storage_Enum>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Local_Instrument_Stddev_Fields = {
  __typename?: 'local_instrument_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "local_instrument" */
export type Local_Instrument_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Local_Instrument_Stddev_Pop_Fields = {
  __typename?: 'local_instrument_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "local_instrument" */
export type Local_Instrument_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Local_Instrument_Stddev_Samp_Fields = {
  __typename?: 'local_instrument_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "local_instrument" */
export type Local_Instrument_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "local_instrument" */
export type Local_Instrument_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Local_Instrument_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Local_Instrument_Stream_Cursor_Value_Input = {
  edited_at?: InputMaybe<Scalars['timestamptz']['input']>;
  folio_user?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  month?: InputMaybe<Scalars['date']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  storage_type?: InputMaybe<User_Storage_Enum>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Local_Instrument_Sum_Fields = {
  __typename?: 'local_instrument_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  value?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "local_instrument" */
export type Local_Instrument_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** update columns of table "local_instrument" */
export enum Local_Instrument_Update_Column {
  /** column name */
  EditedAt = 'edited_at',
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  Id = 'id',
  /** column name */
  Month = 'month',
  /** column name */
  Product = 'product',
  /** column name */
  StorageType = 'storage_type',
  /** column name */
  Value = 'value'
}

export type Local_Instrument_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Local_Instrument_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Local_Instrument_Set_Input>;
  /** filter the rows which have to be updated */
  where: Local_Instrument_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Local_Instrument_Var_Pop_Fields = {
  __typename?: 'local_instrument_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "local_instrument" */
export type Local_Instrument_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Local_Instrument_Var_Samp_Fields = {
  __typename?: 'local_instrument_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "local_instrument" */
export type Local_Instrument_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Local_Instrument_Variance_Fields = {
  __typename?: 'local_instrument_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "local_instrument" */
export type Local_Instrument_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** columns and relationships of "logout_request" */
export type Logout_Request = {
  __typename?: 'logout_request';
  context?: Maybe<Scalars['String']['output']>;
  folio_user: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  logout_request_folio_user: Folio_User;
  logout_requested_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "logout_request" */
export type Logout_Request_Aggregate = {
  __typename?: 'logout_request_aggregate';
  aggregate?: Maybe<Logout_Request_Aggregate_Fields>;
  nodes: Array<Logout_Request>;
};

export type Logout_Request_Aggregate_Bool_Exp = {
  count?: InputMaybe<Logout_Request_Aggregate_Bool_Exp_Count>;
};

export type Logout_Request_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Logout_Request_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Logout_Request_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "logout_request" */
export type Logout_Request_Aggregate_Fields = {
  __typename?: 'logout_request_aggregate_fields';
  avg?: Maybe<Logout_Request_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Logout_Request_Max_Fields>;
  min?: Maybe<Logout_Request_Min_Fields>;
  stddev?: Maybe<Logout_Request_Stddev_Fields>;
  stddev_pop?: Maybe<Logout_Request_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Logout_Request_Stddev_Samp_Fields>;
  sum?: Maybe<Logout_Request_Sum_Fields>;
  var_pop?: Maybe<Logout_Request_Var_Pop_Fields>;
  var_samp?: Maybe<Logout_Request_Var_Samp_Fields>;
  variance?: Maybe<Logout_Request_Variance_Fields>;
};


/** aggregate fields of "logout_request" */
export type Logout_Request_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Logout_Request_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "logout_request" */
export type Logout_Request_Aggregate_Order_By = {
  avg?: InputMaybe<Logout_Request_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Logout_Request_Max_Order_By>;
  min?: InputMaybe<Logout_Request_Min_Order_By>;
  stddev?: InputMaybe<Logout_Request_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Logout_Request_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Logout_Request_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Logout_Request_Sum_Order_By>;
  var_pop?: InputMaybe<Logout_Request_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Logout_Request_Var_Samp_Order_By>;
  variance?: InputMaybe<Logout_Request_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "logout_request" */
export type Logout_Request_Arr_Rel_Insert_Input = {
  data: Array<Logout_Request_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Logout_Request_On_Conflict>;
};

/** aggregate avg on columns */
export type Logout_Request_Avg_Fields = {
  __typename?: 'logout_request_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "logout_request" */
export type Logout_Request_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "logout_request". All fields are combined with a logical 'AND'. */
export type Logout_Request_Bool_Exp = {
  _and?: InputMaybe<Array<Logout_Request_Bool_Exp>>;
  _not?: InputMaybe<Logout_Request_Bool_Exp>;
  _or?: InputMaybe<Array<Logout_Request_Bool_Exp>>;
  context?: InputMaybe<String_Comparison_Exp>;
  folio_user?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  logout_request_folio_user?: InputMaybe<Folio_User_Bool_Exp>;
  logout_requested_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "logout_request" */
export enum Logout_Request_Constraint {
  /** unique or primary key constraint on columns "id" */
  LogoutRequestPkey = 'logout_request_pkey',
  /** unique or primary key constraint on columns "folio_user", "context" */
  LogoutRequestUserContextUnique = 'logout_request_user_context_unique'
}

/** input type for incrementing numeric columns in table "logout_request" */
export type Logout_Request_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "logout_request" */
export type Logout_Request_Insert_Input = {
  context?: InputMaybe<Scalars['String']['input']>;
  folio_user?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  logout_request_folio_user?: InputMaybe<Folio_User_Obj_Rel_Insert_Input>;
  logout_requested_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Logout_Request_Max_Fields = {
  __typename?: 'logout_request_max_fields';
  context?: Maybe<Scalars['String']['output']>;
  folio_user?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logout_requested_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "logout_request" */
export type Logout_Request_Max_Order_By = {
  context?: InputMaybe<Order_By>;
  folio_user?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logout_requested_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Logout_Request_Min_Fields = {
  __typename?: 'logout_request_min_fields';
  context?: Maybe<Scalars['String']['output']>;
  folio_user?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logout_requested_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "logout_request" */
export type Logout_Request_Min_Order_By = {
  context?: InputMaybe<Order_By>;
  folio_user?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logout_requested_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "logout_request" */
export type Logout_Request_Mutation_Response = {
  __typename?: 'logout_request_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Logout_Request>;
};

/** on_conflict condition type for table "logout_request" */
export type Logout_Request_On_Conflict = {
  constraint: Logout_Request_Constraint;
  update_columns?: Array<Logout_Request_Update_Column>;
  where?: InputMaybe<Logout_Request_Bool_Exp>;
};

/** Ordering options when selecting data from "logout_request". */
export type Logout_Request_Order_By = {
  context?: InputMaybe<Order_By>;
  folio_user?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logout_request_folio_user?: InputMaybe<Folio_User_Order_By>;
  logout_requested_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: logout_request */
export type Logout_Request_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "logout_request" */
export enum Logout_Request_Select_Column {
  /** column name */
  Context = 'context',
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  Id = 'id',
  /** column name */
  LogoutRequestedAt = 'logout_requested_at'
}

/** input type for updating data in table "logout_request" */
export type Logout_Request_Set_Input = {
  context?: InputMaybe<Scalars['String']['input']>;
  folio_user?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  logout_requested_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Logout_Request_Stddev_Fields = {
  __typename?: 'logout_request_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "logout_request" */
export type Logout_Request_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Logout_Request_Stddev_Pop_Fields = {
  __typename?: 'logout_request_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "logout_request" */
export type Logout_Request_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Logout_Request_Stddev_Samp_Fields = {
  __typename?: 'logout_request_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "logout_request" */
export type Logout_Request_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "logout_request" */
export type Logout_Request_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Logout_Request_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Logout_Request_Stream_Cursor_Value_Input = {
  context?: InputMaybe<Scalars['String']['input']>;
  folio_user?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  logout_requested_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Logout_Request_Sum_Fields = {
  __typename?: 'logout_request_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "logout_request" */
export type Logout_Request_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "logout_request" */
export enum Logout_Request_Update_Column {
  /** column name */
  Context = 'context',
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  Id = 'id',
  /** column name */
  LogoutRequestedAt = 'logout_requested_at'
}

export type Logout_Request_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Logout_Request_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Logout_Request_Set_Input>;
  /** filter the rows which have to be updated */
  where: Logout_Request_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Logout_Request_Var_Pop_Fields = {
  __typename?: 'logout_request_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "logout_request" */
export type Logout_Request_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Logout_Request_Var_Samp_Fields = {
  __typename?: 'logout_request_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "logout_request" */
export type Logout_Request_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Logout_Request_Variance_Fields = {
  __typename?: 'logout_request_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "logout_request" */
export type Logout_Request_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "audit.logged_actions" */
  delete_audit_logged_actions?: Maybe<Audit_Logged_Actions_Mutation_Response>;
  /** delete single row from the table: "audit.logged_actions" */
  delete_audit_logged_actions_by_pk?: Maybe<Audit_Logged_Actions>;
  /** delete data from the table: "audit.umi_actions" */
  delete_audit_umi_actions?: Maybe<Audit_Umi_Actions_Mutation_Response>;
  /** delete single row from the table: "audit.umi_actions" */
  delete_audit_umi_actions_by_pk?: Maybe<Audit_Umi_Actions>;
  /** delete data from the table: "commodity_group" */
  delete_commodity_group?: Maybe<Commodity_Group_Mutation_Response>;
  /** delete single row from the table: "commodity_group" */
  delete_commodity_group_by_pk?: Maybe<Commodity_Group>;
  /** delete data from the table: "commodity_parent_group" */
  delete_commodity_parent_group?: Maybe<Commodity_Parent_Group_Mutation_Response>;
  /** delete single row from the table: "commodity_parent_group" */
  delete_commodity_parent_group_by_pk?: Maybe<Commodity_Parent_Group>;
  /** delete data from the table: "eod" */
  delete_eod?: Maybe<Eod_Mutation_Response>;
  /** delete single row from the table: "eod" */
  delete_eod_by_pk?: Maybe<Eod>;
  /** delete data from the table: "eod_entry" */
  delete_eod_entry?: Maybe<Eod_Entry_Mutation_Response>;
  /** delete single row from the table: "eod_entry" */
  delete_eod_entry_by_pk?: Maybe<Eod_Entry>;
  /** delete data from the table: "exchange" */
  delete_exchange?: Maybe<Exchange_Mutation_Response>;
  /** delete single row from the table: "exchange" */
  delete_exchange_by_pk?: Maybe<Exchange>;
  /** delete data from the table: "exchange_event_type" */
  delete_exchange_event_type?: Maybe<Exchange_Event_Type_Mutation_Response>;
  /** delete single row from the table: "exchange_event_type" */
  delete_exchange_event_type_by_pk?: Maybe<Exchange_Event_Type>;
  /** delete data from the table: "exchange_usage" */
  delete_exchange_usage?: Maybe<Exchange_Usage_Mutation_Response>;
  /** delete single row from the table: "exchange_usage" */
  delete_exchange_usage_by_pk?: Maybe<Exchange_Usage>;
  /** delete data from the table: "folio_column_settings" */
  delete_folio_column_settings?: Maybe<Folio_Column_Settings_Mutation_Response>;
  /** delete single row from the table: "folio_column_settings" */
  delete_folio_column_settings_by_pk?: Maybe<Folio_Column_Settings>;
  /** delete data from the table: "folio_shadow_curves" */
  delete_folio_shadow_curves?: Maybe<Folio_Shadow_Curves_Mutation_Response>;
  /** delete single row from the table: "folio_shadow_curves" */
  delete_folio_shadow_curves_by_pk?: Maybe<Folio_Shadow_Curves>;
  /** delete data from the table: "folio_user" */
  delete_folio_user?: Maybe<Folio_User_Mutation_Response>;
  /** delete data from the table: "folio_user_basic_profile" */
  delete_folio_user_basic_profile?: Maybe<Folio_User_Basic_Profile_Mutation_Response>;
  /** delete single row from the table: "folio_user" */
  delete_folio_user_by_pk?: Maybe<Folio_User>;
  /** delete data from the table: "geographical_region" */
  delete_geographical_region?: Maybe<Geographical_Region_Mutation_Response>;
  /** delete single row from the table: "geographical_region" */
  delete_geographical_region_by_pk?: Maybe<Geographical_Region>;
  /** delete data from the table: "global_instrument" */
  delete_global_instrument?: Maybe<Global_Instrument_Mutation_Response>;
  /** delete single row from the table: "global_instrument" */
  delete_global_instrument_by_pk?: Maybe<Global_Instrument>;
  /** delete data from the table: "global_package" */
  delete_global_package?: Maybe<Global_Package_Mutation_Response>;
  /** delete single row from the table: "global_package" */
  delete_global_package_by_pk?: Maybe<Global_Package>;
  /** delete data from the table: "global_permission" */
  delete_global_permission?: Maybe<Global_Permission_Mutation_Response>;
  /** delete single row from the table: "global_permission" */
  delete_global_permission_by_pk?: Maybe<Global_Permission>;
  /** delete data from the table: "global_product" */
  delete_global_product?: Maybe<Global_Product_Mutation_Response>;
  /** delete single row from the table: "global_product" */
  delete_global_product_by_pk?: Maybe<Global_Product>;
  /** delete data from the table: "global_product_config" */
  delete_global_product_config?: Maybe<Global_Product_Config_Mutation_Response>;
  /** delete single row from the table: "global_product_config" */
  delete_global_product_config_by_pk?: Maybe<Global_Product_Config>;
  /** delete data from the table: "hfc_card_settings" */
  delete_hfc_card_settings?: Maybe<Hfc_Card_Settings_Mutation_Response>;
  /** delete single row from the table: "hfc_card_settings" */
  delete_hfc_card_settings_by_pk?: Maybe<Hfc_Card_Settings>;
  /** delete data from the table: "hfc_user_settings" */
  delete_hfc_user_settings?: Maybe<Hfc_User_Settings_Mutation_Response>;
  /** delete single row from the table: "hfc_user_settings" */
  delete_hfc_user_settings_by_pk?: Maybe<Hfc_User_Settings>;
  /** delete data from the table: "local_instrument" */
  delete_local_instrument?: Maybe<Local_Instrument_Mutation_Response>;
  /** delete single row from the table: "local_instrument" */
  delete_local_instrument_by_pk?: Maybe<Local_Instrument>;
  /** delete data from the table: "logout_request" */
  delete_logout_request?: Maybe<Logout_Request_Mutation_Response>;
  /** delete single row from the table: "logout_request" */
  delete_logout_request_by_pk?: Maybe<Logout_Request>;
  /** delete data from the table: "organisation" */
  delete_organisation?: Maybe<Organisation_Mutation_Response>;
  /** delete single row from the table: "organisation" */
  delete_organisation_by_pk?: Maybe<Organisation>;
  /** delete data from the table: "package" */
  delete_package?: Maybe<Package_Mutation_Response>;
  /** delete single row from the table: "package" */
  delete_package_by_pk?: Maybe<Package>;
  /** delete data from the table: "package_type" */
  delete_package_type?: Maybe<Package_Type_Mutation_Response>;
  /** delete single row from the table: "package_type" */
  delete_package_type_by_pk?: Maybe<Package_Type>;
  /** delete data from the table: "page_settings" */
  delete_page_settings?: Maybe<Page_Settings_Mutation_Response>;
  /** delete single row from the table: "page_settings" */
  delete_page_settings_by_pk?: Maybe<Page_Settings>;
  /** delete data from the table: "permission" */
  delete_permission?: Maybe<Permission_Mutation_Response>;
  /** delete single row from the table: "permission" */
  delete_permission_by_pk?: Maybe<Permission>;
  /** delete data from the table: "product" */
  delete_product?: Maybe<Product_Mutation_Response>;
  /** delete data from the table: "product_artis_type" */
  delete_product_artis_type?: Maybe<Product_Artis_Type_Mutation_Response>;
  /** delete single row from the table: "product_artis_type" */
  delete_product_artis_type_by_pk?: Maybe<Product_Artis_Type>;
  /** delete single row from the table: "product" */
  delete_product_by_pk?: Maybe<Product>;
  /** delete data from the table: "product_config" */
  delete_product_config?: Maybe<Product_Config_Mutation_Response>;
  /** delete single row from the table: "product_config" */
  delete_product_config_by_pk?: Maybe<Product_Config>;
  /** delete data from the table: "product_eod" */
  delete_product_eod?: Maybe<Product_Eod_Mutation_Response>;
  /** delete single row from the table: "product_eod" */
  delete_product_eod_by_pk?: Maybe<Product_Eod>;
  /** delete data from the table: "product_global_dependencies" */
  delete_product_global_dependencies?: Maybe<Product_Global_Dependencies_Mutation_Response>;
  /** delete single row from the table: "product_global_dependencies" */
  delete_product_global_dependencies_by_pk?: Maybe<Product_Global_Dependencies>;
  /** delete data from the table: "product_maturity" */
  delete_product_maturity?: Maybe<Product_Maturity_Mutation_Response>;
  /** delete single row from the table: "product_maturity" */
  delete_product_maturity_by_pk?: Maybe<Product_Maturity>;
  /** delete data from the table: "product_overrides" */
  delete_product_overrides?: Maybe<Product_Overrides_Mutation_Response>;
  /** delete single row from the table: "product_overrides" */
  delete_product_overrides_by_pk?: Maybe<Product_Overrides>;
  /** delete data from the table: "product_source" */
  delete_product_source?: Maybe<Product_Source_Mutation_Response>;
  /** delete single row from the table: "product_source" */
  delete_product_source_by_pk?: Maybe<Product_Source>;
  /** delete data from the table: "product_summary_type" */
  delete_product_summary_type?: Maybe<Product_Summary_Type_Mutation_Response>;
  /** delete single row from the table: "product_summary_type" */
  delete_product_summary_type_by_pk?: Maybe<Product_Summary_Type>;
  /** delete data from the table: "product_type" */
  delete_product_type?: Maybe<Product_Type_Mutation_Response>;
  /** delete single row from the table: "product_type" */
  delete_product_type_by_pk?: Maybe<Product_Type>;
  /** delete data from the table: "product_uom" */
  delete_product_uom?: Maybe<Product_Uom_Mutation_Response>;
  /** delete single row from the table: "product_uom" */
  delete_product_uom_by_pk?: Maybe<Product_Uom>;
  /** delete data from the table: "session" */
  delete_session?: Maybe<Session_Mutation_Response>;
  /** delete single row from the table: "session" */
  delete_session_by_pk?: Maybe<Session>;
  /** delete data from the table: "session_type" */
  delete_session_type?: Maybe<Session_Type_Mutation_Response>;
  /** delete single row from the table: "session_type" */
  delete_session_type_by_pk?: Maybe<Session_Type>;
  /** delete data from the table: "shared_instrument" */
  delete_shared_instrument?: Maybe<Shared_Instrument_Mutation_Response>;
  /** delete single row from the table: "shared_instrument" */
  delete_shared_instrument_by_pk?: Maybe<Shared_Instrument>;
  /** delete data from the table: "sharing_agreement" */
  delete_sharing_agreement?: Maybe<Sharing_Agreement_Mutation_Response>;
  /** delete single row from the table: "sharing_agreement" */
  delete_sharing_agreement_by_pk?: Maybe<Sharing_Agreement>;
  /** delete data from the table: "source" */
  delete_source?: Maybe<Source_Mutation_Response>;
  /** delete single row from the table: "source" */
  delete_source_by_pk?: Maybe<Source>;
  /** delete data from the table: "user_right" */
  delete_user_right?: Maybe<User_Right_Mutation_Response>;
  /** delete single row from the table: "user_right" */
  delete_user_right_by_pk?: Maybe<User_Right>;
  /** delete data from the table: "user_storage" */
  delete_user_storage?: Maybe<User_Storage_Mutation_Response>;
  /** delete single row from the table: "user_storage" */
  delete_user_storage_by_pk?: Maybe<User_Storage>;
  /** insert data into the table: "audit.logged_actions" */
  insert_audit_logged_actions?: Maybe<Audit_Logged_Actions_Mutation_Response>;
  /** insert a single row into the table: "audit.logged_actions" */
  insert_audit_logged_actions_one?: Maybe<Audit_Logged_Actions>;
  /** insert data into the table: "audit.umi_actions" */
  insert_audit_umi_actions?: Maybe<Audit_Umi_Actions_Mutation_Response>;
  /** insert a single row into the table: "audit.umi_actions" */
  insert_audit_umi_actions_one?: Maybe<Audit_Umi_Actions>;
  /** insert data into the table: "commodity_group" */
  insert_commodity_group?: Maybe<Commodity_Group_Mutation_Response>;
  /** insert a single row into the table: "commodity_group" */
  insert_commodity_group_one?: Maybe<Commodity_Group>;
  /** insert data into the table: "commodity_parent_group" */
  insert_commodity_parent_group?: Maybe<Commodity_Parent_Group_Mutation_Response>;
  /** insert a single row into the table: "commodity_parent_group" */
  insert_commodity_parent_group_one?: Maybe<Commodity_Parent_Group>;
  /** insert data into the table: "eod" */
  insert_eod?: Maybe<Eod_Mutation_Response>;
  /** insert data into the table: "eod_entry" */
  insert_eod_entry?: Maybe<Eod_Entry_Mutation_Response>;
  /** insert a single row into the table: "eod_entry" */
  insert_eod_entry_one?: Maybe<Eod_Entry>;
  /** insert a single row into the table: "eod" */
  insert_eod_one?: Maybe<Eod>;
  /** insert data into the table: "exchange" */
  insert_exchange?: Maybe<Exchange_Mutation_Response>;
  /** insert data into the table: "exchange_event_type" */
  insert_exchange_event_type?: Maybe<Exchange_Event_Type_Mutation_Response>;
  /** insert a single row into the table: "exchange_event_type" */
  insert_exchange_event_type_one?: Maybe<Exchange_Event_Type>;
  /** insert a single row into the table: "exchange" */
  insert_exchange_one?: Maybe<Exchange>;
  /** insert data into the table: "exchange_usage" */
  insert_exchange_usage?: Maybe<Exchange_Usage_Mutation_Response>;
  /** insert a single row into the table: "exchange_usage" */
  insert_exchange_usage_one?: Maybe<Exchange_Usage>;
  /** insert data into the table: "folio_column_settings" */
  insert_folio_column_settings?: Maybe<Folio_Column_Settings_Mutation_Response>;
  /** insert a single row into the table: "folio_column_settings" */
  insert_folio_column_settings_one?: Maybe<Folio_Column_Settings>;
  /** insert data into the table: "folio_shadow_curves" */
  insert_folio_shadow_curves?: Maybe<Folio_Shadow_Curves_Mutation_Response>;
  /** insert a single row into the table: "folio_shadow_curves" */
  insert_folio_shadow_curves_one?: Maybe<Folio_Shadow_Curves>;
  /** insert data into the table: "folio_user" */
  insert_folio_user?: Maybe<Folio_User_Mutation_Response>;
  /** insert data into the table: "folio_user_basic_profile" */
  insert_folio_user_basic_profile?: Maybe<Folio_User_Basic_Profile_Mutation_Response>;
  /** insert a single row into the table: "folio_user_basic_profile" */
  insert_folio_user_basic_profile_one?: Maybe<Folio_User_Basic_Profile>;
  /** insert a single row into the table: "folio_user" */
  insert_folio_user_one?: Maybe<Folio_User>;
  /** insert data into the table: "geographical_region" */
  insert_geographical_region?: Maybe<Geographical_Region_Mutation_Response>;
  /** insert a single row into the table: "geographical_region" */
  insert_geographical_region_one?: Maybe<Geographical_Region>;
  /** insert data into the table: "global_instrument" */
  insert_global_instrument?: Maybe<Global_Instrument_Mutation_Response>;
  /** insert a single row into the table: "global_instrument" */
  insert_global_instrument_one?: Maybe<Global_Instrument>;
  /** insert data into the table: "global_package" */
  insert_global_package?: Maybe<Global_Package_Mutation_Response>;
  /** insert a single row into the table: "global_package" */
  insert_global_package_one?: Maybe<Global_Package>;
  /** insert data into the table: "global_permission" */
  insert_global_permission?: Maybe<Global_Permission_Mutation_Response>;
  /** insert a single row into the table: "global_permission" */
  insert_global_permission_one?: Maybe<Global_Permission>;
  /** insert data into the table: "global_product" */
  insert_global_product?: Maybe<Global_Product_Mutation_Response>;
  /** insert data into the table: "global_product_config" */
  insert_global_product_config?: Maybe<Global_Product_Config_Mutation_Response>;
  /** insert a single row into the table: "global_product_config" */
  insert_global_product_config_one?: Maybe<Global_Product_Config>;
  /** insert a single row into the table: "global_product" */
  insert_global_product_one?: Maybe<Global_Product>;
  /** insert data into the table: "hfc_card_settings" */
  insert_hfc_card_settings?: Maybe<Hfc_Card_Settings_Mutation_Response>;
  /** insert a single row into the table: "hfc_card_settings" */
  insert_hfc_card_settings_one?: Maybe<Hfc_Card_Settings>;
  /** insert data into the table: "hfc_user_settings" */
  insert_hfc_user_settings?: Maybe<Hfc_User_Settings_Mutation_Response>;
  /** insert a single row into the table: "hfc_user_settings" */
  insert_hfc_user_settings_one?: Maybe<Hfc_User_Settings>;
  /** insert data into the table: "local_instrument" */
  insert_local_instrument?: Maybe<Local_Instrument_Mutation_Response>;
  /** insert a single row into the table: "local_instrument" */
  insert_local_instrument_one?: Maybe<Local_Instrument>;
  /** insert data into the table: "logout_request" */
  insert_logout_request?: Maybe<Logout_Request_Mutation_Response>;
  /** insert a single row into the table: "logout_request" */
  insert_logout_request_one?: Maybe<Logout_Request>;
  /** insert data into the table: "organisation" */
  insert_organisation?: Maybe<Organisation_Mutation_Response>;
  /** insert a single row into the table: "organisation" */
  insert_organisation_one?: Maybe<Organisation>;
  /** insert data into the table: "package" */
  insert_package?: Maybe<Package_Mutation_Response>;
  /** insert a single row into the table: "package" */
  insert_package_one?: Maybe<Package>;
  /** insert data into the table: "package_type" */
  insert_package_type?: Maybe<Package_Type_Mutation_Response>;
  /** insert a single row into the table: "package_type" */
  insert_package_type_one?: Maybe<Package_Type>;
  /** insert data into the table: "page_settings" */
  insert_page_settings?: Maybe<Page_Settings_Mutation_Response>;
  /** insert a single row into the table: "page_settings" */
  insert_page_settings_one?: Maybe<Page_Settings>;
  /** insert data into the table: "permission" */
  insert_permission?: Maybe<Permission_Mutation_Response>;
  /** insert a single row into the table: "permission" */
  insert_permission_one?: Maybe<Permission>;
  /** insert data into the table: "product" */
  insert_product?: Maybe<Product_Mutation_Response>;
  /** insert data into the table: "product_artis_type" */
  insert_product_artis_type?: Maybe<Product_Artis_Type_Mutation_Response>;
  /** insert a single row into the table: "product_artis_type" */
  insert_product_artis_type_one?: Maybe<Product_Artis_Type>;
  /** insert data into the table: "product_config" */
  insert_product_config?: Maybe<Product_Config_Mutation_Response>;
  /** insert a single row into the table: "product_config" */
  insert_product_config_one?: Maybe<Product_Config>;
  /** insert data into the table: "product_eod" */
  insert_product_eod?: Maybe<Product_Eod_Mutation_Response>;
  /** insert a single row into the table: "product_eod" */
  insert_product_eod_one?: Maybe<Product_Eod>;
  /** insert data into the table: "product_global_dependencies" */
  insert_product_global_dependencies?: Maybe<Product_Global_Dependencies_Mutation_Response>;
  /** insert a single row into the table: "product_global_dependencies" */
  insert_product_global_dependencies_one?: Maybe<Product_Global_Dependencies>;
  /** insert data into the table: "product_maturity" */
  insert_product_maturity?: Maybe<Product_Maturity_Mutation_Response>;
  /** insert a single row into the table: "product_maturity" */
  insert_product_maturity_one?: Maybe<Product_Maturity>;
  /** insert a single row into the table: "product" */
  insert_product_one?: Maybe<Product>;
  /** insert data into the table: "product_overrides" */
  insert_product_overrides?: Maybe<Product_Overrides_Mutation_Response>;
  /** insert a single row into the table: "product_overrides" */
  insert_product_overrides_one?: Maybe<Product_Overrides>;
  /** insert data into the table: "product_source" */
  insert_product_source?: Maybe<Product_Source_Mutation_Response>;
  /** insert a single row into the table: "product_source" */
  insert_product_source_one?: Maybe<Product_Source>;
  /** insert data into the table: "product_summary_type" */
  insert_product_summary_type?: Maybe<Product_Summary_Type_Mutation_Response>;
  /** insert a single row into the table: "product_summary_type" */
  insert_product_summary_type_one?: Maybe<Product_Summary_Type>;
  /** insert data into the table: "product_type" */
  insert_product_type?: Maybe<Product_Type_Mutation_Response>;
  /** insert a single row into the table: "product_type" */
  insert_product_type_one?: Maybe<Product_Type>;
  /** insert data into the table: "product_uom" */
  insert_product_uom?: Maybe<Product_Uom_Mutation_Response>;
  /** insert a single row into the table: "product_uom" */
  insert_product_uom_one?: Maybe<Product_Uom>;
  /** insert data into the table: "session" */
  insert_session?: Maybe<Session_Mutation_Response>;
  /** insert a single row into the table: "session" */
  insert_session_one?: Maybe<Session>;
  /** insert data into the table: "session_type" */
  insert_session_type?: Maybe<Session_Type_Mutation_Response>;
  /** insert a single row into the table: "session_type" */
  insert_session_type_one?: Maybe<Session_Type>;
  /** insert data into the table: "shared_instrument" */
  insert_shared_instrument?: Maybe<Shared_Instrument_Mutation_Response>;
  /** insert a single row into the table: "shared_instrument" */
  insert_shared_instrument_one?: Maybe<Shared_Instrument>;
  /** insert data into the table: "sharing_agreement" */
  insert_sharing_agreement?: Maybe<Sharing_Agreement_Mutation_Response>;
  /** insert a single row into the table: "sharing_agreement" */
  insert_sharing_agreement_one?: Maybe<Sharing_Agreement>;
  /** insert data into the table: "source" */
  insert_source?: Maybe<Source_Mutation_Response>;
  /** insert a single row into the table: "source" */
  insert_source_one?: Maybe<Source>;
  /** insert data into the table: "user_right" */
  insert_user_right?: Maybe<User_Right_Mutation_Response>;
  /** insert a single row into the table: "user_right" */
  insert_user_right_one?: Maybe<User_Right>;
  /** insert data into the table: "user_storage" */
  insert_user_storage?: Maybe<User_Storage_Mutation_Response>;
  /** insert a single row into the table: "user_storage" */
  insert_user_storage_one?: Maybe<User_Storage>;
  /** update data of the table: "audit.logged_actions" */
  update_audit_logged_actions?: Maybe<Audit_Logged_Actions_Mutation_Response>;
  /** update single row of the table: "audit.logged_actions" */
  update_audit_logged_actions_by_pk?: Maybe<Audit_Logged_Actions>;
  /** update multiples rows of table: "audit.logged_actions" */
  update_audit_logged_actions_many?: Maybe<Array<Maybe<Audit_Logged_Actions_Mutation_Response>>>;
  /** update data of the table: "audit.umi_actions" */
  update_audit_umi_actions?: Maybe<Audit_Umi_Actions_Mutation_Response>;
  /** update single row of the table: "audit.umi_actions" */
  update_audit_umi_actions_by_pk?: Maybe<Audit_Umi_Actions>;
  /** update multiples rows of table: "audit.umi_actions" */
  update_audit_umi_actions_many?: Maybe<Array<Maybe<Audit_Umi_Actions_Mutation_Response>>>;
  /** update data of the table: "commodity_group" */
  update_commodity_group?: Maybe<Commodity_Group_Mutation_Response>;
  /** update single row of the table: "commodity_group" */
  update_commodity_group_by_pk?: Maybe<Commodity_Group>;
  /** update multiples rows of table: "commodity_group" */
  update_commodity_group_many?: Maybe<Array<Maybe<Commodity_Group_Mutation_Response>>>;
  /** update data of the table: "commodity_parent_group" */
  update_commodity_parent_group?: Maybe<Commodity_Parent_Group_Mutation_Response>;
  /** update single row of the table: "commodity_parent_group" */
  update_commodity_parent_group_by_pk?: Maybe<Commodity_Parent_Group>;
  /** update multiples rows of table: "commodity_parent_group" */
  update_commodity_parent_group_many?: Maybe<Array<Maybe<Commodity_Parent_Group_Mutation_Response>>>;
  /** update data of the table: "eod" */
  update_eod?: Maybe<Eod_Mutation_Response>;
  /** update single row of the table: "eod" */
  update_eod_by_pk?: Maybe<Eod>;
  /** update data of the table: "eod_entry" */
  update_eod_entry?: Maybe<Eod_Entry_Mutation_Response>;
  /** update single row of the table: "eod_entry" */
  update_eod_entry_by_pk?: Maybe<Eod_Entry>;
  /** update multiples rows of table: "eod_entry" */
  update_eod_entry_many?: Maybe<Array<Maybe<Eod_Entry_Mutation_Response>>>;
  /** update multiples rows of table: "eod" */
  update_eod_many?: Maybe<Array<Maybe<Eod_Mutation_Response>>>;
  /** update data of the table: "exchange" */
  update_exchange?: Maybe<Exchange_Mutation_Response>;
  /** update single row of the table: "exchange" */
  update_exchange_by_pk?: Maybe<Exchange>;
  /** update data of the table: "exchange_event_type" */
  update_exchange_event_type?: Maybe<Exchange_Event_Type_Mutation_Response>;
  /** update single row of the table: "exchange_event_type" */
  update_exchange_event_type_by_pk?: Maybe<Exchange_Event_Type>;
  /** update multiples rows of table: "exchange_event_type" */
  update_exchange_event_type_many?: Maybe<Array<Maybe<Exchange_Event_Type_Mutation_Response>>>;
  /** update multiples rows of table: "exchange" */
  update_exchange_many?: Maybe<Array<Maybe<Exchange_Mutation_Response>>>;
  /** update data of the table: "exchange_usage" */
  update_exchange_usage?: Maybe<Exchange_Usage_Mutation_Response>;
  /** update single row of the table: "exchange_usage" */
  update_exchange_usage_by_pk?: Maybe<Exchange_Usage>;
  /** update multiples rows of table: "exchange_usage" */
  update_exchange_usage_many?: Maybe<Array<Maybe<Exchange_Usage_Mutation_Response>>>;
  /** update data of the table: "folio_column_settings" */
  update_folio_column_settings?: Maybe<Folio_Column_Settings_Mutation_Response>;
  /** update single row of the table: "folio_column_settings" */
  update_folio_column_settings_by_pk?: Maybe<Folio_Column_Settings>;
  /** update multiples rows of table: "folio_column_settings" */
  update_folio_column_settings_many?: Maybe<Array<Maybe<Folio_Column_Settings_Mutation_Response>>>;
  /** update data of the table: "folio_shadow_curves" */
  update_folio_shadow_curves?: Maybe<Folio_Shadow_Curves_Mutation_Response>;
  /** update single row of the table: "folio_shadow_curves" */
  update_folio_shadow_curves_by_pk?: Maybe<Folio_Shadow_Curves>;
  /** update multiples rows of table: "folio_shadow_curves" */
  update_folio_shadow_curves_many?: Maybe<Array<Maybe<Folio_Shadow_Curves_Mutation_Response>>>;
  /** update data of the table: "folio_user" */
  update_folio_user?: Maybe<Folio_User_Mutation_Response>;
  /** update data of the table: "folio_user_basic_profile" */
  update_folio_user_basic_profile?: Maybe<Folio_User_Basic_Profile_Mutation_Response>;
  /** update multiples rows of table: "folio_user_basic_profile" */
  update_folio_user_basic_profile_many?: Maybe<Array<Maybe<Folio_User_Basic_Profile_Mutation_Response>>>;
  /** update single row of the table: "folio_user" */
  update_folio_user_by_pk?: Maybe<Folio_User>;
  /** update multiples rows of table: "folio_user" */
  update_folio_user_many?: Maybe<Array<Maybe<Folio_User_Mutation_Response>>>;
  /** update data of the table: "geographical_region" */
  update_geographical_region?: Maybe<Geographical_Region_Mutation_Response>;
  /** update single row of the table: "geographical_region" */
  update_geographical_region_by_pk?: Maybe<Geographical_Region>;
  /** update multiples rows of table: "geographical_region" */
  update_geographical_region_many?: Maybe<Array<Maybe<Geographical_Region_Mutation_Response>>>;
  /** update data of the table: "global_instrument" */
  update_global_instrument?: Maybe<Global_Instrument_Mutation_Response>;
  /** update single row of the table: "global_instrument" */
  update_global_instrument_by_pk?: Maybe<Global_Instrument>;
  /** update multiples rows of table: "global_instrument" */
  update_global_instrument_many?: Maybe<Array<Maybe<Global_Instrument_Mutation_Response>>>;
  /** update data of the table: "global_package" */
  update_global_package?: Maybe<Global_Package_Mutation_Response>;
  /** update single row of the table: "global_package" */
  update_global_package_by_pk?: Maybe<Global_Package>;
  /** update multiples rows of table: "global_package" */
  update_global_package_many?: Maybe<Array<Maybe<Global_Package_Mutation_Response>>>;
  /** update data of the table: "global_permission" */
  update_global_permission?: Maybe<Global_Permission_Mutation_Response>;
  /** update single row of the table: "global_permission" */
  update_global_permission_by_pk?: Maybe<Global_Permission>;
  /** update multiples rows of table: "global_permission" */
  update_global_permission_many?: Maybe<Array<Maybe<Global_Permission_Mutation_Response>>>;
  /** update data of the table: "global_product" */
  update_global_product?: Maybe<Global_Product_Mutation_Response>;
  /** update single row of the table: "global_product" */
  update_global_product_by_pk?: Maybe<Global_Product>;
  /** update data of the table: "global_product_config" */
  update_global_product_config?: Maybe<Global_Product_Config_Mutation_Response>;
  /** update single row of the table: "global_product_config" */
  update_global_product_config_by_pk?: Maybe<Global_Product_Config>;
  /** update multiples rows of table: "global_product_config" */
  update_global_product_config_many?: Maybe<Array<Maybe<Global_Product_Config_Mutation_Response>>>;
  /** update multiples rows of table: "global_product" */
  update_global_product_many?: Maybe<Array<Maybe<Global_Product_Mutation_Response>>>;
  /** update data of the table: "hfc_card_settings" */
  update_hfc_card_settings?: Maybe<Hfc_Card_Settings_Mutation_Response>;
  /** update single row of the table: "hfc_card_settings" */
  update_hfc_card_settings_by_pk?: Maybe<Hfc_Card_Settings>;
  /** update multiples rows of table: "hfc_card_settings" */
  update_hfc_card_settings_many?: Maybe<Array<Maybe<Hfc_Card_Settings_Mutation_Response>>>;
  /** update data of the table: "hfc_user_settings" */
  update_hfc_user_settings?: Maybe<Hfc_User_Settings_Mutation_Response>;
  /** update single row of the table: "hfc_user_settings" */
  update_hfc_user_settings_by_pk?: Maybe<Hfc_User_Settings>;
  /** update multiples rows of table: "hfc_user_settings" */
  update_hfc_user_settings_many?: Maybe<Array<Maybe<Hfc_User_Settings_Mutation_Response>>>;
  /** update data of the table: "local_instrument" */
  update_local_instrument?: Maybe<Local_Instrument_Mutation_Response>;
  /** update single row of the table: "local_instrument" */
  update_local_instrument_by_pk?: Maybe<Local_Instrument>;
  /** update multiples rows of table: "local_instrument" */
  update_local_instrument_many?: Maybe<Array<Maybe<Local_Instrument_Mutation_Response>>>;
  /** update data of the table: "logout_request" */
  update_logout_request?: Maybe<Logout_Request_Mutation_Response>;
  /** update single row of the table: "logout_request" */
  update_logout_request_by_pk?: Maybe<Logout_Request>;
  /** update multiples rows of table: "logout_request" */
  update_logout_request_many?: Maybe<Array<Maybe<Logout_Request_Mutation_Response>>>;
  /** update data of the table: "organisation" */
  update_organisation?: Maybe<Organisation_Mutation_Response>;
  /** update single row of the table: "organisation" */
  update_organisation_by_pk?: Maybe<Organisation>;
  /** update multiples rows of table: "organisation" */
  update_organisation_many?: Maybe<Array<Maybe<Organisation_Mutation_Response>>>;
  /** update data of the table: "package" */
  update_package?: Maybe<Package_Mutation_Response>;
  /** update single row of the table: "package" */
  update_package_by_pk?: Maybe<Package>;
  /** update multiples rows of table: "package" */
  update_package_many?: Maybe<Array<Maybe<Package_Mutation_Response>>>;
  /** update data of the table: "package_type" */
  update_package_type?: Maybe<Package_Type_Mutation_Response>;
  /** update single row of the table: "package_type" */
  update_package_type_by_pk?: Maybe<Package_Type>;
  /** update multiples rows of table: "package_type" */
  update_package_type_many?: Maybe<Array<Maybe<Package_Type_Mutation_Response>>>;
  /** update data of the table: "page_settings" */
  update_page_settings?: Maybe<Page_Settings_Mutation_Response>;
  /** update single row of the table: "page_settings" */
  update_page_settings_by_pk?: Maybe<Page_Settings>;
  /** update multiples rows of table: "page_settings" */
  update_page_settings_many?: Maybe<Array<Maybe<Page_Settings_Mutation_Response>>>;
  /** update data of the table: "permission" */
  update_permission?: Maybe<Permission_Mutation_Response>;
  /** update single row of the table: "permission" */
  update_permission_by_pk?: Maybe<Permission>;
  /** update multiples rows of table: "permission" */
  update_permission_many?: Maybe<Array<Maybe<Permission_Mutation_Response>>>;
  /** update data of the table: "product" */
  update_product?: Maybe<Product_Mutation_Response>;
  /** update data of the table: "product_artis_type" */
  update_product_artis_type?: Maybe<Product_Artis_Type_Mutation_Response>;
  /** update single row of the table: "product_artis_type" */
  update_product_artis_type_by_pk?: Maybe<Product_Artis_Type>;
  /** update multiples rows of table: "product_artis_type" */
  update_product_artis_type_many?: Maybe<Array<Maybe<Product_Artis_Type_Mutation_Response>>>;
  /** update single row of the table: "product" */
  update_product_by_pk?: Maybe<Product>;
  /** update data of the table: "product_config" */
  update_product_config?: Maybe<Product_Config_Mutation_Response>;
  /** update single row of the table: "product_config" */
  update_product_config_by_pk?: Maybe<Product_Config>;
  /** update multiples rows of table: "product_config" */
  update_product_config_many?: Maybe<Array<Maybe<Product_Config_Mutation_Response>>>;
  /** update data of the table: "product_eod" */
  update_product_eod?: Maybe<Product_Eod_Mutation_Response>;
  /** update single row of the table: "product_eod" */
  update_product_eod_by_pk?: Maybe<Product_Eod>;
  /** update multiples rows of table: "product_eod" */
  update_product_eod_many?: Maybe<Array<Maybe<Product_Eod_Mutation_Response>>>;
  /** update data of the table: "product_global_dependencies" */
  update_product_global_dependencies?: Maybe<Product_Global_Dependencies_Mutation_Response>;
  /** update single row of the table: "product_global_dependencies" */
  update_product_global_dependencies_by_pk?: Maybe<Product_Global_Dependencies>;
  /** update multiples rows of table: "product_global_dependencies" */
  update_product_global_dependencies_many?: Maybe<Array<Maybe<Product_Global_Dependencies_Mutation_Response>>>;
  /** update multiples rows of table: "product" */
  update_product_many?: Maybe<Array<Maybe<Product_Mutation_Response>>>;
  /** update data of the table: "product_maturity" */
  update_product_maturity?: Maybe<Product_Maturity_Mutation_Response>;
  /** update single row of the table: "product_maturity" */
  update_product_maturity_by_pk?: Maybe<Product_Maturity>;
  /** update multiples rows of table: "product_maturity" */
  update_product_maturity_many?: Maybe<Array<Maybe<Product_Maturity_Mutation_Response>>>;
  /** update data of the table: "product_overrides" */
  update_product_overrides?: Maybe<Product_Overrides_Mutation_Response>;
  /** update single row of the table: "product_overrides" */
  update_product_overrides_by_pk?: Maybe<Product_Overrides>;
  /** update multiples rows of table: "product_overrides" */
  update_product_overrides_many?: Maybe<Array<Maybe<Product_Overrides_Mutation_Response>>>;
  /** update data of the table: "product_source" */
  update_product_source?: Maybe<Product_Source_Mutation_Response>;
  /** update single row of the table: "product_source" */
  update_product_source_by_pk?: Maybe<Product_Source>;
  /** update multiples rows of table: "product_source" */
  update_product_source_many?: Maybe<Array<Maybe<Product_Source_Mutation_Response>>>;
  /** update data of the table: "product_summary_type" */
  update_product_summary_type?: Maybe<Product_Summary_Type_Mutation_Response>;
  /** update single row of the table: "product_summary_type" */
  update_product_summary_type_by_pk?: Maybe<Product_Summary_Type>;
  /** update multiples rows of table: "product_summary_type" */
  update_product_summary_type_many?: Maybe<Array<Maybe<Product_Summary_Type_Mutation_Response>>>;
  /** update data of the table: "product_type" */
  update_product_type?: Maybe<Product_Type_Mutation_Response>;
  /** update single row of the table: "product_type" */
  update_product_type_by_pk?: Maybe<Product_Type>;
  /** update multiples rows of table: "product_type" */
  update_product_type_many?: Maybe<Array<Maybe<Product_Type_Mutation_Response>>>;
  /** update data of the table: "product_uom" */
  update_product_uom?: Maybe<Product_Uom_Mutation_Response>;
  /** update single row of the table: "product_uom" */
  update_product_uom_by_pk?: Maybe<Product_Uom>;
  /** update multiples rows of table: "product_uom" */
  update_product_uom_many?: Maybe<Array<Maybe<Product_Uom_Mutation_Response>>>;
  /** update data of the table: "session" */
  update_session?: Maybe<Session_Mutation_Response>;
  /** update single row of the table: "session" */
  update_session_by_pk?: Maybe<Session>;
  /** update multiples rows of table: "session" */
  update_session_many?: Maybe<Array<Maybe<Session_Mutation_Response>>>;
  /** update data of the table: "session_type" */
  update_session_type?: Maybe<Session_Type_Mutation_Response>;
  /** update single row of the table: "session_type" */
  update_session_type_by_pk?: Maybe<Session_Type>;
  /** update multiples rows of table: "session_type" */
  update_session_type_many?: Maybe<Array<Maybe<Session_Type_Mutation_Response>>>;
  /** update data of the table: "shared_instrument" */
  update_shared_instrument?: Maybe<Shared_Instrument_Mutation_Response>;
  /** update single row of the table: "shared_instrument" */
  update_shared_instrument_by_pk?: Maybe<Shared_Instrument>;
  /** update multiples rows of table: "shared_instrument" */
  update_shared_instrument_many?: Maybe<Array<Maybe<Shared_Instrument_Mutation_Response>>>;
  /** update data of the table: "sharing_agreement" */
  update_sharing_agreement?: Maybe<Sharing_Agreement_Mutation_Response>;
  /** update single row of the table: "sharing_agreement" */
  update_sharing_agreement_by_pk?: Maybe<Sharing_Agreement>;
  /** update multiples rows of table: "sharing_agreement" */
  update_sharing_agreement_many?: Maybe<Array<Maybe<Sharing_Agreement_Mutation_Response>>>;
  /** update data of the table: "source" */
  update_source?: Maybe<Source_Mutation_Response>;
  /** update single row of the table: "source" */
  update_source_by_pk?: Maybe<Source>;
  /** update multiples rows of table: "source" */
  update_source_many?: Maybe<Array<Maybe<Source_Mutation_Response>>>;
  /** update data of the table: "user_right" */
  update_user_right?: Maybe<User_Right_Mutation_Response>;
  /** update single row of the table: "user_right" */
  update_user_right_by_pk?: Maybe<User_Right>;
  /** update multiples rows of table: "user_right" */
  update_user_right_many?: Maybe<Array<Maybe<User_Right_Mutation_Response>>>;
  /** update data of the table: "user_storage" */
  update_user_storage?: Maybe<User_Storage_Mutation_Response>;
  /** update single row of the table: "user_storage" */
  update_user_storage_by_pk?: Maybe<User_Storage>;
  /** update multiples rows of table: "user_storage" */
  update_user_storage_many?: Maybe<Array<Maybe<User_Storage_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Audit_Logged_ActionsArgs = {
  where: Audit_Logged_Actions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Audit_Logged_Actions_By_PkArgs = {
  event_id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Audit_Umi_ActionsArgs = {
  where: Audit_Umi_Actions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Audit_Umi_Actions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Commodity_GroupArgs = {
  where: Commodity_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Commodity_Group_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Commodity_Parent_GroupArgs = {
  where: Commodity_Parent_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Commodity_Parent_Group_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_EodArgs = {
  where: Eod_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Eod_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Eod_EntryArgs = {
  where: Eod_Entry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Eod_Entry_By_PkArgs = {
  evaluation_date: Scalars['date']['input'];
  month: Scalars['date']['input'];
  product: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ExchangeArgs = {
  where: Exchange_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exchange_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Exchange_Event_TypeArgs = {
  where: Exchange_Event_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exchange_Event_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Exchange_UsageArgs = {
  where: Exchange_Usage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exchange_Usage_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Folio_Column_SettingsArgs = {
  where: Folio_Column_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Folio_Column_Settings_By_PkArgs = {
  folio_user: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Folio_Shadow_CurvesArgs = {
  where: Folio_Shadow_Curves_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Folio_Shadow_Curves_By_PkArgs = {
  folio_user: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Folio_UserArgs = {
  where: Folio_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Folio_User_Basic_ProfileArgs = {
  where: Folio_User_Basic_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Folio_User_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Geographical_RegionArgs = {
  where: Geographical_Region_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Geographical_Region_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Global_InstrumentArgs = {
  where: Global_Instrument_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Global_Instrument_By_PkArgs = {
  global_product: Scalars['uuid']['input'];
  month: Scalars['date']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Global_PackageArgs = {
  where: Global_Package_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Global_Package_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Global_PermissionArgs = {
  where: Global_Permission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Global_Permission_By_PkArgs = {
  folio_user: Scalars['String']['input'];
  global_package: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Global_ProductArgs = {
  where: Global_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Global_Product_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Global_Product_ConfigArgs = {
  where: Global_Product_Config_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Global_Product_Config_By_PkArgs = {
  product: Scalars['uuid']['input'];
  relative_month: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Hfc_Card_SettingsArgs = {
  where: Hfc_Card_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hfc_Card_Settings_By_PkArgs = {
  user: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Hfc_User_SettingsArgs = {
  where: Hfc_User_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hfc_User_Settings_By_PkArgs = {
  user: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Local_InstrumentArgs = {
  where: Local_Instrument_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Local_Instrument_By_PkArgs = {
  folio_user: Scalars['String']['input'];
  month: Scalars['date']['input'];
  product: Scalars['uuid']['input'];
  storage_type: User_Storage_Enum;
};


/** mutation root */
export type Mutation_RootDelete_Logout_RequestArgs = {
  where: Logout_Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Logout_Request_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrganisationArgs = {
  where: Organisation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organisation_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PackageArgs = {
  where: Package_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Package_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Package_TypeArgs = {
  where: Package_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Package_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Page_SettingsArgs = {
  where: Page_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Page_Settings_By_PkArgs = {
  folio_user: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PermissionArgs = {
  where: Permission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Permission_By_PkArgs = {
  folio_user: Scalars['String']['input'];
  package: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProductArgs = {
  where: Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Artis_TypeArgs = {
  where: Product_Artis_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Artis_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_ConfigArgs = {
  where: Product_Config_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Config_By_PkArgs = {
  product: Scalars['uuid']['input'];
  relative_month: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_EodArgs = {
  where: Product_Eod_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Eod_By_PkArgs = {
  eod_product: Scalars['uuid']['input'];
  product: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_Global_DependenciesArgs = {
  where: Product_Global_Dependencies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Global_Dependencies_By_PkArgs = {
  global_product: Scalars['uuid']['input'];
  product: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_MaturityArgs = {
  where: Product_Maturity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Maturity_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_OverridesArgs = {
  where: Product_Overrides_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Overrides_By_PkArgs = {
  organisation: Scalars['Int']['input'];
  product: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_SourceArgs = {
  where: Product_Source_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Source_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_Summary_TypeArgs = {
  where: Product_Summary_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Summary_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_TypeArgs = {
  where: Product_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_UomArgs = {
  where: Product_Uom_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Uom_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SessionArgs = {
  where: Session_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Session_By_PkArgs = {
  folio_user: Scalars['String']['input'];
  is_mobile: Scalars['Boolean']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Session_TypeArgs = {
  where: Session_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Session_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Shared_InstrumentArgs = {
  where: Shared_Instrument_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Shared_Instrument_By_PkArgs = {
  month: Scalars['date']['input'];
  product: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Sharing_AgreementArgs = {
  where: Sharing_Agreement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sharing_Agreement_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SourceArgs = {
  where: Source_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Source_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_RightArgs = {
  where: User_Right_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Right_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_StorageArgs = {
  where: User_Storage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Storage_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Audit_Logged_ActionsArgs = {
  objects: Array<Audit_Logged_Actions_Insert_Input>;
  on_conflict?: InputMaybe<Audit_Logged_Actions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Audit_Logged_Actions_OneArgs = {
  object: Audit_Logged_Actions_Insert_Input;
  on_conflict?: InputMaybe<Audit_Logged_Actions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Audit_Umi_ActionsArgs = {
  objects: Array<Audit_Umi_Actions_Insert_Input>;
  on_conflict?: InputMaybe<Audit_Umi_Actions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Audit_Umi_Actions_OneArgs = {
  object: Audit_Umi_Actions_Insert_Input;
  on_conflict?: InputMaybe<Audit_Umi_Actions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Commodity_GroupArgs = {
  objects: Array<Commodity_Group_Insert_Input>;
  on_conflict?: InputMaybe<Commodity_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Commodity_Group_OneArgs = {
  object: Commodity_Group_Insert_Input;
  on_conflict?: InputMaybe<Commodity_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Commodity_Parent_GroupArgs = {
  objects: Array<Commodity_Parent_Group_Insert_Input>;
  on_conflict?: InputMaybe<Commodity_Parent_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Commodity_Parent_Group_OneArgs = {
  object: Commodity_Parent_Group_Insert_Input;
  on_conflict?: InputMaybe<Commodity_Parent_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EodArgs = {
  objects: Array<Eod_Insert_Input>;
  on_conflict?: InputMaybe<Eod_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Eod_EntryArgs = {
  objects: Array<Eod_Entry_Insert_Input>;
  on_conflict?: InputMaybe<Eod_Entry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Eod_Entry_OneArgs = {
  object: Eod_Entry_Insert_Input;
  on_conflict?: InputMaybe<Eod_Entry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Eod_OneArgs = {
  object: Eod_Insert_Input;
  on_conflict?: InputMaybe<Eod_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExchangeArgs = {
  objects: Array<Exchange_Insert_Input>;
  on_conflict?: InputMaybe<Exchange_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exchange_Event_TypeArgs = {
  objects: Array<Exchange_Event_Type_Insert_Input>;
  on_conflict?: InputMaybe<Exchange_Event_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exchange_Event_Type_OneArgs = {
  object: Exchange_Event_Type_Insert_Input;
  on_conflict?: InputMaybe<Exchange_Event_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exchange_OneArgs = {
  object: Exchange_Insert_Input;
  on_conflict?: InputMaybe<Exchange_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exchange_UsageArgs = {
  objects: Array<Exchange_Usage_Insert_Input>;
  on_conflict?: InputMaybe<Exchange_Usage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exchange_Usage_OneArgs = {
  object: Exchange_Usage_Insert_Input;
  on_conflict?: InputMaybe<Exchange_Usage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Folio_Column_SettingsArgs = {
  objects: Array<Folio_Column_Settings_Insert_Input>;
  on_conflict?: InputMaybe<Folio_Column_Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Folio_Column_Settings_OneArgs = {
  object: Folio_Column_Settings_Insert_Input;
  on_conflict?: InputMaybe<Folio_Column_Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Folio_Shadow_CurvesArgs = {
  objects: Array<Folio_Shadow_Curves_Insert_Input>;
  on_conflict?: InputMaybe<Folio_Shadow_Curves_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Folio_Shadow_Curves_OneArgs = {
  object: Folio_Shadow_Curves_Insert_Input;
  on_conflict?: InputMaybe<Folio_Shadow_Curves_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Folio_UserArgs = {
  objects: Array<Folio_User_Insert_Input>;
  on_conflict?: InputMaybe<Folio_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Folio_User_Basic_ProfileArgs = {
  objects: Array<Folio_User_Basic_Profile_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Folio_User_Basic_Profile_OneArgs = {
  object: Folio_User_Basic_Profile_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Folio_User_OneArgs = {
  object: Folio_User_Insert_Input;
  on_conflict?: InputMaybe<Folio_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Geographical_RegionArgs = {
  objects: Array<Geographical_Region_Insert_Input>;
  on_conflict?: InputMaybe<Geographical_Region_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Geographical_Region_OneArgs = {
  object: Geographical_Region_Insert_Input;
  on_conflict?: InputMaybe<Geographical_Region_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Global_InstrumentArgs = {
  objects: Array<Global_Instrument_Insert_Input>;
  on_conflict?: InputMaybe<Global_Instrument_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Global_Instrument_OneArgs = {
  object: Global_Instrument_Insert_Input;
  on_conflict?: InputMaybe<Global_Instrument_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Global_PackageArgs = {
  objects: Array<Global_Package_Insert_Input>;
  on_conflict?: InputMaybe<Global_Package_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Global_Package_OneArgs = {
  object: Global_Package_Insert_Input;
  on_conflict?: InputMaybe<Global_Package_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Global_PermissionArgs = {
  objects: Array<Global_Permission_Insert_Input>;
  on_conflict?: InputMaybe<Global_Permission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Global_Permission_OneArgs = {
  object: Global_Permission_Insert_Input;
  on_conflict?: InputMaybe<Global_Permission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Global_ProductArgs = {
  objects: Array<Global_Product_Insert_Input>;
  on_conflict?: InputMaybe<Global_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Global_Product_ConfigArgs = {
  objects: Array<Global_Product_Config_Insert_Input>;
  on_conflict?: InputMaybe<Global_Product_Config_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Global_Product_Config_OneArgs = {
  object: Global_Product_Config_Insert_Input;
  on_conflict?: InputMaybe<Global_Product_Config_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Global_Product_OneArgs = {
  object: Global_Product_Insert_Input;
  on_conflict?: InputMaybe<Global_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hfc_Card_SettingsArgs = {
  objects: Array<Hfc_Card_Settings_Insert_Input>;
  on_conflict?: InputMaybe<Hfc_Card_Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hfc_Card_Settings_OneArgs = {
  object: Hfc_Card_Settings_Insert_Input;
  on_conflict?: InputMaybe<Hfc_Card_Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hfc_User_SettingsArgs = {
  objects: Array<Hfc_User_Settings_Insert_Input>;
  on_conflict?: InputMaybe<Hfc_User_Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hfc_User_Settings_OneArgs = {
  object: Hfc_User_Settings_Insert_Input;
  on_conflict?: InputMaybe<Hfc_User_Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Local_InstrumentArgs = {
  objects: Array<Local_Instrument_Insert_Input>;
  on_conflict?: InputMaybe<Local_Instrument_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Local_Instrument_OneArgs = {
  object: Local_Instrument_Insert_Input;
  on_conflict?: InputMaybe<Local_Instrument_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Logout_RequestArgs = {
  objects: Array<Logout_Request_Insert_Input>;
  on_conflict?: InputMaybe<Logout_Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Logout_Request_OneArgs = {
  object: Logout_Request_Insert_Input;
  on_conflict?: InputMaybe<Logout_Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrganisationArgs = {
  objects: Array<Organisation_Insert_Input>;
  on_conflict?: InputMaybe<Organisation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organisation_OneArgs = {
  object: Organisation_Insert_Input;
  on_conflict?: InputMaybe<Organisation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PackageArgs = {
  objects: Array<Package_Insert_Input>;
  on_conflict?: InputMaybe<Package_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Package_OneArgs = {
  object: Package_Insert_Input;
  on_conflict?: InputMaybe<Package_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Package_TypeArgs = {
  objects: Array<Package_Type_Insert_Input>;
  on_conflict?: InputMaybe<Package_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Package_Type_OneArgs = {
  object: Package_Type_Insert_Input;
  on_conflict?: InputMaybe<Package_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Page_SettingsArgs = {
  objects: Array<Page_Settings_Insert_Input>;
  on_conflict?: InputMaybe<Page_Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Page_Settings_OneArgs = {
  object: Page_Settings_Insert_Input;
  on_conflict?: InputMaybe<Page_Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PermissionArgs = {
  objects: Array<Permission_Insert_Input>;
  on_conflict?: InputMaybe<Permission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Permission_OneArgs = {
  object: Permission_Insert_Input;
  on_conflict?: InputMaybe<Permission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductArgs = {
  objects: Array<Product_Insert_Input>;
  on_conflict?: InputMaybe<Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Artis_TypeArgs = {
  objects: Array<Product_Artis_Type_Insert_Input>;
  on_conflict?: InputMaybe<Product_Artis_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Artis_Type_OneArgs = {
  object: Product_Artis_Type_Insert_Input;
  on_conflict?: InputMaybe<Product_Artis_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_ConfigArgs = {
  objects: Array<Product_Config_Insert_Input>;
  on_conflict?: InputMaybe<Product_Config_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Config_OneArgs = {
  object: Product_Config_Insert_Input;
  on_conflict?: InputMaybe<Product_Config_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_EodArgs = {
  objects: Array<Product_Eod_Insert_Input>;
  on_conflict?: InputMaybe<Product_Eod_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Eod_OneArgs = {
  object: Product_Eod_Insert_Input;
  on_conflict?: InputMaybe<Product_Eod_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Global_DependenciesArgs = {
  objects: Array<Product_Global_Dependencies_Insert_Input>;
  on_conflict?: InputMaybe<Product_Global_Dependencies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Global_Dependencies_OneArgs = {
  object: Product_Global_Dependencies_Insert_Input;
  on_conflict?: InputMaybe<Product_Global_Dependencies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_MaturityArgs = {
  objects: Array<Product_Maturity_Insert_Input>;
  on_conflict?: InputMaybe<Product_Maturity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Maturity_OneArgs = {
  object: Product_Maturity_Insert_Input;
  on_conflict?: InputMaybe<Product_Maturity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_OneArgs = {
  object: Product_Insert_Input;
  on_conflict?: InputMaybe<Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_OverridesArgs = {
  objects: Array<Product_Overrides_Insert_Input>;
  on_conflict?: InputMaybe<Product_Overrides_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Overrides_OneArgs = {
  object: Product_Overrides_Insert_Input;
  on_conflict?: InputMaybe<Product_Overrides_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_SourceArgs = {
  objects: Array<Product_Source_Insert_Input>;
  on_conflict?: InputMaybe<Product_Source_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Source_OneArgs = {
  object: Product_Source_Insert_Input;
  on_conflict?: InputMaybe<Product_Source_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Summary_TypeArgs = {
  objects: Array<Product_Summary_Type_Insert_Input>;
  on_conflict?: InputMaybe<Product_Summary_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Summary_Type_OneArgs = {
  object: Product_Summary_Type_Insert_Input;
  on_conflict?: InputMaybe<Product_Summary_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_TypeArgs = {
  objects: Array<Product_Type_Insert_Input>;
  on_conflict?: InputMaybe<Product_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Type_OneArgs = {
  object: Product_Type_Insert_Input;
  on_conflict?: InputMaybe<Product_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_UomArgs = {
  objects: Array<Product_Uom_Insert_Input>;
  on_conflict?: InputMaybe<Product_Uom_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Uom_OneArgs = {
  object: Product_Uom_Insert_Input;
  on_conflict?: InputMaybe<Product_Uom_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SessionArgs = {
  objects: Array<Session_Insert_Input>;
  on_conflict?: InputMaybe<Session_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Session_OneArgs = {
  object: Session_Insert_Input;
  on_conflict?: InputMaybe<Session_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Session_TypeArgs = {
  objects: Array<Session_Type_Insert_Input>;
  on_conflict?: InputMaybe<Session_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Session_Type_OneArgs = {
  object: Session_Type_Insert_Input;
  on_conflict?: InputMaybe<Session_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Shared_InstrumentArgs = {
  objects: Array<Shared_Instrument_Insert_Input>;
  on_conflict?: InputMaybe<Shared_Instrument_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Shared_Instrument_OneArgs = {
  object: Shared_Instrument_Insert_Input;
  on_conflict?: InputMaybe<Shared_Instrument_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sharing_AgreementArgs = {
  objects: Array<Sharing_Agreement_Insert_Input>;
  on_conflict?: InputMaybe<Sharing_Agreement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sharing_Agreement_OneArgs = {
  object: Sharing_Agreement_Insert_Input;
  on_conflict?: InputMaybe<Sharing_Agreement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SourceArgs = {
  objects: Array<Source_Insert_Input>;
  on_conflict?: InputMaybe<Source_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Source_OneArgs = {
  object: Source_Insert_Input;
  on_conflict?: InputMaybe<Source_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RightArgs = {
  objects: Array<User_Right_Insert_Input>;
  on_conflict?: InputMaybe<User_Right_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Right_OneArgs = {
  object: User_Right_Insert_Input;
  on_conflict?: InputMaybe<User_Right_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_StorageArgs = {
  objects: Array<User_Storage_Insert_Input>;
  on_conflict?: InputMaybe<User_Storage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Storage_OneArgs = {
  object: User_Storage_Insert_Input;
  on_conflict?: InputMaybe<User_Storage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Logged_ActionsArgs = {
  _append?: InputMaybe<Audit_Logged_Actions_Append_Input>;
  _delete_at_path?: InputMaybe<Audit_Logged_Actions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Audit_Logged_Actions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Audit_Logged_Actions_Delete_Key_Input>;
  _inc?: InputMaybe<Audit_Logged_Actions_Inc_Input>;
  _prepend?: InputMaybe<Audit_Logged_Actions_Prepend_Input>;
  _set?: InputMaybe<Audit_Logged_Actions_Set_Input>;
  where: Audit_Logged_Actions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Logged_Actions_By_PkArgs = {
  _append?: InputMaybe<Audit_Logged_Actions_Append_Input>;
  _delete_at_path?: InputMaybe<Audit_Logged_Actions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Audit_Logged_Actions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Audit_Logged_Actions_Delete_Key_Input>;
  _inc?: InputMaybe<Audit_Logged_Actions_Inc_Input>;
  _prepend?: InputMaybe<Audit_Logged_Actions_Prepend_Input>;
  _set?: InputMaybe<Audit_Logged_Actions_Set_Input>;
  pk_columns: Audit_Logged_Actions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Logged_Actions_ManyArgs = {
  updates: Array<Audit_Logged_Actions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Umi_ActionsArgs = {
  _append?: InputMaybe<Audit_Umi_Actions_Append_Input>;
  _delete_at_path?: InputMaybe<Audit_Umi_Actions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Audit_Umi_Actions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Audit_Umi_Actions_Delete_Key_Input>;
  _inc?: InputMaybe<Audit_Umi_Actions_Inc_Input>;
  _prepend?: InputMaybe<Audit_Umi_Actions_Prepend_Input>;
  _set?: InputMaybe<Audit_Umi_Actions_Set_Input>;
  where: Audit_Umi_Actions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Umi_Actions_By_PkArgs = {
  _append?: InputMaybe<Audit_Umi_Actions_Append_Input>;
  _delete_at_path?: InputMaybe<Audit_Umi_Actions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Audit_Umi_Actions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Audit_Umi_Actions_Delete_Key_Input>;
  _inc?: InputMaybe<Audit_Umi_Actions_Inc_Input>;
  _prepend?: InputMaybe<Audit_Umi_Actions_Prepend_Input>;
  _set?: InputMaybe<Audit_Umi_Actions_Set_Input>;
  pk_columns: Audit_Umi_Actions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Umi_Actions_ManyArgs = {
  updates: Array<Audit_Umi_Actions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Commodity_GroupArgs = {
  _inc?: InputMaybe<Commodity_Group_Inc_Input>;
  _set?: InputMaybe<Commodity_Group_Set_Input>;
  where: Commodity_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Commodity_Group_By_PkArgs = {
  _inc?: InputMaybe<Commodity_Group_Inc_Input>;
  _set?: InputMaybe<Commodity_Group_Set_Input>;
  pk_columns: Commodity_Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Commodity_Group_ManyArgs = {
  updates: Array<Commodity_Group_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Commodity_Parent_GroupArgs = {
  _inc?: InputMaybe<Commodity_Parent_Group_Inc_Input>;
  _set?: InputMaybe<Commodity_Parent_Group_Set_Input>;
  where: Commodity_Parent_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Commodity_Parent_Group_By_PkArgs = {
  _inc?: InputMaybe<Commodity_Parent_Group_Inc_Input>;
  _set?: InputMaybe<Commodity_Parent_Group_Set_Input>;
  pk_columns: Commodity_Parent_Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Commodity_Parent_Group_ManyArgs = {
  updates: Array<Commodity_Parent_Group_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_EodArgs = {
  _inc?: InputMaybe<Eod_Inc_Input>;
  _set?: InputMaybe<Eod_Set_Input>;
  where: Eod_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Eod_By_PkArgs = {
  _inc?: InputMaybe<Eod_Inc_Input>;
  _set?: InputMaybe<Eod_Set_Input>;
  pk_columns: Eod_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Eod_EntryArgs = {
  _inc?: InputMaybe<Eod_Entry_Inc_Input>;
  _set?: InputMaybe<Eod_Entry_Set_Input>;
  where: Eod_Entry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Eod_Entry_By_PkArgs = {
  _inc?: InputMaybe<Eod_Entry_Inc_Input>;
  _set?: InputMaybe<Eod_Entry_Set_Input>;
  pk_columns: Eod_Entry_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Eod_Entry_ManyArgs = {
  updates: Array<Eod_Entry_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Eod_ManyArgs = {
  updates: Array<Eod_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ExchangeArgs = {
  _inc?: InputMaybe<Exchange_Inc_Input>;
  _set?: InputMaybe<Exchange_Set_Input>;
  where: Exchange_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exchange_By_PkArgs = {
  _inc?: InputMaybe<Exchange_Inc_Input>;
  _set?: InputMaybe<Exchange_Set_Input>;
  pk_columns: Exchange_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exchange_Event_TypeArgs = {
  _set?: InputMaybe<Exchange_Event_Type_Set_Input>;
  where: Exchange_Event_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exchange_Event_Type_By_PkArgs = {
  _set?: InputMaybe<Exchange_Event_Type_Set_Input>;
  pk_columns: Exchange_Event_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exchange_Event_Type_ManyArgs = {
  updates: Array<Exchange_Event_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Exchange_ManyArgs = {
  updates: Array<Exchange_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Exchange_UsageArgs = {
  _inc?: InputMaybe<Exchange_Usage_Inc_Input>;
  _set?: InputMaybe<Exchange_Usage_Set_Input>;
  where: Exchange_Usage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exchange_Usage_By_PkArgs = {
  _inc?: InputMaybe<Exchange_Usage_Inc_Input>;
  _set?: InputMaybe<Exchange_Usage_Set_Input>;
  pk_columns: Exchange_Usage_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exchange_Usage_ManyArgs = {
  updates: Array<Exchange_Usage_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Folio_Column_SettingsArgs = {
  _append?: InputMaybe<Folio_Column_Settings_Append_Input>;
  _delete_at_path?: InputMaybe<Folio_Column_Settings_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Folio_Column_Settings_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Folio_Column_Settings_Delete_Key_Input>;
  _prepend?: InputMaybe<Folio_Column_Settings_Prepend_Input>;
  _set?: InputMaybe<Folio_Column_Settings_Set_Input>;
  where: Folio_Column_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Folio_Column_Settings_By_PkArgs = {
  _append?: InputMaybe<Folio_Column_Settings_Append_Input>;
  _delete_at_path?: InputMaybe<Folio_Column_Settings_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Folio_Column_Settings_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Folio_Column_Settings_Delete_Key_Input>;
  _prepend?: InputMaybe<Folio_Column_Settings_Prepend_Input>;
  _set?: InputMaybe<Folio_Column_Settings_Set_Input>;
  pk_columns: Folio_Column_Settings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Folio_Column_Settings_ManyArgs = {
  updates: Array<Folio_Column_Settings_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Folio_Shadow_CurvesArgs = {
  _append?: InputMaybe<Folio_Shadow_Curves_Append_Input>;
  _delete_at_path?: InputMaybe<Folio_Shadow_Curves_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Folio_Shadow_Curves_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Folio_Shadow_Curves_Delete_Key_Input>;
  _prepend?: InputMaybe<Folio_Shadow_Curves_Prepend_Input>;
  _set?: InputMaybe<Folio_Shadow_Curves_Set_Input>;
  where: Folio_Shadow_Curves_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Folio_Shadow_Curves_By_PkArgs = {
  _append?: InputMaybe<Folio_Shadow_Curves_Append_Input>;
  _delete_at_path?: InputMaybe<Folio_Shadow_Curves_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Folio_Shadow_Curves_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Folio_Shadow_Curves_Delete_Key_Input>;
  _prepend?: InputMaybe<Folio_Shadow_Curves_Prepend_Input>;
  _set?: InputMaybe<Folio_Shadow_Curves_Set_Input>;
  pk_columns: Folio_Shadow_Curves_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Folio_Shadow_Curves_ManyArgs = {
  updates: Array<Folio_Shadow_Curves_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Folio_UserArgs = {
  _append?: InputMaybe<Folio_User_Append_Input>;
  _delete_at_path?: InputMaybe<Folio_User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Folio_User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Folio_User_Delete_Key_Input>;
  _inc?: InputMaybe<Folio_User_Inc_Input>;
  _prepend?: InputMaybe<Folio_User_Prepend_Input>;
  _set?: InputMaybe<Folio_User_Set_Input>;
  where: Folio_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Folio_User_Basic_ProfileArgs = {
  _inc?: InputMaybe<Folio_User_Basic_Profile_Inc_Input>;
  _set?: InputMaybe<Folio_User_Basic_Profile_Set_Input>;
  where: Folio_User_Basic_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Folio_User_Basic_Profile_ManyArgs = {
  updates: Array<Folio_User_Basic_Profile_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Folio_User_By_PkArgs = {
  _append?: InputMaybe<Folio_User_Append_Input>;
  _delete_at_path?: InputMaybe<Folio_User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Folio_User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Folio_User_Delete_Key_Input>;
  _inc?: InputMaybe<Folio_User_Inc_Input>;
  _prepend?: InputMaybe<Folio_User_Prepend_Input>;
  _set?: InputMaybe<Folio_User_Set_Input>;
  pk_columns: Folio_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Folio_User_ManyArgs = {
  updates: Array<Folio_User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Geographical_RegionArgs = {
  _inc?: InputMaybe<Geographical_Region_Inc_Input>;
  _set?: InputMaybe<Geographical_Region_Set_Input>;
  where: Geographical_Region_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Geographical_Region_By_PkArgs = {
  _inc?: InputMaybe<Geographical_Region_Inc_Input>;
  _set?: InputMaybe<Geographical_Region_Set_Input>;
  pk_columns: Geographical_Region_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Geographical_Region_ManyArgs = {
  updates: Array<Geographical_Region_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Global_InstrumentArgs = {
  _inc?: InputMaybe<Global_Instrument_Inc_Input>;
  _set?: InputMaybe<Global_Instrument_Set_Input>;
  where: Global_Instrument_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Global_Instrument_By_PkArgs = {
  _inc?: InputMaybe<Global_Instrument_Inc_Input>;
  _set?: InputMaybe<Global_Instrument_Set_Input>;
  pk_columns: Global_Instrument_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Global_Instrument_ManyArgs = {
  updates: Array<Global_Instrument_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Global_PackageArgs = {
  _inc?: InputMaybe<Global_Package_Inc_Input>;
  _set?: InputMaybe<Global_Package_Set_Input>;
  where: Global_Package_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Global_Package_By_PkArgs = {
  _inc?: InputMaybe<Global_Package_Inc_Input>;
  _set?: InputMaybe<Global_Package_Set_Input>;
  pk_columns: Global_Package_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Global_Package_ManyArgs = {
  updates: Array<Global_Package_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Global_PermissionArgs = {
  _inc?: InputMaybe<Global_Permission_Inc_Input>;
  _set?: InputMaybe<Global_Permission_Set_Input>;
  where: Global_Permission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Global_Permission_By_PkArgs = {
  _inc?: InputMaybe<Global_Permission_Inc_Input>;
  _set?: InputMaybe<Global_Permission_Set_Input>;
  pk_columns: Global_Permission_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Global_Permission_ManyArgs = {
  updates: Array<Global_Permission_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Global_ProductArgs = {
  _inc?: InputMaybe<Global_Product_Inc_Input>;
  _set?: InputMaybe<Global_Product_Set_Input>;
  where: Global_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Global_Product_By_PkArgs = {
  _inc?: InputMaybe<Global_Product_Inc_Input>;
  _set?: InputMaybe<Global_Product_Set_Input>;
  pk_columns: Global_Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Global_Product_ConfigArgs = {
  _inc?: InputMaybe<Global_Product_Config_Inc_Input>;
  _set?: InputMaybe<Global_Product_Config_Set_Input>;
  where: Global_Product_Config_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Global_Product_Config_By_PkArgs = {
  _inc?: InputMaybe<Global_Product_Config_Inc_Input>;
  _set?: InputMaybe<Global_Product_Config_Set_Input>;
  pk_columns: Global_Product_Config_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Global_Product_Config_ManyArgs = {
  updates: Array<Global_Product_Config_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Global_Product_ManyArgs = {
  updates: Array<Global_Product_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Hfc_Card_SettingsArgs = {
  _set?: InputMaybe<Hfc_Card_Settings_Set_Input>;
  where: Hfc_Card_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hfc_Card_Settings_By_PkArgs = {
  _set?: InputMaybe<Hfc_Card_Settings_Set_Input>;
  pk_columns: Hfc_Card_Settings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Hfc_Card_Settings_ManyArgs = {
  updates: Array<Hfc_Card_Settings_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Hfc_User_SettingsArgs = {
  _set?: InputMaybe<Hfc_User_Settings_Set_Input>;
  where: Hfc_User_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hfc_User_Settings_By_PkArgs = {
  _set?: InputMaybe<Hfc_User_Settings_Set_Input>;
  pk_columns: Hfc_User_Settings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Hfc_User_Settings_ManyArgs = {
  updates: Array<Hfc_User_Settings_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Local_InstrumentArgs = {
  _inc?: InputMaybe<Local_Instrument_Inc_Input>;
  _set?: InputMaybe<Local_Instrument_Set_Input>;
  where: Local_Instrument_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Local_Instrument_By_PkArgs = {
  _inc?: InputMaybe<Local_Instrument_Inc_Input>;
  _set?: InputMaybe<Local_Instrument_Set_Input>;
  pk_columns: Local_Instrument_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Local_Instrument_ManyArgs = {
  updates: Array<Local_Instrument_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Logout_RequestArgs = {
  _inc?: InputMaybe<Logout_Request_Inc_Input>;
  _set?: InputMaybe<Logout_Request_Set_Input>;
  where: Logout_Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Logout_Request_By_PkArgs = {
  _inc?: InputMaybe<Logout_Request_Inc_Input>;
  _set?: InputMaybe<Logout_Request_Set_Input>;
  pk_columns: Logout_Request_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Logout_Request_ManyArgs = {
  updates: Array<Logout_Request_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrganisationArgs = {
  _inc?: InputMaybe<Organisation_Inc_Input>;
  _set?: InputMaybe<Organisation_Set_Input>;
  where: Organisation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organisation_By_PkArgs = {
  _inc?: InputMaybe<Organisation_Inc_Input>;
  _set?: InputMaybe<Organisation_Set_Input>;
  pk_columns: Organisation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organisation_ManyArgs = {
  updates: Array<Organisation_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PackageArgs = {
  _inc?: InputMaybe<Package_Inc_Input>;
  _set?: InputMaybe<Package_Set_Input>;
  where: Package_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Package_By_PkArgs = {
  _inc?: InputMaybe<Package_Inc_Input>;
  _set?: InputMaybe<Package_Set_Input>;
  pk_columns: Package_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Package_ManyArgs = {
  updates: Array<Package_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Package_TypeArgs = {
  _set?: InputMaybe<Package_Type_Set_Input>;
  where: Package_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Package_Type_By_PkArgs = {
  _set?: InputMaybe<Package_Type_Set_Input>;
  pk_columns: Package_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Package_Type_ManyArgs = {
  updates: Array<Package_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Page_SettingsArgs = {
  _set?: InputMaybe<Page_Settings_Set_Input>;
  where: Page_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Page_Settings_By_PkArgs = {
  _set?: InputMaybe<Page_Settings_Set_Input>;
  pk_columns: Page_Settings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Page_Settings_ManyArgs = {
  updates: Array<Page_Settings_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PermissionArgs = {
  _inc?: InputMaybe<Permission_Inc_Input>;
  _set?: InputMaybe<Permission_Set_Input>;
  where: Permission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Permission_By_PkArgs = {
  _inc?: InputMaybe<Permission_Inc_Input>;
  _set?: InputMaybe<Permission_Set_Input>;
  pk_columns: Permission_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Permission_ManyArgs = {
  updates: Array<Permission_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProductArgs = {
  _inc?: InputMaybe<Product_Inc_Input>;
  _set?: InputMaybe<Product_Set_Input>;
  where: Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Artis_TypeArgs = {
  _set?: InputMaybe<Product_Artis_Type_Set_Input>;
  where: Product_Artis_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Artis_Type_By_PkArgs = {
  _set?: InputMaybe<Product_Artis_Type_Set_Input>;
  pk_columns: Product_Artis_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Artis_Type_ManyArgs = {
  updates: Array<Product_Artis_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_By_PkArgs = {
  _inc?: InputMaybe<Product_Inc_Input>;
  _set?: InputMaybe<Product_Set_Input>;
  pk_columns: Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_ConfigArgs = {
  _append?: InputMaybe<Product_Config_Append_Input>;
  _delete_at_path?: InputMaybe<Product_Config_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Product_Config_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Product_Config_Delete_Key_Input>;
  _inc?: InputMaybe<Product_Config_Inc_Input>;
  _prepend?: InputMaybe<Product_Config_Prepend_Input>;
  _set?: InputMaybe<Product_Config_Set_Input>;
  where: Product_Config_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Config_By_PkArgs = {
  _append?: InputMaybe<Product_Config_Append_Input>;
  _delete_at_path?: InputMaybe<Product_Config_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Product_Config_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Product_Config_Delete_Key_Input>;
  _inc?: InputMaybe<Product_Config_Inc_Input>;
  _prepend?: InputMaybe<Product_Config_Prepend_Input>;
  _set?: InputMaybe<Product_Config_Set_Input>;
  pk_columns: Product_Config_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Config_ManyArgs = {
  updates: Array<Product_Config_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_EodArgs = {
  _inc?: InputMaybe<Product_Eod_Inc_Input>;
  _set?: InputMaybe<Product_Eod_Set_Input>;
  where: Product_Eod_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Eod_By_PkArgs = {
  _inc?: InputMaybe<Product_Eod_Inc_Input>;
  _set?: InputMaybe<Product_Eod_Set_Input>;
  pk_columns: Product_Eod_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Eod_ManyArgs = {
  updates: Array<Product_Eod_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Global_DependenciesArgs = {
  _set?: InputMaybe<Product_Global_Dependencies_Set_Input>;
  where: Product_Global_Dependencies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Global_Dependencies_By_PkArgs = {
  _set?: InputMaybe<Product_Global_Dependencies_Set_Input>;
  pk_columns: Product_Global_Dependencies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Global_Dependencies_ManyArgs = {
  updates: Array<Product_Global_Dependencies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_ManyArgs = {
  updates: Array<Product_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_MaturityArgs = {
  _set?: InputMaybe<Product_Maturity_Set_Input>;
  where: Product_Maturity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Maturity_By_PkArgs = {
  _set?: InputMaybe<Product_Maturity_Set_Input>;
  pk_columns: Product_Maturity_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Maturity_ManyArgs = {
  updates: Array<Product_Maturity_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_OverridesArgs = {
  _inc?: InputMaybe<Product_Overrides_Inc_Input>;
  _set?: InputMaybe<Product_Overrides_Set_Input>;
  where: Product_Overrides_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Overrides_By_PkArgs = {
  _inc?: InputMaybe<Product_Overrides_Inc_Input>;
  _set?: InputMaybe<Product_Overrides_Set_Input>;
  pk_columns: Product_Overrides_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Overrides_ManyArgs = {
  updates: Array<Product_Overrides_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_SourceArgs = {
  _set?: InputMaybe<Product_Source_Set_Input>;
  where: Product_Source_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Source_By_PkArgs = {
  _set?: InputMaybe<Product_Source_Set_Input>;
  pk_columns: Product_Source_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Source_ManyArgs = {
  updates: Array<Product_Source_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Summary_TypeArgs = {
  _set?: InputMaybe<Product_Summary_Type_Set_Input>;
  where: Product_Summary_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Summary_Type_By_PkArgs = {
  _set?: InputMaybe<Product_Summary_Type_Set_Input>;
  pk_columns: Product_Summary_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Summary_Type_ManyArgs = {
  updates: Array<Product_Summary_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_TypeArgs = {
  _set?: InputMaybe<Product_Type_Set_Input>;
  where: Product_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Type_By_PkArgs = {
  _set?: InputMaybe<Product_Type_Set_Input>;
  pk_columns: Product_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Type_ManyArgs = {
  updates: Array<Product_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_UomArgs = {
  _set?: InputMaybe<Product_Uom_Set_Input>;
  where: Product_Uom_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Uom_By_PkArgs = {
  _set?: InputMaybe<Product_Uom_Set_Input>;
  pk_columns: Product_Uom_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Uom_ManyArgs = {
  updates: Array<Product_Uom_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SessionArgs = {
  _set?: InputMaybe<Session_Set_Input>;
  where: Session_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Session_By_PkArgs = {
  _set?: InputMaybe<Session_Set_Input>;
  pk_columns: Session_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Session_ManyArgs = {
  updates: Array<Session_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Session_TypeArgs = {
  _set?: InputMaybe<Session_Type_Set_Input>;
  where: Session_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Session_Type_By_PkArgs = {
  _set?: InputMaybe<Session_Type_Set_Input>;
  pk_columns: Session_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Session_Type_ManyArgs = {
  updates: Array<Session_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Shared_InstrumentArgs = {
  _inc?: InputMaybe<Shared_Instrument_Inc_Input>;
  _set?: InputMaybe<Shared_Instrument_Set_Input>;
  where: Shared_Instrument_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Shared_Instrument_By_PkArgs = {
  _inc?: InputMaybe<Shared_Instrument_Inc_Input>;
  _set?: InputMaybe<Shared_Instrument_Set_Input>;
  pk_columns: Shared_Instrument_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Shared_Instrument_ManyArgs = {
  updates: Array<Shared_Instrument_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Sharing_AgreementArgs = {
  _inc?: InputMaybe<Sharing_Agreement_Inc_Input>;
  _set?: InputMaybe<Sharing_Agreement_Set_Input>;
  where: Sharing_Agreement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sharing_Agreement_By_PkArgs = {
  _inc?: InputMaybe<Sharing_Agreement_Inc_Input>;
  _set?: InputMaybe<Sharing_Agreement_Set_Input>;
  pk_columns: Sharing_Agreement_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sharing_Agreement_ManyArgs = {
  updates: Array<Sharing_Agreement_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SourceArgs = {
  _inc?: InputMaybe<Source_Inc_Input>;
  _set?: InputMaybe<Source_Set_Input>;
  where: Source_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Source_By_PkArgs = {
  _inc?: InputMaybe<Source_Inc_Input>;
  _set?: InputMaybe<Source_Set_Input>;
  pk_columns: Source_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Source_ManyArgs = {
  updates: Array<Source_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_RightArgs = {
  _set?: InputMaybe<User_Right_Set_Input>;
  where: User_Right_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Right_By_PkArgs = {
  _set?: InputMaybe<User_Right_Set_Input>;
  pk_columns: User_Right_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Right_ManyArgs = {
  updates: Array<User_Right_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_StorageArgs = {
  _set?: InputMaybe<User_Storage_Set_Input>;
  where: User_Storage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Storage_By_PkArgs = {
  _set?: InputMaybe<User_Storage_Set_Input>;
  pk_columns: User_Storage_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Storage_ManyArgs = {
  updates: Array<User_Storage_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** Boolean expression to compare columns of type "oid". All fields are combined with logical 'AND'. */
export type Oid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['oid']['input']>;
  _gt?: InputMaybe<Scalars['oid']['input']>;
  _gte?: InputMaybe<Scalars['oid']['input']>;
  _in?: InputMaybe<Array<Scalars['oid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['oid']['input']>;
  _lte?: InputMaybe<Scalars['oid']['input']>;
  _neq?: InputMaybe<Scalars['oid']['input']>;
  _nin?: InputMaybe<Array<Scalars['oid']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "organisation" */
export type Organisation = {
  __typename?: 'organisation';
  /** An array relationship */
  commodity_parent_groups: Array<Commodity_Parent_Group>;
  /** An aggregate relationship */
  commodity_parent_groups_aggregate: Commodity_Parent_Group_Aggregate;
  /** An array relationship */
  folio_users: Array<Folio_User>;
  /** An aggregate relationship */
  folio_users_aggregate: Folio_User_Aggregate;
  /** An array relationship */
  geographical_regions: Array<Geographical_Region>;
  /** An aggregate relationship */
  geographical_regions_aggregate: Geographical_Region_Aggregate;
  id: Scalars['Int']['output'];
  is_allowed_global_packages?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  product_overrides: Array<Product_Overrides>;
  /** An aggregate relationship */
  product_overrides_aggregate: Product_Overrides_Aggregate;
  source: Scalars['Int']['output'];
  /** An object relationship */
  sourceBySource: Source;
};


/** columns and relationships of "organisation" */
export type OrganisationCommodity_Parent_GroupsArgs = {
  distinct_on?: InputMaybe<Array<Commodity_Parent_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Commodity_Parent_Group_Order_By>>;
  where?: InputMaybe<Commodity_Parent_Group_Bool_Exp>;
};


/** columns and relationships of "organisation" */
export type OrganisationCommodity_Parent_Groups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Commodity_Parent_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Commodity_Parent_Group_Order_By>>;
  where?: InputMaybe<Commodity_Parent_Group_Bool_Exp>;
};


/** columns and relationships of "organisation" */
export type OrganisationFolio_UsersArgs = {
  distinct_on?: InputMaybe<Array<Folio_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_User_Order_By>>;
  where?: InputMaybe<Folio_User_Bool_Exp>;
};


/** columns and relationships of "organisation" */
export type OrganisationFolio_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Folio_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_User_Order_By>>;
  where?: InputMaybe<Folio_User_Bool_Exp>;
};


/** columns and relationships of "organisation" */
export type OrganisationGeographical_RegionsArgs = {
  distinct_on?: InputMaybe<Array<Geographical_Region_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Geographical_Region_Order_By>>;
  where?: InputMaybe<Geographical_Region_Bool_Exp>;
};


/** columns and relationships of "organisation" */
export type OrganisationGeographical_Regions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Geographical_Region_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Geographical_Region_Order_By>>;
  where?: InputMaybe<Geographical_Region_Bool_Exp>;
};


/** columns and relationships of "organisation" */
export type OrganisationProduct_OverridesArgs = {
  distinct_on?: InputMaybe<Array<Product_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Overrides_Order_By>>;
  where?: InputMaybe<Product_Overrides_Bool_Exp>;
};


/** columns and relationships of "organisation" */
export type OrganisationProduct_Overrides_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Overrides_Order_By>>;
  where?: InputMaybe<Product_Overrides_Bool_Exp>;
};

/** aggregated selection of "organisation" */
export type Organisation_Aggregate = {
  __typename?: 'organisation_aggregate';
  aggregate?: Maybe<Organisation_Aggregate_Fields>;
  nodes: Array<Organisation>;
};

export type Organisation_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Organisation_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Organisation_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Organisation_Aggregate_Bool_Exp_Count>;
};

export type Organisation_Aggregate_Bool_Exp_Bool_And = {
  arguments: Organisation_Select_Column_Organisation_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Organisation_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Organisation_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Organisation_Select_Column_Organisation_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Organisation_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Organisation_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Organisation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Organisation_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "organisation" */
export type Organisation_Aggregate_Fields = {
  __typename?: 'organisation_aggregate_fields';
  avg?: Maybe<Organisation_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Organisation_Max_Fields>;
  min?: Maybe<Organisation_Min_Fields>;
  stddev?: Maybe<Organisation_Stddev_Fields>;
  stddev_pop?: Maybe<Organisation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organisation_Stddev_Samp_Fields>;
  sum?: Maybe<Organisation_Sum_Fields>;
  var_pop?: Maybe<Organisation_Var_Pop_Fields>;
  var_samp?: Maybe<Organisation_Var_Samp_Fields>;
  variance?: Maybe<Organisation_Variance_Fields>;
};


/** aggregate fields of "organisation" */
export type Organisation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organisation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "organisation" */
export type Organisation_Aggregate_Order_By = {
  avg?: InputMaybe<Organisation_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Organisation_Max_Order_By>;
  min?: InputMaybe<Organisation_Min_Order_By>;
  stddev?: InputMaybe<Organisation_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Organisation_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Organisation_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Organisation_Sum_Order_By>;
  var_pop?: InputMaybe<Organisation_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Organisation_Var_Samp_Order_By>;
  variance?: InputMaybe<Organisation_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "organisation" */
export type Organisation_Arr_Rel_Insert_Input = {
  data: Array<Organisation_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Organisation_On_Conflict>;
};

/** aggregate avg on columns */
export type Organisation_Avg_Fields = {
  __typename?: 'organisation_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "organisation" */
export type Organisation_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "organisation". All fields are combined with a logical 'AND'. */
export type Organisation_Bool_Exp = {
  _and?: InputMaybe<Array<Organisation_Bool_Exp>>;
  _not?: InputMaybe<Organisation_Bool_Exp>;
  _or?: InputMaybe<Array<Organisation_Bool_Exp>>;
  commodity_parent_groups?: InputMaybe<Commodity_Parent_Group_Bool_Exp>;
  commodity_parent_groups_aggregate?: InputMaybe<Commodity_Parent_Group_Aggregate_Bool_Exp>;
  folio_users?: InputMaybe<Folio_User_Bool_Exp>;
  folio_users_aggregate?: InputMaybe<Folio_User_Aggregate_Bool_Exp>;
  geographical_regions?: InputMaybe<Geographical_Region_Bool_Exp>;
  geographical_regions_aggregate?: InputMaybe<Geographical_Region_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_allowed_global_packages?: InputMaybe<Boolean_Comparison_Exp>;
  product_overrides?: InputMaybe<Product_Overrides_Bool_Exp>;
  product_overrides_aggregate?: InputMaybe<Product_Overrides_Aggregate_Bool_Exp>;
  source?: InputMaybe<Int_Comparison_Exp>;
  sourceBySource?: InputMaybe<Source_Bool_Exp>;
};

/** unique or primary key constraints on table "organisation" */
export enum Organisation_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrganisationPkey = 'organisation_pkey',
  /** unique or primary key constraint on columns "source" */
  OrganisationSourceKey = 'organisation_source_key'
}

/** input type for incrementing numeric columns in table "organisation" */
export type Organisation_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "organisation" */
export type Organisation_Insert_Input = {
  commodity_parent_groups?: InputMaybe<Commodity_Parent_Group_Arr_Rel_Insert_Input>;
  folio_users?: InputMaybe<Folio_User_Arr_Rel_Insert_Input>;
  geographical_regions?: InputMaybe<Geographical_Region_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_allowed_global_packages?: InputMaybe<Scalars['Boolean']['input']>;
  product_overrides?: InputMaybe<Product_Overrides_Arr_Rel_Insert_Input>;
  source?: InputMaybe<Scalars['Int']['input']>;
  sourceBySource?: InputMaybe<Source_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Organisation_Max_Fields = {
  __typename?: 'organisation_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "organisation" */
export type Organisation_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Organisation_Min_Fields = {
  __typename?: 'organisation_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "organisation" */
export type Organisation_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "organisation" */
export type Organisation_Mutation_Response = {
  __typename?: 'organisation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organisation>;
};

/** input type for inserting object relation for remote table "organisation" */
export type Organisation_Obj_Rel_Insert_Input = {
  data: Organisation_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organisation_On_Conflict>;
};

/** on_conflict condition type for table "organisation" */
export type Organisation_On_Conflict = {
  constraint: Organisation_Constraint;
  update_columns?: Array<Organisation_Update_Column>;
  where?: InputMaybe<Organisation_Bool_Exp>;
};

/** Ordering options when selecting data from "organisation". */
export type Organisation_Order_By = {
  commodity_parent_groups_aggregate?: InputMaybe<Commodity_Parent_Group_Aggregate_Order_By>;
  folio_users_aggregate?: InputMaybe<Folio_User_Aggregate_Order_By>;
  geographical_regions_aggregate?: InputMaybe<Geographical_Region_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  is_allowed_global_packages?: InputMaybe<Order_By>;
  product_overrides_aggregate?: InputMaybe<Product_Overrides_Aggregate_Order_By>;
  source?: InputMaybe<Order_By>;
  sourceBySource?: InputMaybe<Source_Order_By>;
};

/** primary key columns input for table: organisation */
export type Organisation_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "organisation" */
export enum Organisation_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsAllowedGlobalPackages = 'is_allowed_global_packages',
  /** column name */
  Source = 'source'
}

/** select "organisation_aggregate_bool_exp_bool_and_arguments_columns" columns of table "organisation" */
export enum Organisation_Select_Column_Organisation_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsAllowedGlobalPackages = 'is_allowed_global_packages'
}

/** select "organisation_aggregate_bool_exp_bool_or_arguments_columns" columns of table "organisation" */
export enum Organisation_Select_Column_Organisation_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsAllowedGlobalPackages = 'is_allowed_global_packages'
}

/** input type for updating data in table "organisation" */
export type Organisation_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  is_allowed_global_packages?: InputMaybe<Scalars['Boolean']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Organisation_Stddev_Fields = {
  __typename?: 'organisation_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "organisation" */
export type Organisation_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Organisation_Stddev_Pop_Fields = {
  __typename?: 'organisation_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "organisation" */
export type Organisation_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Organisation_Stddev_Samp_Fields = {
  __typename?: 'organisation_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "organisation" */
export type Organisation_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "organisation" */
export type Organisation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organisation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organisation_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  is_allowed_global_packages?: InputMaybe<Scalars['Boolean']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Organisation_Sum_Fields = {
  __typename?: 'organisation_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "organisation" */
export type Organisation_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** update columns of table "organisation" */
export enum Organisation_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsAllowedGlobalPackages = 'is_allowed_global_packages',
  /** column name */
  Source = 'source'
}

export type Organisation_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Organisation_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organisation_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organisation_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Organisation_Var_Pop_Fields = {
  __typename?: 'organisation_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "organisation" */
export type Organisation_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Organisation_Var_Samp_Fields = {
  __typename?: 'organisation_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "organisation" */
export type Organisation_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Organisation_Variance_Fields = {
  __typename?: 'organisation_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "organisation" */
export type Organisation_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** columns and relationships of "package" */
export type Package = {
  __typename?: 'package';
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  folio_users: Array<Folio_User>;
  /** An aggregate relationship */
  folio_users_aggregate: Folio_User_Aggregate;
  id: Scalars['Int']['output'];
  is_global?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  /** An object relationship */
  packageTypeByPackageType?: Maybe<Package_Type>;
  package_type?: Maybe<Package_Type_Enum>;
  /** An array relationship */
  permissions: Array<Permission>;
  /** An aggregate relationship */
  permissions_aggregate: Permission_Aggregate;
  /** An array relationship */
  products: Array<Product>;
  /** An aggregate relationship */
  products_aggregate: Product_Aggregate;
  source?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  sourceBySource?: Maybe<Source>;
};


/** columns and relationships of "package" */
export type PackageFolio_UsersArgs = {
  distinct_on?: InputMaybe<Array<Folio_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_User_Order_By>>;
  where?: InputMaybe<Folio_User_Bool_Exp>;
};


/** columns and relationships of "package" */
export type PackageFolio_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Folio_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_User_Order_By>>;
  where?: InputMaybe<Folio_User_Bool_Exp>;
};


/** columns and relationships of "package" */
export type PackagePermissionsArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};


/** columns and relationships of "package" */
export type PackagePermissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};


/** columns and relationships of "package" */
export type PackageProductsArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


/** columns and relationships of "package" */
export type PackageProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** aggregated selection of "package" */
export type Package_Aggregate = {
  __typename?: 'package_aggregate';
  aggregate?: Maybe<Package_Aggregate_Fields>;
  nodes: Array<Package>;
};

export type Package_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Package_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Package_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Package_Aggregate_Bool_Exp_Count>;
};

export type Package_Aggregate_Bool_Exp_Bool_And = {
  arguments: Package_Select_Column_Package_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Package_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Package_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Package_Select_Column_Package_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Package_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Package_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Package_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Package_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "package" */
export type Package_Aggregate_Fields = {
  __typename?: 'package_aggregate_fields';
  avg?: Maybe<Package_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Package_Max_Fields>;
  min?: Maybe<Package_Min_Fields>;
  stddev?: Maybe<Package_Stddev_Fields>;
  stddev_pop?: Maybe<Package_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Package_Stddev_Samp_Fields>;
  sum?: Maybe<Package_Sum_Fields>;
  var_pop?: Maybe<Package_Var_Pop_Fields>;
  var_samp?: Maybe<Package_Var_Samp_Fields>;
  variance?: Maybe<Package_Variance_Fields>;
};


/** aggregate fields of "package" */
export type Package_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Package_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "package" */
export type Package_Aggregate_Order_By = {
  avg?: InputMaybe<Package_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Package_Max_Order_By>;
  min?: InputMaybe<Package_Min_Order_By>;
  stddev?: InputMaybe<Package_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Package_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Package_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Package_Sum_Order_By>;
  var_pop?: InputMaybe<Package_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Package_Var_Samp_Order_By>;
  variance?: InputMaybe<Package_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "package" */
export type Package_Arr_Rel_Insert_Input = {
  data: Array<Package_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Package_On_Conflict>;
};

/** aggregate avg on columns */
export type Package_Avg_Fields = {
  __typename?: 'package_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "package" */
export type Package_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "package". All fields are combined with a logical 'AND'. */
export type Package_Bool_Exp = {
  _and?: InputMaybe<Array<Package_Bool_Exp>>;
  _not?: InputMaybe<Package_Bool_Exp>;
  _or?: InputMaybe<Array<Package_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  folio_users?: InputMaybe<Folio_User_Bool_Exp>;
  folio_users_aggregate?: InputMaybe<Folio_User_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_global?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  packageTypeByPackageType?: InputMaybe<Package_Type_Bool_Exp>;
  package_type?: InputMaybe<Package_Type_Enum_Comparison_Exp>;
  permissions?: InputMaybe<Permission_Bool_Exp>;
  permissions_aggregate?: InputMaybe<Permission_Aggregate_Bool_Exp>;
  products?: InputMaybe<Product_Bool_Exp>;
  products_aggregate?: InputMaybe<Product_Aggregate_Bool_Exp>;
  source?: InputMaybe<Int_Comparison_Exp>;
  sourceBySource?: InputMaybe<Source_Bool_Exp>;
};

/** unique or primary key constraints on table "package" */
export enum Package_Constraint {
  /** unique or primary key constraint on columns "id" */
  PackagePkey = 'package_pkey',
  /** unique or primary key constraint on columns "source", "name" */
  PackageSourceNameKey = 'package_source_name_key'
}

/** input type for incrementing numeric columns in table "package" */
export type Package_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "package" */
export type Package_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  folio_users?: InputMaybe<Folio_User_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_global?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  packageTypeByPackageType?: InputMaybe<Package_Type_Obj_Rel_Insert_Input>;
  package_type?: InputMaybe<Package_Type_Enum>;
  permissions?: InputMaybe<Permission_Arr_Rel_Insert_Input>;
  products?: InputMaybe<Product_Arr_Rel_Insert_Input>;
  source?: InputMaybe<Scalars['Int']['input']>;
  sourceBySource?: InputMaybe<Source_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Package_Max_Fields = {
  __typename?: 'package_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "package" */
export type Package_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Package_Min_Fields = {
  __typename?: 'package_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "package" */
export type Package_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "package" */
export type Package_Mutation_Response = {
  __typename?: 'package_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Package>;
};

/** input type for inserting object relation for remote table "package" */
export type Package_Obj_Rel_Insert_Input = {
  data: Package_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Package_On_Conflict>;
};

/** on_conflict condition type for table "package" */
export type Package_On_Conflict = {
  constraint: Package_Constraint;
  update_columns?: Array<Package_Update_Column>;
  where?: InputMaybe<Package_Bool_Exp>;
};

/** Ordering options when selecting data from "package". */
export type Package_Order_By = {
  description?: InputMaybe<Order_By>;
  folio_users_aggregate?: InputMaybe<Folio_User_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  is_global?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  packageTypeByPackageType?: InputMaybe<Package_Type_Order_By>;
  package_type?: InputMaybe<Order_By>;
  permissions_aggregate?: InputMaybe<Permission_Aggregate_Order_By>;
  products_aggregate?: InputMaybe<Product_Aggregate_Order_By>;
  source?: InputMaybe<Order_By>;
  sourceBySource?: InputMaybe<Source_Order_By>;
};

/** primary key columns input for table: package */
export type Package_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "package" */
export enum Package_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsGlobal = 'is_global',
  /** column name */
  Name = 'name',
  /** column name */
  PackageType = 'package_type',
  /** column name */
  Source = 'source'
}

/** select "package_aggregate_bool_exp_bool_and_arguments_columns" columns of table "package" */
export enum Package_Select_Column_Package_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsGlobal = 'is_global'
}

/** select "package_aggregate_bool_exp_bool_or_arguments_columns" columns of table "package" */
export enum Package_Select_Column_Package_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsGlobal = 'is_global'
}

/** input type for updating data in table "package" */
export type Package_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_global?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  package_type?: InputMaybe<Package_Type_Enum>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Package_Stddev_Fields = {
  __typename?: 'package_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "package" */
export type Package_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Package_Stddev_Pop_Fields = {
  __typename?: 'package_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "package" */
export type Package_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Package_Stddev_Samp_Fields = {
  __typename?: 'package_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "package" */
export type Package_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "package" */
export type Package_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Package_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Package_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_global?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  package_type?: InputMaybe<Package_Type_Enum>;
  source?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Package_Sum_Fields = {
  __typename?: 'package_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "package" */
export type Package_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** columns and relationships of "package_type" */
export type Package_Type = {
  __typename?: 'package_type';
  value: Scalars['String']['output'];
};

/** aggregated selection of "package_type" */
export type Package_Type_Aggregate = {
  __typename?: 'package_type_aggregate';
  aggregate?: Maybe<Package_Type_Aggregate_Fields>;
  nodes: Array<Package_Type>;
};

/** aggregate fields of "package_type" */
export type Package_Type_Aggregate_Fields = {
  __typename?: 'package_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Package_Type_Max_Fields>;
  min?: Maybe<Package_Type_Min_Fields>;
};


/** aggregate fields of "package_type" */
export type Package_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Package_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "package_type". All fields are combined with a logical 'AND'. */
export type Package_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Package_Type_Bool_Exp>>;
  _not?: InputMaybe<Package_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Package_Type_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "package_type" */
export enum Package_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  PackageTypePkey = 'package_type_pkey'
}

export enum Package_Type_Enum {
  Official = 'official',
  User = 'user'
}

/** Boolean expression to compare columns of type "package_type_enum". All fields are combined with logical 'AND'. */
export type Package_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Package_Type_Enum>;
  _in?: InputMaybe<Array<Package_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Package_Type_Enum>;
  _nin?: InputMaybe<Array<Package_Type_Enum>>;
};

/** input type for inserting data into table "package_type" */
export type Package_Type_Insert_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Package_Type_Max_Fields = {
  __typename?: 'package_type_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Package_Type_Min_Fields = {
  __typename?: 'package_type_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "package_type" */
export type Package_Type_Mutation_Response = {
  __typename?: 'package_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Package_Type>;
};

/** input type for inserting object relation for remote table "package_type" */
export type Package_Type_Obj_Rel_Insert_Input = {
  data: Package_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Package_Type_On_Conflict>;
};

/** on_conflict condition type for table "package_type" */
export type Package_Type_On_Conflict = {
  constraint: Package_Type_Constraint;
  update_columns?: Array<Package_Type_Update_Column>;
  where?: InputMaybe<Package_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "package_type". */
export type Package_Type_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: package_type */
export type Package_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "package_type" */
export enum Package_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "package_type" */
export type Package_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "package_type" */
export type Package_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Package_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Package_Type_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "package_type" */
export enum Package_Type_Update_Column {
  /** column name */
  Value = 'value'
}

export type Package_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Package_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Package_Type_Bool_Exp;
};

/** update columns of table "package" */
export enum Package_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsGlobal = 'is_global',
  /** column name */
  Name = 'name',
  /** column name */
  PackageType = 'package_type',
  /** column name */
  Source = 'source'
}

export type Package_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Package_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Package_Set_Input>;
  /** filter the rows which have to be updated */
  where: Package_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Package_Var_Pop_Fields = {
  __typename?: 'package_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "package" */
export type Package_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Package_Var_Samp_Fields = {
  __typename?: 'package_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "package" */
export type Package_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Package_Variance_Fields = {
  __typename?: 'package_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "package" */
export type Package_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** columns and relationships of "page_settings" */
export type Page_Settings = {
  __typename?: 'page_settings';
  /** An object relationship */
  folioUserByFolioUser: Folio_User;
  folio_user: Scalars['String']['output'];
  settings_blob: Scalars['String']['output'];
};

/** aggregated selection of "page_settings" */
export type Page_Settings_Aggregate = {
  __typename?: 'page_settings_aggregate';
  aggregate?: Maybe<Page_Settings_Aggregate_Fields>;
  nodes: Array<Page_Settings>;
};

export type Page_Settings_Aggregate_Bool_Exp = {
  count?: InputMaybe<Page_Settings_Aggregate_Bool_Exp_Count>;
};

export type Page_Settings_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Page_Settings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Page_Settings_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "page_settings" */
export type Page_Settings_Aggregate_Fields = {
  __typename?: 'page_settings_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Page_Settings_Max_Fields>;
  min?: Maybe<Page_Settings_Min_Fields>;
};


/** aggregate fields of "page_settings" */
export type Page_Settings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Page_Settings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "page_settings" */
export type Page_Settings_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Page_Settings_Max_Order_By>;
  min?: InputMaybe<Page_Settings_Min_Order_By>;
};

/** input type for inserting array relation for remote table "page_settings" */
export type Page_Settings_Arr_Rel_Insert_Input = {
  data: Array<Page_Settings_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Page_Settings_On_Conflict>;
};

/** Boolean expression to filter rows from the table "page_settings". All fields are combined with a logical 'AND'. */
export type Page_Settings_Bool_Exp = {
  _and?: InputMaybe<Array<Page_Settings_Bool_Exp>>;
  _not?: InputMaybe<Page_Settings_Bool_Exp>;
  _or?: InputMaybe<Array<Page_Settings_Bool_Exp>>;
  folioUserByFolioUser?: InputMaybe<Folio_User_Bool_Exp>;
  folio_user?: InputMaybe<String_Comparison_Exp>;
  settings_blob?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "page_settings" */
export enum Page_Settings_Constraint {
  /** unique or primary key constraint on columns "folio_user" */
  PageSettingsPkey = 'page_settings_pkey'
}

/** input type for inserting data into table "page_settings" */
export type Page_Settings_Insert_Input = {
  folioUserByFolioUser?: InputMaybe<Folio_User_Obj_Rel_Insert_Input>;
  folio_user?: InputMaybe<Scalars['String']['input']>;
  settings_blob?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Page_Settings_Max_Fields = {
  __typename?: 'page_settings_max_fields';
  folio_user?: Maybe<Scalars['String']['output']>;
  settings_blob?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "page_settings" */
export type Page_Settings_Max_Order_By = {
  folio_user?: InputMaybe<Order_By>;
  settings_blob?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Page_Settings_Min_Fields = {
  __typename?: 'page_settings_min_fields';
  folio_user?: Maybe<Scalars['String']['output']>;
  settings_blob?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "page_settings" */
export type Page_Settings_Min_Order_By = {
  folio_user?: InputMaybe<Order_By>;
  settings_blob?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "page_settings" */
export type Page_Settings_Mutation_Response = {
  __typename?: 'page_settings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Page_Settings>;
};

/** input type for inserting object relation for remote table "page_settings" */
export type Page_Settings_Obj_Rel_Insert_Input = {
  data: Page_Settings_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Page_Settings_On_Conflict>;
};

/** on_conflict condition type for table "page_settings" */
export type Page_Settings_On_Conflict = {
  constraint: Page_Settings_Constraint;
  update_columns?: Array<Page_Settings_Update_Column>;
  where?: InputMaybe<Page_Settings_Bool_Exp>;
};

/** Ordering options when selecting data from "page_settings". */
export type Page_Settings_Order_By = {
  folioUserByFolioUser?: InputMaybe<Folio_User_Order_By>;
  folio_user?: InputMaybe<Order_By>;
  settings_blob?: InputMaybe<Order_By>;
};

/** primary key columns input for table: page_settings */
export type Page_Settings_Pk_Columns_Input = {
  folio_user: Scalars['String']['input'];
};

/** select columns of table "page_settings" */
export enum Page_Settings_Select_Column {
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  SettingsBlob = 'settings_blob'
}

/** input type for updating data in table "page_settings" */
export type Page_Settings_Set_Input = {
  folio_user?: InputMaybe<Scalars['String']['input']>;
  settings_blob?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "page_settings" */
export type Page_Settings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Page_Settings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Page_Settings_Stream_Cursor_Value_Input = {
  folio_user?: InputMaybe<Scalars['String']['input']>;
  settings_blob?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "page_settings" */
export enum Page_Settings_Update_Column {
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  SettingsBlob = 'settings_blob'
}

export type Page_Settings_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Page_Settings_Set_Input>;
  /** filter the rows which have to be updated */
  where: Page_Settings_Bool_Exp;
};

/** columns and relationships of "permission" */
export type Permission = {
  __typename?: 'permission';
  /** An object relationship */
  folioUserByFolioUser: Folio_User;
  folio_user: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  package: Scalars['Int']['output'];
  /** An object relationship */
  packageByPackage: Package;
  permission: User_Right_Enum;
  /** An object relationship */
  user_right: User_Right;
};

/** aggregated selection of "permission" */
export type Permission_Aggregate = {
  __typename?: 'permission_aggregate';
  aggregate?: Maybe<Permission_Aggregate_Fields>;
  nodes: Array<Permission>;
};

export type Permission_Aggregate_Bool_Exp = {
  count?: InputMaybe<Permission_Aggregate_Bool_Exp_Count>;
};

export type Permission_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Permission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Permission_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "permission" */
export type Permission_Aggregate_Fields = {
  __typename?: 'permission_aggregate_fields';
  avg?: Maybe<Permission_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Permission_Max_Fields>;
  min?: Maybe<Permission_Min_Fields>;
  stddev?: Maybe<Permission_Stddev_Fields>;
  stddev_pop?: Maybe<Permission_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Permission_Stddev_Samp_Fields>;
  sum?: Maybe<Permission_Sum_Fields>;
  var_pop?: Maybe<Permission_Var_Pop_Fields>;
  var_samp?: Maybe<Permission_Var_Samp_Fields>;
  variance?: Maybe<Permission_Variance_Fields>;
};


/** aggregate fields of "permission" */
export type Permission_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Permission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "permission" */
export type Permission_Aggregate_Order_By = {
  avg?: InputMaybe<Permission_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Permission_Max_Order_By>;
  min?: InputMaybe<Permission_Min_Order_By>;
  stddev?: InputMaybe<Permission_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Permission_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Permission_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Permission_Sum_Order_By>;
  var_pop?: InputMaybe<Permission_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Permission_Var_Samp_Order_By>;
  variance?: InputMaybe<Permission_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "permission" */
export type Permission_Arr_Rel_Insert_Input = {
  data: Array<Permission_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Permission_On_Conflict>;
};

/** aggregate avg on columns */
export type Permission_Avg_Fields = {
  __typename?: 'permission_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "permission" */
export type Permission_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "permission". All fields are combined with a logical 'AND'. */
export type Permission_Bool_Exp = {
  _and?: InputMaybe<Array<Permission_Bool_Exp>>;
  _not?: InputMaybe<Permission_Bool_Exp>;
  _or?: InputMaybe<Array<Permission_Bool_Exp>>;
  folioUserByFolioUser?: InputMaybe<Folio_User_Bool_Exp>;
  folio_user?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  package?: InputMaybe<Int_Comparison_Exp>;
  packageByPackage?: InputMaybe<Package_Bool_Exp>;
  permission?: InputMaybe<User_Right_Enum_Comparison_Exp>;
  user_right?: InputMaybe<User_Right_Bool_Exp>;
};

/** unique or primary key constraints on table "permission" */
export enum Permission_Constraint {
  /** unique or primary key constraint on columns "id" */
  PermissionIdKey = 'permission_id_key',
  /** unique or primary key constraint on columns "package", "folio_user" */
  PermissionPkey = 'permission_pkey'
}

/** input type for incrementing numeric columns in table "permission" */
export type Permission_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  package?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "permission" */
export type Permission_Insert_Input = {
  folioUserByFolioUser?: InputMaybe<Folio_User_Obj_Rel_Insert_Input>;
  folio_user?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  package?: InputMaybe<Scalars['Int']['input']>;
  packageByPackage?: InputMaybe<Package_Obj_Rel_Insert_Input>;
  permission?: InputMaybe<User_Right_Enum>;
  user_right?: InputMaybe<User_Right_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Permission_Max_Fields = {
  __typename?: 'permission_max_fields';
  folio_user?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  package?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "permission" */
export type Permission_Max_Order_By = {
  folio_user?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Permission_Min_Fields = {
  __typename?: 'permission_min_fields';
  folio_user?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  package?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "permission" */
export type Permission_Min_Order_By = {
  folio_user?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "permission" */
export type Permission_Mutation_Response = {
  __typename?: 'permission_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Permission>;
};

/** on_conflict condition type for table "permission" */
export type Permission_On_Conflict = {
  constraint: Permission_Constraint;
  update_columns?: Array<Permission_Update_Column>;
  where?: InputMaybe<Permission_Bool_Exp>;
};

/** Ordering options when selecting data from "permission". */
export type Permission_Order_By = {
  folioUserByFolioUser?: InputMaybe<Folio_User_Order_By>;
  folio_user?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
  packageByPackage?: InputMaybe<Package_Order_By>;
  permission?: InputMaybe<Order_By>;
  user_right?: InputMaybe<User_Right_Order_By>;
};

/** primary key columns input for table: permission */
export type Permission_Pk_Columns_Input = {
  folio_user: Scalars['String']['input'];
  package: Scalars['Int']['input'];
};

/** select columns of table "permission" */
export enum Permission_Select_Column {
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  Id = 'id',
  /** column name */
  Package = 'package',
  /** column name */
  Permission = 'permission'
}

/** input type for updating data in table "permission" */
export type Permission_Set_Input = {
  folio_user?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  package?: InputMaybe<Scalars['Int']['input']>;
  permission?: InputMaybe<User_Right_Enum>;
};

/** aggregate stddev on columns */
export type Permission_Stddev_Fields = {
  __typename?: 'permission_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "permission" */
export type Permission_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Permission_Stddev_Pop_Fields = {
  __typename?: 'permission_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "permission" */
export type Permission_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Permission_Stddev_Samp_Fields = {
  __typename?: 'permission_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "permission" */
export type Permission_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "permission" */
export type Permission_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Permission_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Permission_Stream_Cursor_Value_Input = {
  folio_user?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  package?: InputMaybe<Scalars['Int']['input']>;
  permission?: InputMaybe<User_Right_Enum>;
};

/** aggregate sum on columns */
export type Permission_Sum_Fields = {
  __typename?: 'permission_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  package?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "permission" */
export type Permission_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** update columns of table "permission" */
export enum Permission_Update_Column {
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  Id = 'id',
  /** column name */
  Package = 'package',
  /** column name */
  Permission = 'permission'
}

export type Permission_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Permission_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Permission_Set_Input>;
  /** filter the rows which have to be updated */
  where: Permission_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Permission_Var_Pop_Fields = {
  __typename?: 'permission_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "permission" */
export type Permission_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Permission_Var_Samp_Fields = {
  __typename?: 'permission_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "permission" */
export type Permission_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Permission_Variance_Fields = {
  __typename?: 'permission_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "permission" */
export type Permission_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** columns and relationships of "product" */
export type Product = {
  __typename?: 'product';
  artis_type: Product_Artis_Type_Enum;
  code?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  commodityGroupByCommodityGroup?: Maybe<Commodity_Group>;
  commodity_group?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  eod_entries: Array<Eod_Entry>;
  /** An aggregate relationship */
  eod_entries_aggregate: Eod_Entry_Aggregate;
  eod_product_dep?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  geographicalRegionByGeographicalRegion?: Maybe<Geographical_Region>;
  geographical_region?: Maybe<Scalars['Int']['output']>;
  has_shared_cell?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['uuid']['output'];
  kt_kb_conversion_factor?: Maybe<Scalars['numeric']['output']>;
  last_shared?: Maybe<Array<Shared_Instrument>>;
  /** An array relationship */
  local_instruments: Array<Local_Instrument>;
  /** An aggregate relationship */
  local_instruments_aggregate: Local_Instrument_Aggregate;
  logical_code?: Maybe<Scalars['String']['output']>;
  maturity: Product_Maturity_Enum;
  name: Scalars['String']['output'];
  package: Scalars['Int']['output'];
  /** An object relationship */
  packageByPackage: Package;
  /** An array relationship */
  productEodsByEodProduct: Array<Product_Eod>;
  /** An aggregate relationship */
  productEodsByEodProduct_aggregate: Product_Eod_Aggregate;
  /** An object relationship */
  productTypeByProductType: Product_Type;
  /** An object relationship */
  product_artis_type: Product_Artis_Type;
  /** An array relationship */
  product_configs: Array<Product_Config>;
  /** An aggregate relationship */
  product_configs_aggregate: Product_Config_Aggregate;
  /** An array relationship */
  product_eods: Array<Product_Eod>;
  /** An aggregate relationship */
  product_eods_aggregate: Product_Eod_Aggregate;
  /** An array relationship */
  product_global_dependencies: Array<Product_Global_Dependencies>;
  /** An aggregate relationship */
  product_global_dependencies_aggregate: Product_Global_Dependencies_Aggregate;
  /** An object relationship */
  product_maturity: Product_Maturity;
  /** An array relationship */
  product_overrides: Array<Product_Overrides>;
  /** An aggregate relationship */
  product_overrides_aggregate: Product_Overrides_Aggregate;
  /** An object relationship */
  product_summary_type: Product_Summary_Type;
  product_type: Product_Type_Enum;
  /** An object relationship */
  product_uom: Product_Uom;
  /** Gets number of shared_instruments */
  shared_instrument_count?: Maybe<Scalars['bigint']['output']>;
  /** An array relationship */
  shared_instruments: Array<Shared_Instrument>;
  /** An aggregate relationship */
  shared_instruments_aggregate: Shared_Instrument_Aggregate;
  summary_type: Product_Summary_Type_Enum;
  uom: Product_Uom_Enum;
};


/** columns and relationships of "product" */
export type ProductEod_EntriesArgs = {
  distinct_on?: InputMaybe<Array<Eod_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Entry_Order_By>>;
  where?: InputMaybe<Eod_Entry_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductEod_Entries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Eod_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Entry_Order_By>>;
  where?: InputMaybe<Eod_Entry_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductLast_SharedArgs = {
  distinct_on?: InputMaybe<Array<Shared_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shared_Instrument_Order_By>>;
  where?: InputMaybe<Shared_Instrument_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductLocal_InstrumentsArgs = {
  distinct_on?: InputMaybe<Array<Local_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Local_Instrument_Order_By>>;
  where?: InputMaybe<Local_Instrument_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductLocal_Instruments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Local_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Local_Instrument_Order_By>>;
  where?: InputMaybe<Local_Instrument_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductProductEodsByEodProductArgs = {
  distinct_on?: InputMaybe<Array<Product_Eod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Eod_Order_By>>;
  where?: InputMaybe<Product_Eod_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductProductEodsByEodProduct_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Eod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Eod_Order_By>>;
  where?: InputMaybe<Product_Eod_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductProduct_ConfigsArgs = {
  distinct_on?: InputMaybe<Array<Product_Config_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Config_Order_By>>;
  where?: InputMaybe<Product_Config_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductProduct_Configs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Config_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Config_Order_By>>;
  where?: InputMaybe<Product_Config_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductProduct_EodsArgs = {
  distinct_on?: InputMaybe<Array<Product_Eod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Eod_Order_By>>;
  where?: InputMaybe<Product_Eod_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductProduct_Eods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Eod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Eod_Order_By>>;
  where?: InputMaybe<Product_Eod_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductProduct_Global_DependenciesArgs = {
  distinct_on?: InputMaybe<Array<Product_Global_Dependencies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Global_Dependencies_Order_By>>;
  where?: InputMaybe<Product_Global_Dependencies_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductProduct_Global_Dependencies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Global_Dependencies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Global_Dependencies_Order_By>>;
  where?: InputMaybe<Product_Global_Dependencies_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductProduct_OverridesArgs = {
  distinct_on?: InputMaybe<Array<Product_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Overrides_Order_By>>;
  where?: InputMaybe<Product_Overrides_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductProduct_Overrides_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Overrides_Order_By>>;
  where?: InputMaybe<Product_Overrides_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductShared_InstrumentsArgs = {
  distinct_on?: InputMaybe<Array<Shared_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shared_Instrument_Order_By>>;
  where?: InputMaybe<Shared_Instrument_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductShared_Instruments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Shared_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shared_Instrument_Order_By>>;
  where?: InputMaybe<Shared_Instrument_Bool_Exp>;
};

/** aggregated selection of "product" */
export type Product_Aggregate = {
  __typename?: 'product_aggregate';
  aggregate?: Maybe<Product_Aggregate_Fields>;
  nodes: Array<Product>;
};

export type Product_Aggregate_Bool_Exp = {
  count?: InputMaybe<Product_Aggregate_Bool_Exp_Count>;
};

export type Product_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "product" */
export type Product_Aggregate_Fields = {
  __typename?: 'product_aggregate_fields';
  avg?: Maybe<Product_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Max_Fields>;
  min?: Maybe<Product_Min_Fields>;
  stddev?: Maybe<Product_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Sum_Fields>;
  var_pop?: Maybe<Product_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Var_Samp_Fields>;
  variance?: Maybe<Product_Variance_Fields>;
};


/** aggregate fields of "product" */
export type Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "product" */
export type Product_Aggregate_Order_By = {
  avg?: InputMaybe<Product_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Max_Order_By>;
  min?: InputMaybe<Product_Min_Order_By>;
  stddev?: InputMaybe<Product_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Product_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Product_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Product_Sum_Order_By>;
  var_pop?: InputMaybe<Product_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Product_Var_Samp_Order_By>;
  variance?: InputMaybe<Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product" */
export type Product_Arr_Rel_Insert_Input = {
  data: Array<Product_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_On_Conflict>;
};

/** columns and relationships of "product_artis_type" */
export type Product_Artis_Type = {
  __typename?: 'product_artis_type';
  /** An array relationship */
  products: Array<Product>;
  /** An aggregate relationship */
  products_aggregate: Product_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "product_artis_type" */
export type Product_Artis_TypeProductsArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


/** columns and relationships of "product_artis_type" */
export type Product_Artis_TypeProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** aggregated selection of "product_artis_type" */
export type Product_Artis_Type_Aggregate = {
  __typename?: 'product_artis_type_aggregate';
  aggregate?: Maybe<Product_Artis_Type_Aggregate_Fields>;
  nodes: Array<Product_Artis_Type>;
};

/** aggregate fields of "product_artis_type" */
export type Product_Artis_Type_Aggregate_Fields = {
  __typename?: 'product_artis_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Artis_Type_Max_Fields>;
  min?: Maybe<Product_Artis_Type_Min_Fields>;
};


/** aggregate fields of "product_artis_type" */
export type Product_Artis_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Artis_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "product_artis_type". All fields are combined with a logical 'AND'. */
export type Product_Artis_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Artis_Type_Bool_Exp>>;
  _not?: InputMaybe<Product_Artis_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Artis_Type_Bool_Exp>>;
  products?: InputMaybe<Product_Bool_Exp>;
  products_aggregate?: InputMaybe<Product_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_artis_type" */
export enum Product_Artis_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  ProductArtisTypePkey = 'product_artis_type_pkey'
}

export enum Product_Artis_Type_Enum {
  Canned = 'canned',
  CustomerCurve = 'customer_curve',
  Eod = 'eod',
  Sourced = 'sourced'
}

/** Boolean expression to compare columns of type "product_artis_type_enum". All fields are combined with logical 'AND'. */
export type Product_Artis_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Product_Artis_Type_Enum>;
  _in?: InputMaybe<Array<Product_Artis_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Product_Artis_Type_Enum>;
  _nin?: InputMaybe<Array<Product_Artis_Type_Enum>>;
};

/** input type for inserting data into table "product_artis_type" */
export type Product_Artis_Type_Insert_Input = {
  products?: InputMaybe<Product_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Product_Artis_Type_Max_Fields = {
  __typename?: 'product_artis_type_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Product_Artis_Type_Min_Fields = {
  __typename?: 'product_artis_type_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "product_artis_type" */
export type Product_Artis_Type_Mutation_Response = {
  __typename?: 'product_artis_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Artis_Type>;
};

/** input type for inserting object relation for remote table "product_artis_type" */
export type Product_Artis_Type_Obj_Rel_Insert_Input = {
  data: Product_Artis_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Artis_Type_On_Conflict>;
};

/** on_conflict condition type for table "product_artis_type" */
export type Product_Artis_Type_On_Conflict = {
  constraint: Product_Artis_Type_Constraint;
  update_columns?: Array<Product_Artis_Type_Update_Column>;
  where?: InputMaybe<Product_Artis_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "product_artis_type". */
export type Product_Artis_Type_Order_By = {
  products_aggregate?: InputMaybe<Product_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_artis_type */
export type Product_Artis_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "product_artis_type" */
export enum Product_Artis_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "product_artis_type" */
export type Product_Artis_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "product_artis_type" */
export type Product_Artis_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Artis_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Artis_Type_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "product_artis_type" */
export enum Product_Artis_Type_Update_Column {
  /** column name */
  Value = 'value'
}

export type Product_Artis_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Artis_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Artis_Type_Bool_Exp;
};

/** aggregate avg on columns */
export type Product_Avg_Fields = {
  __typename?: 'product_avg_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  kt_kb_conversion_factor?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
  /** Gets number of shared_instruments */
  shared_instrument_count?: Maybe<Scalars['bigint']['output']>;
};

/** order by avg() on columns of table "product" */
export type Product_Avg_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  kt_kb_conversion_factor?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'. */
export type Product_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Bool_Exp>>;
  _not?: InputMaybe<Product_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Bool_Exp>>;
  artis_type?: InputMaybe<Product_Artis_Type_Enum_Comparison_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  commodityGroupByCommodityGroup?: InputMaybe<Commodity_Group_Bool_Exp>;
  commodity_group?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  eod_entries?: InputMaybe<Eod_Entry_Bool_Exp>;
  eod_entries_aggregate?: InputMaybe<Eod_Entry_Aggregate_Bool_Exp>;
  eod_product_dep?: InputMaybe<Uuid_Comparison_Exp>;
  geographicalRegionByGeographicalRegion?: InputMaybe<Geographical_Region_Bool_Exp>;
  geographical_region?: InputMaybe<Int_Comparison_Exp>;
  has_shared_cell?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  kt_kb_conversion_factor?: InputMaybe<Numeric_Comparison_Exp>;
  last_shared?: InputMaybe<Shared_Instrument_Bool_Exp>;
  local_instruments?: InputMaybe<Local_Instrument_Bool_Exp>;
  local_instruments_aggregate?: InputMaybe<Local_Instrument_Aggregate_Bool_Exp>;
  logical_code?: InputMaybe<String_Comparison_Exp>;
  maturity?: InputMaybe<Product_Maturity_Enum_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  package?: InputMaybe<Int_Comparison_Exp>;
  packageByPackage?: InputMaybe<Package_Bool_Exp>;
  productEodsByEodProduct?: InputMaybe<Product_Eod_Bool_Exp>;
  productEodsByEodProduct_aggregate?: InputMaybe<Product_Eod_Aggregate_Bool_Exp>;
  productTypeByProductType?: InputMaybe<Product_Type_Bool_Exp>;
  product_artis_type?: InputMaybe<Product_Artis_Type_Bool_Exp>;
  product_configs?: InputMaybe<Product_Config_Bool_Exp>;
  product_configs_aggregate?: InputMaybe<Product_Config_Aggregate_Bool_Exp>;
  product_eods?: InputMaybe<Product_Eod_Bool_Exp>;
  product_eods_aggregate?: InputMaybe<Product_Eod_Aggregate_Bool_Exp>;
  product_global_dependencies?: InputMaybe<Product_Global_Dependencies_Bool_Exp>;
  product_global_dependencies_aggregate?: InputMaybe<Product_Global_Dependencies_Aggregate_Bool_Exp>;
  product_maturity?: InputMaybe<Product_Maturity_Bool_Exp>;
  product_overrides?: InputMaybe<Product_Overrides_Bool_Exp>;
  product_overrides_aggregate?: InputMaybe<Product_Overrides_Aggregate_Bool_Exp>;
  product_summary_type?: InputMaybe<Product_Summary_Type_Bool_Exp>;
  product_type?: InputMaybe<Product_Type_Enum_Comparison_Exp>;
  product_uom?: InputMaybe<Product_Uom_Bool_Exp>;
  shared_instrument_count?: InputMaybe<Bigint_Comparison_Exp>;
  shared_instruments?: InputMaybe<Shared_Instrument_Bool_Exp>;
  shared_instruments_aggregate?: InputMaybe<Shared_Instrument_Aggregate_Bool_Exp>;
  summary_type?: InputMaybe<Product_Summary_Type_Enum_Comparison_Exp>;
  uom?: InputMaybe<Product_Uom_Enum_Comparison_Exp>;
};

/** columns and relationships of "product_config" */
export type Product_Config = {
  __typename?: 'product_config';
  formula?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  package_deps?: Maybe<Scalars['jsonb']['output']>;
  product: Scalars['uuid']['output'];
  /** An object relationship */
  productByProduct: Product;
  relative_month: Scalars['Int']['output'];
};


/** columns and relationships of "product_config" */
export type Product_ConfigPackage_DepsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "product_config" */
export type Product_Config_Aggregate = {
  __typename?: 'product_config_aggregate';
  aggregate?: Maybe<Product_Config_Aggregate_Fields>;
  nodes: Array<Product_Config>;
};

export type Product_Config_Aggregate_Bool_Exp = {
  count?: InputMaybe<Product_Config_Aggregate_Bool_Exp_Count>;
};

export type Product_Config_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Config_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Config_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "product_config" */
export type Product_Config_Aggregate_Fields = {
  __typename?: 'product_config_aggregate_fields';
  avg?: Maybe<Product_Config_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Config_Max_Fields>;
  min?: Maybe<Product_Config_Min_Fields>;
  stddev?: Maybe<Product_Config_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Config_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Config_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Config_Sum_Fields>;
  var_pop?: Maybe<Product_Config_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Config_Var_Samp_Fields>;
  variance?: Maybe<Product_Config_Variance_Fields>;
};


/** aggregate fields of "product_config" */
export type Product_Config_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Config_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "product_config" */
export type Product_Config_Aggregate_Order_By = {
  avg?: InputMaybe<Product_Config_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Config_Max_Order_By>;
  min?: InputMaybe<Product_Config_Min_Order_By>;
  stddev?: InputMaybe<Product_Config_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Product_Config_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Product_Config_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Product_Config_Sum_Order_By>;
  var_pop?: InputMaybe<Product_Config_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Product_Config_Var_Samp_Order_By>;
  variance?: InputMaybe<Product_Config_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Product_Config_Append_Input = {
  package_deps?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "product_config" */
export type Product_Config_Arr_Rel_Insert_Input = {
  data: Array<Product_Config_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Config_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Config_Avg_Fields = {
  __typename?: 'product_config_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_month?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "product_config" */
export type Product_Config_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product_config". All fields are combined with a logical 'AND'. */
export type Product_Config_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Config_Bool_Exp>>;
  _not?: InputMaybe<Product_Config_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Config_Bool_Exp>>;
  formula?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  package_deps?: InputMaybe<Jsonb_Comparison_Exp>;
  product?: InputMaybe<Uuid_Comparison_Exp>;
  productByProduct?: InputMaybe<Product_Bool_Exp>;
  relative_month?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_config" */
export enum Product_Config_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductConfigIdKey = 'product_config_id_key',
  /** unique or primary key constraint on columns "product", "relative_month" */
  ProductConfigPkey = 'product_config_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Product_Config_Delete_At_Path_Input = {
  package_deps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Product_Config_Delete_Elem_Input = {
  package_deps?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Product_Config_Delete_Key_Input = {
  package_deps?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "product_config" */
export type Product_Config_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  relative_month?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "product_config" */
export type Product_Config_Insert_Input = {
  formula?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  package_deps?: InputMaybe<Scalars['jsonb']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  productByProduct?: InputMaybe<Product_Obj_Rel_Insert_Input>;
  relative_month?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Product_Config_Max_Fields = {
  __typename?: 'product_config_max_fields';
  formula?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Scalars['uuid']['output']>;
  relative_month?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "product_config" */
export type Product_Config_Max_Order_By = {
  formula?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Config_Min_Fields = {
  __typename?: 'product_config_min_fields';
  formula?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Scalars['uuid']['output']>;
  relative_month?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "product_config" */
export type Product_Config_Min_Order_By = {
  formula?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product_config" */
export type Product_Config_Mutation_Response = {
  __typename?: 'product_config_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Config>;
};

/** on_conflict condition type for table "product_config" */
export type Product_Config_On_Conflict = {
  constraint: Product_Config_Constraint;
  update_columns?: Array<Product_Config_Update_Column>;
  where?: InputMaybe<Product_Config_Bool_Exp>;
};

/** Ordering options when selecting data from "product_config". */
export type Product_Config_Order_By = {
  formula?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  package_deps?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  productByProduct?: InputMaybe<Product_Order_By>;
  relative_month?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_config */
export type Product_Config_Pk_Columns_Input = {
  product: Scalars['uuid']['input'];
  relative_month: Scalars['Int']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Product_Config_Prepend_Input = {
  package_deps?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "product_config" */
export enum Product_Config_Select_Column {
  /** column name */
  Formula = 'formula',
  /** column name */
  Id = 'id',
  /** column name */
  PackageDeps = 'package_deps',
  /** column name */
  Product = 'product',
  /** column name */
  RelativeMonth = 'relative_month'
}

/** input type for updating data in table "product_config" */
export type Product_Config_Set_Input = {
  formula?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  package_deps?: InputMaybe<Scalars['jsonb']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  relative_month?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Product_Config_Stddev_Fields = {
  __typename?: 'product_config_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_month?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "product_config" */
export type Product_Config_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Config_Stddev_Pop_Fields = {
  __typename?: 'product_config_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_month?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "product_config" */
export type Product_Config_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Config_Stddev_Samp_Fields = {
  __typename?: 'product_config_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_month?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "product_config" */
export type Product_Config_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "product_config" */
export type Product_Config_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Config_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Config_Stream_Cursor_Value_Input = {
  formula?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  package_deps?: InputMaybe<Scalars['jsonb']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  relative_month?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Product_Config_Sum_Fields = {
  __typename?: 'product_config_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  relative_month?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "product_config" */
export type Product_Config_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
};

/** update columns of table "product_config" */
export enum Product_Config_Update_Column {
  /** column name */
  Formula = 'formula',
  /** column name */
  Id = 'id',
  /** column name */
  PackageDeps = 'package_deps',
  /** column name */
  Product = 'product',
  /** column name */
  RelativeMonth = 'relative_month'
}

export type Product_Config_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Product_Config_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Product_Config_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Product_Config_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Product_Config_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Product_Config_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Product_Config_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Config_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Config_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Product_Config_Var_Pop_Fields = {
  __typename?: 'product_config_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_month?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "product_config" */
export type Product_Config_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Config_Var_Samp_Fields = {
  __typename?: 'product_config_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_month?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "product_config" */
export type Product_Config_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Config_Variance_Fields = {
  __typename?: 'product_config_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  relative_month?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "product_config" */
export type Product_Config_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  relative_month?: InputMaybe<Order_By>;
};

/** unique or primary key constraints on table "product" */
export enum Product_Constraint {
  /** unique or primary key constraint on columns "package", "description" */
  ProductDescriptionPackageKey = 'product_description_package_key',
  /** unique or primary key constraint on columns "id" */
  ProductPkey = 'product_pkey'
}

/** columns and relationships of "product_eod" */
export type Product_Eod = {
  __typename?: 'product_eod';
  eod_product: Scalars['uuid']['output'];
  id: Scalars['Int']['output'];
  product: Scalars['uuid']['output'];
  /** An object relationship */
  productByEodProduct: Product;
  /** An object relationship */
  productByProduct: Product;
};

/** aggregated selection of "product_eod" */
export type Product_Eod_Aggregate = {
  __typename?: 'product_eod_aggregate';
  aggregate?: Maybe<Product_Eod_Aggregate_Fields>;
  nodes: Array<Product_Eod>;
};

export type Product_Eod_Aggregate_Bool_Exp = {
  count?: InputMaybe<Product_Eod_Aggregate_Bool_Exp_Count>;
};

export type Product_Eod_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Eod_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Eod_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "product_eod" */
export type Product_Eod_Aggregate_Fields = {
  __typename?: 'product_eod_aggregate_fields';
  avg?: Maybe<Product_Eod_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Eod_Max_Fields>;
  min?: Maybe<Product_Eod_Min_Fields>;
  stddev?: Maybe<Product_Eod_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Eod_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Eod_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Eod_Sum_Fields>;
  var_pop?: Maybe<Product_Eod_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Eod_Var_Samp_Fields>;
  variance?: Maybe<Product_Eod_Variance_Fields>;
};


/** aggregate fields of "product_eod" */
export type Product_Eod_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Eod_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "product_eod" */
export type Product_Eod_Aggregate_Order_By = {
  avg?: InputMaybe<Product_Eod_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Eod_Max_Order_By>;
  min?: InputMaybe<Product_Eod_Min_Order_By>;
  stddev?: InputMaybe<Product_Eod_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Product_Eod_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Product_Eod_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Product_Eod_Sum_Order_By>;
  var_pop?: InputMaybe<Product_Eod_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Product_Eod_Var_Samp_Order_By>;
  variance?: InputMaybe<Product_Eod_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product_eod" */
export type Product_Eod_Arr_Rel_Insert_Input = {
  data: Array<Product_Eod_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Eod_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Eod_Avg_Fields = {
  __typename?: 'product_eod_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "product_eod" */
export type Product_Eod_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product_eod". All fields are combined with a logical 'AND'. */
export type Product_Eod_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Eod_Bool_Exp>>;
  _not?: InputMaybe<Product_Eod_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Eod_Bool_Exp>>;
  eod_product?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  product?: InputMaybe<Uuid_Comparison_Exp>;
  productByEodProduct?: InputMaybe<Product_Bool_Exp>;
  productByProduct?: InputMaybe<Product_Bool_Exp>;
};

/** unique or primary key constraints on table "product_eod" */
export enum Product_Eod_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductEodIdKey = 'product_eod_id_key',
  /** unique or primary key constraint on columns "product", "eod_product" */
  ProductEodPkey = 'product_eod_pkey'
}

/** input type for incrementing numeric columns in table "product_eod" */
export type Product_Eod_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "product_eod" */
export type Product_Eod_Insert_Input = {
  eod_product?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  productByEodProduct?: InputMaybe<Product_Obj_Rel_Insert_Input>;
  productByProduct?: InputMaybe<Product_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Product_Eod_Max_Fields = {
  __typename?: 'product_eod_max_fields';
  eod_product?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "product_eod" */
export type Product_Eod_Max_Order_By = {
  eod_product?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Eod_Min_Fields = {
  __typename?: 'product_eod_min_fields';
  eod_product?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "product_eod" */
export type Product_Eod_Min_Order_By = {
  eod_product?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product_eod" */
export type Product_Eod_Mutation_Response = {
  __typename?: 'product_eod_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Eod>;
};

/** on_conflict condition type for table "product_eod" */
export type Product_Eod_On_Conflict = {
  constraint: Product_Eod_Constraint;
  update_columns?: Array<Product_Eod_Update_Column>;
  where?: InputMaybe<Product_Eod_Bool_Exp>;
};

/** Ordering options when selecting data from "product_eod". */
export type Product_Eod_Order_By = {
  eod_product?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  productByEodProduct?: InputMaybe<Product_Order_By>;
  productByProduct?: InputMaybe<Product_Order_By>;
};

/** primary key columns input for table: product_eod */
export type Product_Eod_Pk_Columns_Input = {
  eod_product: Scalars['uuid']['input'];
  product: Scalars['uuid']['input'];
};

/** select columns of table "product_eod" */
export enum Product_Eod_Select_Column {
  /** column name */
  EodProduct = 'eod_product',
  /** column name */
  Id = 'id',
  /** column name */
  Product = 'product'
}

/** input type for updating data in table "product_eod" */
export type Product_Eod_Set_Input = {
  eod_product?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Product_Eod_Stddev_Fields = {
  __typename?: 'product_eod_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "product_eod" */
export type Product_Eod_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Eod_Stddev_Pop_Fields = {
  __typename?: 'product_eod_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "product_eod" */
export type Product_Eod_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Eod_Stddev_Samp_Fields = {
  __typename?: 'product_eod_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "product_eod" */
export type Product_Eod_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "product_eod" */
export type Product_Eod_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Eod_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Eod_Stream_Cursor_Value_Input = {
  eod_product?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Product_Eod_Sum_Fields = {
  __typename?: 'product_eod_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "product_eod" */
export type Product_Eod_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "product_eod" */
export enum Product_Eod_Update_Column {
  /** column name */
  EodProduct = 'eod_product',
  /** column name */
  Id = 'id',
  /** column name */
  Product = 'product'
}

export type Product_Eod_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Product_Eod_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Eod_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Eod_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Product_Eod_Var_Pop_Fields = {
  __typename?: 'product_eod_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "product_eod" */
export type Product_Eod_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Eod_Var_Samp_Fields = {
  __typename?: 'product_eod_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "product_eod" */
export type Product_Eod_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Eod_Variance_Fields = {
  __typename?: 'product_eod_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "product_eod" */
export type Product_Eod_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Maps dependency between products and the global dependencies selected. */
export type Product_Global_Dependencies = {
  __typename?: 'product_global_dependencies';
  created_at: Scalars['timestamptz']['output'];
  global_product: Scalars['uuid']['output'];
  product: Scalars['uuid']['output'];
  /** An object relationship */
  productByProduct: Product;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "product_global_dependencies" */
export type Product_Global_Dependencies_Aggregate = {
  __typename?: 'product_global_dependencies_aggregate';
  aggregate?: Maybe<Product_Global_Dependencies_Aggregate_Fields>;
  nodes: Array<Product_Global_Dependencies>;
};

export type Product_Global_Dependencies_Aggregate_Bool_Exp = {
  count?: InputMaybe<Product_Global_Dependencies_Aggregate_Bool_Exp_Count>;
};

export type Product_Global_Dependencies_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Global_Dependencies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Global_Dependencies_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "product_global_dependencies" */
export type Product_Global_Dependencies_Aggregate_Fields = {
  __typename?: 'product_global_dependencies_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Global_Dependencies_Max_Fields>;
  min?: Maybe<Product_Global_Dependencies_Min_Fields>;
};


/** aggregate fields of "product_global_dependencies" */
export type Product_Global_Dependencies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Global_Dependencies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "product_global_dependencies" */
export type Product_Global_Dependencies_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Global_Dependencies_Max_Order_By>;
  min?: InputMaybe<Product_Global_Dependencies_Min_Order_By>;
};

/** input type for inserting array relation for remote table "product_global_dependencies" */
export type Product_Global_Dependencies_Arr_Rel_Insert_Input = {
  data: Array<Product_Global_Dependencies_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Global_Dependencies_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product_global_dependencies". All fields are combined with a logical 'AND'. */
export type Product_Global_Dependencies_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Global_Dependencies_Bool_Exp>>;
  _not?: InputMaybe<Product_Global_Dependencies_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Global_Dependencies_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  global_product?: InputMaybe<Uuid_Comparison_Exp>;
  product?: InputMaybe<Uuid_Comparison_Exp>;
  productByProduct?: InputMaybe<Product_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_global_dependencies" */
export enum Product_Global_Dependencies_Constraint {
  /** unique or primary key constraint on columns "global_product", "product" */
  ProductGlobalDependenciesPkey = 'product_global_dependencies_pkey'
}

/** input type for inserting data into table "product_global_dependencies" */
export type Product_Global_Dependencies_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  global_product?: InputMaybe<Scalars['uuid']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  productByProduct?: InputMaybe<Product_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Product_Global_Dependencies_Max_Fields = {
  __typename?: 'product_global_dependencies_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  global_product?: Maybe<Scalars['uuid']['output']>;
  product?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "product_global_dependencies" */
export type Product_Global_Dependencies_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  global_product?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Global_Dependencies_Min_Fields = {
  __typename?: 'product_global_dependencies_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  global_product?: Maybe<Scalars['uuid']['output']>;
  product?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "product_global_dependencies" */
export type Product_Global_Dependencies_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  global_product?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product_global_dependencies" */
export type Product_Global_Dependencies_Mutation_Response = {
  __typename?: 'product_global_dependencies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Global_Dependencies>;
};

/** on_conflict condition type for table "product_global_dependencies" */
export type Product_Global_Dependencies_On_Conflict = {
  constraint: Product_Global_Dependencies_Constraint;
  update_columns?: Array<Product_Global_Dependencies_Update_Column>;
  where?: InputMaybe<Product_Global_Dependencies_Bool_Exp>;
};

/** Ordering options when selecting data from "product_global_dependencies". */
export type Product_Global_Dependencies_Order_By = {
  created_at?: InputMaybe<Order_By>;
  global_product?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  productByProduct?: InputMaybe<Product_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_global_dependencies */
export type Product_Global_Dependencies_Pk_Columns_Input = {
  global_product: Scalars['uuid']['input'];
  product: Scalars['uuid']['input'];
};

/** select columns of table "product_global_dependencies" */
export enum Product_Global_Dependencies_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GlobalProduct = 'global_product',
  /** column name */
  Product = 'product',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "product_global_dependencies" */
export type Product_Global_Dependencies_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  global_product?: InputMaybe<Scalars['uuid']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "product_global_dependencies" */
export type Product_Global_Dependencies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Global_Dependencies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Global_Dependencies_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  global_product?: InputMaybe<Scalars['uuid']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "product_global_dependencies" */
export enum Product_Global_Dependencies_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GlobalProduct = 'global_product',
  /** column name */
  Product = 'product',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Product_Global_Dependencies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Global_Dependencies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Global_Dependencies_Bool_Exp;
};

/** input type for incrementing numeric columns in table "product" */
export type Product_Inc_Input = {
  commodity_group?: InputMaybe<Scalars['Int']['input']>;
  geographical_region?: InputMaybe<Scalars['Int']['input']>;
  kt_kb_conversion_factor?: InputMaybe<Scalars['numeric']['input']>;
  package?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "product" */
export type Product_Insert_Input = {
  artis_type?: InputMaybe<Product_Artis_Type_Enum>;
  code?: InputMaybe<Scalars['String']['input']>;
  commodityGroupByCommodityGroup?: InputMaybe<Commodity_Group_Obj_Rel_Insert_Input>;
  commodity_group?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eod_entries?: InputMaybe<Eod_Entry_Arr_Rel_Insert_Input>;
  eod_product_dep?: InputMaybe<Scalars['uuid']['input']>;
  geographicalRegionByGeographicalRegion?: InputMaybe<Geographical_Region_Obj_Rel_Insert_Input>;
  geographical_region?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  kt_kb_conversion_factor?: InputMaybe<Scalars['numeric']['input']>;
  local_instruments?: InputMaybe<Local_Instrument_Arr_Rel_Insert_Input>;
  logical_code?: InputMaybe<Scalars['String']['input']>;
  maturity?: InputMaybe<Product_Maturity_Enum>;
  name?: InputMaybe<Scalars['String']['input']>;
  package?: InputMaybe<Scalars['Int']['input']>;
  packageByPackage?: InputMaybe<Package_Obj_Rel_Insert_Input>;
  productEodsByEodProduct?: InputMaybe<Product_Eod_Arr_Rel_Insert_Input>;
  productTypeByProductType?: InputMaybe<Product_Type_Obj_Rel_Insert_Input>;
  product_artis_type?: InputMaybe<Product_Artis_Type_Obj_Rel_Insert_Input>;
  product_configs?: InputMaybe<Product_Config_Arr_Rel_Insert_Input>;
  product_eods?: InputMaybe<Product_Eod_Arr_Rel_Insert_Input>;
  product_global_dependencies?: InputMaybe<Product_Global_Dependencies_Arr_Rel_Insert_Input>;
  product_maturity?: InputMaybe<Product_Maturity_Obj_Rel_Insert_Input>;
  product_overrides?: InputMaybe<Product_Overrides_Arr_Rel_Insert_Input>;
  product_summary_type?: InputMaybe<Product_Summary_Type_Obj_Rel_Insert_Input>;
  product_type?: InputMaybe<Product_Type_Enum>;
  product_uom?: InputMaybe<Product_Uom_Obj_Rel_Insert_Input>;
  shared_instruments?: InputMaybe<Shared_Instrument_Arr_Rel_Insert_Input>;
  summary_type?: InputMaybe<Product_Summary_Type_Enum>;
  uom?: InputMaybe<Product_Uom_Enum>;
};

/** columns and relationships of "product_maturity" */
export type Product_Maturity = {
  __typename?: 'product_maturity';
  /** An array relationship */
  products: Array<Product>;
  /** An aggregate relationship */
  products_aggregate: Product_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "product_maturity" */
export type Product_MaturityProductsArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


/** columns and relationships of "product_maturity" */
export type Product_MaturityProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** aggregated selection of "product_maturity" */
export type Product_Maturity_Aggregate = {
  __typename?: 'product_maturity_aggregate';
  aggregate?: Maybe<Product_Maturity_Aggregate_Fields>;
  nodes: Array<Product_Maturity>;
};

/** aggregate fields of "product_maturity" */
export type Product_Maturity_Aggregate_Fields = {
  __typename?: 'product_maturity_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Maturity_Max_Fields>;
  min?: Maybe<Product_Maturity_Min_Fields>;
};


/** aggregate fields of "product_maturity" */
export type Product_Maturity_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Maturity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "product_maturity". All fields are combined with a logical 'AND'. */
export type Product_Maturity_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Maturity_Bool_Exp>>;
  _not?: InputMaybe<Product_Maturity_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Maturity_Bool_Exp>>;
  products?: InputMaybe<Product_Bool_Exp>;
  products_aggregate?: InputMaybe<Product_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_maturity" */
export enum Product_Maturity_Constraint {
  /** unique or primary key constraint on columns "value" */
  ProductMaturityPkey = 'product_maturity_pkey'
}

export enum Product_Maturity_Enum {
  Future = 'future',
  InterMonthSpreads = 'inter_month_spreads',
  Monthly = 'monthly'
}

/** Boolean expression to compare columns of type "product_maturity_enum". All fields are combined with logical 'AND'. */
export type Product_Maturity_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Product_Maturity_Enum>;
  _in?: InputMaybe<Array<Product_Maturity_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Product_Maturity_Enum>;
  _nin?: InputMaybe<Array<Product_Maturity_Enum>>;
};

/** input type for inserting data into table "product_maturity" */
export type Product_Maturity_Insert_Input = {
  products?: InputMaybe<Product_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Product_Maturity_Max_Fields = {
  __typename?: 'product_maturity_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Product_Maturity_Min_Fields = {
  __typename?: 'product_maturity_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "product_maturity" */
export type Product_Maturity_Mutation_Response = {
  __typename?: 'product_maturity_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Maturity>;
};

/** input type for inserting object relation for remote table "product_maturity" */
export type Product_Maturity_Obj_Rel_Insert_Input = {
  data: Product_Maturity_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Maturity_On_Conflict>;
};

/** on_conflict condition type for table "product_maturity" */
export type Product_Maturity_On_Conflict = {
  constraint: Product_Maturity_Constraint;
  update_columns?: Array<Product_Maturity_Update_Column>;
  where?: InputMaybe<Product_Maturity_Bool_Exp>;
};

/** Ordering options when selecting data from "product_maturity". */
export type Product_Maturity_Order_By = {
  products_aggregate?: InputMaybe<Product_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_maturity */
export type Product_Maturity_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "product_maturity" */
export enum Product_Maturity_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "product_maturity" */
export type Product_Maturity_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "product_maturity" */
export type Product_Maturity_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Maturity_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Maturity_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "product_maturity" */
export enum Product_Maturity_Update_Column {
  /** column name */
  Value = 'value'
}

export type Product_Maturity_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Maturity_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Maturity_Bool_Exp;
};

/** aggregate max on columns */
export type Product_Max_Fields = {
  __typename?: 'product_max_fields';
  code?: Maybe<Scalars['String']['output']>;
  commodity_group?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  eod_product_dep?: Maybe<Scalars['uuid']['output']>;
  geographical_region?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  kt_kb_conversion_factor?: Maybe<Scalars['numeric']['output']>;
  logical_code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  package?: Maybe<Scalars['Int']['output']>;
  /** Gets number of shared_instruments */
  shared_instrument_count?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "product" */
export type Product_Max_Order_By = {
  code?: InputMaybe<Order_By>;
  commodity_group?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  eod_product_dep?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kt_kb_conversion_factor?: InputMaybe<Order_By>;
  logical_code?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Min_Fields = {
  __typename?: 'product_min_fields';
  code?: Maybe<Scalars['String']['output']>;
  commodity_group?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  eod_product_dep?: Maybe<Scalars['uuid']['output']>;
  geographical_region?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  kt_kb_conversion_factor?: Maybe<Scalars['numeric']['output']>;
  logical_code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  package?: Maybe<Scalars['Int']['output']>;
  /** Gets number of shared_instruments */
  shared_instrument_count?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "product" */
export type Product_Min_Order_By = {
  code?: InputMaybe<Order_By>;
  commodity_group?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  eod_product_dep?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kt_kb_conversion_factor?: InputMaybe<Order_By>;
  logical_code?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product" */
export type Product_Mutation_Response = {
  __typename?: 'product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product>;
};

/** input type for inserting object relation for remote table "product" */
export type Product_Obj_Rel_Insert_Input = {
  data: Product_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_On_Conflict>;
};

/** on_conflict condition type for table "product" */
export type Product_On_Conflict = {
  constraint: Product_Constraint;
  update_columns?: Array<Product_Update_Column>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** Ordering options when selecting data from "product". */
export type Product_Order_By = {
  artis_type?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  commodityGroupByCommodityGroup?: InputMaybe<Commodity_Group_Order_By>;
  commodity_group?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  eod_entries_aggregate?: InputMaybe<Eod_Entry_Aggregate_Order_By>;
  eod_product_dep?: InputMaybe<Order_By>;
  geographicalRegionByGeographicalRegion?: InputMaybe<Geographical_Region_Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  has_shared_cell?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kt_kb_conversion_factor?: InputMaybe<Order_By>;
  last_shared_aggregate?: InputMaybe<Shared_Instrument_Aggregate_Order_By>;
  local_instruments_aggregate?: InputMaybe<Local_Instrument_Aggregate_Order_By>;
  logical_code?: InputMaybe<Order_By>;
  maturity?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
  packageByPackage?: InputMaybe<Package_Order_By>;
  productEodsByEodProduct_aggregate?: InputMaybe<Product_Eod_Aggregate_Order_By>;
  productTypeByProductType?: InputMaybe<Product_Type_Order_By>;
  product_artis_type?: InputMaybe<Product_Artis_Type_Order_By>;
  product_configs_aggregate?: InputMaybe<Product_Config_Aggregate_Order_By>;
  product_eods_aggregate?: InputMaybe<Product_Eod_Aggregate_Order_By>;
  product_global_dependencies_aggregate?: InputMaybe<Product_Global_Dependencies_Aggregate_Order_By>;
  product_maturity?: InputMaybe<Product_Maturity_Order_By>;
  product_overrides_aggregate?: InputMaybe<Product_Overrides_Aggregate_Order_By>;
  product_summary_type?: InputMaybe<Product_Summary_Type_Order_By>;
  product_type?: InputMaybe<Order_By>;
  product_uom?: InputMaybe<Product_Uom_Order_By>;
  shared_instrument_count?: InputMaybe<Order_By>;
  shared_instruments_aggregate?: InputMaybe<Shared_Instrument_Aggregate_Order_By>;
  summary_type?: InputMaybe<Order_By>;
  uom?: InputMaybe<Order_By>;
};

/** columns and relationships of "product_overrides" */
export type Product_Overrides = {
  __typename?: 'product_overrides';
  /** An object relationship */
  commodityGroupByCommodityGroup?: Maybe<Commodity_Group>;
  commodity_group?: Maybe<Scalars['Int']['output']>;
  custom_group1?: Maybe<Scalars['String']['output']>;
  custom_group2?: Maybe<Scalars['String']['output']>;
  custom_group3?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  geographicalRegionByGeographicalRegion?: Maybe<Geographical_Region>;
  geographical_region?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  organisation: Scalars['Int']['output'];
  /** An object relationship */
  organisationByOrganisation: Organisation;
  product: Scalars['uuid']['output'];
  /** An object relationship */
  productByProduct: Product;
};

/** aggregated selection of "product_overrides" */
export type Product_Overrides_Aggregate = {
  __typename?: 'product_overrides_aggregate';
  aggregate?: Maybe<Product_Overrides_Aggregate_Fields>;
  nodes: Array<Product_Overrides>;
};

export type Product_Overrides_Aggregate_Bool_Exp = {
  count?: InputMaybe<Product_Overrides_Aggregate_Bool_Exp_Count>;
};

export type Product_Overrides_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Overrides_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Overrides_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "product_overrides" */
export type Product_Overrides_Aggregate_Fields = {
  __typename?: 'product_overrides_aggregate_fields';
  avg?: Maybe<Product_Overrides_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Overrides_Max_Fields>;
  min?: Maybe<Product_Overrides_Min_Fields>;
  stddev?: Maybe<Product_Overrides_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Overrides_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Overrides_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Overrides_Sum_Fields>;
  var_pop?: Maybe<Product_Overrides_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Overrides_Var_Samp_Fields>;
  variance?: Maybe<Product_Overrides_Variance_Fields>;
};


/** aggregate fields of "product_overrides" */
export type Product_Overrides_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Overrides_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "product_overrides" */
export type Product_Overrides_Aggregate_Order_By = {
  avg?: InputMaybe<Product_Overrides_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Overrides_Max_Order_By>;
  min?: InputMaybe<Product_Overrides_Min_Order_By>;
  stddev?: InputMaybe<Product_Overrides_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Product_Overrides_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Product_Overrides_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Product_Overrides_Sum_Order_By>;
  var_pop?: InputMaybe<Product_Overrides_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Product_Overrides_Var_Samp_Order_By>;
  variance?: InputMaybe<Product_Overrides_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product_overrides" */
export type Product_Overrides_Arr_Rel_Insert_Input = {
  data: Array<Product_Overrides_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Overrides_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Overrides_Avg_Fields = {
  __typename?: 'product_overrides_avg_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "product_overrides" */
export type Product_Overrides_Avg_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product_overrides". All fields are combined with a logical 'AND'. */
export type Product_Overrides_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Overrides_Bool_Exp>>;
  _not?: InputMaybe<Product_Overrides_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Overrides_Bool_Exp>>;
  commodityGroupByCommodityGroup?: InputMaybe<Commodity_Group_Bool_Exp>;
  commodity_group?: InputMaybe<Int_Comparison_Exp>;
  custom_group1?: InputMaybe<String_Comparison_Exp>;
  custom_group2?: InputMaybe<String_Comparison_Exp>;
  custom_group3?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  geographicalRegionByGeographicalRegion?: InputMaybe<Geographical_Region_Bool_Exp>;
  geographical_region?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organisation?: InputMaybe<Int_Comparison_Exp>;
  organisationByOrganisation?: InputMaybe<Organisation_Bool_Exp>;
  product?: InputMaybe<Uuid_Comparison_Exp>;
  productByProduct?: InputMaybe<Product_Bool_Exp>;
};

/** unique or primary key constraints on table "product_overrides" */
export enum Product_Overrides_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductOverridesIdKey = 'product_overrides_id_key',
  /** unique or primary key constraint on columns "organisation", "name" */
  ProductOverridesNameOrganisationKey = 'product_overrides_name_organisation_key',
  /** unique or primary key constraint on columns "product", "organisation" */
  ProductOverridesPkey = 'product_overrides_pkey'
}

/** input type for incrementing numeric columns in table "product_overrides" */
export type Product_Overrides_Inc_Input = {
  commodity_group?: InputMaybe<Scalars['Int']['input']>;
  geographical_region?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "product_overrides" */
export type Product_Overrides_Insert_Input = {
  commodityGroupByCommodityGroup?: InputMaybe<Commodity_Group_Obj_Rel_Insert_Input>;
  commodity_group?: InputMaybe<Scalars['Int']['input']>;
  custom_group1?: InputMaybe<Scalars['String']['input']>;
  custom_group2?: InputMaybe<Scalars['String']['input']>;
  custom_group3?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  geographicalRegionByGeographicalRegion?: InputMaybe<Geographical_Region_Obj_Rel_Insert_Input>;
  geographical_region?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
  organisationByOrganisation?: InputMaybe<Organisation_Obj_Rel_Insert_Input>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  productByProduct?: InputMaybe<Product_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Product_Overrides_Max_Fields = {
  __typename?: 'product_overrides_max_fields';
  commodity_group?: Maybe<Scalars['Int']['output']>;
  custom_group1?: Maybe<Scalars['String']['output']>;
  custom_group2?: Maybe<Scalars['String']['output']>;
  custom_group3?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  geographical_region?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "product_overrides" */
export type Product_Overrides_Max_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  custom_group1?: InputMaybe<Order_By>;
  custom_group2?: InputMaybe<Order_By>;
  custom_group3?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Overrides_Min_Fields = {
  __typename?: 'product_overrides_min_fields';
  commodity_group?: Maybe<Scalars['Int']['output']>;
  custom_group1?: Maybe<Scalars['String']['output']>;
  custom_group2?: Maybe<Scalars['String']['output']>;
  custom_group3?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  geographical_region?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "product_overrides" */
export type Product_Overrides_Min_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  custom_group1?: InputMaybe<Order_By>;
  custom_group2?: InputMaybe<Order_By>;
  custom_group3?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product_overrides" */
export type Product_Overrides_Mutation_Response = {
  __typename?: 'product_overrides_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Overrides>;
};

/** on_conflict condition type for table "product_overrides" */
export type Product_Overrides_On_Conflict = {
  constraint: Product_Overrides_Constraint;
  update_columns?: Array<Product_Overrides_Update_Column>;
  where?: InputMaybe<Product_Overrides_Bool_Exp>;
};

/** Ordering options when selecting data from "product_overrides". */
export type Product_Overrides_Order_By = {
  commodityGroupByCommodityGroup?: InputMaybe<Commodity_Group_Order_By>;
  commodity_group?: InputMaybe<Order_By>;
  custom_group1?: InputMaybe<Order_By>;
  custom_group2?: InputMaybe<Order_By>;
  custom_group3?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  geographicalRegionByGeographicalRegion?: InputMaybe<Geographical_Region_Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
  organisationByOrganisation?: InputMaybe<Organisation_Order_By>;
  product?: InputMaybe<Order_By>;
  productByProduct?: InputMaybe<Product_Order_By>;
};

/** primary key columns input for table: product_overrides */
export type Product_Overrides_Pk_Columns_Input = {
  organisation: Scalars['Int']['input'];
  product: Scalars['uuid']['input'];
};

/** select columns of table "product_overrides" */
export enum Product_Overrides_Select_Column {
  /** column name */
  CommodityGroup = 'commodity_group',
  /** column name */
  CustomGroup1 = 'custom_group1',
  /** column name */
  CustomGroup2 = 'custom_group2',
  /** column name */
  CustomGroup3 = 'custom_group3',
  /** column name */
  Description = 'description',
  /** column name */
  GeographicalRegion = 'geographical_region',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Organisation = 'organisation',
  /** column name */
  Product = 'product'
}

/** input type for updating data in table "product_overrides" */
export type Product_Overrides_Set_Input = {
  commodity_group?: InputMaybe<Scalars['Int']['input']>;
  custom_group1?: InputMaybe<Scalars['String']['input']>;
  custom_group2?: InputMaybe<Scalars['String']['input']>;
  custom_group3?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  geographical_region?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Product_Overrides_Stddev_Fields = {
  __typename?: 'product_overrides_stddev_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "product_overrides" */
export type Product_Overrides_Stddev_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Overrides_Stddev_Pop_Fields = {
  __typename?: 'product_overrides_stddev_pop_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "product_overrides" */
export type Product_Overrides_Stddev_Pop_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Overrides_Stddev_Samp_Fields = {
  __typename?: 'product_overrides_stddev_samp_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "product_overrides" */
export type Product_Overrides_Stddev_Samp_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "product_overrides" */
export type Product_Overrides_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Overrides_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Overrides_Stream_Cursor_Value_Input = {
  commodity_group?: InputMaybe<Scalars['Int']['input']>;
  custom_group1?: InputMaybe<Scalars['String']['input']>;
  custom_group2?: InputMaybe<Scalars['String']['input']>;
  custom_group3?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  geographical_region?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Product_Overrides_Sum_Fields = {
  __typename?: 'product_overrides_sum_fields';
  commodity_group?: Maybe<Scalars['Int']['output']>;
  geographical_region?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "product_overrides" */
export type Product_Overrides_Sum_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** update columns of table "product_overrides" */
export enum Product_Overrides_Update_Column {
  /** column name */
  CommodityGroup = 'commodity_group',
  /** column name */
  CustomGroup1 = 'custom_group1',
  /** column name */
  CustomGroup2 = 'custom_group2',
  /** column name */
  CustomGroup3 = 'custom_group3',
  /** column name */
  Description = 'description',
  /** column name */
  GeographicalRegion = 'geographical_region',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Organisation = 'organisation',
  /** column name */
  Product = 'product'
}

export type Product_Overrides_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Product_Overrides_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Overrides_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Overrides_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Product_Overrides_Var_Pop_Fields = {
  __typename?: 'product_overrides_var_pop_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "product_overrides" */
export type Product_Overrides_Var_Pop_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Overrides_Var_Samp_Fields = {
  __typename?: 'product_overrides_var_samp_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "product_overrides" */
export type Product_Overrides_Var_Samp_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Overrides_Variance_Fields = {
  __typename?: 'product_overrides_variance_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "product_overrides" */
export type Product_Overrides_Variance_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product */
export type Product_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "product" */
export enum Product_Select_Column {
  /** column name */
  ArtisType = 'artis_type',
  /** column name */
  Code = 'code',
  /** column name */
  CommodityGroup = 'commodity_group',
  /** column name */
  Description = 'description',
  /** column name */
  EodProductDep = 'eod_product_dep',
  /** column name */
  GeographicalRegion = 'geographical_region',
  /** column name */
  Id = 'id',
  /** column name */
  KtKbConversionFactor = 'kt_kb_conversion_factor',
  /** column name */
  LogicalCode = 'logical_code',
  /** column name */
  Maturity = 'maturity',
  /** column name */
  Name = 'name',
  /** column name */
  Package = 'package',
  /** column name */
  ProductType = 'product_type',
  /** column name */
  SummaryType = 'summary_type',
  /** column name */
  Uom = 'uom'
}

/** input type for updating data in table "product" */
export type Product_Set_Input = {
  artis_type?: InputMaybe<Product_Artis_Type_Enum>;
  code?: InputMaybe<Scalars['String']['input']>;
  commodity_group?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eod_product_dep?: InputMaybe<Scalars['uuid']['input']>;
  geographical_region?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  kt_kb_conversion_factor?: InputMaybe<Scalars['numeric']['input']>;
  logical_code?: InputMaybe<Scalars['String']['input']>;
  maturity?: InputMaybe<Product_Maturity_Enum>;
  name?: InputMaybe<Scalars['String']['input']>;
  package?: InputMaybe<Scalars['Int']['input']>;
  product_type?: InputMaybe<Product_Type_Enum>;
  summary_type?: InputMaybe<Product_Summary_Type_Enum>;
  uom?: InputMaybe<Product_Uom_Enum>;
};

/** columns and relationships of "product_source" */
export type Product_Source = {
  __typename?: 'product_source';
  /** An array relationship */
  sources: Array<Source>;
  /** An aggregate relationship */
  sources_aggregate: Source_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "product_source" */
export type Product_SourceSourcesArgs = {
  distinct_on?: InputMaybe<Array<Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Source_Order_By>>;
  where?: InputMaybe<Source_Bool_Exp>;
};


/** columns and relationships of "product_source" */
export type Product_SourceSources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Source_Order_By>>;
  where?: InputMaybe<Source_Bool_Exp>;
};

/** aggregated selection of "product_source" */
export type Product_Source_Aggregate = {
  __typename?: 'product_source_aggregate';
  aggregate?: Maybe<Product_Source_Aggregate_Fields>;
  nodes: Array<Product_Source>;
};

/** aggregate fields of "product_source" */
export type Product_Source_Aggregate_Fields = {
  __typename?: 'product_source_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Source_Max_Fields>;
  min?: Maybe<Product_Source_Min_Fields>;
};


/** aggregate fields of "product_source" */
export type Product_Source_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Source_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "product_source". All fields are combined with a logical 'AND'. */
export type Product_Source_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Source_Bool_Exp>>;
  _not?: InputMaybe<Product_Source_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Source_Bool_Exp>>;
  sources?: InputMaybe<Source_Bool_Exp>;
  sources_aggregate?: InputMaybe<Source_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_source" */
export enum Product_Source_Constraint {
  /** unique or primary key constraint on columns "value" */
  ProductSourcePkey = 'product_source_pkey'
}

export enum Product_Source_Enum {
  Eod = 'eod',
  Exchange = 'exchange',
  Global = 'global',
  Organisation = 'organisation'
}

/** Boolean expression to compare columns of type "product_source_enum". All fields are combined with logical 'AND'. */
export type Product_Source_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Product_Source_Enum>;
  _in?: InputMaybe<Array<Product_Source_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Product_Source_Enum>;
  _nin?: InputMaybe<Array<Product_Source_Enum>>;
};

/** input type for inserting data into table "product_source" */
export type Product_Source_Insert_Input = {
  sources?: InputMaybe<Source_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Product_Source_Max_Fields = {
  __typename?: 'product_source_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Product_Source_Min_Fields = {
  __typename?: 'product_source_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "product_source" */
export type Product_Source_Mutation_Response = {
  __typename?: 'product_source_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Source>;
};

/** input type for inserting object relation for remote table "product_source" */
export type Product_Source_Obj_Rel_Insert_Input = {
  data: Product_Source_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Source_On_Conflict>;
};

/** on_conflict condition type for table "product_source" */
export type Product_Source_On_Conflict = {
  constraint: Product_Source_Constraint;
  update_columns?: Array<Product_Source_Update_Column>;
  where?: InputMaybe<Product_Source_Bool_Exp>;
};

/** Ordering options when selecting data from "product_source". */
export type Product_Source_Order_By = {
  sources_aggregate?: InputMaybe<Source_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_source */
export type Product_Source_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "product_source" */
export enum Product_Source_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "product_source" */
export type Product_Source_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "product_source" */
export type Product_Source_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Source_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Source_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "product_source" */
export enum Product_Source_Update_Column {
  /** column name */
  Value = 'value'
}

export type Product_Source_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Source_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Source_Bool_Exp;
};

/** aggregate stddev on columns */
export type Product_Stddev_Fields = {
  __typename?: 'product_stddev_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  kt_kb_conversion_factor?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
  /** Gets number of shared_instruments */
  shared_instrument_count?: Maybe<Scalars['bigint']['output']>;
};

/** order by stddev() on columns of table "product" */
export type Product_Stddev_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  kt_kb_conversion_factor?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Stddev_Pop_Fields = {
  __typename?: 'product_stddev_pop_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  kt_kb_conversion_factor?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
  /** Gets number of shared_instruments */
  shared_instrument_count?: Maybe<Scalars['bigint']['output']>;
};

/** order by stddev_pop() on columns of table "product" */
export type Product_Stddev_Pop_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  kt_kb_conversion_factor?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Stddev_Samp_Fields = {
  __typename?: 'product_stddev_samp_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  kt_kb_conversion_factor?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
  /** Gets number of shared_instruments */
  shared_instrument_count?: Maybe<Scalars['bigint']['output']>;
};

/** order by stddev_samp() on columns of table "product" */
export type Product_Stddev_Samp_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  kt_kb_conversion_factor?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "product" */
export type Product_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Stream_Cursor_Value_Input = {
  artis_type?: InputMaybe<Product_Artis_Type_Enum>;
  code?: InputMaybe<Scalars['String']['input']>;
  commodity_group?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eod_product_dep?: InputMaybe<Scalars['uuid']['input']>;
  geographical_region?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  kt_kb_conversion_factor?: InputMaybe<Scalars['numeric']['input']>;
  logical_code?: InputMaybe<Scalars['String']['input']>;
  maturity?: InputMaybe<Product_Maturity_Enum>;
  name?: InputMaybe<Scalars['String']['input']>;
  package?: InputMaybe<Scalars['Int']['input']>;
  product_type?: InputMaybe<Product_Type_Enum>;
  summary_type?: InputMaybe<Product_Summary_Type_Enum>;
  uom?: InputMaybe<Product_Uom_Enum>;
};

/** aggregate sum on columns */
export type Product_Sum_Fields = {
  __typename?: 'product_sum_fields';
  commodity_group?: Maybe<Scalars['Int']['output']>;
  geographical_region?: Maybe<Scalars['Int']['output']>;
  kt_kb_conversion_factor?: Maybe<Scalars['numeric']['output']>;
  package?: Maybe<Scalars['Int']['output']>;
  /** Gets number of shared_instruments */
  shared_instrument_count?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "product" */
export type Product_Sum_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  kt_kb_conversion_factor?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** columns and relationships of "product_summary_type" */
export type Product_Summary_Type = {
  __typename?: 'product_summary_type';
  /** An array relationship */
  summary_types: Array<Product>;
  /** An aggregate relationship */
  summary_types_aggregate: Product_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "product_summary_type" */
export type Product_Summary_TypeSummary_TypesArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


/** columns and relationships of "product_summary_type" */
export type Product_Summary_TypeSummary_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** aggregated selection of "product_summary_type" */
export type Product_Summary_Type_Aggregate = {
  __typename?: 'product_summary_type_aggregate';
  aggregate?: Maybe<Product_Summary_Type_Aggregate_Fields>;
  nodes: Array<Product_Summary_Type>;
};

/** aggregate fields of "product_summary_type" */
export type Product_Summary_Type_Aggregate_Fields = {
  __typename?: 'product_summary_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Summary_Type_Max_Fields>;
  min?: Maybe<Product_Summary_Type_Min_Fields>;
};


/** aggregate fields of "product_summary_type" */
export type Product_Summary_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Summary_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "product_summary_type". All fields are combined with a logical 'AND'. */
export type Product_Summary_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Summary_Type_Bool_Exp>>;
  _not?: InputMaybe<Product_Summary_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Summary_Type_Bool_Exp>>;
  summary_types?: InputMaybe<Product_Bool_Exp>;
  summary_types_aggregate?: InputMaybe<Product_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_summary_type" */
export enum Product_Summary_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  ProductSummaryTypePkey = 'product_summary_type_pkey'
}

export enum Product_Summary_Type_Enum {
  Average = 'average',
  None = 'none',
  Sum = 'sum',
  Timespread = 'timespread'
}

/** Boolean expression to compare columns of type "product_summary_type_enum". All fields are combined with logical 'AND'. */
export type Product_Summary_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Product_Summary_Type_Enum>;
  _in?: InputMaybe<Array<Product_Summary_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Product_Summary_Type_Enum>;
  _nin?: InputMaybe<Array<Product_Summary_Type_Enum>>;
};

/** input type for inserting data into table "product_summary_type" */
export type Product_Summary_Type_Insert_Input = {
  summary_types?: InputMaybe<Product_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Product_Summary_Type_Max_Fields = {
  __typename?: 'product_summary_type_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Product_Summary_Type_Min_Fields = {
  __typename?: 'product_summary_type_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "product_summary_type" */
export type Product_Summary_Type_Mutation_Response = {
  __typename?: 'product_summary_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Summary_Type>;
};

/** input type for inserting object relation for remote table "product_summary_type" */
export type Product_Summary_Type_Obj_Rel_Insert_Input = {
  data: Product_Summary_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Summary_Type_On_Conflict>;
};

/** on_conflict condition type for table "product_summary_type" */
export type Product_Summary_Type_On_Conflict = {
  constraint: Product_Summary_Type_Constraint;
  update_columns?: Array<Product_Summary_Type_Update_Column>;
  where?: InputMaybe<Product_Summary_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "product_summary_type". */
export type Product_Summary_Type_Order_By = {
  summary_types_aggregate?: InputMaybe<Product_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_summary_type */
export type Product_Summary_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "product_summary_type" */
export enum Product_Summary_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "product_summary_type" */
export type Product_Summary_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "product_summary_type" */
export type Product_Summary_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Summary_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Summary_Type_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "product_summary_type" */
export enum Product_Summary_Type_Update_Column {
  /** column name */
  Value = 'value'
}

export type Product_Summary_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Summary_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Summary_Type_Bool_Exp;
};

/** columns and relationships of "product_type" */
export type Product_Type = {
  __typename?: 'product_type';
  /** An array relationship */
  products: Array<Product>;
  /** An aggregate relationship */
  products_aggregate: Product_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "product_type" */
export type Product_TypeProductsArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


/** columns and relationships of "product_type" */
export type Product_TypeProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** aggregated selection of "product_type" */
export type Product_Type_Aggregate = {
  __typename?: 'product_type_aggregate';
  aggregate?: Maybe<Product_Type_Aggregate_Fields>;
  nodes: Array<Product_Type>;
};

/** aggregate fields of "product_type" */
export type Product_Type_Aggregate_Fields = {
  __typename?: 'product_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Type_Max_Fields>;
  min?: Maybe<Product_Type_Min_Fields>;
};


/** aggregate fields of "product_type" */
export type Product_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "product_type". All fields are combined with a logical 'AND'. */
export type Product_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Type_Bool_Exp>>;
  _not?: InputMaybe<Product_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Type_Bool_Exp>>;
  products?: InputMaybe<Product_Bool_Exp>;
  products_aggregate?: InputMaybe<Product_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_type" */
export enum Product_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  ProductTypePkey = 'product_type_pkey'
}

export enum Product_Type_Enum {
  Box = 'box',
  Change = 'change',
  Diff = 'diff',
  Outright = 'outright',
  Timespread = 'timespread'
}

/** Boolean expression to compare columns of type "product_type_enum". All fields are combined with logical 'AND'. */
export type Product_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Product_Type_Enum>;
  _in?: InputMaybe<Array<Product_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Product_Type_Enum>;
  _nin?: InputMaybe<Array<Product_Type_Enum>>;
};

/** input type for inserting data into table "product_type" */
export type Product_Type_Insert_Input = {
  products?: InputMaybe<Product_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Product_Type_Max_Fields = {
  __typename?: 'product_type_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Product_Type_Min_Fields = {
  __typename?: 'product_type_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "product_type" */
export type Product_Type_Mutation_Response = {
  __typename?: 'product_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Type>;
};

/** input type for inserting object relation for remote table "product_type" */
export type Product_Type_Obj_Rel_Insert_Input = {
  data: Product_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Type_On_Conflict>;
};

/** on_conflict condition type for table "product_type" */
export type Product_Type_On_Conflict = {
  constraint: Product_Type_Constraint;
  update_columns?: Array<Product_Type_Update_Column>;
  where?: InputMaybe<Product_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "product_type". */
export type Product_Type_Order_By = {
  products_aggregate?: InputMaybe<Product_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_type */
export type Product_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "product_type" */
export enum Product_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "product_type" */
export type Product_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "product_type" */
export type Product_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Type_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "product_type" */
export enum Product_Type_Update_Column {
  /** column name */
  Value = 'value'
}

export type Product_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Type_Bool_Exp;
};

/** columns and relationships of "product_uom" */
export type Product_Uom = {
  __typename?: 'product_uom';
  /** An array relationship */
  products: Array<Product>;
  /** An aggregate relationship */
  products_aggregate: Product_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "product_uom" */
export type Product_UomProductsArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


/** columns and relationships of "product_uom" */
export type Product_UomProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** aggregated selection of "product_uom" */
export type Product_Uom_Aggregate = {
  __typename?: 'product_uom_aggregate';
  aggregate?: Maybe<Product_Uom_Aggregate_Fields>;
  nodes: Array<Product_Uom>;
};

/** aggregate fields of "product_uom" */
export type Product_Uom_Aggregate_Fields = {
  __typename?: 'product_uom_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Uom_Max_Fields>;
  min?: Maybe<Product_Uom_Min_Fields>;
};


/** aggregate fields of "product_uom" */
export type Product_Uom_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Uom_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "product_uom". All fields are combined with a logical 'AND'. */
export type Product_Uom_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Uom_Bool_Exp>>;
  _not?: InputMaybe<Product_Uom_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Uom_Bool_Exp>>;
  products?: InputMaybe<Product_Bool_Exp>;
  products_aggregate?: InputMaybe<Product_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_uom" */
export enum Product_Uom_Constraint {
  /** unique or primary key constraint on columns "value" */
  ProductUomPkey = 'product_uom_pkey'
}

export enum Product_Uom_Enum {
  Days = 'days',
  Eur = 'eur',
  EurMt = 'eur_mt',
  EurMwh = 'eur_mwh',
  Flatr = 'flatr',
  Gbp = 'gbp',
  GbpMt = 'gbp_mt',
  Kb = 'kb',
  Kbd = 'kbd',
  Kcbm = 'kcbm',
  KgM3 = 'kg_m3',
  Kgal = 'kgal',
  Kt = 'kt',
  Lots = 'lots',
  None = 'none',
  PThm = 'p_thm',
  Percent = 'percent',
  UscBbl = 'usc_bbl',
  UscGal = 'usc_gal',
  Usd = 'usd',
  UsdBbl = 'usd_bbl',
  UsdDay = 'usd_day',
  UsdGal = 'usd_gal',
  UsdMmbtu = 'usd_mmbtu',
  UsdThousands = 'usd_thousands',
  UsdTon = 'usd_ton',
  Usdmm = 'usdmm',
  Ws = 'ws'
}

/** Boolean expression to compare columns of type "product_uom_enum". All fields are combined with logical 'AND'. */
export type Product_Uom_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Product_Uom_Enum>;
  _in?: InputMaybe<Array<Product_Uom_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Product_Uom_Enum>;
  _nin?: InputMaybe<Array<Product_Uom_Enum>>;
};

/** input type for inserting data into table "product_uom" */
export type Product_Uom_Insert_Input = {
  products?: InputMaybe<Product_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Product_Uom_Max_Fields = {
  __typename?: 'product_uom_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Product_Uom_Min_Fields = {
  __typename?: 'product_uom_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "product_uom" */
export type Product_Uom_Mutation_Response = {
  __typename?: 'product_uom_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Uom>;
};

/** input type for inserting object relation for remote table "product_uom" */
export type Product_Uom_Obj_Rel_Insert_Input = {
  data: Product_Uom_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Uom_On_Conflict>;
};

/** on_conflict condition type for table "product_uom" */
export type Product_Uom_On_Conflict = {
  constraint: Product_Uom_Constraint;
  update_columns?: Array<Product_Uom_Update_Column>;
  where?: InputMaybe<Product_Uom_Bool_Exp>;
};

/** Ordering options when selecting data from "product_uom". */
export type Product_Uom_Order_By = {
  products_aggregate?: InputMaybe<Product_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_uom */
export type Product_Uom_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "product_uom" */
export enum Product_Uom_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "product_uom" */
export type Product_Uom_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "product_uom" */
export type Product_Uom_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Uom_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Uom_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "product_uom" */
export enum Product_Uom_Update_Column {
  /** column name */
  Value = 'value'
}

export type Product_Uom_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Uom_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Uom_Bool_Exp;
};

/** update columns of table "product" */
export enum Product_Update_Column {
  /** column name */
  ArtisType = 'artis_type',
  /** column name */
  Code = 'code',
  /** column name */
  CommodityGroup = 'commodity_group',
  /** column name */
  Description = 'description',
  /** column name */
  EodProductDep = 'eod_product_dep',
  /** column name */
  GeographicalRegion = 'geographical_region',
  /** column name */
  Id = 'id',
  /** column name */
  KtKbConversionFactor = 'kt_kb_conversion_factor',
  /** column name */
  LogicalCode = 'logical_code',
  /** column name */
  Maturity = 'maturity',
  /** column name */
  Name = 'name',
  /** column name */
  Package = 'package',
  /** column name */
  ProductType = 'product_type',
  /** column name */
  SummaryType = 'summary_type',
  /** column name */
  Uom = 'uom'
}

export type Product_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Product_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Product_Var_Pop_Fields = {
  __typename?: 'product_var_pop_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  kt_kb_conversion_factor?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
  /** Gets number of shared_instruments */
  shared_instrument_count?: Maybe<Scalars['bigint']['output']>;
};

/** order by var_pop() on columns of table "product" */
export type Product_Var_Pop_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  kt_kb_conversion_factor?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Var_Samp_Fields = {
  __typename?: 'product_var_samp_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  kt_kb_conversion_factor?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
  /** Gets number of shared_instruments */
  shared_instrument_count?: Maybe<Scalars['bigint']['output']>;
};

/** order by var_samp() on columns of table "product" */
export type Product_Var_Samp_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  kt_kb_conversion_factor?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Variance_Fields = {
  __typename?: 'product_variance_fields';
  commodity_group?: Maybe<Scalars['Float']['output']>;
  geographical_region?: Maybe<Scalars['Float']['output']>;
  kt_kb_conversion_factor?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Scalars['Float']['output']>;
  /** Gets number of shared_instruments */
  shared_instrument_count?: Maybe<Scalars['bigint']['output']>;
};

/** order by variance() on columns of table "product" */
export type Product_Variance_Order_By = {
  commodity_group?: InputMaybe<Order_By>;
  geographical_region?: InputMaybe<Order_By>;
  kt_kb_conversion_factor?: InputMaybe<Order_By>;
  package?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "audit.logged_actions" */
  audit_logged_actions: Array<Audit_Logged_Actions>;
  /** fetch aggregated fields from the table: "audit.logged_actions" */
  audit_logged_actions_aggregate: Audit_Logged_Actions_Aggregate;
  /** fetch data from the table: "audit.logged_actions" using primary key columns */
  audit_logged_actions_by_pk?: Maybe<Audit_Logged_Actions>;
  /** fetch data from the table: "audit.umi_actions" */
  audit_umi_actions: Array<Audit_Umi_Actions>;
  /** fetch aggregated fields from the table: "audit.umi_actions" */
  audit_umi_actions_aggregate: Audit_Umi_Actions_Aggregate;
  /** fetch data from the table: "audit.umi_actions" using primary key columns */
  audit_umi_actions_by_pk?: Maybe<Audit_Umi_Actions>;
  /** fetch data from the table: "commodity_group" */
  commodity_group: Array<Commodity_Group>;
  /** fetch aggregated fields from the table: "commodity_group" */
  commodity_group_aggregate: Commodity_Group_Aggregate;
  /** fetch data from the table: "commodity_group" using primary key columns */
  commodity_group_by_pk?: Maybe<Commodity_Group>;
  /** fetch data from the table: "commodity_parent_group" */
  commodity_parent_group: Array<Commodity_Parent_Group>;
  /** fetch aggregated fields from the table: "commodity_parent_group" */
  commodity_parent_group_aggregate: Commodity_Parent_Group_Aggregate;
  /** fetch data from the table: "commodity_parent_group" using primary key columns */
  commodity_parent_group_by_pk?: Maybe<Commodity_Parent_Group>;
  /** fetch data from the table: "eod" */
  eod: Array<Eod>;
  /** fetch aggregated fields from the table: "eod" */
  eod_aggregate: Eod_Aggregate;
  /** fetch data from the table: "eod" using primary key columns */
  eod_by_pk?: Maybe<Eod>;
  /** fetch data from the table: "eod_entry" */
  eod_entry: Array<Eod_Entry>;
  /** fetch aggregated fields from the table: "eod_entry" */
  eod_entry_aggregate: Eod_Entry_Aggregate;
  /** fetch data from the table: "eod_entry" using primary key columns */
  eod_entry_by_pk?: Maybe<Eod_Entry>;
  /** fetch data from the table: "eod_entry_per_eval_date_mview" */
  eod_entry_per_eval_date_mview: Array<Eod_Entry_Per_Eval_Date_Mview>;
  /** fetch aggregated fields from the table: "eod_entry_per_eval_date_mview" */
  eod_entry_per_eval_date_mview_aggregate: Eod_Entry_Per_Eval_Date_Mview_Aggregate;
  /** fetch data from the table: "eod_entry_per_eval_date_package_mview" */
  eod_entry_per_eval_date_package_mview: Array<Eod_Entry_Per_Eval_Date_Package_Mview>;
  /** fetch aggregated fields from the table: "eod_entry_per_eval_date_package_mview" */
  eod_entry_per_eval_date_package_mview_aggregate: Eod_Entry_Per_Eval_Date_Package_Mview_Aggregate;
  /** fetch data from the table: "exchange" */
  exchange: Array<Exchange>;
  /** fetch aggregated fields from the table: "exchange" */
  exchange_aggregate: Exchange_Aggregate;
  /** fetch data from the table: "exchange" using primary key columns */
  exchange_by_pk?: Maybe<Exchange>;
  /** fetch data from the table: "exchange_event_type" */
  exchange_event_type: Array<Exchange_Event_Type>;
  /** fetch aggregated fields from the table: "exchange_event_type" */
  exchange_event_type_aggregate: Exchange_Event_Type_Aggregate;
  /** fetch data from the table: "exchange_event_type" using primary key columns */
  exchange_event_type_by_pk?: Maybe<Exchange_Event_Type>;
  /** fetch data from the table: "exchange_usage" */
  exchange_usage: Array<Exchange_Usage>;
  /** fetch aggregated fields from the table: "exchange_usage" */
  exchange_usage_aggregate: Exchange_Usage_Aggregate;
  /** fetch data from the table: "exchange_usage" using primary key columns */
  exchange_usage_by_pk?: Maybe<Exchange_Usage>;
  /** fetch data from the table: "exchange_usage_last" */
  exchange_usage_last: Array<Exchange_Usage_Last>;
  /** fetch aggregated fields from the table: "exchange_usage_last" */
  exchange_usage_last_aggregate: Exchange_Usage_Last_Aggregate;
  /** fetch data from the table: "exchange_usage_start" */
  exchange_usage_start: Array<Exchange_Usage_Start>;
  /** fetch aggregated fields from the table: "exchange_usage_start" */
  exchange_usage_start_aggregate: Exchange_Usage_Start_Aggregate;
  /** fetch data from the table: "folio_column_settings" */
  folio_column_settings: Array<Folio_Column_Settings>;
  /** fetch aggregated fields from the table: "folio_column_settings" */
  folio_column_settings_aggregate: Folio_Column_Settings_Aggregate;
  /** fetch data from the table: "folio_column_settings" using primary key columns */
  folio_column_settings_by_pk?: Maybe<Folio_Column_Settings>;
  /** fetch data from the table: "folio_shadow_curves" */
  folio_shadow_curves: Array<Folio_Shadow_Curves>;
  /** fetch aggregated fields from the table: "folio_shadow_curves" */
  folio_shadow_curves_aggregate: Folio_Shadow_Curves_Aggregate;
  /** fetch data from the table: "folio_shadow_curves" using primary key columns */
  folio_shadow_curves_by_pk?: Maybe<Folio_Shadow_Curves>;
  /** fetch data from the table: "folio_user" */
  folio_user: Array<Folio_User>;
  /** fetch aggregated fields from the table: "folio_user" */
  folio_user_aggregate: Folio_User_Aggregate;
  /** fetch data from the table: "folio_user_basic_profile" */
  folio_user_basic_profile: Array<Folio_User_Basic_Profile>;
  /** fetch aggregated fields from the table: "folio_user_basic_profile" */
  folio_user_basic_profile_aggregate: Folio_User_Basic_Profile_Aggregate;
  /** fetch data from the table: "folio_user" using primary key columns */
  folio_user_by_pk?: Maybe<Folio_User>;
  /** fetch data from the table: "geographical_region" */
  geographical_region: Array<Geographical_Region>;
  /** fetch aggregated fields from the table: "geographical_region" */
  geographical_region_aggregate: Geographical_Region_Aggregate;
  /** fetch data from the table: "geographical_region" using primary key columns */
  geographical_region_by_pk?: Maybe<Geographical_Region>;
  /** fetch data from the table: "global_instrument" */
  global_instrument: Array<Global_Instrument>;
  /** fetch aggregated fields from the table: "global_instrument" */
  global_instrument_aggregate: Global_Instrument_Aggregate;
  /** fetch data from the table: "global_instrument" using primary key columns */
  global_instrument_by_pk?: Maybe<Global_Instrument>;
  /** fetch data from the table: "global_package" */
  global_package: Array<Global_Package>;
  /** fetch aggregated fields from the table: "global_package" */
  global_package_aggregate: Global_Package_Aggregate;
  /** fetch data from the table: "global_package" using primary key columns */
  global_package_by_pk?: Maybe<Global_Package>;
  /** fetch data from the table: "global_permission" */
  global_permission: Array<Global_Permission>;
  /** fetch aggregated fields from the table: "global_permission" */
  global_permission_aggregate: Global_Permission_Aggregate;
  /** fetch data from the table: "global_permission" using primary key columns */
  global_permission_by_pk?: Maybe<Global_Permission>;
  /** fetch data from the table: "global_product" */
  global_product: Array<Global_Product>;
  /** fetch aggregated fields from the table: "global_product" */
  global_product_aggregate: Global_Product_Aggregate;
  /** fetch data from the table: "global_product" using primary key columns */
  global_product_by_pk?: Maybe<Global_Product>;
  /** fetch data from the table: "global_product_config" */
  global_product_config: Array<Global_Product_Config>;
  /** fetch aggregated fields from the table: "global_product_config" */
  global_product_config_aggregate: Global_Product_Config_Aggregate;
  /** fetch data from the table: "global_product_config" using primary key columns */
  global_product_config_by_pk?: Maybe<Global_Product_Config>;
  /** fetch data from the table: "hfc_card_settings" */
  hfc_card_settings: Array<Hfc_Card_Settings>;
  /** fetch aggregated fields from the table: "hfc_card_settings" */
  hfc_card_settings_aggregate: Hfc_Card_Settings_Aggregate;
  /** fetch data from the table: "hfc_card_settings" using primary key columns */
  hfc_card_settings_by_pk?: Maybe<Hfc_Card_Settings>;
  /** fetch data from the table: "hfc_user_settings" */
  hfc_user_settings: Array<Hfc_User_Settings>;
  /** fetch aggregated fields from the table: "hfc_user_settings" */
  hfc_user_settings_aggregate: Hfc_User_Settings_Aggregate;
  /** fetch data from the table: "hfc_user_settings" using primary key columns */
  hfc_user_settings_by_pk?: Maybe<Hfc_User_Settings>;
  /** fetch data from the table: "live_users_new" */
  live_users_new: Array<Live_Users_New>;
  /** fetch aggregated fields from the table: "live_users_new" */
  live_users_new_aggregate: Live_Users_New_Aggregate;
  /** fetch data from the table: "local_instrument" */
  local_instrument: Array<Local_Instrument>;
  /** fetch aggregated fields from the table: "local_instrument" */
  local_instrument_aggregate: Local_Instrument_Aggregate;
  /** fetch data from the table: "local_instrument" using primary key columns */
  local_instrument_by_pk?: Maybe<Local_Instrument>;
  /** fetch data from the table: "logout_request" */
  logout_request: Array<Logout_Request>;
  /** fetch aggregated fields from the table: "logout_request" */
  logout_request_aggregate: Logout_Request_Aggregate;
  /** fetch data from the table: "logout_request" using primary key columns */
  logout_request_by_pk?: Maybe<Logout_Request>;
  /** fetch data from the table: "organisation" */
  organisation: Array<Organisation>;
  /** fetch aggregated fields from the table: "organisation" */
  organisation_aggregate: Organisation_Aggregate;
  /** fetch data from the table: "organisation" using primary key columns */
  organisation_by_pk?: Maybe<Organisation>;
  /** fetch data from the table: "package" */
  package: Array<Package>;
  /** fetch aggregated fields from the table: "package" */
  package_aggregate: Package_Aggregate;
  /** fetch data from the table: "package" using primary key columns */
  package_by_pk?: Maybe<Package>;
  /** fetch data from the table: "package_type" */
  package_type: Array<Package_Type>;
  /** fetch aggregated fields from the table: "package_type" */
  package_type_aggregate: Package_Type_Aggregate;
  /** fetch data from the table: "package_type" using primary key columns */
  package_type_by_pk?: Maybe<Package_Type>;
  /** An array relationship */
  page_settings: Array<Page_Settings>;
  /** An aggregate relationship */
  page_settings_aggregate: Page_Settings_Aggregate;
  /** fetch data from the table: "page_settings" using primary key columns */
  page_settings_by_pk?: Maybe<Page_Settings>;
  /** fetch data from the table: "permission" */
  permission: Array<Permission>;
  /** fetch aggregated fields from the table: "permission" */
  permission_aggregate: Permission_Aggregate;
  /** fetch data from the table: "permission" using primary key columns */
  permission_by_pk?: Maybe<Permission>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product_artis_type" */
  product_artis_type: Array<Product_Artis_Type>;
  /** fetch aggregated fields from the table: "product_artis_type" */
  product_artis_type_aggregate: Product_Artis_Type_Aggregate;
  /** fetch data from the table: "product_artis_type" using primary key columns */
  product_artis_type_by_pk?: Maybe<Product_Artis_Type>;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table: "product_config" */
  product_config: Array<Product_Config>;
  /** fetch aggregated fields from the table: "product_config" */
  product_config_aggregate: Product_Config_Aggregate;
  /** fetch data from the table: "product_config" using primary key columns */
  product_config_by_pk?: Maybe<Product_Config>;
  /** fetch data from the table: "product_eod" */
  product_eod: Array<Product_Eod>;
  /** fetch aggregated fields from the table: "product_eod" */
  product_eod_aggregate: Product_Eod_Aggregate;
  /** fetch data from the table: "product_eod" using primary key columns */
  product_eod_by_pk?: Maybe<Product_Eod>;
  /** An array relationship */
  product_global_dependencies: Array<Product_Global_Dependencies>;
  /** An aggregate relationship */
  product_global_dependencies_aggregate: Product_Global_Dependencies_Aggregate;
  /** fetch data from the table: "product_global_dependencies" using primary key columns */
  product_global_dependencies_by_pk?: Maybe<Product_Global_Dependencies>;
  /** fetch data from the table: "product_maturity" */
  product_maturity: Array<Product_Maturity>;
  /** fetch aggregated fields from the table: "product_maturity" */
  product_maturity_aggregate: Product_Maturity_Aggregate;
  /** fetch data from the table: "product_maturity" using primary key columns */
  product_maturity_by_pk?: Maybe<Product_Maturity>;
  /** An array relationship */
  product_overrides: Array<Product_Overrides>;
  /** An aggregate relationship */
  product_overrides_aggregate: Product_Overrides_Aggregate;
  /** fetch data from the table: "product_overrides" using primary key columns */
  product_overrides_by_pk?: Maybe<Product_Overrides>;
  /** fetch data from the table: "product_source" */
  product_source: Array<Product_Source>;
  /** fetch aggregated fields from the table: "product_source" */
  product_source_aggregate: Product_Source_Aggregate;
  /** fetch data from the table: "product_source" using primary key columns */
  product_source_by_pk?: Maybe<Product_Source>;
  /** fetch data from the table: "product_summary_type" */
  product_summary_type: Array<Product_Summary_Type>;
  /** fetch aggregated fields from the table: "product_summary_type" */
  product_summary_type_aggregate: Product_Summary_Type_Aggregate;
  /** fetch data from the table: "product_summary_type" using primary key columns */
  product_summary_type_by_pk?: Maybe<Product_Summary_Type>;
  /** fetch data from the table: "product_type" */
  product_type: Array<Product_Type>;
  /** fetch aggregated fields from the table: "product_type" */
  product_type_aggregate: Product_Type_Aggregate;
  /** fetch data from the table: "product_type" using primary key columns */
  product_type_by_pk?: Maybe<Product_Type>;
  /** fetch data from the table: "product_uom" */
  product_uom: Array<Product_Uom>;
  /** fetch aggregated fields from the table: "product_uom" */
  product_uom_aggregate: Product_Uom_Aggregate;
  /** fetch data from the table: "product_uom" using primary key columns */
  product_uom_by_pk?: Maybe<Product_Uom>;
  /** fetch data from the table: "session" */
  session: Array<Session>;
  /** fetch aggregated fields from the table: "session" */
  session_aggregate: Session_Aggregate;
  /** fetch data from the table: "session" using primary key columns */
  session_by_pk?: Maybe<Session>;
  /** fetch data from the table: "session_type" */
  session_type: Array<Session_Type>;
  /** fetch aggregated fields from the table: "session_type" */
  session_type_aggregate: Session_Type_Aggregate;
  /** fetch data from the table: "session_type" using primary key columns */
  session_type_by_pk?: Maybe<Session_Type>;
  /** fetch data from the table: "shared_instrument" */
  shared_instrument: Array<Shared_Instrument>;
  /** fetch aggregated fields from the table: "shared_instrument" */
  shared_instrument_aggregate: Shared_Instrument_Aggregate;
  /** fetch data from the table: "shared_instrument" using primary key columns */
  shared_instrument_by_pk?: Maybe<Shared_Instrument>;
  /** fetch data from the table: "sharing_agreement" */
  sharing_agreement: Array<Sharing_Agreement>;
  /** fetch aggregated fields from the table: "sharing_agreement" */
  sharing_agreement_aggregate: Sharing_Agreement_Aggregate;
  /** fetch data from the table: "sharing_agreement" using primary key columns */
  sharing_agreement_by_pk?: Maybe<Sharing_Agreement>;
  /** fetch data from the table: "source" */
  source: Array<Source>;
  /** fetch aggregated fields from the table: "source" */
  source_aggregate: Source_Aggregate;
  /** fetch data from the table: "source" using primary key columns */
  source_by_pk?: Maybe<Source>;
  /** fetch data from the table: "user_right" */
  user_right: Array<User_Right>;
  /** fetch aggregated fields from the table: "user_right" */
  user_right_aggregate: User_Right_Aggregate;
  /** fetch data from the table: "user_right" using primary key columns */
  user_right_by_pk?: Maybe<User_Right>;
  /** fetch data from the table: "user_storage" */
  user_storage: Array<User_Storage>;
  /** fetch aggregated fields from the table: "user_storage" */
  user_storage_aggregate: User_Storage_Aggregate;
  /** fetch data from the table: "user_storage" using primary key columns */
  user_storage_by_pk?: Maybe<User_Storage>;
  /** fetch data from the table: "users_active_last_day" */
  users_active_last_day: Array<Users_Active_Last_Day>;
  /** fetch aggregated fields from the table: "users_active_last_day" */
  users_active_last_day_aggregate: Users_Active_Last_Day_Aggregate;
};


export type Query_RootAudit_Logged_ActionsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Logged_Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Logged_Actions_Order_By>>;
  where?: InputMaybe<Audit_Logged_Actions_Bool_Exp>;
};


export type Query_RootAudit_Logged_Actions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Logged_Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Logged_Actions_Order_By>>;
  where?: InputMaybe<Audit_Logged_Actions_Bool_Exp>;
};


export type Query_RootAudit_Logged_Actions_By_PkArgs = {
  event_id: Scalars['bigint']['input'];
};


export type Query_RootAudit_Umi_ActionsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Umi_Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Umi_Actions_Order_By>>;
  where?: InputMaybe<Audit_Umi_Actions_Bool_Exp>;
};


export type Query_RootAudit_Umi_Actions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Umi_Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Umi_Actions_Order_By>>;
  where?: InputMaybe<Audit_Umi_Actions_Bool_Exp>;
};


export type Query_RootAudit_Umi_Actions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootCommodity_GroupArgs = {
  distinct_on?: InputMaybe<Array<Commodity_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Commodity_Group_Order_By>>;
  where?: InputMaybe<Commodity_Group_Bool_Exp>;
};


export type Query_RootCommodity_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Commodity_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Commodity_Group_Order_By>>;
  where?: InputMaybe<Commodity_Group_Bool_Exp>;
};


export type Query_RootCommodity_Group_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootCommodity_Parent_GroupArgs = {
  distinct_on?: InputMaybe<Array<Commodity_Parent_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Commodity_Parent_Group_Order_By>>;
  where?: InputMaybe<Commodity_Parent_Group_Bool_Exp>;
};


export type Query_RootCommodity_Parent_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Commodity_Parent_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Commodity_Parent_Group_Order_By>>;
  where?: InputMaybe<Commodity_Parent_Group_Bool_Exp>;
};


export type Query_RootCommodity_Parent_Group_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootEodArgs = {
  distinct_on?: InputMaybe<Array<Eod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Order_By>>;
  where?: InputMaybe<Eod_Bool_Exp>;
};


export type Query_RootEod_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Eod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Order_By>>;
  where?: InputMaybe<Eod_Bool_Exp>;
};


export type Query_RootEod_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootEod_EntryArgs = {
  distinct_on?: InputMaybe<Array<Eod_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Entry_Order_By>>;
  where?: InputMaybe<Eod_Entry_Bool_Exp>;
};


export type Query_RootEod_Entry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Eod_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Entry_Order_By>>;
  where?: InputMaybe<Eod_Entry_Bool_Exp>;
};


export type Query_RootEod_Entry_By_PkArgs = {
  evaluation_date: Scalars['date']['input'];
  month: Scalars['date']['input'];
  product: Scalars['uuid']['input'];
};


export type Query_RootEod_Entry_Per_Eval_Date_MviewArgs = {
  distinct_on?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Mview_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Mview_Order_By>>;
  where?: InputMaybe<Eod_Entry_Per_Eval_Date_Mview_Bool_Exp>;
};


export type Query_RootEod_Entry_Per_Eval_Date_Mview_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Mview_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Mview_Order_By>>;
  where?: InputMaybe<Eod_Entry_Per_Eval_Date_Mview_Bool_Exp>;
};


export type Query_RootEod_Entry_Per_Eval_Date_Package_MviewArgs = {
  distinct_on?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Package_Mview_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Package_Mview_Order_By>>;
  where?: InputMaybe<Eod_Entry_Per_Eval_Date_Package_Mview_Bool_Exp>;
};


export type Query_RootEod_Entry_Per_Eval_Date_Package_Mview_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Package_Mview_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Package_Mview_Order_By>>;
  where?: InputMaybe<Eod_Entry_Per_Eval_Date_Package_Mview_Bool_Exp>;
};


export type Query_RootExchangeArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Order_By>>;
  where?: InputMaybe<Exchange_Bool_Exp>;
};


export type Query_RootExchange_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Order_By>>;
  where?: InputMaybe<Exchange_Bool_Exp>;
};


export type Query_RootExchange_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootExchange_Event_TypeArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Event_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Event_Type_Order_By>>;
  where?: InputMaybe<Exchange_Event_Type_Bool_Exp>;
};


export type Query_RootExchange_Event_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Event_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Event_Type_Order_By>>;
  where?: InputMaybe<Exchange_Event_Type_Bool_Exp>;
};


export type Query_RootExchange_Event_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootExchange_UsageArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Usage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Usage_Order_By>>;
  where?: InputMaybe<Exchange_Usage_Bool_Exp>;
};


export type Query_RootExchange_Usage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Usage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Usage_Order_By>>;
  where?: InputMaybe<Exchange_Usage_Bool_Exp>;
};


export type Query_RootExchange_Usage_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootExchange_Usage_LastArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Usage_Last_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Usage_Last_Order_By>>;
  where?: InputMaybe<Exchange_Usage_Last_Bool_Exp>;
};


export type Query_RootExchange_Usage_Last_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Usage_Last_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Usage_Last_Order_By>>;
  where?: InputMaybe<Exchange_Usage_Last_Bool_Exp>;
};


export type Query_RootExchange_Usage_StartArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Usage_Start_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Usage_Start_Order_By>>;
  where?: InputMaybe<Exchange_Usage_Start_Bool_Exp>;
};


export type Query_RootExchange_Usage_Start_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Usage_Start_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Usage_Start_Order_By>>;
  where?: InputMaybe<Exchange_Usage_Start_Bool_Exp>;
};


export type Query_RootFolio_Column_SettingsArgs = {
  distinct_on?: InputMaybe<Array<Folio_Column_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_Column_Settings_Order_By>>;
  where?: InputMaybe<Folio_Column_Settings_Bool_Exp>;
};


export type Query_RootFolio_Column_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Folio_Column_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_Column_Settings_Order_By>>;
  where?: InputMaybe<Folio_Column_Settings_Bool_Exp>;
};


export type Query_RootFolio_Column_Settings_By_PkArgs = {
  folio_user: Scalars['String']['input'];
};


export type Query_RootFolio_Shadow_CurvesArgs = {
  distinct_on?: InputMaybe<Array<Folio_Shadow_Curves_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_Shadow_Curves_Order_By>>;
  where?: InputMaybe<Folio_Shadow_Curves_Bool_Exp>;
};


export type Query_RootFolio_Shadow_Curves_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Folio_Shadow_Curves_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_Shadow_Curves_Order_By>>;
  where?: InputMaybe<Folio_Shadow_Curves_Bool_Exp>;
};


export type Query_RootFolio_Shadow_Curves_By_PkArgs = {
  folio_user: Scalars['String']['input'];
};


export type Query_RootFolio_UserArgs = {
  distinct_on?: InputMaybe<Array<Folio_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_User_Order_By>>;
  where?: InputMaybe<Folio_User_Bool_Exp>;
};


export type Query_RootFolio_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Folio_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_User_Order_By>>;
  where?: InputMaybe<Folio_User_Bool_Exp>;
};


export type Query_RootFolio_User_Basic_ProfileArgs = {
  distinct_on?: InputMaybe<Array<Folio_User_Basic_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_User_Basic_Profile_Order_By>>;
  where?: InputMaybe<Folio_User_Basic_Profile_Bool_Exp>;
};


export type Query_RootFolio_User_Basic_Profile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Folio_User_Basic_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_User_Basic_Profile_Order_By>>;
  where?: InputMaybe<Folio_User_Basic_Profile_Bool_Exp>;
};


export type Query_RootFolio_User_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootGeographical_RegionArgs = {
  distinct_on?: InputMaybe<Array<Geographical_Region_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Geographical_Region_Order_By>>;
  where?: InputMaybe<Geographical_Region_Bool_Exp>;
};


export type Query_RootGeographical_Region_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Geographical_Region_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Geographical_Region_Order_By>>;
  where?: InputMaybe<Geographical_Region_Bool_Exp>;
};


export type Query_RootGeographical_Region_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootGlobal_InstrumentArgs = {
  distinct_on?: InputMaybe<Array<Global_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Instrument_Order_By>>;
  where?: InputMaybe<Global_Instrument_Bool_Exp>;
};


export type Query_RootGlobal_Instrument_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Global_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Instrument_Order_By>>;
  where?: InputMaybe<Global_Instrument_Bool_Exp>;
};


export type Query_RootGlobal_Instrument_By_PkArgs = {
  global_product: Scalars['uuid']['input'];
  month: Scalars['date']['input'];
};


export type Query_RootGlobal_PackageArgs = {
  distinct_on?: InputMaybe<Array<Global_Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Package_Order_By>>;
  where?: InputMaybe<Global_Package_Bool_Exp>;
};


export type Query_RootGlobal_Package_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Global_Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Package_Order_By>>;
  where?: InputMaybe<Global_Package_Bool_Exp>;
};


export type Query_RootGlobal_Package_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootGlobal_PermissionArgs = {
  distinct_on?: InputMaybe<Array<Global_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Permission_Order_By>>;
  where?: InputMaybe<Global_Permission_Bool_Exp>;
};


export type Query_RootGlobal_Permission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Global_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Permission_Order_By>>;
  where?: InputMaybe<Global_Permission_Bool_Exp>;
};


export type Query_RootGlobal_Permission_By_PkArgs = {
  folio_user: Scalars['String']['input'];
  global_package: Scalars['Int']['input'];
};


export type Query_RootGlobal_ProductArgs = {
  distinct_on?: InputMaybe<Array<Global_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Product_Order_By>>;
  where?: InputMaybe<Global_Product_Bool_Exp>;
};


export type Query_RootGlobal_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Global_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Product_Order_By>>;
  where?: InputMaybe<Global_Product_Bool_Exp>;
};


export type Query_RootGlobal_Product_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootGlobal_Product_ConfigArgs = {
  distinct_on?: InputMaybe<Array<Global_Product_Config_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Product_Config_Order_By>>;
  where?: InputMaybe<Global_Product_Config_Bool_Exp>;
};


export type Query_RootGlobal_Product_Config_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Global_Product_Config_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Product_Config_Order_By>>;
  where?: InputMaybe<Global_Product_Config_Bool_Exp>;
};


export type Query_RootGlobal_Product_Config_By_PkArgs = {
  product: Scalars['uuid']['input'];
  relative_month: Scalars['Int']['input'];
};


export type Query_RootHfc_Card_SettingsArgs = {
  distinct_on?: InputMaybe<Array<Hfc_Card_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hfc_Card_Settings_Order_By>>;
  where?: InputMaybe<Hfc_Card_Settings_Bool_Exp>;
};


export type Query_RootHfc_Card_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hfc_Card_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hfc_Card_Settings_Order_By>>;
  where?: InputMaybe<Hfc_Card_Settings_Bool_Exp>;
};


export type Query_RootHfc_Card_Settings_By_PkArgs = {
  user: Scalars['String']['input'];
};


export type Query_RootHfc_User_SettingsArgs = {
  distinct_on?: InputMaybe<Array<Hfc_User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hfc_User_Settings_Order_By>>;
  where?: InputMaybe<Hfc_User_Settings_Bool_Exp>;
};


export type Query_RootHfc_User_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hfc_User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hfc_User_Settings_Order_By>>;
  where?: InputMaybe<Hfc_User_Settings_Bool_Exp>;
};


export type Query_RootHfc_User_Settings_By_PkArgs = {
  user: Scalars['String']['input'];
};


export type Query_RootLive_Users_NewArgs = {
  distinct_on?: InputMaybe<Array<Live_Users_New_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Live_Users_New_Order_By>>;
  where?: InputMaybe<Live_Users_New_Bool_Exp>;
};


export type Query_RootLive_Users_New_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Live_Users_New_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Live_Users_New_Order_By>>;
  where?: InputMaybe<Live_Users_New_Bool_Exp>;
};


export type Query_RootLocal_InstrumentArgs = {
  distinct_on?: InputMaybe<Array<Local_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Local_Instrument_Order_By>>;
  where?: InputMaybe<Local_Instrument_Bool_Exp>;
};


export type Query_RootLocal_Instrument_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Local_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Local_Instrument_Order_By>>;
  where?: InputMaybe<Local_Instrument_Bool_Exp>;
};


export type Query_RootLocal_Instrument_By_PkArgs = {
  folio_user: Scalars['String']['input'];
  month: Scalars['date']['input'];
  product: Scalars['uuid']['input'];
  storage_type: User_Storage_Enum;
};


export type Query_RootLogout_RequestArgs = {
  distinct_on?: InputMaybe<Array<Logout_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Logout_Request_Order_By>>;
  where?: InputMaybe<Logout_Request_Bool_Exp>;
};


export type Query_RootLogout_Request_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Logout_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Logout_Request_Order_By>>;
  where?: InputMaybe<Logout_Request_Bool_Exp>;
};


export type Query_RootLogout_Request_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrganisationArgs = {
  distinct_on?: InputMaybe<Array<Organisation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organisation_Order_By>>;
  where?: InputMaybe<Organisation_Bool_Exp>;
};


export type Query_RootOrganisation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organisation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organisation_Order_By>>;
  where?: InputMaybe<Organisation_Bool_Exp>;
};


export type Query_RootOrganisation_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPackageArgs = {
  distinct_on?: InputMaybe<Array<Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Package_Order_By>>;
  where?: InputMaybe<Package_Bool_Exp>;
};


export type Query_RootPackage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Package_Order_By>>;
  where?: InputMaybe<Package_Bool_Exp>;
};


export type Query_RootPackage_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPackage_TypeArgs = {
  distinct_on?: InputMaybe<Array<Package_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Package_Type_Order_By>>;
  where?: InputMaybe<Package_Type_Bool_Exp>;
};


export type Query_RootPackage_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Package_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Package_Type_Order_By>>;
  where?: InputMaybe<Package_Type_Bool_Exp>;
};


export type Query_RootPackage_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootPage_SettingsArgs = {
  distinct_on?: InputMaybe<Array<Page_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Page_Settings_Order_By>>;
  where?: InputMaybe<Page_Settings_Bool_Exp>;
};


export type Query_RootPage_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Page_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Page_Settings_Order_By>>;
  where?: InputMaybe<Page_Settings_Bool_Exp>;
};


export type Query_RootPage_Settings_By_PkArgs = {
  folio_user: Scalars['String']['input'];
};


export type Query_RootPermissionArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};


export type Query_RootPermission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};


export type Query_RootPermission_By_PkArgs = {
  folio_user: Scalars['String']['input'];
  package: Scalars['Int']['input'];
};


export type Query_RootProductArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Query_RootProduct_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Query_RootProduct_Artis_TypeArgs = {
  distinct_on?: InputMaybe<Array<Product_Artis_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Artis_Type_Order_By>>;
  where?: InputMaybe<Product_Artis_Type_Bool_Exp>;
};


export type Query_RootProduct_Artis_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Artis_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Artis_Type_Order_By>>;
  where?: InputMaybe<Product_Artis_Type_Bool_Exp>;
};


export type Query_RootProduct_Artis_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootProduct_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProduct_ConfigArgs = {
  distinct_on?: InputMaybe<Array<Product_Config_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Config_Order_By>>;
  where?: InputMaybe<Product_Config_Bool_Exp>;
};


export type Query_RootProduct_Config_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Config_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Config_Order_By>>;
  where?: InputMaybe<Product_Config_Bool_Exp>;
};


export type Query_RootProduct_Config_By_PkArgs = {
  product: Scalars['uuid']['input'];
  relative_month: Scalars['Int']['input'];
};


export type Query_RootProduct_EodArgs = {
  distinct_on?: InputMaybe<Array<Product_Eod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Eod_Order_By>>;
  where?: InputMaybe<Product_Eod_Bool_Exp>;
};


export type Query_RootProduct_Eod_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Eod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Eod_Order_By>>;
  where?: InputMaybe<Product_Eod_Bool_Exp>;
};


export type Query_RootProduct_Eod_By_PkArgs = {
  eod_product: Scalars['uuid']['input'];
  product: Scalars['uuid']['input'];
};


export type Query_RootProduct_Global_DependenciesArgs = {
  distinct_on?: InputMaybe<Array<Product_Global_Dependencies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Global_Dependencies_Order_By>>;
  where?: InputMaybe<Product_Global_Dependencies_Bool_Exp>;
};


export type Query_RootProduct_Global_Dependencies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Global_Dependencies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Global_Dependencies_Order_By>>;
  where?: InputMaybe<Product_Global_Dependencies_Bool_Exp>;
};


export type Query_RootProduct_Global_Dependencies_By_PkArgs = {
  global_product: Scalars['uuid']['input'];
  product: Scalars['uuid']['input'];
};


export type Query_RootProduct_MaturityArgs = {
  distinct_on?: InputMaybe<Array<Product_Maturity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Maturity_Order_By>>;
  where?: InputMaybe<Product_Maturity_Bool_Exp>;
};


export type Query_RootProduct_Maturity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Maturity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Maturity_Order_By>>;
  where?: InputMaybe<Product_Maturity_Bool_Exp>;
};


export type Query_RootProduct_Maturity_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootProduct_OverridesArgs = {
  distinct_on?: InputMaybe<Array<Product_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Overrides_Order_By>>;
  where?: InputMaybe<Product_Overrides_Bool_Exp>;
};


export type Query_RootProduct_Overrides_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Overrides_Order_By>>;
  where?: InputMaybe<Product_Overrides_Bool_Exp>;
};


export type Query_RootProduct_Overrides_By_PkArgs = {
  organisation: Scalars['Int']['input'];
  product: Scalars['uuid']['input'];
};


export type Query_RootProduct_SourceArgs = {
  distinct_on?: InputMaybe<Array<Product_Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Source_Order_By>>;
  where?: InputMaybe<Product_Source_Bool_Exp>;
};


export type Query_RootProduct_Source_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Source_Order_By>>;
  where?: InputMaybe<Product_Source_Bool_Exp>;
};


export type Query_RootProduct_Source_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootProduct_Summary_TypeArgs = {
  distinct_on?: InputMaybe<Array<Product_Summary_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Summary_Type_Order_By>>;
  where?: InputMaybe<Product_Summary_Type_Bool_Exp>;
};


export type Query_RootProduct_Summary_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Summary_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Summary_Type_Order_By>>;
  where?: InputMaybe<Product_Summary_Type_Bool_Exp>;
};


export type Query_RootProduct_Summary_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootProduct_TypeArgs = {
  distinct_on?: InputMaybe<Array<Product_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Type_Order_By>>;
  where?: InputMaybe<Product_Type_Bool_Exp>;
};


export type Query_RootProduct_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Type_Order_By>>;
  where?: InputMaybe<Product_Type_Bool_Exp>;
};


export type Query_RootProduct_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootProduct_UomArgs = {
  distinct_on?: InputMaybe<Array<Product_Uom_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Uom_Order_By>>;
  where?: InputMaybe<Product_Uom_Bool_Exp>;
};


export type Query_RootProduct_Uom_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Uom_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Uom_Order_By>>;
  where?: InputMaybe<Product_Uom_Bool_Exp>;
};


export type Query_RootProduct_Uom_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootSessionArgs = {
  distinct_on?: InputMaybe<Array<Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Session_Order_By>>;
  where?: InputMaybe<Session_Bool_Exp>;
};


export type Query_RootSession_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Session_Order_By>>;
  where?: InputMaybe<Session_Bool_Exp>;
};


export type Query_RootSession_By_PkArgs = {
  folio_user: Scalars['String']['input'];
  is_mobile: Scalars['Boolean']['input'];
};


export type Query_RootSession_TypeArgs = {
  distinct_on?: InputMaybe<Array<Session_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Session_Type_Order_By>>;
  where?: InputMaybe<Session_Type_Bool_Exp>;
};


export type Query_RootSession_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Session_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Session_Type_Order_By>>;
  where?: InputMaybe<Session_Type_Bool_Exp>;
};


export type Query_RootSession_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootShared_InstrumentArgs = {
  distinct_on?: InputMaybe<Array<Shared_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shared_Instrument_Order_By>>;
  where?: InputMaybe<Shared_Instrument_Bool_Exp>;
};


export type Query_RootShared_Instrument_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Shared_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shared_Instrument_Order_By>>;
  where?: InputMaybe<Shared_Instrument_Bool_Exp>;
};


export type Query_RootShared_Instrument_By_PkArgs = {
  month: Scalars['date']['input'];
  product: Scalars['uuid']['input'];
};


export type Query_RootSharing_AgreementArgs = {
  distinct_on?: InputMaybe<Array<Sharing_Agreement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sharing_Agreement_Order_By>>;
  where?: InputMaybe<Sharing_Agreement_Bool_Exp>;
};


export type Query_RootSharing_Agreement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sharing_Agreement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sharing_Agreement_Order_By>>;
  where?: InputMaybe<Sharing_Agreement_Bool_Exp>;
};


export type Query_RootSharing_Agreement_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSourceArgs = {
  distinct_on?: InputMaybe<Array<Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Source_Order_By>>;
  where?: InputMaybe<Source_Bool_Exp>;
};


export type Query_RootSource_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Source_Order_By>>;
  where?: InputMaybe<Source_Bool_Exp>;
};


export type Query_RootSource_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUser_RightArgs = {
  distinct_on?: InputMaybe<Array<User_Right_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Right_Order_By>>;
  where?: InputMaybe<User_Right_Bool_Exp>;
};


export type Query_RootUser_Right_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Right_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Right_Order_By>>;
  where?: InputMaybe<User_Right_Bool_Exp>;
};


export type Query_RootUser_Right_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootUser_StorageArgs = {
  distinct_on?: InputMaybe<Array<User_Storage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Storage_Order_By>>;
  where?: InputMaybe<User_Storage_Bool_Exp>;
};


export type Query_RootUser_Storage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Storage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Storage_Order_By>>;
  where?: InputMaybe<User_Storage_Bool_Exp>;
};


export type Query_RootUser_Storage_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootUsers_Active_Last_DayArgs = {
  distinct_on?: InputMaybe<Array<Users_Active_Last_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Active_Last_Day_Order_By>>;
  where?: InputMaybe<Users_Active_Last_Day_Bool_Exp>;
};


export type Query_RootUsers_Active_Last_Day_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Active_Last_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Active_Last_Day_Order_By>>;
  where?: InputMaybe<Users_Active_Last_Day_Bool_Exp>;
};

/** Stores data about user sessions and when they were last seen - we only allow one mobile and one desktop/non-mobile session per user. */
export type Session = {
  __typename?: 'session';
  folio_user: Scalars['String']['output'];
  id: Scalars['String']['output'];
  is_mobile: Scalars['Boolean']['output'];
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "session" */
export type Session_Aggregate = {
  __typename?: 'session_aggregate';
  aggregate?: Maybe<Session_Aggregate_Fields>;
  nodes: Array<Session>;
};

export type Session_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Session_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Session_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Session_Aggregate_Bool_Exp_Count>;
};

export type Session_Aggregate_Bool_Exp_Bool_And = {
  arguments: Session_Select_Column_Session_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Session_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Session_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Session_Select_Column_Session_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Session_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Session_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Session_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Session_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "session" */
export type Session_Aggregate_Fields = {
  __typename?: 'session_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Session_Max_Fields>;
  min?: Maybe<Session_Min_Fields>;
};


/** aggregate fields of "session" */
export type Session_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Session_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "session" */
export type Session_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Session_Max_Order_By>;
  min?: InputMaybe<Session_Min_Order_By>;
};

/** input type for inserting array relation for remote table "session" */
export type Session_Arr_Rel_Insert_Input = {
  data: Array<Session_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Session_On_Conflict>;
};

/** Boolean expression to filter rows from the table "session". All fields are combined with a logical 'AND'. */
export type Session_Bool_Exp = {
  _and?: InputMaybe<Array<Session_Bool_Exp>>;
  _not?: InputMaybe<Session_Bool_Exp>;
  _or?: InputMaybe<Array<Session_Bool_Exp>>;
  folio_user?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  is_mobile?: InputMaybe<Boolean_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "session" */
export enum Session_Constraint {
  /** unique or primary key constraint on columns "folio_user", "is_mobile" */
  SessionPkey = 'session_pkey'
}

/** input type for inserting data into table "session" */
export type Session_Insert_Input = {
  folio_user?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  is_mobile?: InputMaybe<Scalars['Boolean']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Session_Max_Fields = {
  __typename?: 'session_max_fields';
  folio_user?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "session" */
export type Session_Max_Order_By = {
  folio_user?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Session_Min_Fields = {
  __typename?: 'session_min_fields';
  folio_user?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "session" */
export type Session_Min_Order_By = {
  folio_user?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "session" */
export type Session_Mutation_Response = {
  __typename?: 'session_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Session>;
};

/** on_conflict condition type for table "session" */
export type Session_On_Conflict = {
  constraint: Session_Constraint;
  update_columns?: Array<Session_Update_Column>;
  where?: InputMaybe<Session_Bool_Exp>;
};

/** Ordering options when selecting data from "session". */
export type Session_Order_By = {
  folio_user?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_mobile?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
};

/** primary key columns input for table: session */
export type Session_Pk_Columns_Input = {
  folio_user: Scalars['String']['input'];
  is_mobile: Scalars['Boolean']['input'];
};

/** select columns of table "session" */
export enum Session_Select_Column {
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  Id = 'id',
  /** column name */
  IsMobile = 'is_mobile',
  /** column name */
  LastSeen = 'last_seen'
}

/** select "session_aggregate_bool_exp_bool_and_arguments_columns" columns of table "session" */
export enum Session_Select_Column_Session_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsMobile = 'is_mobile'
}

/** select "session_aggregate_bool_exp_bool_or_arguments_columns" columns of table "session" */
export enum Session_Select_Column_Session_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsMobile = 'is_mobile'
}

/** input type for updating data in table "session" */
export type Session_Set_Input = {
  folio_user?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  is_mobile?: InputMaybe<Scalars['Boolean']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "session" */
export type Session_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Session_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Session_Stream_Cursor_Value_Input = {
  folio_user?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  is_mobile?: InputMaybe<Scalars['Boolean']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "session_type" */
export type Session_Type = {
  __typename?: 'session_type';
  value: Scalars['String']['output'];
};

/** aggregated selection of "session_type" */
export type Session_Type_Aggregate = {
  __typename?: 'session_type_aggregate';
  aggregate?: Maybe<Session_Type_Aggregate_Fields>;
  nodes: Array<Session_Type>;
};

/** aggregate fields of "session_type" */
export type Session_Type_Aggregate_Fields = {
  __typename?: 'session_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Session_Type_Max_Fields>;
  min?: Maybe<Session_Type_Min_Fields>;
};


/** aggregate fields of "session_type" */
export type Session_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Session_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "session_type". All fields are combined with a logical 'AND'. */
export type Session_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Session_Type_Bool_Exp>>;
  _not?: InputMaybe<Session_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Session_Type_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "session_type" */
export enum Session_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  SessionTypePkey = 'session_type_pkey'
}

/** input type for inserting data into table "session_type" */
export type Session_Type_Insert_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Session_Type_Max_Fields = {
  __typename?: 'session_type_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Session_Type_Min_Fields = {
  __typename?: 'session_type_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "session_type" */
export type Session_Type_Mutation_Response = {
  __typename?: 'session_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Session_Type>;
};

/** on_conflict condition type for table "session_type" */
export type Session_Type_On_Conflict = {
  constraint: Session_Type_Constraint;
  update_columns?: Array<Session_Type_Update_Column>;
  where?: InputMaybe<Session_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "session_type". */
export type Session_Type_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: session_type */
export type Session_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "session_type" */
export enum Session_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "session_type" */
export type Session_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "session_type" */
export type Session_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Session_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Session_Type_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "session_type" */
export enum Session_Type_Update_Column {
  /** column name */
  Value = 'value'
}

export type Session_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Session_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Session_Type_Bool_Exp;
};

/** update columns of table "session" */
export enum Session_Update_Column {
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  Id = 'id',
  /** column name */
  IsMobile = 'is_mobile',
  /** column name */
  LastSeen = 'last_seen'
}

export type Session_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Session_Set_Input>;
  /** filter the rows which have to be updated */
  where: Session_Bool_Exp;
};

/** columns and relationships of "shared_instrument" */
export type Shared_Instrument = {
  __typename?: 'shared_instrument';
  edited_at: Scalars['timestamptz']['output'];
  edited_by: Scalars['String']['output'];
  /** An object relationship */
  folio_user?: Maybe<Folio_User_Basic_Profile>;
  id: Scalars['bigint']['output'];
  month: Scalars['date']['output'];
  product: Scalars['uuid']['output'];
  /** An object relationship */
  productByProduct: Product;
  value?: Maybe<Scalars['numeric']['output']>;
};

/** aggregated selection of "shared_instrument" */
export type Shared_Instrument_Aggregate = {
  __typename?: 'shared_instrument_aggregate';
  aggregate?: Maybe<Shared_Instrument_Aggregate_Fields>;
  nodes: Array<Shared_Instrument>;
};

export type Shared_Instrument_Aggregate_Bool_Exp = {
  count?: InputMaybe<Shared_Instrument_Aggregate_Bool_Exp_Count>;
};

export type Shared_Instrument_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Shared_Instrument_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Shared_Instrument_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "shared_instrument" */
export type Shared_Instrument_Aggregate_Fields = {
  __typename?: 'shared_instrument_aggregate_fields';
  avg?: Maybe<Shared_Instrument_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Shared_Instrument_Max_Fields>;
  min?: Maybe<Shared_Instrument_Min_Fields>;
  stddev?: Maybe<Shared_Instrument_Stddev_Fields>;
  stddev_pop?: Maybe<Shared_Instrument_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Shared_Instrument_Stddev_Samp_Fields>;
  sum?: Maybe<Shared_Instrument_Sum_Fields>;
  var_pop?: Maybe<Shared_Instrument_Var_Pop_Fields>;
  var_samp?: Maybe<Shared_Instrument_Var_Samp_Fields>;
  variance?: Maybe<Shared_Instrument_Variance_Fields>;
};


/** aggregate fields of "shared_instrument" */
export type Shared_Instrument_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Shared_Instrument_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "shared_instrument" */
export type Shared_Instrument_Aggregate_Order_By = {
  avg?: InputMaybe<Shared_Instrument_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Shared_Instrument_Max_Order_By>;
  min?: InputMaybe<Shared_Instrument_Min_Order_By>;
  stddev?: InputMaybe<Shared_Instrument_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Shared_Instrument_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Shared_Instrument_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Shared_Instrument_Sum_Order_By>;
  var_pop?: InputMaybe<Shared_Instrument_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Shared_Instrument_Var_Samp_Order_By>;
  variance?: InputMaybe<Shared_Instrument_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "shared_instrument" */
export type Shared_Instrument_Arr_Rel_Insert_Input = {
  data: Array<Shared_Instrument_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Shared_Instrument_On_Conflict>;
};

/** aggregate avg on columns */
export type Shared_Instrument_Avg_Fields = {
  __typename?: 'shared_instrument_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "shared_instrument" */
export type Shared_Instrument_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "shared_instrument". All fields are combined with a logical 'AND'. */
export type Shared_Instrument_Bool_Exp = {
  _and?: InputMaybe<Array<Shared_Instrument_Bool_Exp>>;
  _not?: InputMaybe<Shared_Instrument_Bool_Exp>;
  _or?: InputMaybe<Array<Shared_Instrument_Bool_Exp>>;
  edited_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  edited_by?: InputMaybe<String_Comparison_Exp>;
  folio_user?: InputMaybe<Folio_User_Basic_Profile_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  month?: InputMaybe<Date_Comparison_Exp>;
  product?: InputMaybe<Uuid_Comparison_Exp>;
  productByProduct?: InputMaybe<Product_Bool_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "shared_instrument" */
export enum Shared_Instrument_Constraint {
  /** unique or primary key constraint on columns "id" */
  SharedInstrumentIdKey = 'shared_instrument_id_key',
  /** unique or primary key constraint on columns "product", "month" */
  SharedInstrumentPkey = 'shared_instrument_pkey'
}

/** input type for incrementing numeric columns in table "shared_instrument" */
export type Shared_Instrument_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "shared_instrument" */
export type Shared_Instrument_Insert_Input = {
  edited_at?: InputMaybe<Scalars['timestamptz']['input']>;
  edited_by?: InputMaybe<Scalars['String']['input']>;
  folio_user?: InputMaybe<Folio_User_Basic_Profile_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  month?: InputMaybe<Scalars['date']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  productByProduct?: InputMaybe<Product_Obj_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Shared_Instrument_Max_Fields = {
  __typename?: 'shared_instrument_max_fields';
  edited_at?: Maybe<Scalars['timestamptz']['output']>;
  edited_by?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  month?: Maybe<Scalars['date']['output']>;
  product?: Maybe<Scalars['uuid']['output']>;
  value?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "shared_instrument" */
export type Shared_Instrument_Max_Order_By = {
  edited_at?: InputMaybe<Order_By>;
  edited_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Shared_Instrument_Min_Fields = {
  __typename?: 'shared_instrument_min_fields';
  edited_at?: Maybe<Scalars['timestamptz']['output']>;
  edited_by?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  month?: Maybe<Scalars['date']['output']>;
  product?: Maybe<Scalars['uuid']['output']>;
  value?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "shared_instrument" */
export type Shared_Instrument_Min_Order_By = {
  edited_at?: InputMaybe<Order_By>;
  edited_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "shared_instrument" */
export type Shared_Instrument_Mutation_Response = {
  __typename?: 'shared_instrument_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Shared_Instrument>;
};

/** on_conflict condition type for table "shared_instrument" */
export type Shared_Instrument_On_Conflict = {
  constraint: Shared_Instrument_Constraint;
  update_columns?: Array<Shared_Instrument_Update_Column>;
  where?: InputMaybe<Shared_Instrument_Bool_Exp>;
};

/** Ordering options when selecting data from "shared_instrument". */
export type Shared_Instrument_Order_By = {
  edited_at?: InputMaybe<Order_By>;
  edited_by?: InputMaybe<Order_By>;
  folio_user?: InputMaybe<Folio_User_Basic_Profile_Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  productByProduct?: InputMaybe<Product_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: shared_instrument */
export type Shared_Instrument_Pk_Columns_Input = {
  month: Scalars['date']['input'];
  product: Scalars['uuid']['input'];
};

/** select columns of table "shared_instrument" */
export enum Shared_Instrument_Select_Column {
  /** column name */
  EditedAt = 'edited_at',
  /** column name */
  EditedBy = 'edited_by',
  /** column name */
  Id = 'id',
  /** column name */
  Month = 'month',
  /** column name */
  Product = 'product',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "shared_instrument" */
export type Shared_Instrument_Set_Input = {
  edited_at?: InputMaybe<Scalars['timestamptz']['input']>;
  edited_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  month?: InputMaybe<Scalars['date']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Shared_Instrument_Stddev_Fields = {
  __typename?: 'shared_instrument_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "shared_instrument" */
export type Shared_Instrument_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Shared_Instrument_Stddev_Pop_Fields = {
  __typename?: 'shared_instrument_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "shared_instrument" */
export type Shared_Instrument_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Shared_Instrument_Stddev_Samp_Fields = {
  __typename?: 'shared_instrument_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "shared_instrument" */
export type Shared_Instrument_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "shared_instrument" */
export type Shared_Instrument_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Shared_Instrument_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Shared_Instrument_Stream_Cursor_Value_Input = {
  edited_at?: InputMaybe<Scalars['timestamptz']['input']>;
  edited_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  month?: InputMaybe<Scalars['date']['input']>;
  product?: InputMaybe<Scalars['uuid']['input']>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Shared_Instrument_Sum_Fields = {
  __typename?: 'shared_instrument_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  value?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "shared_instrument" */
export type Shared_Instrument_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** update columns of table "shared_instrument" */
export enum Shared_Instrument_Update_Column {
  /** column name */
  EditedAt = 'edited_at',
  /** column name */
  EditedBy = 'edited_by',
  /** column name */
  Id = 'id',
  /** column name */
  Month = 'month',
  /** column name */
  Product = 'product',
  /** column name */
  Value = 'value'
}

export type Shared_Instrument_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Shared_Instrument_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Shared_Instrument_Set_Input>;
  /** filter the rows which have to be updated */
  where: Shared_Instrument_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Shared_Instrument_Var_Pop_Fields = {
  __typename?: 'shared_instrument_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "shared_instrument" */
export type Shared_Instrument_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Shared_Instrument_Var_Samp_Fields = {
  __typename?: 'shared_instrument_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "shared_instrument" */
export type Shared_Instrument_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Shared_Instrument_Variance_Fields = {
  __typename?: 'shared_instrument_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "shared_instrument" */
export type Shared_Instrument_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** columns and relationships of "sharing_agreement" */
export type Sharing_Agreement = {
  __typename?: 'sharing_agreement';
  /** An object relationship */
  broadcasterSourceBySource: Source;
  broadcaster_source: Scalars['Int']['output'];
  /** An object relationship */
  consumerSourceBySource: Source;
  consumer_source: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
};

/** aggregated selection of "sharing_agreement" */
export type Sharing_Agreement_Aggregate = {
  __typename?: 'sharing_agreement_aggregate';
  aggregate?: Maybe<Sharing_Agreement_Aggregate_Fields>;
  nodes: Array<Sharing_Agreement>;
};

/** aggregate fields of "sharing_agreement" */
export type Sharing_Agreement_Aggregate_Fields = {
  __typename?: 'sharing_agreement_aggregate_fields';
  avg?: Maybe<Sharing_Agreement_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Sharing_Agreement_Max_Fields>;
  min?: Maybe<Sharing_Agreement_Min_Fields>;
  stddev?: Maybe<Sharing_Agreement_Stddev_Fields>;
  stddev_pop?: Maybe<Sharing_Agreement_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sharing_Agreement_Stddev_Samp_Fields>;
  sum?: Maybe<Sharing_Agreement_Sum_Fields>;
  var_pop?: Maybe<Sharing_Agreement_Var_Pop_Fields>;
  var_samp?: Maybe<Sharing_Agreement_Var_Samp_Fields>;
  variance?: Maybe<Sharing_Agreement_Variance_Fields>;
};


/** aggregate fields of "sharing_agreement" */
export type Sharing_Agreement_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sharing_Agreement_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Sharing_Agreement_Avg_Fields = {
  __typename?: 'sharing_agreement_avg_fields';
  broadcaster_source?: Maybe<Scalars['Float']['output']>;
  consumer_source?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "sharing_agreement". All fields are combined with a logical 'AND'. */
export type Sharing_Agreement_Bool_Exp = {
  _and?: InputMaybe<Array<Sharing_Agreement_Bool_Exp>>;
  _not?: InputMaybe<Sharing_Agreement_Bool_Exp>;
  _or?: InputMaybe<Array<Sharing_Agreement_Bool_Exp>>;
  broadcasterSourceBySource?: InputMaybe<Source_Bool_Exp>;
  broadcaster_source?: InputMaybe<Int_Comparison_Exp>;
  consumerSourceBySource?: InputMaybe<Source_Bool_Exp>;
  consumer_source?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "sharing_agreement" */
export enum Sharing_Agreement_Constraint {
  /** unique or primary key constraint on columns "id" */
  SharingAgreementPk = 'sharing_agreement_pk',
  /** unique or primary key constraint on columns "consumer_source", "broadcaster_source" */
  SharingAgreementUniqueBcastCons = 'sharing_agreement_unique_bcast_cons'
}

/** input type for incrementing numeric columns in table "sharing_agreement" */
export type Sharing_Agreement_Inc_Input = {
  broadcaster_source?: InputMaybe<Scalars['Int']['input']>;
  consumer_source?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "sharing_agreement" */
export type Sharing_Agreement_Insert_Input = {
  broadcasterSourceBySource?: InputMaybe<Source_Obj_Rel_Insert_Input>;
  broadcaster_source?: InputMaybe<Scalars['Int']['input']>;
  consumerSourceBySource?: InputMaybe<Source_Obj_Rel_Insert_Input>;
  consumer_source?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Sharing_Agreement_Max_Fields = {
  __typename?: 'sharing_agreement_max_fields';
  broadcaster_source?: Maybe<Scalars['Int']['output']>;
  consumer_source?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Sharing_Agreement_Min_Fields = {
  __typename?: 'sharing_agreement_min_fields';
  broadcaster_source?: Maybe<Scalars['Int']['output']>;
  consumer_source?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "sharing_agreement" */
export type Sharing_Agreement_Mutation_Response = {
  __typename?: 'sharing_agreement_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Sharing_Agreement>;
};

/** on_conflict condition type for table "sharing_agreement" */
export type Sharing_Agreement_On_Conflict = {
  constraint: Sharing_Agreement_Constraint;
  update_columns?: Array<Sharing_Agreement_Update_Column>;
  where?: InputMaybe<Sharing_Agreement_Bool_Exp>;
};

/** Ordering options when selecting data from "sharing_agreement". */
export type Sharing_Agreement_Order_By = {
  broadcasterSourceBySource?: InputMaybe<Source_Order_By>;
  broadcaster_source?: InputMaybe<Order_By>;
  consumerSourceBySource?: InputMaybe<Source_Order_By>;
  consumer_source?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sharing_agreement */
export type Sharing_Agreement_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "sharing_agreement" */
export enum Sharing_Agreement_Select_Column {
  /** column name */
  BroadcasterSource = 'broadcaster_source',
  /** column name */
  ConsumerSource = 'consumer_source',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "sharing_agreement" */
export type Sharing_Agreement_Set_Input = {
  broadcaster_source?: InputMaybe<Scalars['Int']['input']>;
  consumer_source?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Sharing_Agreement_Stddev_Fields = {
  __typename?: 'sharing_agreement_stddev_fields';
  broadcaster_source?: Maybe<Scalars['Float']['output']>;
  consumer_source?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Sharing_Agreement_Stddev_Pop_Fields = {
  __typename?: 'sharing_agreement_stddev_pop_fields';
  broadcaster_source?: Maybe<Scalars['Float']['output']>;
  consumer_source?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Sharing_Agreement_Stddev_Samp_Fields = {
  __typename?: 'sharing_agreement_stddev_samp_fields';
  broadcaster_source?: Maybe<Scalars['Float']['output']>;
  consumer_source?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "sharing_agreement" */
export type Sharing_Agreement_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sharing_Agreement_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sharing_Agreement_Stream_Cursor_Value_Input = {
  broadcaster_source?: InputMaybe<Scalars['Int']['input']>;
  consumer_source?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Sharing_Agreement_Sum_Fields = {
  __typename?: 'sharing_agreement_sum_fields';
  broadcaster_source?: Maybe<Scalars['Int']['output']>;
  consumer_source?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "sharing_agreement" */
export enum Sharing_Agreement_Update_Column {
  /** column name */
  BroadcasterSource = 'broadcaster_source',
  /** column name */
  ConsumerSource = 'consumer_source',
  /** column name */
  Id = 'id'
}

export type Sharing_Agreement_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Sharing_Agreement_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sharing_Agreement_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sharing_Agreement_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Sharing_Agreement_Var_Pop_Fields = {
  __typename?: 'sharing_agreement_var_pop_fields';
  broadcaster_source?: Maybe<Scalars['Float']['output']>;
  consumer_source?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Sharing_Agreement_Var_Samp_Fields = {
  __typename?: 'sharing_agreement_var_samp_fields';
  broadcaster_source?: Maybe<Scalars['Float']['output']>;
  consumer_source?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Sharing_Agreement_Variance_Fields = {
  __typename?: 'sharing_agreement_variance_fields';
  broadcaster_source?: Maybe<Scalars['Float']['output']>;
  consumer_source?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "source" */
export type Source = {
  __typename?: 'source';
  description?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  eod?: Maybe<Eod>;
  /** An array relationship */
  eods: Array<Eod>;
  /** An aggregate relationship */
  eods_aggregate: Eod_Aggregate;
  /** An object relationship */
  exchange?: Maybe<Exchange>;
  /** An array relationship */
  exchanges: Array<Exchange>;
  /** An aggregate relationship */
  exchanges_aggregate: Exchange_Aggregate;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  organisation?: Maybe<Organisation>;
  /** An array relationship */
  organisations: Array<Organisation>;
  /** An aggregate relationship */
  organisations_aggregate: Organisation_Aggregate;
  /** An array relationship */
  packages: Array<Package>;
  /** An aggregate relationship */
  packages_aggregate: Package_Aggregate;
  /** An object relationship */
  product_source?: Maybe<Product_Source>;
  source_type?: Maybe<Product_Source_Enum>;
};


/** columns and relationships of "source" */
export type SourceEodsArgs = {
  distinct_on?: InputMaybe<Array<Eod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Order_By>>;
  where?: InputMaybe<Eod_Bool_Exp>;
};


/** columns and relationships of "source" */
export type SourceEods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Eod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Order_By>>;
  where?: InputMaybe<Eod_Bool_Exp>;
};


/** columns and relationships of "source" */
export type SourceExchangesArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Order_By>>;
  where?: InputMaybe<Exchange_Bool_Exp>;
};


/** columns and relationships of "source" */
export type SourceExchanges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Order_By>>;
  where?: InputMaybe<Exchange_Bool_Exp>;
};


/** columns and relationships of "source" */
export type SourceOrganisationsArgs = {
  distinct_on?: InputMaybe<Array<Organisation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organisation_Order_By>>;
  where?: InputMaybe<Organisation_Bool_Exp>;
};


/** columns and relationships of "source" */
export type SourceOrganisations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organisation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organisation_Order_By>>;
  where?: InputMaybe<Organisation_Bool_Exp>;
};


/** columns and relationships of "source" */
export type SourcePackagesArgs = {
  distinct_on?: InputMaybe<Array<Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Package_Order_By>>;
  where?: InputMaybe<Package_Bool_Exp>;
};


/** columns and relationships of "source" */
export type SourcePackages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Package_Order_By>>;
  where?: InputMaybe<Package_Bool_Exp>;
};

/** aggregated selection of "source" */
export type Source_Aggregate = {
  __typename?: 'source_aggregate';
  aggregate?: Maybe<Source_Aggregate_Fields>;
  nodes: Array<Source>;
};

export type Source_Aggregate_Bool_Exp = {
  count?: InputMaybe<Source_Aggregate_Bool_Exp_Count>;
};

export type Source_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Source_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Source_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "source" */
export type Source_Aggregate_Fields = {
  __typename?: 'source_aggregate_fields';
  avg?: Maybe<Source_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Source_Max_Fields>;
  min?: Maybe<Source_Min_Fields>;
  stddev?: Maybe<Source_Stddev_Fields>;
  stddev_pop?: Maybe<Source_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Source_Stddev_Samp_Fields>;
  sum?: Maybe<Source_Sum_Fields>;
  var_pop?: Maybe<Source_Var_Pop_Fields>;
  var_samp?: Maybe<Source_Var_Samp_Fields>;
  variance?: Maybe<Source_Variance_Fields>;
};


/** aggregate fields of "source" */
export type Source_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Source_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "source" */
export type Source_Aggregate_Order_By = {
  avg?: InputMaybe<Source_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Source_Max_Order_By>;
  min?: InputMaybe<Source_Min_Order_By>;
  stddev?: InputMaybe<Source_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Source_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Source_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Source_Sum_Order_By>;
  var_pop?: InputMaybe<Source_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Source_Var_Samp_Order_By>;
  variance?: InputMaybe<Source_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "source" */
export type Source_Arr_Rel_Insert_Input = {
  data: Array<Source_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Source_On_Conflict>;
};

/** aggregate avg on columns */
export type Source_Avg_Fields = {
  __typename?: 'source_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "source" */
export type Source_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "source". All fields are combined with a logical 'AND'. */
export type Source_Bool_Exp = {
  _and?: InputMaybe<Array<Source_Bool_Exp>>;
  _not?: InputMaybe<Source_Bool_Exp>;
  _or?: InputMaybe<Array<Source_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  eod?: InputMaybe<Eod_Bool_Exp>;
  eods?: InputMaybe<Eod_Bool_Exp>;
  eods_aggregate?: InputMaybe<Eod_Aggregate_Bool_Exp>;
  exchange?: InputMaybe<Exchange_Bool_Exp>;
  exchanges?: InputMaybe<Exchange_Bool_Exp>;
  exchanges_aggregate?: InputMaybe<Exchange_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organisation?: InputMaybe<Organisation_Bool_Exp>;
  organisations?: InputMaybe<Organisation_Bool_Exp>;
  organisations_aggregate?: InputMaybe<Organisation_Aggregate_Bool_Exp>;
  packages?: InputMaybe<Package_Bool_Exp>;
  packages_aggregate?: InputMaybe<Package_Aggregate_Bool_Exp>;
  product_source?: InputMaybe<Product_Source_Bool_Exp>;
  source_type?: InputMaybe<Product_Source_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "source" */
export enum Source_Constraint {
  /** unique or primary key constraint on columns "source_type", "name" */
  SourceNameSourceTypeKey = 'source_name_source_type_key',
  /** unique or primary key constraint on columns "id" */
  SourcePkey = 'source_pkey'
}

/** input type for incrementing numeric columns in table "source" */
export type Source_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "source" */
export type Source_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  eod?: InputMaybe<Eod_Obj_Rel_Insert_Input>;
  eods?: InputMaybe<Eod_Arr_Rel_Insert_Input>;
  exchange?: InputMaybe<Exchange_Obj_Rel_Insert_Input>;
  exchanges?: InputMaybe<Exchange_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organisation?: InputMaybe<Organisation_Obj_Rel_Insert_Input>;
  organisations?: InputMaybe<Organisation_Arr_Rel_Insert_Input>;
  packages?: InputMaybe<Package_Arr_Rel_Insert_Input>;
  product_source?: InputMaybe<Product_Source_Obj_Rel_Insert_Input>;
  source_type?: InputMaybe<Product_Source_Enum>;
};

/** aggregate max on columns */
export type Source_Max_Fields = {
  __typename?: 'source_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "source" */
export type Source_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Source_Min_Fields = {
  __typename?: 'source_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "source" */
export type Source_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "source" */
export type Source_Mutation_Response = {
  __typename?: 'source_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Source>;
};

/** input type for inserting object relation for remote table "source" */
export type Source_Obj_Rel_Insert_Input = {
  data: Source_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Source_On_Conflict>;
};

/** on_conflict condition type for table "source" */
export type Source_On_Conflict = {
  constraint: Source_Constraint;
  update_columns?: Array<Source_Update_Column>;
  where?: InputMaybe<Source_Bool_Exp>;
};

/** Ordering options when selecting data from "source". */
export type Source_Order_By = {
  description?: InputMaybe<Order_By>;
  eod?: InputMaybe<Eod_Order_By>;
  eods_aggregate?: InputMaybe<Eod_Aggregate_Order_By>;
  exchange?: InputMaybe<Exchange_Order_By>;
  exchanges_aggregate?: InputMaybe<Exchange_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Organisation_Order_By>;
  organisations_aggregate?: InputMaybe<Organisation_Aggregate_Order_By>;
  packages_aggregate?: InputMaybe<Package_Aggregate_Order_By>;
  product_source?: InputMaybe<Product_Source_Order_By>;
  source_type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: source */
export type Source_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "source" */
export enum Source_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SourceType = 'source_type'
}

/** input type for updating data in table "source" */
export type Source_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  source_type?: InputMaybe<Product_Source_Enum>;
};

/** aggregate stddev on columns */
export type Source_Stddev_Fields = {
  __typename?: 'source_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "source" */
export type Source_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Source_Stddev_Pop_Fields = {
  __typename?: 'source_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "source" */
export type Source_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Source_Stddev_Samp_Fields = {
  __typename?: 'source_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "source" */
export type Source_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "source" */
export type Source_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Source_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Source_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  source_type?: InputMaybe<Product_Source_Enum>;
};

/** aggregate sum on columns */
export type Source_Sum_Fields = {
  __typename?: 'source_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "source" */
export type Source_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "source" */
export enum Source_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SourceType = 'source_type'
}

export type Source_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Source_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Source_Set_Input>;
  /** filter the rows which have to be updated */
  where: Source_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Source_Var_Pop_Fields = {
  __typename?: 'source_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "source" */
export type Source_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Source_Var_Samp_Fields = {
  __typename?: 'source_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "source" */
export type Source_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Source_Variance_Fields = {
  __typename?: 'source_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "source" */
export type Source_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "audit.logged_actions" */
  audit_logged_actions: Array<Audit_Logged_Actions>;
  /** fetch aggregated fields from the table: "audit.logged_actions" */
  audit_logged_actions_aggregate: Audit_Logged_Actions_Aggregate;
  /** fetch data from the table: "audit.logged_actions" using primary key columns */
  audit_logged_actions_by_pk?: Maybe<Audit_Logged_Actions>;
  /** fetch data from the table in a streaming manner: "audit.logged_actions" */
  audit_logged_actions_stream: Array<Audit_Logged_Actions>;
  /** fetch data from the table: "audit.umi_actions" */
  audit_umi_actions: Array<Audit_Umi_Actions>;
  /** fetch aggregated fields from the table: "audit.umi_actions" */
  audit_umi_actions_aggregate: Audit_Umi_Actions_Aggregate;
  /** fetch data from the table: "audit.umi_actions" using primary key columns */
  audit_umi_actions_by_pk?: Maybe<Audit_Umi_Actions>;
  /** fetch data from the table in a streaming manner: "audit.umi_actions" */
  audit_umi_actions_stream: Array<Audit_Umi_Actions>;
  /** fetch data from the table: "commodity_group" */
  commodity_group: Array<Commodity_Group>;
  /** fetch aggregated fields from the table: "commodity_group" */
  commodity_group_aggregate: Commodity_Group_Aggregate;
  /** fetch data from the table: "commodity_group" using primary key columns */
  commodity_group_by_pk?: Maybe<Commodity_Group>;
  /** fetch data from the table in a streaming manner: "commodity_group" */
  commodity_group_stream: Array<Commodity_Group>;
  /** fetch data from the table: "commodity_parent_group" */
  commodity_parent_group: Array<Commodity_Parent_Group>;
  /** fetch aggregated fields from the table: "commodity_parent_group" */
  commodity_parent_group_aggregate: Commodity_Parent_Group_Aggregate;
  /** fetch data from the table: "commodity_parent_group" using primary key columns */
  commodity_parent_group_by_pk?: Maybe<Commodity_Parent_Group>;
  /** fetch data from the table in a streaming manner: "commodity_parent_group" */
  commodity_parent_group_stream: Array<Commodity_Parent_Group>;
  /** fetch data from the table: "eod" */
  eod: Array<Eod>;
  /** fetch aggregated fields from the table: "eod" */
  eod_aggregate: Eod_Aggregate;
  /** fetch data from the table: "eod" using primary key columns */
  eod_by_pk?: Maybe<Eod>;
  /** fetch data from the table: "eod_entry" */
  eod_entry: Array<Eod_Entry>;
  /** fetch aggregated fields from the table: "eod_entry" */
  eod_entry_aggregate: Eod_Entry_Aggregate;
  /** fetch data from the table: "eod_entry" using primary key columns */
  eod_entry_by_pk?: Maybe<Eod_Entry>;
  /** fetch data from the table: "eod_entry_per_eval_date_mview" */
  eod_entry_per_eval_date_mview: Array<Eod_Entry_Per_Eval_Date_Mview>;
  /** fetch aggregated fields from the table: "eod_entry_per_eval_date_mview" */
  eod_entry_per_eval_date_mview_aggregate: Eod_Entry_Per_Eval_Date_Mview_Aggregate;
  /** fetch data from the table in a streaming manner: "eod_entry_per_eval_date_mview" */
  eod_entry_per_eval_date_mview_stream: Array<Eod_Entry_Per_Eval_Date_Mview>;
  /** fetch data from the table: "eod_entry_per_eval_date_package_mview" */
  eod_entry_per_eval_date_package_mview: Array<Eod_Entry_Per_Eval_Date_Package_Mview>;
  /** fetch aggregated fields from the table: "eod_entry_per_eval_date_package_mview" */
  eod_entry_per_eval_date_package_mview_aggregate: Eod_Entry_Per_Eval_Date_Package_Mview_Aggregate;
  /** fetch data from the table in a streaming manner: "eod_entry_per_eval_date_package_mview" */
  eod_entry_per_eval_date_package_mview_stream: Array<Eod_Entry_Per_Eval_Date_Package_Mview>;
  /** fetch data from the table in a streaming manner: "eod_entry" */
  eod_entry_stream: Array<Eod_Entry>;
  /** fetch data from the table in a streaming manner: "eod" */
  eod_stream: Array<Eod>;
  /** fetch data from the table: "exchange" */
  exchange: Array<Exchange>;
  /** fetch aggregated fields from the table: "exchange" */
  exchange_aggregate: Exchange_Aggregate;
  /** fetch data from the table: "exchange" using primary key columns */
  exchange_by_pk?: Maybe<Exchange>;
  /** fetch data from the table: "exchange_event_type" */
  exchange_event_type: Array<Exchange_Event_Type>;
  /** fetch aggregated fields from the table: "exchange_event_type" */
  exchange_event_type_aggregate: Exchange_Event_Type_Aggregate;
  /** fetch data from the table: "exchange_event_type" using primary key columns */
  exchange_event_type_by_pk?: Maybe<Exchange_Event_Type>;
  /** fetch data from the table in a streaming manner: "exchange_event_type" */
  exchange_event_type_stream: Array<Exchange_Event_Type>;
  /** fetch data from the table in a streaming manner: "exchange" */
  exchange_stream: Array<Exchange>;
  /** fetch data from the table: "exchange_usage" */
  exchange_usage: Array<Exchange_Usage>;
  /** fetch aggregated fields from the table: "exchange_usage" */
  exchange_usage_aggregate: Exchange_Usage_Aggregate;
  /** fetch data from the table: "exchange_usage" using primary key columns */
  exchange_usage_by_pk?: Maybe<Exchange_Usage>;
  /** fetch data from the table: "exchange_usage_last" */
  exchange_usage_last: Array<Exchange_Usage_Last>;
  /** fetch aggregated fields from the table: "exchange_usage_last" */
  exchange_usage_last_aggregate: Exchange_Usage_Last_Aggregate;
  /** fetch data from the table in a streaming manner: "exchange_usage_last" */
  exchange_usage_last_stream: Array<Exchange_Usage_Last>;
  /** fetch data from the table: "exchange_usage_start" */
  exchange_usage_start: Array<Exchange_Usage_Start>;
  /** fetch aggregated fields from the table: "exchange_usage_start" */
  exchange_usage_start_aggregate: Exchange_Usage_Start_Aggregate;
  /** fetch data from the table in a streaming manner: "exchange_usage_start" */
  exchange_usage_start_stream: Array<Exchange_Usage_Start>;
  /** fetch data from the table in a streaming manner: "exchange_usage" */
  exchange_usage_stream: Array<Exchange_Usage>;
  /** fetch data from the table: "folio_column_settings" */
  folio_column_settings: Array<Folio_Column_Settings>;
  /** fetch aggregated fields from the table: "folio_column_settings" */
  folio_column_settings_aggregate: Folio_Column_Settings_Aggregate;
  /** fetch data from the table: "folio_column_settings" using primary key columns */
  folio_column_settings_by_pk?: Maybe<Folio_Column_Settings>;
  /** fetch data from the table in a streaming manner: "folio_column_settings" */
  folio_column_settings_stream: Array<Folio_Column_Settings>;
  /** fetch data from the table: "folio_shadow_curves" */
  folio_shadow_curves: Array<Folio_Shadow_Curves>;
  /** fetch aggregated fields from the table: "folio_shadow_curves" */
  folio_shadow_curves_aggregate: Folio_Shadow_Curves_Aggregate;
  /** fetch data from the table: "folio_shadow_curves" using primary key columns */
  folio_shadow_curves_by_pk?: Maybe<Folio_Shadow_Curves>;
  /** fetch data from the table in a streaming manner: "folio_shadow_curves" */
  folio_shadow_curves_stream: Array<Folio_Shadow_Curves>;
  /** fetch data from the table: "folio_user" */
  folio_user: Array<Folio_User>;
  /** fetch aggregated fields from the table: "folio_user" */
  folio_user_aggregate: Folio_User_Aggregate;
  /** fetch data from the table: "folio_user_basic_profile" */
  folio_user_basic_profile: Array<Folio_User_Basic_Profile>;
  /** fetch aggregated fields from the table: "folio_user_basic_profile" */
  folio_user_basic_profile_aggregate: Folio_User_Basic_Profile_Aggregate;
  /** fetch data from the table in a streaming manner: "folio_user_basic_profile" */
  folio_user_basic_profile_stream: Array<Folio_User_Basic_Profile>;
  /** fetch data from the table: "folio_user" using primary key columns */
  folio_user_by_pk?: Maybe<Folio_User>;
  /** fetch data from the table in a streaming manner: "folio_user" */
  folio_user_stream: Array<Folio_User>;
  /** fetch data from the table: "geographical_region" */
  geographical_region: Array<Geographical_Region>;
  /** fetch aggregated fields from the table: "geographical_region" */
  geographical_region_aggregate: Geographical_Region_Aggregate;
  /** fetch data from the table: "geographical_region" using primary key columns */
  geographical_region_by_pk?: Maybe<Geographical_Region>;
  /** fetch data from the table in a streaming manner: "geographical_region" */
  geographical_region_stream: Array<Geographical_Region>;
  /** fetch data from the table: "global_instrument" */
  global_instrument: Array<Global_Instrument>;
  /** fetch aggregated fields from the table: "global_instrument" */
  global_instrument_aggregate: Global_Instrument_Aggregate;
  /** fetch data from the table: "global_instrument" using primary key columns */
  global_instrument_by_pk?: Maybe<Global_Instrument>;
  /** fetch data from the table in a streaming manner: "global_instrument" */
  global_instrument_stream: Array<Global_Instrument>;
  /** fetch data from the table: "global_package" */
  global_package: Array<Global_Package>;
  /** fetch aggregated fields from the table: "global_package" */
  global_package_aggregate: Global_Package_Aggregate;
  /** fetch data from the table: "global_package" using primary key columns */
  global_package_by_pk?: Maybe<Global_Package>;
  /** fetch data from the table in a streaming manner: "global_package" */
  global_package_stream: Array<Global_Package>;
  /** fetch data from the table: "global_permission" */
  global_permission: Array<Global_Permission>;
  /** fetch aggregated fields from the table: "global_permission" */
  global_permission_aggregate: Global_Permission_Aggregate;
  /** fetch data from the table: "global_permission" using primary key columns */
  global_permission_by_pk?: Maybe<Global_Permission>;
  /** fetch data from the table in a streaming manner: "global_permission" */
  global_permission_stream: Array<Global_Permission>;
  /** fetch data from the table: "global_product" */
  global_product: Array<Global_Product>;
  /** fetch aggregated fields from the table: "global_product" */
  global_product_aggregate: Global_Product_Aggregate;
  /** fetch data from the table: "global_product" using primary key columns */
  global_product_by_pk?: Maybe<Global_Product>;
  /** fetch data from the table: "global_product_config" */
  global_product_config: Array<Global_Product_Config>;
  /** fetch aggregated fields from the table: "global_product_config" */
  global_product_config_aggregate: Global_Product_Config_Aggregate;
  /** fetch data from the table: "global_product_config" using primary key columns */
  global_product_config_by_pk?: Maybe<Global_Product_Config>;
  /** fetch data from the table in a streaming manner: "global_product_config" */
  global_product_config_stream: Array<Global_Product_Config>;
  /** fetch data from the table in a streaming manner: "global_product" */
  global_product_stream: Array<Global_Product>;
  /** fetch data from the table: "hfc_card_settings" */
  hfc_card_settings: Array<Hfc_Card_Settings>;
  /** fetch aggregated fields from the table: "hfc_card_settings" */
  hfc_card_settings_aggregate: Hfc_Card_Settings_Aggregate;
  /** fetch data from the table: "hfc_card_settings" using primary key columns */
  hfc_card_settings_by_pk?: Maybe<Hfc_Card_Settings>;
  /** fetch data from the table in a streaming manner: "hfc_card_settings" */
  hfc_card_settings_stream: Array<Hfc_Card_Settings>;
  /** fetch data from the table: "hfc_user_settings" */
  hfc_user_settings: Array<Hfc_User_Settings>;
  /** fetch aggregated fields from the table: "hfc_user_settings" */
  hfc_user_settings_aggregate: Hfc_User_Settings_Aggregate;
  /** fetch data from the table: "hfc_user_settings" using primary key columns */
  hfc_user_settings_by_pk?: Maybe<Hfc_User_Settings>;
  /** fetch data from the table in a streaming manner: "hfc_user_settings" */
  hfc_user_settings_stream: Array<Hfc_User_Settings>;
  /** fetch data from the table: "live_users_new" */
  live_users_new: Array<Live_Users_New>;
  /** fetch aggregated fields from the table: "live_users_new" */
  live_users_new_aggregate: Live_Users_New_Aggregate;
  /** fetch data from the table in a streaming manner: "live_users_new" */
  live_users_new_stream: Array<Live_Users_New>;
  /** fetch data from the table: "local_instrument" */
  local_instrument: Array<Local_Instrument>;
  /** fetch aggregated fields from the table: "local_instrument" */
  local_instrument_aggregate: Local_Instrument_Aggregate;
  /** fetch data from the table: "local_instrument" using primary key columns */
  local_instrument_by_pk?: Maybe<Local_Instrument>;
  /** fetch data from the table in a streaming manner: "local_instrument" */
  local_instrument_stream: Array<Local_Instrument>;
  /** fetch data from the table: "logout_request" */
  logout_request: Array<Logout_Request>;
  /** fetch aggregated fields from the table: "logout_request" */
  logout_request_aggregate: Logout_Request_Aggregate;
  /** fetch data from the table: "logout_request" using primary key columns */
  logout_request_by_pk?: Maybe<Logout_Request>;
  /** fetch data from the table in a streaming manner: "logout_request" */
  logout_request_stream: Array<Logout_Request>;
  /** fetch data from the table: "organisation" */
  organisation: Array<Organisation>;
  /** fetch aggregated fields from the table: "organisation" */
  organisation_aggregate: Organisation_Aggregate;
  /** fetch data from the table: "organisation" using primary key columns */
  organisation_by_pk?: Maybe<Organisation>;
  /** fetch data from the table in a streaming manner: "organisation" */
  organisation_stream: Array<Organisation>;
  /** fetch data from the table: "package" */
  package: Array<Package>;
  /** fetch aggregated fields from the table: "package" */
  package_aggregate: Package_Aggregate;
  /** fetch data from the table: "package" using primary key columns */
  package_by_pk?: Maybe<Package>;
  /** fetch data from the table in a streaming manner: "package" */
  package_stream: Array<Package>;
  /** fetch data from the table: "package_type" */
  package_type: Array<Package_Type>;
  /** fetch aggregated fields from the table: "package_type" */
  package_type_aggregate: Package_Type_Aggregate;
  /** fetch data from the table: "package_type" using primary key columns */
  package_type_by_pk?: Maybe<Package_Type>;
  /** fetch data from the table in a streaming manner: "package_type" */
  package_type_stream: Array<Package_Type>;
  /** An array relationship */
  page_settings: Array<Page_Settings>;
  /** An aggregate relationship */
  page_settings_aggregate: Page_Settings_Aggregate;
  /** fetch data from the table: "page_settings" using primary key columns */
  page_settings_by_pk?: Maybe<Page_Settings>;
  /** fetch data from the table in a streaming manner: "page_settings" */
  page_settings_stream: Array<Page_Settings>;
  /** fetch data from the table: "permission" */
  permission: Array<Permission>;
  /** fetch aggregated fields from the table: "permission" */
  permission_aggregate: Permission_Aggregate;
  /** fetch data from the table: "permission" using primary key columns */
  permission_by_pk?: Maybe<Permission>;
  /** fetch data from the table in a streaming manner: "permission" */
  permission_stream: Array<Permission>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product_artis_type" */
  product_artis_type: Array<Product_Artis_Type>;
  /** fetch aggregated fields from the table: "product_artis_type" */
  product_artis_type_aggregate: Product_Artis_Type_Aggregate;
  /** fetch data from the table: "product_artis_type" using primary key columns */
  product_artis_type_by_pk?: Maybe<Product_Artis_Type>;
  /** fetch data from the table in a streaming manner: "product_artis_type" */
  product_artis_type_stream: Array<Product_Artis_Type>;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table: "product_config" */
  product_config: Array<Product_Config>;
  /** fetch aggregated fields from the table: "product_config" */
  product_config_aggregate: Product_Config_Aggregate;
  /** fetch data from the table: "product_config" using primary key columns */
  product_config_by_pk?: Maybe<Product_Config>;
  /** fetch data from the table in a streaming manner: "product_config" */
  product_config_stream: Array<Product_Config>;
  /** fetch data from the table: "product_eod" */
  product_eod: Array<Product_Eod>;
  /** fetch aggregated fields from the table: "product_eod" */
  product_eod_aggregate: Product_Eod_Aggregate;
  /** fetch data from the table: "product_eod" using primary key columns */
  product_eod_by_pk?: Maybe<Product_Eod>;
  /** fetch data from the table in a streaming manner: "product_eod" */
  product_eod_stream: Array<Product_Eod>;
  /** An array relationship */
  product_global_dependencies: Array<Product_Global_Dependencies>;
  /** An aggregate relationship */
  product_global_dependencies_aggregate: Product_Global_Dependencies_Aggregate;
  /** fetch data from the table: "product_global_dependencies" using primary key columns */
  product_global_dependencies_by_pk?: Maybe<Product_Global_Dependencies>;
  /** fetch data from the table in a streaming manner: "product_global_dependencies" */
  product_global_dependencies_stream: Array<Product_Global_Dependencies>;
  /** fetch data from the table: "product_maturity" */
  product_maturity: Array<Product_Maturity>;
  /** fetch aggregated fields from the table: "product_maturity" */
  product_maturity_aggregate: Product_Maturity_Aggregate;
  /** fetch data from the table: "product_maturity" using primary key columns */
  product_maturity_by_pk?: Maybe<Product_Maturity>;
  /** fetch data from the table in a streaming manner: "product_maturity" */
  product_maturity_stream: Array<Product_Maturity>;
  /** An array relationship */
  product_overrides: Array<Product_Overrides>;
  /** An aggregate relationship */
  product_overrides_aggregate: Product_Overrides_Aggregate;
  /** fetch data from the table: "product_overrides" using primary key columns */
  product_overrides_by_pk?: Maybe<Product_Overrides>;
  /** fetch data from the table in a streaming manner: "product_overrides" */
  product_overrides_stream: Array<Product_Overrides>;
  /** fetch data from the table: "product_source" */
  product_source: Array<Product_Source>;
  /** fetch aggregated fields from the table: "product_source" */
  product_source_aggregate: Product_Source_Aggregate;
  /** fetch data from the table: "product_source" using primary key columns */
  product_source_by_pk?: Maybe<Product_Source>;
  /** fetch data from the table in a streaming manner: "product_source" */
  product_source_stream: Array<Product_Source>;
  /** fetch data from the table in a streaming manner: "product" */
  product_stream: Array<Product>;
  /** fetch data from the table: "product_summary_type" */
  product_summary_type: Array<Product_Summary_Type>;
  /** fetch aggregated fields from the table: "product_summary_type" */
  product_summary_type_aggregate: Product_Summary_Type_Aggregate;
  /** fetch data from the table: "product_summary_type" using primary key columns */
  product_summary_type_by_pk?: Maybe<Product_Summary_Type>;
  /** fetch data from the table in a streaming manner: "product_summary_type" */
  product_summary_type_stream: Array<Product_Summary_Type>;
  /** fetch data from the table: "product_type" */
  product_type: Array<Product_Type>;
  /** fetch aggregated fields from the table: "product_type" */
  product_type_aggregate: Product_Type_Aggregate;
  /** fetch data from the table: "product_type" using primary key columns */
  product_type_by_pk?: Maybe<Product_Type>;
  /** fetch data from the table in a streaming manner: "product_type" */
  product_type_stream: Array<Product_Type>;
  /** fetch data from the table: "product_uom" */
  product_uom: Array<Product_Uom>;
  /** fetch aggregated fields from the table: "product_uom" */
  product_uom_aggregate: Product_Uom_Aggregate;
  /** fetch data from the table: "product_uom" using primary key columns */
  product_uom_by_pk?: Maybe<Product_Uom>;
  /** fetch data from the table in a streaming manner: "product_uom" */
  product_uom_stream: Array<Product_Uom>;
  /** fetch data from the table: "session" */
  session: Array<Session>;
  /** fetch aggregated fields from the table: "session" */
  session_aggregate: Session_Aggregate;
  /** fetch data from the table: "session" using primary key columns */
  session_by_pk?: Maybe<Session>;
  /** fetch data from the table in a streaming manner: "session" */
  session_stream: Array<Session>;
  /** fetch data from the table: "session_type" */
  session_type: Array<Session_Type>;
  /** fetch aggregated fields from the table: "session_type" */
  session_type_aggregate: Session_Type_Aggregate;
  /** fetch data from the table: "session_type" using primary key columns */
  session_type_by_pk?: Maybe<Session_Type>;
  /** fetch data from the table in a streaming manner: "session_type" */
  session_type_stream: Array<Session_Type>;
  /** fetch data from the table: "shared_instrument" */
  shared_instrument: Array<Shared_Instrument>;
  /** fetch aggregated fields from the table: "shared_instrument" */
  shared_instrument_aggregate: Shared_Instrument_Aggregate;
  /** fetch data from the table: "shared_instrument" using primary key columns */
  shared_instrument_by_pk?: Maybe<Shared_Instrument>;
  /** fetch data from the table in a streaming manner: "shared_instrument" */
  shared_instrument_stream: Array<Shared_Instrument>;
  /** fetch data from the table: "sharing_agreement" */
  sharing_agreement: Array<Sharing_Agreement>;
  /** fetch aggregated fields from the table: "sharing_agreement" */
  sharing_agreement_aggregate: Sharing_Agreement_Aggregate;
  /** fetch data from the table: "sharing_agreement" using primary key columns */
  sharing_agreement_by_pk?: Maybe<Sharing_Agreement>;
  /** fetch data from the table in a streaming manner: "sharing_agreement" */
  sharing_agreement_stream: Array<Sharing_Agreement>;
  /** fetch data from the table: "source" */
  source: Array<Source>;
  /** fetch aggregated fields from the table: "source" */
  source_aggregate: Source_Aggregate;
  /** fetch data from the table: "source" using primary key columns */
  source_by_pk?: Maybe<Source>;
  /** fetch data from the table in a streaming manner: "source" */
  source_stream: Array<Source>;
  /** fetch data from the table: "user_right" */
  user_right: Array<User_Right>;
  /** fetch aggregated fields from the table: "user_right" */
  user_right_aggregate: User_Right_Aggregate;
  /** fetch data from the table: "user_right" using primary key columns */
  user_right_by_pk?: Maybe<User_Right>;
  /** fetch data from the table in a streaming manner: "user_right" */
  user_right_stream: Array<User_Right>;
  /** fetch data from the table: "user_storage" */
  user_storage: Array<User_Storage>;
  /** fetch aggregated fields from the table: "user_storage" */
  user_storage_aggregate: User_Storage_Aggregate;
  /** fetch data from the table: "user_storage" using primary key columns */
  user_storage_by_pk?: Maybe<User_Storage>;
  /** fetch data from the table in a streaming manner: "user_storage" */
  user_storage_stream: Array<User_Storage>;
  /** fetch data from the table: "users_active_last_day" */
  users_active_last_day: Array<Users_Active_Last_Day>;
  /** fetch aggregated fields from the table: "users_active_last_day" */
  users_active_last_day_aggregate: Users_Active_Last_Day_Aggregate;
  /** fetch data from the table in a streaming manner: "users_active_last_day" */
  users_active_last_day_stream: Array<Users_Active_Last_Day>;
};


export type Subscription_RootAudit_Logged_ActionsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Logged_Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Logged_Actions_Order_By>>;
  where?: InputMaybe<Audit_Logged_Actions_Bool_Exp>;
};


export type Subscription_RootAudit_Logged_Actions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Logged_Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Logged_Actions_Order_By>>;
  where?: InputMaybe<Audit_Logged_Actions_Bool_Exp>;
};


export type Subscription_RootAudit_Logged_Actions_By_PkArgs = {
  event_id: Scalars['bigint']['input'];
};


export type Subscription_RootAudit_Logged_Actions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Audit_Logged_Actions_Stream_Cursor_Input>>;
  where?: InputMaybe<Audit_Logged_Actions_Bool_Exp>;
};


export type Subscription_RootAudit_Umi_ActionsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Umi_Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Umi_Actions_Order_By>>;
  where?: InputMaybe<Audit_Umi_Actions_Bool_Exp>;
};


export type Subscription_RootAudit_Umi_Actions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Umi_Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Umi_Actions_Order_By>>;
  where?: InputMaybe<Audit_Umi_Actions_Bool_Exp>;
};


export type Subscription_RootAudit_Umi_Actions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootAudit_Umi_Actions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Audit_Umi_Actions_Stream_Cursor_Input>>;
  where?: InputMaybe<Audit_Umi_Actions_Bool_Exp>;
};


export type Subscription_RootCommodity_GroupArgs = {
  distinct_on?: InputMaybe<Array<Commodity_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Commodity_Group_Order_By>>;
  where?: InputMaybe<Commodity_Group_Bool_Exp>;
};


export type Subscription_RootCommodity_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Commodity_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Commodity_Group_Order_By>>;
  where?: InputMaybe<Commodity_Group_Bool_Exp>;
};


export type Subscription_RootCommodity_Group_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootCommodity_Group_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Commodity_Group_Stream_Cursor_Input>>;
  where?: InputMaybe<Commodity_Group_Bool_Exp>;
};


export type Subscription_RootCommodity_Parent_GroupArgs = {
  distinct_on?: InputMaybe<Array<Commodity_Parent_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Commodity_Parent_Group_Order_By>>;
  where?: InputMaybe<Commodity_Parent_Group_Bool_Exp>;
};


export type Subscription_RootCommodity_Parent_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Commodity_Parent_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Commodity_Parent_Group_Order_By>>;
  where?: InputMaybe<Commodity_Parent_Group_Bool_Exp>;
};


export type Subscription_RootCommodity_Parent_Group_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootCommodity_Parent_Group_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Commodity_Parent_Group_Stream_Cursor_Input>>;
  where?: InputMaybe<Commodity_Parent_Group_Bool_Exp>;
};


export type Subscription_RootEodArgs = {
  distinct_on?: InputMaybe<Array<Eod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Order_By>>;
  where?: InputMaybe<Eod_Bool_Exp>;
};


export type Subscription_RootEod_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Eod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Order_By>>;
  where?: InputMaybe<Eod_Bool_Exp>;
};


export type Subscription_RootEod_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootEod_EntryArgs = {
  distinct_on?: InputMaybe<Array<Eod_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Entry_Order_By>>;
  where?: InputMaybe<Eod_Entry_Bool_Exp>;
};


export type Subscription_RootEod_Entry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Eod_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Entry_Order_By>>;
  where?: InputMaybe<Eod_Entry_Bool_Exp>;
};


export type Subscription_RootEod_Entry_By_PkArgs = {
  evaluation_date: Scalars['date']['input'];
  month: Scalars['date']['input'];
  product: Scalars['uuid']['input'];
};


export type Subscription_RootEod_Entry_Per_Eval_Date_MviewArgs = {
  distinct_on?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Mview_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Mview_Order_By>>;
  where?: InputMaybe<Eod_Entry_Per_Eval_Date_Mview_Bool_Exp>;
};


export type Subscription_RootEod_Entry_Per_Eval_Date_Mview_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Mview_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Mview_Order_By>>;
  where?: InputMaybe<Eod_Entry_Per_Eval_Date_Mview_Bool_Exp>;
};


export type Subscription_RootEod_Entry_Per_Eval_Date_Mview_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Eod_Entry_Per_Eval_Date_Mview_Stream_Cursor_Input>>;
  where?: InputMaybe<Eod_Entry_Per_Eval_Date_Mview_Bool_Exp>;
};


export type Subscription_RootEod_Entry_Per_Eval_Date_Package_MviewArgs = {
  distinct_on?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Package_Mview_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Package_Mview_Order_By>>;
  where?: InputMaybe<Eod_Entry_Per_Eval_Date_Package_Mview_Bool_Exp>;
};


export type Subscription_RootEod_Entry_Per_Eval_Date_Package_Mview_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Package_Mview_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Eod_Entry_Per_Eval_Date_Package_Mview_Order_By>>;
  where?: InputMaybe<Eod_Entry_Per_Eval_Date_Package_Mview_Bool_Exp>;
};


export type Subscription_RootEod_Entry_Per_Eval_Date_Package_Mview_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Eod_Entry_Per_Eval_Date_Package_Mview_Stream_Cursor_Input>>;
  where?: InputMaybe<Eod_Entry_Per_Eval_Date_Package_Mview_Bool_Exp>;
};


export type Subscription_RootEod_Entry_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Eod_Entry_Stream_Cursor_Input>>;
  where?: InputMaybe<Eod_Entry_Bool_Exp>;
};


export type Subscription_RootEod_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Eod_Stream_Cursor_Input>>;
  where?: InputMaybe<Eod_Bool_Exp>;
};


export type Subscription_RootExchangeArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Order_By>>;
  where?: InputMaybe<Exchange_Bool_Exp>;
};


export type Subscription_RootExchange_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Order_By>>;
  where?: InputMaybe<Exchange_Bool_Exp>;
};


export type Subscription_RootExchange_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootExchange_Event_TypeArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Event_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Event_Type_Order_By>>;
  where?: InputMaybe<Exchange_Event_Type_Bool_Exp>;
};


export type Subscription_RootExchange_Event_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Event_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Event_Type_Order_By>>;
  where?: InputMaybe<Exchange_Event_Type_Bool_Exp>;
};


export type Subscription_RootExchange_Event_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootExchange_Event_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Exchange_Event_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Exchange_Event_Type_Bool_Exp>;
};


export type Subscription_RootExchange_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Exchange_Stream_Cursor_Input>>;
  where?: InputMaybe<Exchange_Bool_Exp>;
};


export type Subscription_RootExchange_UsageArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Usage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Usage_Order_By>>;
  where?: InputMaybe<Exchange_Usage_Bool_Exp>;
};


export type Subscription_RootExchange_Usage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Usage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Usage_Order_By>>;
  where?: InputMaybe<Exchange_Usage_Bool_Exp>;
};


export type Subscription_RootExchange_Usage_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootExchange_Usage_LastArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Usage_Last_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Usage_Last_Order_By>>;
  where?: InputMaybe<Exchange_Usage_Last_Bool_Exp>;
};


export type Subscription_RootExchange_Usage_Last_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Usage_Last_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Usage_Last_Order_By>>;
  where?: InputMaybe<Exchange_Usage_Last_Bool_Exp>;
};


export type Subscription_RootExchange_Usage_Last_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Exchange_Usage_Last_Stream_Cursor_Input>>;
  where?: InputMaybe<Exchange_Usage_Last_Bool_Exp>;
};


export type Subscription_RootExchange_Usage_StartArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Usage_Start_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Usage_Start_Order_By>>;
  where?: InputMaybe<Exchange_Usage_Start_Bool_Exp>;
};


export type Subscription_RootExchange_Usage_Start_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Usage_Start_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exchange_Usage_Start_Order_By>>;
  where?: InputMaybe<Exchange_Usage_Start_Bool_Exp>;
};


export type Subscription_RootExchange_Usage_Start_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Exchange_Usage_Start_Stream_Cursor_Input>>;
  where?: InputMaybe<Exchange_Usage_Start_Bool_Exp>;
};


export type Subscription_RootExchange_Usage_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Exchange_Usage_Stream_Cursor_Input>>;
  where?: InputMaybe<Exchange_Usage_Bool_Exp>;
};


export type Subscription_RootFolio_Column_SettingsArgs = {
  distinct_on?: InputMaybe<Array<Folio_Column_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_Column_Settings_Order_By>>;
  where?: InputMaybe<Folio_Column_Settings_Bool_Exp>;
};


export type Subscription_RootFolio_Column_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Folio_Column_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_Column_Settings_Order_By>>;
  where?: InputMaybe<Folio_Column_Settings_Bool_Exp>;
};


export type Subscription_RootFolio_Column_Settings_By_PkArgs = {
  folio_user: Scalars['String']['input'];
};


export type Subscription_RootFolio_Column_Settings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Folio_Column_Settings_Stream_Cursor_Input>>;
  where?: InputMaybe<Folio_Column_Settings_Bool_Exp>;
};


export type Subscription_RootFolio_Shadow_CurvesArgs = {
  distinct_on?: InputMaybe<Array<Folio_Shadow_Curves_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_Shadow_Curves_Order_By>>;
  where?: InputMaybe<Folio_Shadow_Curves_Bool_Exp>;
};


export type Subscription_RootFolio_Shadow_Curves_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Folio_Shadow_Curves_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_Shadow_Curves_Order_By>>;
  where?: InputMaybe<Folio_Shadow_Curves_Bool_Exp>;
};


export type Subscription_RootFolio_Shadow_Curves_By_PkArgs = {
  folio_user: Scalars['String']['input'];
};


export type Subscription_RootFolio_Shadow_Curves_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Folio_Shadow_Curves_Stream_Cursor_Input>>;
  where?: InputMaybe<Folio_Shadow_Curves_Bool_Exp>;
};


export type Subscription_RootFolio_UserArgs = {
  distinct_on?: InputMaybe<Array<Folio_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_User_Order_By>>;
  where?: InputMaybe<Folio_User_Bool_Exp>;
};


export type Subscription_RootFolio_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Folio_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_User_Order_By>>;
  where?: InputMaybe<Folio_User_Bool_Exp>;
};


export type Subscription_RootFolio_User_Basic_ProfileArgs = {
  distinct_on?: InputMaybe<Array<Folio_User_Basic_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_User_Basic_Profile_Order_By>>;
  where?: InputMaybe<Folio_User_Basic_Profile_Bool_Exp>;
};


export type Subscription_RootFolio_User_Basic_Profile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Folio_User_Basic_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folio_User_Basic_Profile_Order_By>>;
  where?: InputMaybe<Folio_User_Basic_Profile_Bool_Exp>;
};


export type Subscription_RootFolio_User_Basic_Profile_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Folio_User_Basic_Profile_Stream_Cursor_Input>>;
  where?: InputMaybe<Folio_User_Basic_Profile_Bool_Exp>;
};


export type Subscription_RootFolio_User_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootFolio_User_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Folio_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Folio_User_Bool_Exp>;
};


export type Subscription_RootGeographical_RegionArgs = {
  distinct_on?: InputMaybe<Array<Geographical_Region_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Geographical_Region_Order_By>>;
  where?: InputMaybe<Geographical_Region_Bool_Exp>;
};


export type Subscription_RootGeographical_Region_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Geographical_Region_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Geographical_Region_Order_By>>;
  where?: InputMaybe<Geographical_Region_Bool_Exp>;
};


export type Subscription_RootGeographical_Region_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootGeographical_Region_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Geographical_Region_Stream_Cursor_Input>>;
  where?: InputMaybe<Geographical_Region_Bool_Exp>;
};


export type Subscription_RootGlobal_InstrumentArgs = {
  distinct_on?: InputMaybe<Array<Global_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Instrument_Order_By>>;
  where?: InputMaybe<Global_Instrument_Bool_Exp>;
};


export type Subscription_RootGlobal_Instrument_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Global_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Instrument_Order_By>>;
  where?: InputMaybe<Global_Instrument_Bool_Exp>;
};


export type Subscription_RootGlobal_Instrument_By_PkArgs = {
  global_product: Scalars['uuid']['input'];
  month: Scalars['date']['input'];
};


export type Subscription_RootGlobal_Instrument_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Global_Instrument_Stream_Cursor_Input>>;
  where?: InputMaybe<Global_Instrument_Bool_Exp>;
};


export type Subscription_RootGlobal_PackageArgs = {
  distinct_on?: InputMaybe<Array<Global_Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Package_Order_By>>;
  where?: InputMaybe<Global_Package_Bool_Exp>;
};


export type Subscription_RootGlobal_Package_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Global_Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Package_Order_By>>;
  where?: InputMaybe<Global_Package_Bool_Exp>;
};


export type Subscription_RootGlobal_Package_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootGlobal_Package_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Global_Package_Stream_Cursor_Input>>;
  where?: InputMaybe<Global_Package_Bool_Exp>;
};


export type Subscription_RootGlobal_PermissionArgs = {
  distinct_on?: InputMaybe<Array<Global_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Permission_Order_By>>;
  where?: InputMaybe<Global_Permission_Bool_Exp>;
};


export type Subscription_RootGlobal_Permission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Global_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Permission_Order_By>>;
  where?: InputMaybe<Global_Permission_Bool_Exp>;
};


export type Subscription_RootGlobal_Permission_By_PkArgs = {
  folio_user: Scalars['String']['input'];
  global_package: Scalars['Int']['input'];
};


export type Subscription_RootGlobal_Permission_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Global_Permission_Stream_Cursor_Input>>;
  where?: InputMaybe<Global_Permission_Bool_Exp>;
};


export type Subscription_RootGlobal_ProductArgs = {
  distinct_on?: InputMaybe<Array<Global_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Product_Order_By>>;
  where?: InputMaybe<Global_Product_Bool_Exp>;
};


export type Subscription_RootGlobal_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Global_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Product_Order_By>>;
  where?: InputMaybe<Global_Product_Bool_Exp>;
};


export type Subscription_RootGlobal_Product_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGlobal_Product_ConfigArgs = {
  distinct_on?: InputMaybe<Array<Global_Product_Config_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Product_Config_Order_By>>;
  where?: InputMaybe<Global_Product_Config_Bool_Exp>;
};


export type Subscription_RootGlobal_Product_Config_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Global_Product_Config_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Product_Config_Order_By>>;
  where?: InputMaybe<Global_Product_Config_Bool_Exp>;
};


export type Subscription_RootGlobal_Product_Config_By_PkArgs = {
  product: Scalars['uuid']['input'];
  relative_month: Scalars['Int']['input'];
};


export type Subscription_RootGlobal_Product_Config_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Global_Product_Config_Stream_Cursor_Input>>;
  where?: InputMaybe<Global_Product_Config_Bool_Exp>;
};


export type Subscription_RootGlobal_Product_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Global_Product_Stream_Cursor_Input>>;
  where?: InputMaybe<Global_Product_Bool_Exp>;
};


export type Subscription_RootHfc_Card_SettingsArgs = {
  distinct_on?: InputMaybe<Array<Hfc_Card_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hfc_Card_Settings_Order_By>>;
  where?: InputMaybe<Hfc_Card_Settings_Bool_Exp>;
};


export type Subscription_RootHfc_Card_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hfc_Card_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hfc_Card_Settings_Order_By>>;
  where?: InputMaybe<Hfc_Card_Settings_Bool_Exp>;
};


export type Subscription_RootHfc_Card_Settings_By_PkArgs = {
  user: Scalars['String']['input'];
};


export type Subscription_RootHfc_Card_Settings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Hfc_Card_Settings_Stream_Cursor_Input>>;
  where?: InputMaybe<Hfc_Card_Settings_Bool_Exp>;
};


export type Subscription_RootHfc_User_SettingsArgs = {
  distinct_on?: InputMaybe<Array<Hfc_User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hfc_User_Settings_Order_By>>;
  where?: InputMaybe<Hfc_User_Settings_Bool_Exp>;
};


export type Subscription_RootHfc_User_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hfc_User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hfc_User_Settings_Order_By>>;
  where?: InputMaybe<Hfc_User_Settings_Bool_Exp>;
};


export type Subscription_RootHfc_User_Settings_By_PkArgs = {
  user: Scalars['String']['input'];
};


export type Subscription_RootHfc_User_Settings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Hfc_User_Settings_Stream_Cursor_Input>>;
  where?: InputMaybe<Hfc_User_Settings_Bool_Exp>;
};


export type Subscription_RootLive_Users_NewArgs = {
  distinct_on?: InputMaybe<Array<Live_Users_New_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Live_Users_New_Order_By>>;
  where?: InputMaybe<Live_Users_New_Bool_Exp>;
};


export type Subscription_RootLive_Users_New_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Live_Users_New_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Live_Users_New_Order_By>>;
  where?: InputMaybe<Live_Users_New_Bool_Exp>;
};


export type Subscription_RootLive_Users_New_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Live_Users_New_Stream_Cursor_Input>>;
  where?: InputMaybe<Live_Users_New_Bool_Exp>;
};


export type Subscription_RootLocal_InstrumentArgs = {
  distinct_on?: InputMaybe<Array<Local_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Local_Instrument_Order_By>>;
  where?: InputMaybe<Local_Instrument_Bool_Exp>;
};


export type Subscription_RootLocal_Instrument_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Local_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Local_Instrument_Order_By>>;
  where?: InputMaybe<Local_Instrument_Bool_Exp>;
};


export type Subscription_RootLocal_Instrument_By_PkArgs = {
  folio_user: Scalars['String']['input'];
  month: Scalars['date']['input'];
  product: Scalars['uuid']['input'];
  storage_type: User_Storage_Enum;
};


export type Subscription_RootLocal_Instrument_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Local_Instrument_Stream_Cursor_Input>>;
  where?: InputMaybe<Local_Instrument_Bool_Exp>;
};


export type Subscription_RootLogout_RequestArgs = {
  distinct_on?: InputMaybe<Array<Logout_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Logout_Request_Order_By>>;
  where?: InputMaybe<Logout_Request_Bool_Exp>;
};


export type Subscription_RootLogout_Request_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Logout_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Logout_Request_Order_By>>;
  where?: InputMaybe<Logout_Request_Bool_Exp>;
};


export type Subscription_RootLogout_Request_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootLogout_Request_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Logout_Request_Stream_Cursor_Input>>;
  where?: InputMaybe<Logout_Request_Bool_Exp>;
};


export type Subscription_RootOrganisationArgs = {
  distinct_on?: InputMaybe<Array<Organisation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organisation_Order_By>>;
  where?: InputMaybe<Organisation_Bool_Exp>;
};


export type Subscription_RootOrganisation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organisation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organisation_Order_By>>;
  where?: InputMaybe<Organisation_Bool_Exp>;
};


export type Subscription_RootOrganisation_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrganisation_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organisation_Stream_Cursor_Input>>;
  where?: InputMaybe<Organisation_Bool_Exp>;
};


export type Subscription_RootPackageArgs = {
  distinct_on?: InputMaybe<Array<Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Package_Order_By>>;
  where?: InputMaybe<Package_Bool_Exp>;
};


export type Subscription_RootPackage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Package_Order_By>>;
  where?: InputMaybe<Package_Bool_Exp>;
};


export type Subscription_RootPackage_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPackage_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Package_Stream_Cursor_Input>>;
  where?: InputMaybe<Package_Bool_Exp>;
};


export type Subscription_RootPackage_TypeArgs = {
  distinct_on?: InputMaybe<Array<Package_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Package_Type_Order_By>>;
  where?: InputMaybe<Package_Type_Bool_Exp>;
};


export type Subscription_RootPackage_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Package_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Package_Type_Order_By>>;
  where?: InputMaybe<Package_Type_Bool_Exp>;
};


export type Subscription_RootPackage_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootPackage_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Package_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Package_Type_Bool_Exp>;
};


export type Subscription_RootPage_SettingsArgs = {
  distinct_on?: InputMaybe<Array<Page_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Page_Settings_Order_By>>;
  where?: InputMaybe<Page_Settings_Bool_Exp>;
};


export type Subscription_RootPage_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Page_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Page_Settings_Order_By>>;
  where?: InputMaybe<Page_Settings_Bool_Exp>;
};


export type Subscription_RootPage_Settings_By_PkArgs = {
  folio_user: Scalars['String']['input'];
};


export type Subscription_RootPage_Settings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Page_Settings_Stream_Cursor_Input>>;
  where?: InputMaybe<Page_Settings_Bool_Exp>;
};


export type Subscription_RootPermissionArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};


export type Subscription_RootPermission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};


export type Subscription_RootPermission_By_PkArgs = {
  folio_user: Scalars['String']['input'];
  package: Scalars['Int']['input'];
};


export type Subscription_RootPermission_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Permission_Stream_Cursor_Input>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};


export type Subscription_RootProductArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Subscription_RootProduct_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Subscription_RootProduct_Artis_TypeArgs = {
  distinct_on?: InputMaybe<Array<Product_Artis_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Artis_Type_Order_By>>;
  where?: InputMaybe<Product_Artis_Type_Bool_Exp>;
};


export type Subscription_RootProduct_Artis_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Artis_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Artis_Type_Order_By>>;
  where?: InputMaybe<Product_Artis_Type_Bool_Exp>;
};


export type Subscription_RootProduct_Artis_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootProduct_Artis_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Artis_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Artis_Type_Bool_Exp>;
};


export type Subscription_RootProduct_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProduct_ConfigArgs = {
  distinct_on?: InputMaybe<Array<Product_Config_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Config_Order_By>>;
  where?: InputMaybe<Product_Config_Bool_Exp>;
};


export type Subscription_RootProduct_Config_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Config_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Config_Order_By>>;
  where?: InputMaybe<Product_Config_Bool_Exp>;
};


export type Subscription_RootProduct_Config_By_PkArgs = {
  product: Scalars['uuid']['input'];
  relative_month: Scalars['Int']['input'];
};


export type Subscription_RootProduct_Config_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Config_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Config_Bool_Exp>;
};


export type Subscription_RootProduct_EodArgs = {
  distinct_on?: InputMaybe<Array<Product_Eod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Eod_Order_By>>;
  where?: InputMaybe<Product_Eod_Bool_Exp>;
};


export type Subscription_RootProduct_Eod_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Eod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Eod_Order_By>>;
  where?: InputMaybe<Product_Eod_Bool_Exp>;
};


export type Subscription_RootProduct_Eod_By_PkArgs = {
  eod_product: Scalars['uuid']['input'];
  product: Scalars['uuid']['input'];
};


export type Subscription_RootProduct_Eod_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Eod_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Eod_Bool_Exp>;
};


export type Subscription_RootProduct_Global_DependenciesArgs = {
  distinct_on?: InputMaybe<Array<Product_Global_Dependencies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Global_Dependencies_Order_By>>;
  where?: InputMaybe<Product_Global_Dependencies_Bool_Exp>;
};


export type Subscription_RootProduct_Global_Dependencies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Global_Dependencies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Global_Dependencies_Order_By>>;
  where?: InputMaybe<Product_Global_Dependencies_Bool_Exp>;
};


export type Subscription_RootProduct_Global_Dependencies_By_PkArgs = {
  global_product: Scalars['uuid']['input'];
  product: Scalars['uuid']['input'];
};


export type Subscription_RootProduct_Global_Dependencies_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Global_Dependencies_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Global_Dependencies_Bool_Exp>;
};


export type Subscription_RootProduct_MaturityArgs = {
  distinct_on?: InputMaybe<Array<Product_Maturity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Maturity_Order_By>>;
  where?: InputMaybe<Product_Maturity_Bool_Exp>;
};


export type Subscription_RootProduct_Maturity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Maturity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Maturity_Order_By>>;
  where?: InputMaybe<Product_Maturity_Bool_Exp>;
};


export type Subscription_RootProduct_Maturity_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootProduct_Maturity_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Maturity_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Maturity_Bool_Exp>;
};


export type Subscription_RootProduct_OverridesArgs = {
  distinct_on?: InputMaybe<Array<Product_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Overrides_Order_By>>;
  where?: InputMaybe<Product_Overrides_Bool_Exp>;
};


export type Subscription_RootProduct_Overrides_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Overrides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Overrides_Order_By>>;
  where?: InputMaybe<Product_Overrides_Bool_Exp>;
};


export type Subscription_RootProduct_Overrides_By_PkArgs = {
  organisation: Scalars['Int']['input'];
  product: Scalars['uuid']['input'];
};


export type Subscription_RootProduct_Overrides_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Overrides_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Overrides_Bool_Exp>;
};


export type Subscription_RootProduct_SourceArgs = {
  distinct_on?: InputMaybe<Array<Product_Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Source_Order_By>>;
  where?: InputMaybe<Product_Source_Bool_Exp>;
};


export type Subscription_RootProduct_Source_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Source_Order_By>>;
  where?: InputMaybe<Product_Source_Bool_Exp>;
};


export type Subscription_RootProduct_Source_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootProduct_Source_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Source_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Source_Bool_Exp>;
};


export type Subscription_RootProduct_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Subscription_RootProduct_Summary_TypeArgs = {
  distinct_on?: InputMaybe<Array<Product_Summary_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Summary_Type_Order_By>>;
  where?: InputMaybe<Product_Summary_Type_Bool_Exp>;
};


export type Subscription_RootProduct_Summary_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Summary_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Summary_Type_Order_By>>;
  where?: InputMaybe<Product_Summary_Type_Bool_Exp>;
};


export type Subscription_RootProduct_Summary_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootProduct_Summary_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Summary_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Summary_Type_Bool_Exp>;
};


export type Subscription_RootProduct_TypeArgs = {
  distinct_on?: InputMaybe<Array<Product_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Type_Order_By>>;
  where?: InputMaybe<Product_Type_Bool_Exp>;
};


export type Subscription_RootProduct_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Type_Order_By>>;
  where?: InputMaybe<Product_Type_Bool_Exp>;
};


export type Subscription_RootProduct_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootProduct_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Type_Bool_Exp>;
};


export type Subscription_RootProduct_UomArgs = {
  distinct_on?: InputMaybe<Array<Product_Uom_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Uom_Order_By>>;
  where?: InputMaybe<Product_Uom_Bool_Exp>;
};


export type Subscription_RootProduct_Uom_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Uom_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Uom_Order_By>>;
  where?: InputMaybe<Product_Uom_Bool_Exp>;
};


export type Subscription_RootProduct_Uom_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootProduct_Uom_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Uom_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Uom_Bool_Exp>;
};


export type Subscription_RootSessionArgs = {
  distinct_on?: InputMaybe<Array<Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Session_Order_By>>;
  where?: InputMaybe<Session_Bool_Exp>;
};


export type Subscription_RootSession_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Session_Order_By>>;
  where?: InputMaybe<Session_Bool_Exp>;
};


export type Subscription_RootSession_By_PkArgs = {
  folio_user: Scalars['String']['input'];
  is_mobile: Scalars['Boolean']['input'];
};


export type Subscription_RootSession_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Session_Stream_Cursor_Input>>;
  where?: InputMaybe<Session_Bool_Exp>;
};


export type Subscription_RootSession_TypeArgs = {
  distinct_on?: InputMaybe<Array<Session_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Session_Type_Order_By>>;
  where?: InputMaybe<Session_Type_Bool_Exp>;
};


export type Subscription_RootSession_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Session_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Session_Type_Order_By>>;
  where?: InputMaybe<Session_Type_Bool_Exp>;
};


export type Subscription_RootSession_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootSession_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Session_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Session_Type_Bool_Exp>;
};


export type Subscription_RootShared_InstrumentArgs = {
  distinct_on?: InputMaybe<Array<Shared_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shared_Instrument_Order_By>>;
  where?: InputMaybe<Shared_Instrument_Bool_Exp>;
};


export type Subscription_RootShared_Instrument_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Shared_Instrument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shared_Instrument_Order_By>>;
  where?: InputMaybe<Shared_Instrument_Bool_Exp>;
};


export type Subscription_RootShared_Instrument_By_PkArgs = {
  month: Scalars['date']['input'];
  product: Scalars['uuid']['input'];
};


export type Subscription_RootShared_Instrument_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Shared_Instrument_Stream_Cursor_Input>>;
  where?: InputMaybe<Shared_Instrument_Bool_Exp>;
};


export type Subscription_RootSharing_AgreementArgs = {
  distinct_on?: InputMaybe<Array<Sharing_Agreement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sharing_Agreement_Order_By>>;
  where?: InputMaybe<Sharing_Agreement_Bool_Exp>;
};


export type Subscription_RootSharing_Agreement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sharing_Agreement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sharing_Agreement_Order_By>>;
  where?: InputMaybe<Sharing_Agreement_Bool_Exp>;
};


export type Subscription_RootSharing_Agreement_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSharing_Agreement_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Sharing_Agreement_Stream_Cursor_Input>>;
  where?: InputMaybe<Sharing_Agreement_Bool_Exp>;
};


export type Subscription_RootSourceArgs = {
  distinct_on?: InputMaybe<Array<Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Source_Order_By>>;
  where?: InputMaybe<Source_Bool_Exp>;
};


export type Subscription_RootSource_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Source_Order_By>>;
  where?: InputMaybe<Source_Bool_Exp>;
};


export type Subscription_RootSource_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSource_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Source_Stream_Cursor_Input>>;
  where?: InputMaybe<Source_Bool_Exp>;
};


export type Subscription_RootUser_RightArgs = {
  distinct_on?: InputMaybe<Array<User_Right_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Right_Order_By>>;
  where?: InputMaybe<User_Right_Bool_Exp>;
};


export type Subscription_RootUser_Right_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Right_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Right_Order_By>>;
  where?: InputMaybe<User_Right_Bool_Exp>;
};


export type Subscription_RootUser_Right_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootUser_Right_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Right_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Right_Bool_Exp>;
};


export type Subscription_RootUser_StorageArgs = {
  distinct_on?: InputMaybe<Array<User_Storage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Storage_Order_By>>;
  where?: InputMaybe<User_Storage_Bool_Exp>;
};


export type Subscription_RootUser_Storage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Storage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Storage_Order_By>>;
  where?: InputMaybe<User_Storage_Bool_Exp>;
};


export type Subscription_RootUser_Storage_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootUser_Storage_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Storage_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Storage_Bool_Exp>;
};


export type Subscription_RootUsers_Active_Last_DayArgs = {
  distinct_on?: InputMaybe<Array<Users_Active_Last_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Active_Last_Day_Order_By>>;
  where?: InputMaybe<Users_Active_Last_Day_Bool_Exp>;
};


export type Subscription_RootUsers_Active_Last_Day_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Active_Last_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Active_Last_Day_Order_By>>;
  where?: InputMaybe<Users_Active_Last_Day_Bool_Exp>;
};


export type Subscription_RootUsers_Active_Last_Day_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Active_Last_Day_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Active_Last_Day_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_right" */
export type User_Right = {
  __typename?: 'user_right';
  /** An array relationship */
  permissions: Array<Permission>;
  /** An aggregate relationship */
  permissions_aggregate: Permission_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "user_right" */
export type User_RightPermissionsArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};


/** columns and relationships of "user_right" */
export type User_RightPermissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};

/** aggregated selection of "user_right" */
export type User_Right_Aggregate = {
  __typename?: 'user_right_aggregate';
  aggregate?: Maybe<User_Right_Aggregate_Fields>;
  nodes: Array<User_Right>;
};

/** aggregate fields of "user_right" */
export type User_Right_Aggregate_Fields = {
  __typename?: 'user_right_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Right_Max_Fields>;
  min?: Maybe<User_Right_Min_Fields>;
};


/** aggregate fields of "user_right" */
export type User_Right_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Right_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user_right". All fields are combined with a logical 'AND'. */
export type User_Right_Bool_Exp = {
  _and?: InputMaybe<Array<User_Right_Bool_Exp>>;
  _not?: InputMaybe<User_Right_Bool_Exp>;
  _or?: InputMaybe<Array<User_Right_Bool_Exp>>;
  permissions?: InputMaybe<Permission_Bool_Exp>;
  permissions_aggregate?: InputMaybe<Permission_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_right" */
export enum User_Right_Constraint {
  /** unique or primary key constraint on columns "value" */
  UserRightPkey = 'user_right_pkey'
}

export enum User_Right_Enum {
  Broadcast = 'broadcast',
  List = 'list',
  Read = 'read',
  Write = 'write'
}

/** Boolean expression to compare columns of type "user_right_enum". All fields are combined with logical 'AND'. */
export type User_Right_Enum_Comparison_Exp = {
  _eq?: InputMaybe<User_Right_Enum>;
  _in?: InputMaybe<Array<User_Right_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<User_Right_Enum>;
  _nin?: InputMaybe<Array<User_Right_Enum>>;
};

/** input type for inserting data into table "user_right" */
export type User_Right_Insert_Input = {
  permissions?: InputMaybe<Permission_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Right_Max_Fields = {
  __typename?: 'user_right_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Right_Min_Fields = {
  __typename?: 'user_right_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_right" */
export type User_Right_Mutation_Response = {
  __typename?: 'user_right_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Right>;
};

/** input type for inserting object relation for remote table "user_right" */
export type User_Right_Obj_Rel_Insert_Input = {
  data: User_Right_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Right_On_Conflict>;
};

/** on_conflict condition type for table "user_right" */
export type User_Right_On_Conflict = {
  constraint: User_Right_Constraint;
  update_columns?: Array<User_Right_Update_Column>;
  where?: InputMaybe<User_Right_Bool_Exp>;
};

/** Ordering options when selecting data from "user_right". */
export type User_Right_Order_By = {
  permissions_aggregate?: InputMaybe<Permission_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_right */
export type User_Right_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "user_right" */
export enum User_Right_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "user_right" */
export type User_Right_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "user_right" */
export type User_Right_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Right_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Right_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "user_right" */
export enum User_Right_Update_Column {
  /** column name */
  Value = 'value'
}

export type User_Right_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Right_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Right_Bool_Exp;
};

/** columns and relationships of "user_storage" */
export type User_Storage = {
  __typename?: 'user_storage';
  value: Scalars['String']['output'];
};

/** aggregated selection of "user_storage" */
export type User_Storage_Aggregate = {
  __typename?: 'user_storage_aggregate';
  aggregate?: Maybe<User_Storage_Aggregate_Fields>;
  nodes: Array<User_Storage>;
};

/** aggregate fields of "user_storage" */
export type User_Storage_Aggregate_Fields = {
  __typename?: 'user_storage_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Storage_Max_Fields>;
  min?: Maybe<User_Storage_Min_Fields>;
};


/** aggregate fields of "user_storage" */
export type User_Storage_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Storage_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user_storage". All fields are combined with a logical 'AND'. */
export type User_Storage_Bool_Exp = {
  _and?: InputMaybe<Array<User_Storage_Bool_Exp>>;
  _not?: InputMaybe<User_Storage_Bool_Exp>;
  _or?: InputMaybe<Array<User_Storage_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_storage" */
export enum User_Storage_Constraint {
  /** unique or primary key constraint on columns "value" */
  UserStoragePkey = 'user_storage_pkey'
}

export enum User_Storage_Enum {
  Broadcast = 'broadcast',
  Local = 'local'
}

/** Boolean expression to compare columns of type "user_storage_enum". All fields are combined with logical 'AND'. */
export type User_Storage_Enum_Comparison_Exp = {
  _eq?: InputMaybe<User_Storage_Enum>;
  _in?: InputMaybe<Array<User_Storage_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<User_Storage_Enum>;
  _nin?: InputMaybe<Array<User_Storage_Enum>>;
};

/** input type for inserting data into table "user_storage" */
export type User_Storage_Insert_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Storage_Max_Fields = {
  __typename?: 'user_storage_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Storage_Min_Fields = {
  __typename?: 'user_storage_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_storage" */
export type User_Storage_Mutation_Response = {
  __typename?: 'user_storage_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Storage>;
};

/** on_conflict condition type for table "user_storage" */
export type User_Storage_On_Conflict = {
  constraint: User_Storage_Constraint;
  update_columns?: Array<User_Storage_Update_Column>;
  where?: InputMaybe<User_Storage_Bool_Exp>;
};

/** Ordering options when selecting data from "user_storage". */
export type User_Storage_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_storage */
export type User_Storage_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "user_storage" */
export enum User_Storage_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "user_storage" */
export type User_Storage_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "user_storage" */
export type User_Storage_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Storage_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Storage_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "user_storage" */
export enum User_Storage_Update_Column {
  /** column name */
  Value = 'value'
}

export type User_Storage_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Storage_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Storage_Bool_Exp;
};

/** columns and relationships of "users_active_last_day" */
export type Users_Active_Last_Day = {
  __typename?: 'users_active_last_day';
  folio_user?: Maybe<Scalars['String']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "users_active_last_day" */
export type Users_Active_Last_Day_Aggregate = {
  __typename?: 'users_active_last_day_aggregate';
  aggregate?: Maybe<Users_Active_Last_Day_Aggregate_Fields>;
  nodes: Array<Users_Active_Last_Day>;
};

/** aggregate fields of "users_active_last_day" */
export type Users_Active_Last_Day_Aggregate_Fields = {
  __typename?: 'users_active_last_day_aggregate_fields';
  avg?: Maybe<Users_Active_Last_Day_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Active_Last_Day_Max_Fields>;
  min?: Maybe<Users_Active_Last_Day_Min_Fields>;
  stddev?: Maybe<Users_Active_Last_Day_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Active_Last_Day_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Active_Last_Day_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Active_Last_Day_Sum_Fields>;
  var_pop?: Maybe<Users_Active_Last_Day_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Active_Last_Day_Var_Samp_Fields>;
  variance?: Maybe<Users_Active_Last_Day_Variance_Fields>;
};


/** aggregate fields of "users_active_last_day" */
export type Users_Active_Last_Day_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Active_Last_Day_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Active_Last_Day_Avg_Fields = {
  __typename?: 'users_active_last_day_avg_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users_active_last_day". All fields are combined with a logical 'AND'. */
export type Users_Active_Last_Day_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Active_Last_Day_Bool_Exp>>;
  _not?: InputMaybe<Users_Active_Last_Day_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Active_Last_Day_Bool_Exp>>;
  folio_user?: InputMaybe<String_Comparison_Exp>;
  organisation?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Users_Active_Last_Day_Max_Fields = {
  __typename?: 'users_active_last_day_max_fields';
  folio_user?: Maybe<Scalars['String']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Users_Active_Last_Day_Min_Fields = {
  __typename?: 'users_active_last_day_min_fields';
  folio_user?: Maybe<Scalars['String']['output']>;
  organisation?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "users_active_last_day". */
export type Users_Active_Last_Day_Order_By = {
  folio_user?: InputMaybe<Order_By>;
  organisation?: InputMaybe<Order_By>;
};

/** select columns of table "users_active_last_day" */
export enum Users_Active_Last_Day_Select_Column {
  /** column name */
  FolioUser = 'folio_user',
  /** column name */
  Organisation = 'organisation'
}

/** aggregate stddev on columns */
export type Users_Active_Last_Day_Stddev_Fields = {
  __typename?: 'users_active_last_day_stddev_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Active_Last_Day_Stddev_Pop_Fields = {
  __typename?: 'users_active_last_day_stddev_pop_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Active_Last_Day_Stddev_Samp_Fields = {
  __typename?: 'users_active_last_day_stddev_samp_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "users_active_last_day" */
export type Users_Active_Last_Day_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Active_Last_Day_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Active_Last_Day_Stream_Cursor_Value_Input = {
  folio_user?: InputMaybe<Scalars['String']['input']>;
  organisation?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Users_Active_Last_Day_Sum_Fields = {
  __typename?: 'users_active_last_day_sum_fields';
  organisation?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Users_Active_Last_Day_Var_Pop_Fields = {
  __typename?: 'users_active_last_day_var_pop_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Active_Last_Day_Var_Samp_Fields = {
  __typename?: 'users_active_last_day_var_samp_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Active_Last_Day_Variance_Fields = {
  __typename?: 'users_active_last_day_variance_fields';
  organisation?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type UserPermissionsSubscriptionVariables = Exact<{
  org: Scalars['Int']['input'];
}>;


export type UserPermissionsSubscription = { __typename?: 'subscription_root', folio_user: Array<{ __typename?: 'folio_user', id: string, firstname: string, lastname: string, username: any, email: any, roles: any, blocked: boolean, sessions: Array<{ __typename?: 'session', last_seen?: any | null }>, permissions: Array<{ __typename?: 'permission', id: number, permission: User_Right_Enum, packageByPackage: { __typename?: 'package', id: number, name: string, sourceBySource?: { __typename?: 'source', name: string } | null } }> }> };


export const UserPermissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserPermissions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"org"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"folio_user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"organisation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"org"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"sessions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"last_seen"}}]}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"permission"}},{"kind":"Field","name":{"kind":"Name","value":"packageByPackage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sourceBySource"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserPermissionsSubscription, UserPermissionsSubscriptionVariables>;