package com.fjebernas.drive.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;

@Entity
@Table(name = "proverbs")
public class Proverb {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotEmpty(message = "Content is required")
  @Column(name = "content", nullable = false)
  private String content;

  @NotEmpty(message = "Country is required")
  @Column(name = "country", nullable = false)
  private String country;

  public Proverb() {
  }

  public Proverb(String content, String country) {
    this.content = content;
    this.country = country;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }
}
