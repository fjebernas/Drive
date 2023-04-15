package com.fjebernas.drive.config.security.impl;

import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

@AllArgsConstructor
public class APIAuthority implements GrantedAuthority {

  private final String authority;

  @Override
  public String getAuthority() {
    return this.authority;
  }
}
