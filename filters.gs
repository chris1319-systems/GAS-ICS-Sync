var filters = [
            { 
              parameter: "summary",
              type: "exclude", //include/exclude
              comparison: "regex", // equals, begins with, contains, regex
              criterias: ["^Pending:", "cancelled","Home"]
            },
            {
              parameter: "allDay",
              type: "exclude", //include/exclude
              comparison: "=", // equals, begins with, contains, regex
              offset: 1
            }
            /*{
              parameter: "categories",
              type: "include", //include/exclude
              comparison: "equals", // equals, begins with, contains, regex
              criterias: ["Meetings"]
            },
            {
              parameter: "dtend",
              type: "include", //include/exclude
              comparison: ">", // <,>, =
              offset: -7
            },
            {
              parameter: "dtstart",
              type: "exclude", //include/exclude
              comparison: ">", // <,>, =
              offset: 14
            } */
          ];