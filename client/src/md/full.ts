/* eslint-disable */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2022-03-16T11:40:35.471Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, IAttribute, IMeasure, IMeasureDefinition, idRef } from "@gooddata/sdk-model";

/**
 * Attribute Title: Order Item Id
 * Attribute ID: order_items.id
 */
export const OrderItemId: IAttribute = newAttribute("order_items.id");
/**
 * Attribute Title: Order Id
 * Attribute ID: orders.id
 */
export const OrderId: IAttribute = newAttribute("orders.id");
/**
 * Attribute Title: Status
 * Attribute ID: status
 */
export const Status: IAttribute = newAttribute("status");
/**
 * Attribute Title: Name
 * Attribute ID: name
 */
export const Name: IAttribute = newAttribute("name");
/**
 * Attribute Title: Product Id
 * Attribute ID: products.id
 */
export const ProductId: IAttribute = newAttribute("products.id");
/**
 * Attribute Title: Type
 * Attribute ID: type
 */
export const Type: IAttribute = newAttribute("type");
/**
 * Attribute Title: City
 * Attribute ID: city
 */
export const City: IAttribute = newAttribute("city");
/**
 * Attribute Title: First name
 * Attribute ID: first_name
 */
export const FirstName: IAttribute = newAttribute("first_name");
/**
 * Attribute Title: Gender
 * Attribute ID: gender
 */
export const Gender: IAttribute = newAttribute("gender");
/**
 * Attribute Title: Last name
 * Attribute ID: last_name
 */
export const LastName: IAttribute = newAttribute("last_name");
/**
 * Attribute Title: User Id
 * Attribute ID: users.id
 */
export const UserId: IAttribute = newAttribute("users.id");
/**
 * Fact Title: Quantity
 * Fact ID: quantity
 */
