import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema, type ContactFormResponse } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const result = contactFormSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: result.error.errors,
        });
      }

      await storage.saveContactSubmission(result.data);

      const response: ContactFormResponse = {
        success: true,
        message: "Thank you for contacting us! We'll get back to you within 24 hours.",
      };

      res.json(response);
    } catch (error) {
      console.error("Contact form submission error:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while processing your request. Please try again.",
      });
    }
  });

  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching submissions.",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
