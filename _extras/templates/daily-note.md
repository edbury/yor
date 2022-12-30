created:: [[{{date:YYYY-MM-DD}}]]
tags:: #daily 
***
# Calendar



# Notes

- weight:: 

# Tasks


## Overdue

```tasks
not done
due before {{date:YYYY-MM-DD}}
```

## Due Today

```tasks
not done
due {{date:YYYY-MM-DD}}
```

## Due Soon

```tasks
not done
due before {{date+7d:YYYY-MM-DD}}
due after {{date:YYYY-MM-DD}}
limit to 5 tasks
```

## Undated Grab Bag

```tasks
not done
no due date
path does not include {{date:YYYY-MM-DD}}
limit to 5 tasks
```

## Done Today

```tasks
done on {{date:YYYY-MM-DD}}
```

## Routines

<%* let day = tp.date.now("dd") %>
- [ ] [[Yoga]] 📅  {{date:YYYY-MM-DD}}
- [ ] meditate 📅  {{date:YYYY-MM-DD}}
<%* if (day != "Su") { %>
- [ ] check the mail 📅  {{date:YYYY-MM-DD}}
<%* } if (day == "Su") { %>
- [ ] mark off life calendar 📅  {{date:YYYY-MM-DD}}
<%* } if (day == "Tu") { %>
- [ ] trash and recycling 📅  {{date:YYYY-MM-DD}}
- [ ] prep patriot night #tdtv 📅  {{date:YYYY-MM-DD}}
<%* } if (day == "Th") { %>
- [ ] prep anime night #tdtv 📅  {{date:YYYY-MM-DD}}
<%* } if (day == "Sa") { %>
- [ ] prep movie night #tdtv 📅  {{date:YYYY-MM-DD}}
- [ ] water plants #tdtv  📅  {{date:YYYY-MM-DD}}
<%* } %>
