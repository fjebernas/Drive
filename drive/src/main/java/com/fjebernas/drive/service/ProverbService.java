package com.fjebernas.drive.service;

import com.fjebernas.drive.model.Proverb;

import java.util.List;

public interface ProverbService {

  List<Proverb> getAll();

  Proverb getById(Long id);

  Proverb store(Proverb proverb) throws Exception;

  void destroy(Long id);

}
