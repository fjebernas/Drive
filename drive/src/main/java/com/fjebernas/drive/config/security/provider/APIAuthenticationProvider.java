package com.fjebernas.drive.config.security.provider;

import com.fjebernas.drive.config.security.authenticationRequest.APIAuthenticationRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class APIAuthenticationProvider implements AuthenticationProvider {

  @Value("${secret.key}")
  private String key;

  @Override
  public Authentication authenticate(Authentication authentication) throws AuthenticationException {
    APIAuthenticationRequest authenticationRequest = (APIAuthenticationRequest) authentication;
    String keyRequest = authenticationRequest.getKeyRequest();

//    if (key.equals(keyRequest)) {
//      return new APIAuthenticationRequest(true, null);
//    }
//
//    throw new BadCredentialsException("Bad credentials! thrown from provider");
    return key.equals(keyRequest) ?
            new APIAuthenticationRequest(true, null)
            : new APIAuthenticationRequest(false, null);
  }

  @Override
  public boolean supports(Class<?> authentication) {
    return APIAuthenticationRequest.class.equals(authentication);
  }
}