export const Quantity = {
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Cost
 * Fact ID: cost
 */
export const Cost = {
  /**
   * Fact Title: Cost
   * Fact ID: cost
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("cost", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Cost
   * Fact ID: cost
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("cost", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Cost
   * Fact ID: cost
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("cost", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Cost
   * Fact ID: cost
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("cost", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Cost
   * Fact ID: cost
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("cost", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Cost
   * Fact ID: cost
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("cost", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Price
 * Fact ID: price
 */
export const Price = {
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("price", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("price", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("price", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("price", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("price", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("price", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Age
 * Fact ID: age
 */
export const Age = {
  /**
   * Fact Title: Age
   * Fact ID: age
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("age", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Age
   * Fact ID: age
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("age", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Age
   * Fact ID: age
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("age", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Age
   * Fact ID: age
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("age", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Age
   * Fact ID: age
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("age", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Age
   * Fact ID: age
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("age", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Attribute Title: Solved at - Year
 * Attribute ID: solved_at.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedAtYear: IAttribute = newAttribute("solved_at.year");
/**
 * Attribute Title: Solved at - Week of Year
 * Attribute ID: solved_at.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedAtWeekOfYear: IAttribute = newAttribute("solved_at.weekOfYear");
/**
 * Attribute Title: Solved at - Week/Year
 * Attribute ID: solved_at.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedAtWeekYear: IAttribute = newAttribute("solved_at.week");
/**
 * Attribute Title: Solved at - Quarter of Year
 * Attribute ID: solved_at.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedAtQuarterOfYear: IAttribute = newAttribute("solved_at.quarterOfYear");
/**
 * Attribute Title: Solved at - Quarter/Year
 * Attribute ID: solved_at.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedAtQuarterYear: IAttribute = newAttribute("solved_at.quarter");
/**
 * Attribute Title: Solved at - Month of Year
 * Attribute ID: solved_at.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedAtMonthOfYear: IAttribute = newAttribute("solved_at.monthOfYear");
/**
 * Attribute Title: Solved at - Month/Year
 * Attribute ID: solved_at.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedAtMonthYear: IAttribute = newAttribute("solved_at.month");
/**
 * Attribute Title: Solved at - Minute of Hour
 * Attribute ID: solved_at.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedAtMinuteOfHour: IAttribute = newAttribute("solved_at.minuteOfHour");
/**
 * Attribute Title: Solved at - Minute
 * Attribute ID: solved_at.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedAtMinute: IAttribute = newAttribute("solved_at.minute");
/**
 * Attribute Title: Solved at - Hour of Day
 * Attribute ID: solved_at.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedAtHourOfDay: IAttribute = newAttribute("solved_at.hourOfDay");
/**
 * Attribute Title: Solved at - Hour
 * Attribute ID: solved_at.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedAtHour: IAttribute = newAttribute("solved_at.hour");
/**
 * Attribute Title: Solved at - Day of Year
 * Attribute ID: solved_at.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedAtDayOfYear: IAttribute = newAttribute("solved_at.dayOfYear");
/**
 * Attribute Title: Solved at - Day of Week
 * Attribute ID: solved_at.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedAtDayOfWeek: IAttribute = newAttribute("solved_at.dayOfWeek");
/**
 * Attribute Title: Solved at - Day of Month
 * Attribute ID: solved_at.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedAtDayOfMonth: IAttribute = newAttribute("solved_at.dayOfMonth");
/**
 * Attribute Title: Solved at - Date
 * Attribute ID: solved_at.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedAtDate: IAttribute = newAttribute("solved_at.day");
/**
 * Attribute Title: Created at - Year
 * Attribute ID: created_at.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedAtYear: IAttribute = newAttribute("created_at.year");
/**
 * Attribute Title: Created at - Week of Year
 * Attribute ID: created_at.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedAtWeekOfYear: IAttribute = newAttribute("created_at.weekOfYear");
/**
 * Attribute Title: Created at - Week/Year
 * Attribute ID: created_at.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedAtWeekYear: IAttribute = newAttribute("created_at.week");
/**
 * Attribute Title: Created at - Quarter of Year
 * Attribute ID: created_at.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedAtQuarterOfYear: IAttribute = newAttribute("created_at.quarterOfYear");
/**
 * Attribute Title: Created at - Quarter/Year
 * Attribute ID: created_at.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedAtQuarterYear: IAttribute = newAttribute("created_at.quarter");
/**
 * Attribute Title: Created at - Month of Year
 * Attribute ID: created_at.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedAtMonthOfYear: IAttribute = newAttribute("created_at.monthOfYear");
/**
 * Attribute Title: Created at - Month/Year
 * Attribute ID: created_at.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedAtMonthYear: IAttribute = newAttribute("created_at.month");
/**
 * Attribute Title: Created at - Minute of Hour
 * Attribute ID: created_at.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedAtMinuteOfHour: IAttribute = newAttribute("created_at.minuteOfHour");
/**
 * Attribute Title: Created at - Minute
 * Attribute ID: created_at.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedAtMinute: IAttribute = newAttribute("created_at.minute");
/**
 * Attribute Title: Created at - Hour of Day
 * Attribute ID: created_at.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedAtHourOfDay: IAttribute = newAttribute("created_at.hourOfDay");
/**
 * Attribute Title: Created at - Hour
 * Attribute ID: created_at.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedAtHour: IAttribute = newAttribute("created_at.hour");
/**
 * Attribute Title: Created at - Day of Year
 * Attribute ID: created_at.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedAtDayOfYear: IAttribute = newAttribute("created_at.dayOfYear");
/**
 * Attribute Title: Created at - Day of Week
 * Attribute ID: created_at.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedAtDayOfWeek: IAttribute = newAttribute("created_at.dayOfWeek");
/**
 * Attribute Title: Created at - Day of Month
 * Attribute ID: created_at.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedAtDayOfMonth: IAttribute = newAttribute("created_at.dayOfMonth");
/**
 * Attribute Title: Created at - Date
 * Attribute ID: created_at.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedAtDate: IAttribute = newAttribute("created_at.day");
/** Available Date Data Sets */
export const DateDatasets = {
  /**
   * Date Data Set Title: Solved at
   * Date Data Set ID: solved_at
   */
  SolvedAt: {
    ref: idRef("solved_at", "dataSet"),
    identifier: "solved_at"
    /**
     * Date Attribute: Solved at - Year
     * Date Attribute ID: solved_at.year
     */,
    SolvedAtYear: {
      ref: idRef("solved_at.year", "attribute"),
      identifier: "solved_at.year"
      /**
       * Display Form Title: Solved at - Year
       * Display Form ID: solved_at.year
       */,
      Default: newAttribute("solved_at.year"),
    }
    /**
     * Date Attribute: Solved at - Week of Year
     * Date Attribute ID: solved_at.weekOfYear
     */,
    SolvedAtWeekOfYear: {
      ref: idRef("solved_at.weekOfYear", "attribute"),
      identifier: "solved_at.weekOfYear"
      /**
       * Display Form Title: Solved at - Week of Year
       * Display Form ID: solved_at.weekOfYear
       */,
      Default: newAttribute("solved_at.weekOfYear"),
    }
    /**
     * Date Attribute: Solved at - Week/Year
     * Date Attribute ID: solved_at.week
     */,
    SolvedAtWeekYear: {
      ref: idRef("solved_at.week", "attribute"),
      identifier: "solved_at.week"
      /**
       * Display Form Title: Solved at - Week/Year
       * Display Form ID: solved_at.week
       */,
      Default: newAttribute("solved_at.week"),
    }
    /**
     * Date Attribute: Solved at - Quarter of Year
     * Date Attribute ID: solved_at.quarterOfYear
     */,
    SolvedAtQuarterOfYear: {
      ref: idRef("solved_at.quarterOfYear", "attribute"),
      identifier: "solved_at.quarterOfYear"
      /**
       * Display Form Title: Solved at - Quarter of Year
       * Display Form ID: solved_at.quarterOfYear
       */,
      Default: newAttribute("solved_at.quarterOfYear"),
    }
    /**
     * Date Attribute: Solved at - Quarter/Year
     * Date Attribute ID: solved_at.quarter
     */,
    SolvedAtQuarterYear: {
      ref: idRef("solved_at.quarter", "attribute"),
      identifier: "solved_at.quarter"
      /**
       * Display Form Title: Solved at - Quarter/Year
       * Display Form ID: solved_at.quarter
       */,
      Default: newAttribute("solved_at.quarter"),
    }
    /**
     * Date Attribute: Solved at - Month of Year
     * Date Attribute ID: solved_at.monthOfYear
     */,
    SolvedAtMonthOfYear: {
      ref: idRef("solved_at.monthOfYear", "attribute"),
      identifier: "solved_at.monthOfYear"
      /**
       * Display Form Title: Solved at - Month of Year
       * Display Form ID: solved_at.monthOfYear
       */,
      Default: newAttribute("solved_at.monthOfYear"),
    }
    /**
     * Date Attribute: Solved at - Month/Year
     * Date Attribute ID: solved_at.month
     */,
    SolvedAtMonthYear: {
      ref: idRef("solved_at.month", "attribute"),
      identifier: "solved_at.month"
      /**
       * Display Form Title: Solved at - Month/Year
       * Display Form ID: solved_at.month
       */,
      Default: newAttribute("solved_at.month"),
    }
    /**
     * Date Attribute: Solved at - Minute of Hour
     * Date Attribute ID: solved_at.minuteOfHour
     */,
    SolvedAtMinuteOfHour: {
      ref: idRef("solved_at.minuteOfHour", "attribute"),
      identifier: "solved_at.minuteOfHour"
      /**
       * Display Form Title: Solved at - Minute of Hour
       * Display Form ID: solved_at.minuteOfHour
       */,
      Default: newAttribute("solved_at.minuteOfHour"),
    }
    /**
     * Date Attribute: Solved at - Minute
     * Date Attribute ID: solved_at.minute
     */,
    SolvedAtMinute: {
      ref: idRef("solved_at.minute", "attribute"),
      identifier: "solved_at.minute"
      /**
       * Display Form Title: Solved at - Minute
       * Display Form ID: solved_at.minute
       */,
      Default: newAttribute("solved_at.minute"),
    }
    /**
     * Date Attribute: Solved at - Hour of Day
     * Date Attribute ID: solved_at.hourOfDay
     */,
    SolvedAtHourOfDay: {
      ref: idRef("solved_at.hourOfDay", "attribute"),
      identifier: "solved_at.hourOfDay"
      /**
       * Display Form Title: Solved at - Hour of Day
       * Display Form ID: solved_at.hourOfDay
       */,
      Default: newAttribute("solved_at.hourOfDay"),
    }
    /**
     * Date Attribute: Solved at - Hour
     * Date Attribute ID: solved_at.hour
     */,
    SolvedAtHour: {
      ref: idRef("solved_at.hour", "attribute"),
      identifier: "solved_at.hour"
      /**
       * Display Form Title: Solved at - Hour
       * Display Form ID: solved_at.hour
       */,
      Default: newAttribute("solved_at.hour"),
    }
    /**
     * Date Attribute: Solved at - Day of Year
     * Date Attribute ID: solved_at.dayOfYear
     */,
    SolvedAtDayOfYear: {
      ref: idRef("solved_at.dayOfYear", "attribute"),
      identifier: "solved_at.dayOfYear"
      /**
       * Display Form Title: Solved at - Day of Year
       * Display Form ID: solved_at.dayOfYear
       */,
      Default: newAttribute("solved_at.dayOfYear"),
    }
    /**
     * Date Attribute: Solved at - Day of Week
     * Date Attribute ID: solved_at.dayOfWeek
     */,
    SolvedAtDayOfWeek: {
      ref: idRef("solved_at.dayOfWeek", "attribute"),
      identifier: "solved_at.dayOfWeek"
      /**
       * Display Form Title: Solved at - Day of Week
       * Display Form ID: solved_at.dayOfWeek
       */,
      Default: newAttribute("solved_at.dayOfWeek"),
    }
    /**
     * Date Attribute: Solved at - Day of Month
     * Date Attribute ID: solved_at.dayOfMonth
     */,
    SolvedAtDayOfMonth: {
      ref: idRef("solved_at.dayOfMonth", "attribute"),
      identifier: "solved_at.dayOfMonth"
      /**
       * Display Form Title: Solved at - Day of Month
       * Display Form ID: solved_at.dayOfMonth
       */,
      Default: newAttribute("solved_at.dayOfMonth"),
    }
    /**
     * Date Attribute: Solved at - Date
     * Date Attribute ID: solved_at.day
     */,
    SolvedAtDate: {
      ref: idRef("solved_at.day", "attribute"),
      identifier: "solved_at.day"
      /**
       * Display Form Title: Solved at - Date
       * Display Form ID: solved_at.day
       */,
      Default: newAttribute("solved_at.day"),
    },
  }
  /**
   * Date Data Set Title: Created at
   * Date Data Set ID: created_at
   */,
  CreatedAt: {
    ref: idRef("created_at", "dataSet"),
    identifier: "created_at"
    /**
     * Date Attribute: Created at - Year
     * Date Attribute ID: created_at.year
     */,
    CreatedAtYear: {
      ref: idRef("created_at.year", "attribute"),
      identifier: "created_at.year"
      /**
       * Display Form Title: Created at - Year
       * Display Form ID: created_at.year
       */,
      Default: newAttribute("created_at.year"),
    }
    /**
     * Date Attribute: Created at - Week of Year
     * Date Attribute ID: created_at.weekOfYear
     */,
    CreatedAtWeekOfYear: {
      ref: idRef("created_at.weekOfYear", "attribute"),
      identifier: "created_at.weekOfYear"
      /**
       * Display Form Title: Created at - Week of Year
       * Display Form ID: created_at.weekOfYear
       */,
      Default: newAttribute("created_at.weekOfYear"),
    }
    /**
     * Date Attribute: Created at - Week/Year
     * Date Attribute ID: created_at.week
     */,
    CreatedAtWeekYear: {
      ref: idRef("created_at.week", "attribute"),
      identifier: "created_at.week"
      /**
       * Display Form Title: Created at - Week/Year
       * Display Form ID: created_at.week
       */,
      Default: newAttribute("created_at.week"),
    }
    /**
     * Date Attribute: Created at - Quarter of Year
     * Date Attribute ID: created_at.quarterOfYear
     */,
    CreatedAtQuarterOfYear: {
      ref: idRef("created_at.quarterOfYear", "attribute"),
      identifier: "created_at.quarterOfYear"
      /**
       * Display Form Title: Created at - Quarter of Year
       * Display Form ID: created_at.quarterOfYear
       */,
      Default: newAttribute("created_at.quarterOfYear"),
    }
    /**
     * Date Attribute: Created at - Quarter/Year
     * Date Attribute ID: created_at.quarter
     */,
    CreatedAtQuarterYear: {
      ref: idRef("created_at.quarter", "attribute"),
      identifier: "created_at.quarter"
      /**
       * Display Form Title: Created at - Quarter/Year
       * Display Form ID: created_at.quarter
       */,
      Default: newAttribute("created_at.quarter"),
    }
    /**
     * Date Attribute: Created at - Month of Year
     * Date Attribute ID: created_at.monthOfYear
     */,
    CreatedAtMonthOfYear: {
      ref: idRef("created_at.monthOfYear", "attribute"),
      identifier: "created_at.monthOfYear"
      /**
       * Display Form Title: Created at - Month of Year
       * Display Form ID: created_at.monthOfYear
       */,
      Default: newAttribute("created_at.monthOfYear"),
    }
    /**
     * Date Attribute: Created at - Month/Year
     * Date Attribute ID: created_at.month
     */,
    CreatedAtMonthYear: {
      ref: idRef("created_at.month", "attribute"),
      identifier: "created_at.month"
      /**
       * Display Form Title: Created at - Month/Year
       * Display Form ID: created_at.month
       */,
      Default: newAttribute("created_at.month"),
    }
    /**
     * Date Attribute: Created at - Minute of Hour
     * Date Attribute ID: created_at.minuteOfHour
     */,
    CreatedAtMinuteOfHour: {
      ref: idRef("created_at.minuteOfHour", "attribute"),
      identifier: "created_at.minuteOfHour"
      /**
       * Display Form Title: Created at - Minute of Hour
       * Display Form ID: created_at.minuteOfHour
       */,
      Default: newAttribute("created_at.minuteOfHour"),
    }
    /**
     * Date Attribute: Created at - Minute
     * Date Attribute ID: created_at.minute
     */,
    CreatedAtMinute: {
      ref: idRef("created_at.minute", "attribute"),
      identifier: "created_at.minute"
      /**
       * Display Form Title: Created at - Minute
       * Display Form ID: created_at.minute
       */,
      Default: newAttribute("created_at.minute"),
    }
    /**
     * Date Attribute: Created at - Hour of Day
     * Date Attribute ID: created_at.hourOfDay
     */,
    CreatedAtHourOfDay: {
      ref: idRef("created_at.hourOfDay", "attribute"),
      identifier: "created_at.hourOfDay"
      /**
       * Display Form Title: Created at - Hour of Day
       * Display Form ID: created_at.hourOfDay
       */,
      Default: newAttribute("created_at.hourOfDay"),
    }
    /**
     * Date Attribute: Created at - Hour
     * Date Attribute ID: created_at.hour
     */,
    CreatedAtHour: {
      ref: idRef("created_at.hour", "attribute"),
      identifier: "created_at.hour"
      /**
       * Display Form Title: Created at - Hour
       * Display Form ID: created_at.hour
       */,
      Default: newAttribute("created_at.hour"),
    }
    /**
     * Date Attribute: Created at - Day of Year
     * Date Attribute ID: created_at.dayOfYear
     */,
    CreatedAtDayOfYear: {
      ref: idRef("created_at.dayOfYear", "attribute"),
      identifier: "created_at.dayOfYear"
      /**
       * Display Form Title: Created at - Day of Year
       * Display Form ID: created_at.dayOfYear
       */,
      Default: newAttribute("created_at.dayOfYear"),
    }
    /**
     * Date Attribute: Created at - Day of Week
     * Date Attribute ID: created_at.dayOfWeek
     */,
    CreatedAtDayOfWeek: {
      ref: idRef("created_at.dayOfWeek", "attribute"),
      identifier: "created_at.dayOfWeek"
      /**
       * Display Form Title: Created at - Day of Week
       * Display Form ID: created_at.dayOfWeek
       */,
      Default: newAttribute("created_at.dayOfWeek"),
    }
    /**
     * Date Attribute: Created at - Day of Month
     * Date Attribute ID: created_at.dayOfMonth
     */,
    CreatedAtDayOfMonth: {
      ref: idRef("created_at.dayOfMonth", "attribute"),
      identifier: "created_at.dayOfMonth"
      /**
       * Display Form Title: Created at - Day of Month
       * Display Form ID: created_at.dayOfMonth
       */,
      Default: newAttribute("created_at.dayOfMonth"),
    }
    /**
     * Date Attribute: Created at - Date
     * Date Attribute ID: created_at.day
     */,
    CreatedAtDate: {
      ref: idRef("created_at.day", "attribute"),
      identifier: "created_at.day"
      /**
       * Display Form Title: Created at - Date
       * Display Form ID: created_at.day
       */,
      Default: newAttribute("created_at.day"),
    },
  },
};
export const Insights = {
  /**
   * Insight Title: Orders Status / Last 7 days
   * Insight ID: 2dd45f70-9980-4df5-9bc0-cc9676b40ee4
   */
  OrdersStatusLast7Days: "2dd45f70-9980-4df5-9bc0-cc9676b40ee4"
  /**
   * Insight Title: Orders / Month
   * Insight ID: 6327439c-fd4c-46e7-9328-a80f2eec4f0a
   */,
  OrdersMonth: "6327439c-fd4c-46e7-9328-a80f2eec4f0a",
};
export const Dashboards = {
  /**
   * Dashboard Title: Short Term Analysis
   * Dashboard ID: 5bce7f78-8407-4d55-bfca-73ffed8a3799
   */
  ShortTermAnalysis: "5bce7f78-8407-4d55-bfca-73ffed8a3799",
};
