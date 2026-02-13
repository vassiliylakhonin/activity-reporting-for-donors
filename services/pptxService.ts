
import pptxgen from "pptxgenjs";
import { SUMMARY_DATA, INDICATORS, CASE_STUDIES, PSS_CASES, LESSONS } from '../data';

export const generateReportPPTX = async (): Promise<void> => {
  const pptx = new pptxgen();
  
  // Set global properties
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "Vassiliy Lakhonin";
  pptx.company = "EmpowerYouth Initiative";
  pptx.title = SUMMARY_DATA.title;

  const PRIMARY_COLOR = "4f46e5"; // Indigo 600
  const SECONDARY_COLOR = "1e1b4b"; // Indigo 950

  // --- Slide 1: Title Slide ---
  let slide = pptx.addSlide();
  slide.background = { color: SECONDARY_COLOR };
  
  slide.addText(SUMMARY_DATA.title, {
    x: 0.5, y: 1.5, w: "90%", h: 1.5,
    fontSize: 44, color: "FFFFFF", bold: true, align: "center"
  });
  
  slide.addText("COMMUNITY IMPACT & RESILIENCE REPORT", {
    x: 0.5, y: 3.0, w: "90%", h: 0.5,
    fontSize: 18, color: PRIMARY_COLOR, align: "center", bold: true, charSpacing: 2
  });
  
  slide.addText(`${SUMMARY_DATA.location} | ${SUMMARY_DATA.period}`, {
    x: 0.5, y: 4.5, w: "90%", h: 0.5,
    fontSize: 14, color: "CCCCCC", align: "center"
  });

  // --- Slide 2: Project Description & Highlights ---
  slide = pptx.addSlide();
  slide.addText("EXECUTIVE OVERVIEW", { x: 0.5, y: 0.4, w: "90%", fontSize: 24, color: PRIMARY_COLOR, bold: true });
  
  slide.addText(SUMMARY_DATA.description, {
    x: 0.5, y: 1.2, w: "90%", h: 1.0,
    fontSize: 16, color: "333333"
  });

  slide.addText("KEY ACHIEVEMENTS", { x: 0.5, y: 2.5, w: "90%", fontSize: 18, color: SECONDARY_COLOR, bold: true });
  
  SUMMARY_DATA.keyHighlights.forEach((highlight, idx) => {
    slide.addText(highlight, {
      x: 0.8, y: 3.0 + (idx * 0.4), w: "85%",
      fontSize: 14, color: "444444", bullet: true
    });
  });

  // --- Slide 3: Performance Indicators ---
  slide = pptx.addSlide();
  slide.addText("PERFORMANCE INDICATORS", { x: 0.5, y: 0.4, w: "90%", fontSize: 24, color: PRIMARY_COLOR, bold: true });
  
  const indicatorRows: pptxgen.TableRow[] = [
    [
      { text: "Indicator", options: { bold: true, fill: { color: "F1F1F1" } } },
      { text: "Target", options: { bold: true, fill: { color: "F1F1F1" } } },
      { text: "Achieved", options: { bold: true, fill: { color: "F1F1F1" } } }
    ]
  ];

  INDICATORS.forEach(ind => {
    // Providing explicit bold and fill properties to match the type inferred from the header row above
    indicatorRows.push([
      { text: ind.name, options: { bold: false, fill: { color: "FFFFFF" } } },
      { text: ind.target.toString(), options: { bold: false, fill: { color: "FFFFFF" } } },
      { text: ind.achieved.toString(), options: { bold: false, fill: { color: "FFFFFF" } } }
    ]);
  });

  slide.addTable(indicatorRows, {
    x: 0.5, y: 1.2, w: 9.0,
    border: { pt: 1, color: "EEEEEE" },
    fontSize: 12,
    rowH: 0.5,
    valign: "middle"
  });

  // --- Slide 4: Impact Story (Alex) ---
  const alex = CASE_STUDIES[0];
  slide = pptx.addSlide();
  slide.addText("IMPACT STORY: TRANSFORMATION", { x: 0.5, y: 0.4, w: "90%", fontSize: 24, color: PRIMARY_COLOR, bold: true });

  if (alex) {
    slide.addText(`"${alex.quote}"`, {
      x: 0.5, y: 1.2, w: "90%", h: 0.8,
      fontSize: 20, italic: true, color: SECONDARY_COLOR, align: "center"
    });

    slide.addText(`Case Study: ${alex.name} (${alex.age}y/o)`, { x: 0.5, y: 2.2, fontSize: 16, bold: true });
    slide.addText(alex.background, { x: 0.5, y: 2.6, w: 4.5, fontSize: 12, color: "666666" });

    slide.addText("Milestones & Achievements:", { x: 5.5, y: 2.2, fontSize: 14, bold: true });
    alex.achievements.forEach((ach, idx) => {
      slide.addText(ach, { x: 5.5, y: 2.6 + (idx * 0.4), w: 4.0, fontSize: 11, bullet: true });
    });
  } else {
    slide.addText("No impact story data available for this reporting period.", {
      x: 0.5, y: 2.2, w: "90%", h: 0.8, fontSize: 14, color: "666666"
    });
  }

  // --- Slide 5: Psychosocial Support (PSS) ---
  slide = pptx.addSlide();
  slide.addText("PSYCHOSOCIAL SUPPORT SERVICES", { x: 0.5, y: 0.4, w: "90%", fontSize: 24, color: PRIMARY_COLOR, bold: true });
  
  slide.addText("Outcomes Snapshot:", { x: 0.5, y: 1.2, fontSize: 18, bold: true });
  
  PSS_CASES.forEach((pss, idx) => {
    slide.addText(`${pss.issue}: ${pss.outcome}`, {
      x: 0.8, y: 1.8 + (idx * 1.0), w: 8.5,
      fontSize: 13, color: "333333", bold: true
    });
    slide.addText(`"${pss.quote}"`, {
      x: 1.0, y: 2.1 + (idx * 1.0), w: 8.0,
      fontSize: 11, italic: true, color: "666666"
    });
  });

  // --- Slide 6: Lessons Learned & Recommendations ---
  slide = pptx.addSlide();
  slide.addText("STRATEGIC RECOMMENDATIONS", { x: 0.5, y: 0.4, w: "90%", fontSize: 24, color: PRIMARY_COLOR, bold: true });
  
  const recs = LESSONS.find((item) => item.category === "Future Recommendations")?.points
    ?? LESSONS[0]?.points
    ?? [];

  if (recs.length === 0) {
    slide.addText("No recommendations available for this reporting period.", {
      x: 0.8, y: 1.2, w: 8.5, fontSize: 14, color: "666666"
    });
  } else {
    recs.forEach((rec, idx) => {
      slide.addText(rec, {
        x: 0.8, y: 1.2 + (idx * 0.6), w: 8.5,
        fontSize: 14, color: "444444", bullet: true
      });
    });
  }

  // --- Slide 7: Closing Slide ---
  slide = pptx.addSlide();
  slide.background = { color: PRIMARY_COLOR };
  slide.addText("Thank You", {
    x: 0, y: 2.0, w: "100%", fontSize: 48, color: "FFFFFF", bold: true, align: "center"
  });
  slide.addText("Sustainable Impact for a Resilient Future", {
    x: 0, y: 3.0, w: "100%", fontSize: 18, color: "FFFFFF", align: "center"
  });

  // Save the presentation
  await pptx.writeFile({ fileName: `EYI_Impact_Report_${new Date().getFullYear()}.pptx` });
};
